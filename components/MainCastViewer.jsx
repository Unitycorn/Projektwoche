import * as data from '../library/main_cast';
import useRandomItem from '../hooks/useRandomItem';
import Image from 'next/future/image';

export default function MainCastViewer() {
  const randomCharacter = useRandomItem(data.default);
  return (
    <section className="main_cast">
      {/* !! Leere spans für die Darstellung von Spiegelungen auf der Blase*/}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {/*Abfrage verhindert dass ein Fehler auftritt weil das Image (noch) kein src-Attribut hat */}
      {randomCharacter.image ? (
        <Image
          src={randomCharacter.image}
          height="450"
          width="150"
          title={randomCharacter.name}
          alt={randomCharacter.name}
        />
      ) : (
        ''
      )}
      <p>{randomCharacter.name}</p>
    </section>
  );
}
