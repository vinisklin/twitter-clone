import React from 'react';
import { GiStarShuriken } from 'react-icons/gi';
import { FiImage, FiSmile, FiCalendar } from 'react-icons/fi';
import { AiOutlineFileGif } from 'react-icons/ai';
import { TiChartBarOutline } from 'react-icons/ti';
import MainHeader from '../../components/MainHeader';

import {
  Container,
  CenterColumn,
  SideColumn,
  TopBar,
  TweetField,
  MainContent,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <header>
        <MainHeader />
      </header>

      <main>
        <CenterColumn>
          <TopBar>
            <h2>Home</h2>
            <a href="/#">
              <GiStarShuriken size={24} />
            </a>
          </TopBar>

          <TweetField>
            <div className="profile-button">
              <a href="/#">
                <img
                  src="https://avatars3.githubusercontent.com/u/43184791?s=460&u=01ec492bf3af7f937123e2ded23d21dd14e71f3d&v=4"
                  alt="Vinicius"
                />
              </a>
            </div>

            <div className="input-tweet">
              <input type="text" placeholder="What's happening?" />

              <div className="buttons-container">
                <div>
                  <button type="button">
                    <FiImage size={24} />
                  </button>
                  <button type="button">
                    <AiOutlineFileGif size={24} />
                  </button>
                  <button type="button">
                    <TiChartBarOutline size={24} />
                  </button>
                  <button type="button">
                    <FiSmile size={24} />
                  </button>
                  <button type="button">
                    <FiCalendar size={24} />
                  </button>
                </div>

                <button className="tweet-button" type="submit">
                  Tweet
                </button>
              </div>
            </div>
          </TweetField>

          <MainContent />
        </CenterColumn>

        <SideColumn />
      </main>
    </Container>
  );
};

export default Home;
