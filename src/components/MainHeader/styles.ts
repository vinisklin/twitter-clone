import styled from 'styled-components';

export const Container = styled.header`
  height: 100vh;
  max-width: 27.5rem;

  padding: 0.2rem 1rem;

  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  border-right: 1px solid var(--color-border);

  @media (max-width: 1265px) {
    & {
      min-width: 6.8rem;
      align-items: flex-end;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .twitter-logo {
    display: inline-block;

    margin: 0 0.5rem;
    padding: 1rem;
    border-radius: 50%;

    &:hover {
      background-color: var(--color-link-hover);
    }
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1265px) {
    div,
    nav {
      align-items: flex-end;
    }
  }

  button {
    width: 90%;
    min-height: 4.9rem;

    margin-top: 1rem;
    border-radius: 50px;
    border: none;

    font: 700 1.5rem 'Ubuntu';
    color: var(--color-text-primary);
    background-color: var(--color-blue-primary);

    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-blue-primary-hover);
    }
  }

  @media (max-width: 1265px) {
    button {
      height: 47px;
      width: 47px;

      margin-right: 0.4rem;
    }
  }
`;

export const UserInfo = styled.a`
  width: 100%;

  padding: 1rem;
  border-radius: 50px;

  display: flex;
  align-items: center;

  cursor: pointer;

  @media (max-width: 1265px) {
    div,
    svg {
      display: none;
    }

    & {
      justify-content: flex-end;
      width: min-content;
    }
  }

  &:hover {
    background-color: var(--color-link-hover);
  }

  img {
    height: 39px;

    border-radius: 50%;
    margin-right: 1rem;
  }

  @media (max-width: 1265px) {
    img {
      margin-right: 0;
    }
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;

      color: var(--color-text-secondary);
    }
  }
`;
