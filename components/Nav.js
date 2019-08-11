import Link from 'next/link';

const Nav = () => (
  <div>
    <p>Navigation goes here!</p>
    <Link href="/noone">
        <a>NoOne</a>
    </Link>
    <Link href="/index">
      <a>Index</a>
    </Link>
  </div>
);

export default Nav;