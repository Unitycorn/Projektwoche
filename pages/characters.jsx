import CharacterViewer from '@/components/CharacterViewer';
import Layout from '@/components/Layout';

export default function characters() {
  return (
    <Layout title="Meine Charaktere">
      <CharacterViewer />
    </Layout>
  );
}
