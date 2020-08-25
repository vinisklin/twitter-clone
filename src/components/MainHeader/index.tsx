import React from 'react';
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegListAlt,
  FaRegUser,
  FaEllipsisH,
  FaChevronDown,
} from 'react-icons/fa';

import HeaderButton from './HeaderButton';

import { Container, UserInfo } from './styles';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <div>
        <a className="twitter-logo" href="/#">
          <FaTwitter color="white" size={30} />
        </a>

        <nav>
          <HeaderButton href="/#" icon={FaHome}>
            Home
          </HeaderButton>

          <HeaderButton href="/#" icon={FaHashtag}>
            Explore
          </HeaderButton>

          <HeaderButton href="/#" icon={FaRegBell}>
            Notifications
          </HeaderButton>

          <HeaderButton href="/#" icon={FaRegEnvelope}>
            Messages
          </HeaderButton>

          <HeaderButton href="/#" icon={FaRegBookmark}>
            Bookmarks
          </HeaderButton>

          <HeaderButton href="/#" icon={FaRegListAlt}>
            Lists
          </HeaderButton>

          <HeaderButton href="/#" icon={FaRegUser}>
            Profile
          </HeaderButton>

          <HeaderButton href="/#" icon={FaEllipsisH}>
            More
          </HeaderButton>
        </nav>

        <button type="button">Tweet</button>
      </div>

      <UserInfo>
        <img
          src="https://avatars3.githubusercontent.com/u/43184791?s=460&u=01ec492bf3af7f937123e2ded23d21dd14e71f3d&v=4"
          alt="Vinicius"
        />
        <div>
          <strong>Vinicius</strong>
          <p>@suicinivds</p>
        </div>

        <FaChevronDown color="white" size={14} />
      </UserInfo>
    </Container>
  );
};

export default MainHeader;
