import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import {
  deleteStudentRequest,
  loadStudentsRequest,
} from '~/store/reducers/students/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { Search } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Error from '~/components/Error';
import Stats from '~/components/Stats';
import StatsContainer from '~/components/Stats/Container';

export default function Students() {
  const students = useSelector(state => state.students.list) || [];
  const isLoading = useSelector(state => state.students.loading);
  const hasError = useSelector(state => state.students.showError);
  const modal = useSelector(state => state.modals.modal);
  const [search, setSearch] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (search !== null) {
      dispatch(loadStudentsRequest(search));
    }
  }, [search]); // eslint-disable-line

  useEffect(() => {
    dispatch(loadStudentsRequest());
  }, []); // eslint-disable-line

  const studentsTotal = useMemo(() => students && students.length, [students]);

  // AVG Student Ages

  function studentsAverageAge() {
    const getStudentAges = students && students.map(student => student.age);
    const ageSumResult = getStudentAges.reduce((avg, total) => avg + total, 0);

    return parseInt(ageSumResult / studentsTotal, 0);
  }

  function handleDelete(id) {
    const confirmation = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (confirmation) {
      dispatch(deleteStudentRequest(id));
    }
  }

  const [columns] = useState([
    { path: 'name', label: 'Name' },
    { path: 'email', label: 'Email' },
    { path: 'weight', suffix: 'kg', label: 'Weight' },
    { path: 'height', suffix: 'm', label: 'Height' },
    { path: 'age', suffix: 'years old', label: 'Age' },
    { path: 'updatedAt', label: 'Last updated' },
    {
      key: 'actions',
      content: student => (
        <>
          <Button
            kind="icon"
            icon="trash"
            color="transparent"
            onClick={() => handleDelete(student.id)}
          />
          <Button
            kind="icon"
            icon="edit"
            color="transparent"
            onClick={() =>
              dispatch(showModal('ModalUpdateStudent', { student }))
            }
          />
        </>
      ),
    },
  ]);

  const pose = modal !== null ? 'withModal' : 'init';

  return (
    <PageWrapper pose={pose}>
      <ColLeft>
        <h3>Managing Students</h3>

        <StatsContainer>
          <Stats
            label="Total of Students"
            data={studentsTotal <= 0 || null ? '0' : `${studentsTotal}`}
          />
          <Stats
            label="Age Average of Students"
            data={students ? studentsAverageAge() : '0'}
          />
        </StatsContainer>
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <Form>
            <Search>
              <Input
                name="search"
                type="text"
                placeholder="Search a student..."
                checked={search}
                onChange={e => setSearch(e.target.value)}
              />
              <Button
                kind="icon"
                icon="plus"
                onClick={() => dispatch(showModal('ModalAddStudent'))}
              />
            </Search>
          </Form>

          {hasError ? (
            <Error data="students" status={hasError.response.status} />
          ) : (
            <Table
              isLoading={isLoading}
              columns={columns}
              data={students}
              ariaLabel="students"
            />
          )}
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
