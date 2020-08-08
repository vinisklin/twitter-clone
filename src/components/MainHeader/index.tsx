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

import { Container, HeaderLink, UserInfo } from './styles';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <div>
        <a className="twitter-logo" href="/#">
          <FaTwitter color="white" size={30} />
        </a>

        <nav>
          <HeaderLink href="/#">
            <FaHome color="white" size={26} />
            <span>Home</span>
          </HeaderLink>

          <HeaderLink href="/#">
            <FaHashtag color="white" size={26} />
            <span>Explore</span>
          </HeaderLink>

          <HeaderLink href="/#">
            <FaRegBell color="white" size={26} />
            <span>Notifications</span>
          </HeaderLink>

          <HeaderLink href="/#">
            <FaRegEnvelope color="white" size={26} />
            <span>Messages</span>
          </HeaderLink>

          <HeaderLink href="/#">
            <FaRegBookmark color="white" size={26} />
            <span>Bookmarks</span>
          </HeaderLink>

          <HeaderLink href="/#">
            <FaRegListAlt color="white" size={26} />
            <span>Lists</span>
          </HeaderLink>

          <HeaderLink href="/#">
            <FaRegUser color="white" size={26} />
            <span>Profile</span>
          </HeaderLink>

          <HeaderLink href="/#">
            <FaEllipsisH color="white" size={26} />
            <span>More</span>
          </HeaderLink>
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
