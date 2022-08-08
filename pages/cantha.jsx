import Layout from '@/components/Layout';
import ImageGallery from 'react-image-gallery';

export default function chantha() {
  return (
    <Layout title="The beauty of Cantha">
      <ImageGallery items={images} />
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
