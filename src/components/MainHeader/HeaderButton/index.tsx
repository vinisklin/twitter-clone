import React, { AnchorHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface HeaderButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ComponentType<IconBaseProps>;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  icon: Icon,
  children,
  ...rest
}) => {
  return (
    <Container href={rest.href}>
      <Icon color="white" size={26} />
      <span>{children}</span>
    </Container>
  );
};

export default HeaderButton;
