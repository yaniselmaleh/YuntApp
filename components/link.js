import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle} title="home">Home</a>
    </Link>
    <Link href="/components/test">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
