import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="site-header">
      <img src="/img/EoD_Logo.png" height="150" width="150" alt="Logo" />
      <div className="inner-width">
        <Navigation />
      </div>
    </header>
  );
}
