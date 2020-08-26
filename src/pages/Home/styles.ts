import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  > main {
    display: flex;
    flex-shrink: 1;
  }
`;

export const CenterColumn = styled.div`
  width: 60rem;
  min-height: 120vh;

  display: flex;

  border-right: 1px solid var(--color-border);
`;

export const SideColumn = styled.aside`
  min-width: 30rem;
  margin-right: 1rem;

  display: flex;
  flex: 1 1;
`;

export const TopBar = styled.div`
  width: inherit;
  height: 5.3rem;

  padding: 0 1.5rem;
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--color-border);

  h2 {
    font-size: 1.9rem;
  }

  a {
    margin-right: -0.8rem;
    padding: 0.8rem;
    border-radius: 50%;

    &:hover {
      background-color: var(--color-link-hover);
    }

    svg {
      color: var(--color-blue-primary);
    }
  }
`;

export const TweetField = styled.div`
  width: 100%;
  height: min-content;
  display: flex;

  margin-top: 5.3rem;
  padding: 1rem 1.5rem;
  border-bottom: 1rem solid var(--color-border-secondary);

  .profile-button {
    margin-right: 1rem;

    img {
      width: 4.9rem;
      height: 4.9rem;
      border-radius: 50%;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .input-tweet {
    width: 100%;

    input {
      width: 100%;

      padding: 1.5rem 0;
      margin-bottom: 2px;
      border: 0;

      font-size: 1.9rem;
      color: var(--color-text-primary);
      background-color: transparent;
    }
  }

  .buttons-container {
    margin-top: 1rem;
    margin-left: -0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0.7rem;
      border-radius: 50%;
      background-color: transparent;
      border: 0;

      & + button {
        margin-left: 0.3rem;
      }

      &:hover {
        background-color: var(--color-link-hover);
      }

      svg {
        color: var(--color-blue-primary);
      }
    }

    .tweet-button {
      padding: 1rem 1.5rem;
      border-radius: 50px;

      font: 700 1.5rem 'Ubuntu';
      color: var(--color-text-primary);
      background-color: var(--color-blue-primary);
    }
  }
`;

export const MainContent = styled.div``;
