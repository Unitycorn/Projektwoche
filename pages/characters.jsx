import CharacterViewer from '@/components/CharacterViewer';
import Layout from '@/components/Layout';

export default function characters() {
  return (
    <Layout title="Dein Charakter, Deine Wahl">
      <p>
        In der Welt von Tyria ist es wichtig aufzufallen, vor allem als
        Kommandeur der Drachenwacht!
        <br />
        Entscheide dich für einen Helden aus 5 verschiedenen Völkern und
        gestalte ihn ganz nach deinen wünschen. Dir stehen zahlreiche
        Möglichkeiten für Gesicht, Haar und Körperbau zur verfügung. Im Verlauf
        des Spiels häufst du eine riesige Sammlung an Skins und Farben an, mit
        denen du deinen Style beliebig anpassen und wieder verändern kannst!
        <br />
        Dies sind nur ein paar Beispiele wie DEIN Kommandeur aussehen kann.
        Klicke auf eine Charakterkarte um weitere Details aufzudecken:
      </p>
      <CharacterViewer />
    </Layout>
  );
}
