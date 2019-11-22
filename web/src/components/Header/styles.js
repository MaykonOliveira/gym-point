import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  padding-right: 40px;
`;

export const Menu = styled.div`
  display: flex;
  padding-top: 5px;
  @media (min-width: 900px) {
    margin-left: -24%;
  }

  a {
    padding: 0 20px;
    color: white;
    opacity: 0.4;
    font-weight: 500;
    transition: all 1s;

    &::after {
      content: '';
      background-color: var(--color-primary);
      display: block;
      position: relative;
      top: 10px;
      left: 0px;
      width: 0px;
      height: 3px;
      border-radius: 5px;
      transition: width 0.3s;
    }

    &:hover {
      color: white;
      opacity: 1;

      &::after {
        width: 30px;
      }
    }
  }
  .is-active {
    color: white;
    opacity: 1;
    &::after {
      content: '';
      background-color: var(--color-primary);
      display: block;
      position: relative;
      top: 10px;
      left: 0px;
      width: 30px;
      height: 3px;
      border-radius: 5px;
    }
  }
`;

export const Profile = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  top: -8px;
  border: 0;
  background: none;

  img {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    border: 3px solid #fff9;
  }
`;

export const ProfileList = styled.ul`
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  width: 180px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);
  display: ${props => (props.visible ? 'block' : 'none')};
  z-index: 2;

  li {
    padding: 8px 20px;
    border-bottom: 1px solid var(--color-grey-light);
    color: var(--color-primary);

    &:hover {
      background-color: #f8f5fe;
    }

    a {
      color: var(--color-primary);
    }

    &:last-child:hover {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }

    &:last-child,
    &:first-child {
      padding-top: 15px;
      padding-bottom: 20px;
    }

    &:first-child {
      color: white;
      font-weight: 500;
      padding-top: 20px;
      background-color: var(--color-primary);
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      border-bottom: 0;
    }

    &:nth-child(2) {
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
`;
