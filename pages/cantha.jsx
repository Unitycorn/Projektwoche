import Layout from '@/components/Layout';
import ImageGallery from 'react-image-gallery';

export default function chantha() {
  return (
    <Layout title="The real beauty of Cantha">
      <p>
        In Guild Wars 2: End of Dragons bereist ihr den seit Jahrhunderten
        isolieren Kontinent Cantha. Begebt euch auf die Suche nach dem letzten
        verbleibenden Alt-Drachen und entdeckt was dieser einzigartige Kontinent
        zu bieten hat.
        <br />
        <br />
        Bereist blühende Landschaften, eine aufstrebende Stadt angetrieben von
        Jade-Technologie, den versteinerten Wald der langsam wieder zum Leben
        erwacht und das Jademeer, Schauplatz eurer wohl größten herausforderung!
      </p>
      <ImageGallery items={images} />
      <h3>Die Provinz Seitung</h3>
      <p>
        Eine malerische Insellandschaft mit Fischerdörfern und
        Tempellandschaften. Sitz der kaiserin und Heimat des wohl größten Genies
        südlich des Endlosen Ozeans.
      </p>
      <h3>Stadt Neu-Kaeineng</h3>
      <p>
        Vor hunderten von jahren wurde die Stadt Kaeineng durch das Erwachen des
        Alt-Drachen Zhaitan geflutet. Auf den Ruinen wurde die Stadt
        Neu-Kaeineng gebaut und gilt als die technologisch am weitesten
        entwickelte Metropole weltweit.
      </p>
      <h3>Die Echovald Wildnis</h3>
      <p>
        Der durch den Jadewind-Vorfall (GuildWars: Factions) versteinerte Wald
        erwacht nach und nach wieder zum Leben. Er ist heute der Schauplatz des
        Bandenkrieges zwischen der Jadebruderschaft und den so genannten
        Sprechern.
      </p>
      <h3>Das Jademeer</h3>
      <p>
        Dieses Meer war vor ewigkeiten tatsächlich ein Meer! Nun besteht es aus
        purer Jade, die zur Energieerzeugung abgebaut und verarbeitet wird.
        Steckt vielleicht mehr darin als es sich vermuten lässt?
      </p>
    </Layout>
  );
}

const images = [
  {
    original: '/img/Seitung_Overview_Original.jpg',
    thumbnail: '/img/Seitung_Overview_Thumbnail.jpg',
    originalAlt: 'Überblick vom Hafen Seitung',
    description: 'Malerische Aussicht über den Hafen von Seitung',
  },
  {
    original: '/img/Seitung_Overview2_Original.jpg',
    thumbnail: '/img/Seitung_Overview2_Thumbnail.jpg',
    description:
      'Aussicht über den Hafen aus der Perspektive der Glockenpassage',
  },
  {
    original: '/img/Seitung_Overview3_Original.jpg',
    thumbnail: '/img/Seitung_Overview3_Thumbnail.jpg',
    description: 'Das Kloster Shing-Jea, Sitz der Kaiserin',
  },
  {
    original: '/img/Kaeineng_Monument_Original.jpg',
    thumbnail: '/img/Kaeineng_Monument_Thumbnail.jpg',
    description: 'Jade-Monument am Stadteingang von Neu-Kaeineng',
  },
  {
    original: '/img/Kaeineng_Ostbezirk_Original.jpg',
    thumbnail: '/img/Kaeineng_Ostbezirk_Thumbnail.jpg',
    description: 'Ostbezirk der Stadt Neu-Kaeineng',
  },
  {
    original: '/img/Kaeineng_Hafen_Original.jpg',
    thumbnail: '/img/Kaeineng_Hafen_Thumbnail.jpg',
    description: 'Die Fischerei im Hafen von Neu-Kaeineng boomt',
  },
  {
    original: '/img/Kaeineng_Gartenhöhen_Original.jpg',
    thumbnail: '/img/Kaeineng_Gartenhöhen_Thumbnail.jpg',
    description: 'Spaß mit Jade-Bots und Seilrutschen',
  },
  {
    original: '/img/Echovald_Arborstein_Original.jpg',
    thumbnail: '/img/Echovald_Arborstein_Thumbnail.jpg',
    description: 'Die Letzten ihrer Art in der Haupthalle von Arborstein',
  },
  {
    original: '/img/Echovald_Mori_Dorf_Original.jpg',
    thumbnail: '/img/Echovald_Mori_Dorf_Thumbnail.jpg',
    description: 'Das versteckte Mori-Dorf im Südosten des Echovalds',
  },
  {
    original: '/img/Echovald_Zu_Heltzer_Original.jpg',
    thumbnail: '/img/Echovald_Zu_Heltzer_Thumbnail.jpg',
    description: 'Die verbliebenen Überreste des Hauses Zu Heltzer',
  },
  {
    original: '/img/Drachenende_Kloster_Original.jpg',
    thumbnail: '/img/Drachenende_Kloster_Thumbnail.jpg',
    description: 'Kloster des gefrorenen Meeres im Süden von Drachenende',
  },
  {
    original: '/img/Drachenenede_Juno_Brutstätte_Original.jpg',
    thumbnail: '/img/Drachenenede_Juno_Brutstätte_Thumbnail.jpg',
    description: 'Juno-Brutstätte - Aufzucht von Belagerungsschildkröten',
  },
  {
    original: '/img/Drachenende_Erntetempel_Original.jpg',
    thumbnail: '/img/Drachenende_Erntetempel_Thumbnail.jpg',
    description:
      'Der Erntetempel im Zentrum des Jademeeres wurde von der Leere eingenommen',
  },
  {
    original: '/img/Drachenende_Jadegrube_Original.jpg',
    thumbnail: '/img/Drachenende_Jadegrube_Thumbnail.jpg',
    description: 'In den Jademinen lauern finstere Kreaturen den Arbeitern auf',
  },
];
