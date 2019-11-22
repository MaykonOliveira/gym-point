import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Wrapper, Col, Container } from './styles';
import logo from '~/assets/logoNegative.svg';
import Card from '~/components/Card';
import Button from '~/components/Button';
import Form from '~/components/Form';

import { signInRequest } from '~/store/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Please insert a valid email.')
    .required('Email is mandatory.'),
  password: Yup.string().required('Password is mandatory.'),
});

export default function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Wrapper>
        <img src={logo} alt="logo" />

        <Container>
          <Col>
            <h1>Welcome Back,</h1>
            <h2>Sign in to continue</h2>
          </Col>

          <Col>
            <Card>
              <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Your email" />
                <Input
                  name="password"
                  type="password"
                  placeholder="Your password"
                />

                <Button label="Login" isLoading={isLoading} onSubmit />
              </Form>
            </Card>
          </Col>
        </Container>
      </Wrapper>
    </>
  );
}
