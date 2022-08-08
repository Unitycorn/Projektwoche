import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Start</a>
      </Link>
      <Link href="/characters">
        <a>Character Viewer</a>
      </Link>
      <Link href="/achievements">
        <a>Dalíly Acievement Checker</a>
      </Link>
      <Link href="/cantha">
        <a>The Beauty of Cantha</a>
      </Link>
      <Link
        href="https://wiki-en.guildwars2.com/wiki/Main_Page"
        target="_blank"
      >
        <a>Wiki</a>
      </Link>
    </nav>
  );
}
