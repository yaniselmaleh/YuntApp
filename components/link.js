import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/" style={linkStyle} title="home">
      Home
    </Link>
    <Link href="/about" style={linkStyle}>
      About
    </Link>
  </div>
);

export default Header;
