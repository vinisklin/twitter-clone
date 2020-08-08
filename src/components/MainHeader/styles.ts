import styled from 'styled-components';

export const Container = styled.header`
  height: 100vh;
  width: 27.5rem;

  padding: 0.2rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  border-right: 1px solid var(--color-border);

  div {
    width: 100%;
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
`;

export const HeaderLink = styled.a`
  width: min-content;

  padding: 1rem 2rem 1rem 1rem;
  margin: 4px 0.5rem;
  border-radius: 50px;

  display: flex;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    color: var(--color-blue-primary);
    background-color: var(--color-link-hover);

    svg {
      color: var(--color-blue-primary);
    }
  }

  span {
    font: 700 1.9rem 'Ubuntu';
    margin-left: 2rem;
  }
`;

export const UserInfo = styled.a`
  width: 100%;

  padding: 1rem;
  border-radius: 50px;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: var(--color-link-hover);
  }

  img {
    height: 39px;

    border-radius: 50%;
    margin-right: 1rem;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;

      color: var(--color-text-secondary);
    }
  }
`;
