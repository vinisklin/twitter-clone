import styled from 'styled-components';

export const Container = styled.a`
  width: min-content;

  padding: 1rem 2rem 1rem 1rem;
  margin: 4px 0.5rem;
  border-radius: 50px;

  display: flex;
  align-items: center;

  transition: background-color 0.2s;

  @media (max-width: 1265px) {
    span {
      display: none;
    }

    & {
      padding: 1rem;
    }
  }

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
