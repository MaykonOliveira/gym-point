import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';

import { updatePlanRequest } from '~/store/reducers/plans/actions';

import Modal from '~/components/Modal';
import Form from '~/components/Form';
import Button from '~/components/Button';

export default function ModalUpdatePlan({ plan }) {
  const isLoading = useSelector(state => state.plans.loading);

  const dispatch = useDispatch();

  const { id, price } = plan;

  const unformattedPrice = price.split('$', 2)[1];

  const initialData = {
    ...plan,
    price: unformattedPrice,
  };

  function handleSubmit({ title, duration, price }) {
    dispatch(updatePlanRequest(id, title, duration, price));
  }
  return (
    <Modal title={`Edit ${plan.title} Details:`}>
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Plan title" />
        <Input name="duration" type="number" placeholder="Plan duration" />
        <Input name="price" type="number" placeholder="Plan price" />
        <Button label="Update Plan" isLoading={isLoading} />
      </Form>
    </Modal>
  );
}
