import Link from 'next/link';
import { StyledAnchor } from './';

const Header = () => (
  <div>
    <Link href="/">
      <StyledAnchor>Home</StyledAnchor>
    </Link>
    <Link href="/about">
      <StyledAnchor>About</StyledAnchor>
    </Link>
  </div>
);

export default Header;
