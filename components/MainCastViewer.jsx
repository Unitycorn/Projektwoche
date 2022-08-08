import * as data from '../library/main_cast';
import useRandomCharacter from '../hooks/useRandomCharacter';
import Image from 'next/future/image';

export default function MainCastViewer() {
  const randomCharacter = useRandomCharacter(data.default);
  return (
    <Image
      src={randomCharacter.image}
      height="900"
      width="300"
      title={randomCharacter.name}
      alt={randomCharacter.name}
    />
  );
}
