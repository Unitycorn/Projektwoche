import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

const apiPath = 'https://react.webworker.berlin/wp-json/wp/v2/';

/* Wenn man einen dynamischen Pfad hat, muss man Next mitteilen,
welche Pfade das System statisch generieren soll, hier also
eine Liste der vorhanden Blog-Slugs übergeben.
https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
*/

export async function getStaticPaths() {
  let paths = [];

  try {
    const response = fetch(`${apiPath}posts`);

    if (!response.ok) {
      throw new Error('Problem');
    }

    const posts = await response.json();
    /*
  	Der Schlüsselname "params" ist vorgegeben. Der Schlüsselname
  	"slug" entspricht dem Platzhalter [slug] im Dateinamen von [slug].jsx
  	Die Einträge im paths-Array werden an getStaticProps übergeben,
  	so dass für jeden Eintrag eine Seite generiert werden kann.
  	https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
  	*/

    paths = posts.map(({ slug }) => ({ params: { slug } }));
  } catch (error) {
    console.log(error);
  }
  /* fallback legt fest, dass ein neuer und noch nicht in paths
	enthaltene Slug frisch von WordPress geholt werden soll.
	Wenn man für paths einen leeren Array zurückgibt, werden
	also alle Blogbeiträge erst statisch generiert, wenn sie
	zum ersten Mal angefordert werden. Man könnte in paths
	auch nur z.B. die 20 neuesten Blogbeiträge übergeben. */

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let post = {};

  try {
    const response = await fetch(`${apiPath}posts?slug=${params.slug}`);
    if (!response.ok) {
      throw new Error('Problem!');
    }

    const posts = await response.json();

    post = posts[0];
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      post,
    },
  };
}

export default function BlogPost({ post }) {
  // https://nextjs.org/docs/basic-features/data-fetching#fallback-pages
  const router = useRouter();

  if (router.isFallback) {
    return <Layout>Wird geladen...</Layout>;
  }
  const { title, content } = post;
  /*
      1. Den title des Blogbeitrags in das title-Prop von Layout geben.
      2. Den content des Blogbeitrags innerhalb on Layout ausgeben.
      */
  return (
    <Layout title={title.rendered}>
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
    </Layout>
  );
}
