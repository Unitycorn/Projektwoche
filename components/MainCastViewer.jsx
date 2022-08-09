import * as data from '../library/main_cast';
import useRandomCharacter from '../hooks/useRandomCharacter';
import Image from 'next/future/image';

export default function MainCastViewer() {
  const randomCharacter = useRandomCharacter(data.default);
  return (
    <section className="main_cast">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
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
