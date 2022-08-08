export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="inner-width">
        © {new Date().getUTCFullYear()} ArenaNet, LLC. Alle Rechte vorbehalten.
        Alle Warenzeichen sind das Eigentum ihrer jeweiligen Besitzer.
        <a
          href="https://www.ncsoft.com"
          aria-label="NCSoft Home"
          className="logo_nc"
        >
          &nbsp;
        </a>
        <a
          href="https://www.arena.net"
          aria-label="ArenaNet Home"
          className="logo_anet"
        >
          &nbsp;
        </a>
      </div>
    </footer>
  );
}
