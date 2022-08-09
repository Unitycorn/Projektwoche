import YoutubeEmbed from '@/components/YoutubeEmbed';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Willkommen in Tyria!">
      <p>
        Guild Wars 2 ist ein Online-Rollenspiel mit aktionsreichem und rasantem
        Kampfsystem, einem facettenreichen Universum voller Geschichten,
        atemberaubenden Landschaften, die es zu erkunden gilt, zwei
        Spieler-gegen-Spieler-Modi, die es in sich haben – und das alles ohne
        Abonnementgebühren!
      </p>
      <p>
        Die Vergangenheit hat Tyria unwiderruflich gezeichnet, und ihr spielt
        eine entscheidende Rolle für die Zukunft dieser Welt. Erstellt einen
        einzigartigen Charakter, bestimmt über den Verlauf seiner Geschichte und
        entdeckt mit jeder Entscheidung neue Enthüllungen, Fragen und
        Wahrheiten.
      </p>
      <p>
        Guild Wars 2: End of Dragons ist die dritte Erweiterung des
        preisgekrönten und vielgepriesenen MMORPGs Guild Wars 2. Der
        Drachenzyklus, der Tyria seit Ewigkeiten erhält und zerstört, bricht
        zusammen. Die Herzen und Entscheidungen der Sterblichen werden diesen
        Moment der Geschichte bestimmen – und in der Zukunft für immer Widerhall
        finden.
      </p>
      <h3>Sieh dir den Trailer zum neuesten Add-on an</h3>
      <YoutubeEmbed embedId="LYzrKJ1IkEw" />
      <ul>
        <li>Keine Monatlichen Kosten ✔</li>
        <li>Basisspiel: Free-To-Play ✔</li>
        <li>Erweiterungen: Ein mal kaufen, für immer spielen ✔</li>
        <li>Kein Verfall deiner Ausrüstungswerte ✔</li>
        <li>Keine Grind-Spirale ✔</li>
        <li>Kein Pay to Win, nur QoL und Visuals ✔</li>
        <li>Ultracoole Reittiere ✔</li>
      </ul>

      <a
        className="button_play_now"
        href="https://account.arena.net/welcome"
        rel="noreferrer"
        target="_blank"
      >
        Jetzt kostenlos loslegen!
      </a>
    </Layout>
  );
}
