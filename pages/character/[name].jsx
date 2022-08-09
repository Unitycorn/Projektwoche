import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import * as character_data from '@/library/character_data';
import Image from 'next/future/image';

export async function getStaticPaths() {
  let paths = [];

  try {
    paths = character_data.default.map(({ name }) => ({ params: { name } }));
  } catch (e) {
    console.log(e);
  }

  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  let character = {};

  character = character_data.default.filter((item) => item.name == params.name);

  return {
    props: {
      character,
    },
  };
}

export default function Character({ character }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Layout title={character[0].name}>
        <strong>Wird geladen…</strong>
      </Layout>
    );
  }
  return (
    <Layout title={character[0].name}>
      <section className="character_details">
        <div className="overview_left">
          <Image
            src={character[0].img}
            height="700"
            width="300"
            alt={character[0].name}
          />
          <ul className="slide-in-right">
            <li>
              <b>Level: </b>
              {character[0].level}
            </li>
            <li>
              <b>Volk: </b>
              {character[0].race}
            </li>
            <li>
              <b>Klasse: </b>
              {character[0].profession}
            </li>
            <li>
              <b>Spezialisierung: </b>
              {character[0].specialization}
            </li>
          </ul>
        </div>
        <div className="overview_right">
          <h3>{character[0].catchphrase}</h3>
          <p>{character[0].description}</p>
          <ul>
            <li>
              <p>Rüstungskategorie: {character[0].gear}</p>
            </li>
            <li>
              <p>Trägt momentan: {character[0].wears}</p>
            </li>
            <li>
              <p>Ausgerüstete Waffen: {character[0].weapons}</p>
            </li>
          </ul>
        </div>
      </section>
      <button
        type="button"
        aria-label="Zurück zur Übersicht"
        onClick={() => router.push(`/characters/`)}
      >
        Zurück
      </button>
    </Layout>
  );
}
