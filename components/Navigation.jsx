/*TODO: Navigation für mobile Endgeräte optimieren (Burger-Menu) */

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Start</a>
      </Link>
      <Link href="/characters">
        <a>Charakter Viewer</a>
      </Link>
      <Link href="/achievements">
        <a>Dalily Achievements</a>
      </Link>
      <Link href="/cantha">
        <a>Cantha Entdecken</a>
      </Link>
    </nav>
  );
}
