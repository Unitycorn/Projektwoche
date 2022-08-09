import Image from 'next/future/image';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import MainCastViewer from './MainCastViewer';

export default function Layout({ title, children }) {
  return (
    <div className="site-wrapper">
      <Head>
        <title>{title}</title>
        <link rel="favicon/icon" href="/favicon.ico" />
      </Head>
      <Header />
      <video className="vid-background" autoPlay loop muted>
        <source
          src="https://cdn.ncwest.com/gw2/eod/DD2ooTbg6xziiB5KyO8S/b042c6fd-08bd-4217-8fe4-559cded0fb70/videos/02_EoD_Microsite_Narrative_Video_1920x1080.mp4"
          type="video/mp4"
        />
        <Image
          src="/img/background-fallback.jpg"
          title="Browser does not support <video> tag"
          alt="Unterwasser Landscape"
          height="2500"
          width="1920"
        />
      </video>
      <main className="site-main inner-width">
        {title && <h1>{title}</h1>}
        {children}
      </main>
      <div className="cast_image_right">
        <MainCastViewer />
      </div>
      <Footer />
    </div>
  );
}
