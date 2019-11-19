import styled from 'styled-components';
import posed from 'react-pose';

export const PageWrapper = posed.div({
  init: {
    display: 'flex',
    height: '100%',
    position: 'relative',
    left: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  withModal: {
    display: 'flex',
    height: '100%',
    left: -500,
    opacity: 0.5,
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
});

export const ColLeft = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 35px 70px 20px 0;
`;

export const ColRight = styled.div`
  display: flex;
  width: 100%;
  flex: 3;

  form {
    input {
      margin-bottom: 15px;
    }

    span {
      color: var(--color-primary);
      align-self: flex-start;
      margin: 0 0 10px;
    }

    hr {
      opacity: 0.3;
      margin-top: 5px;
      margin-bottom: 20px;
    }
  }
`;
