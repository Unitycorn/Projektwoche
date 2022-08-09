import * as character_data from '../library/character_data';
import Image from 'next/future/image';
import { useRouter } from 'next/router';

export default function CharacterViewer() {
  const router = useRouter();
  return (
    <section className="cards">
      {character_data.default.map((character) => {
        return (
          <div key={character.name} className="character_view card">
            <button
              type="button"
              aria-label="Zeige Chrakterdetails"
              onClick={() => router.push(`/character/${character.name}`)}
            >
              <span>{character.name}</span>
              {character.img ? (
                <Image
                  src={character.img}
                  width="200"
                  height="900"
                  alt={character.name}
                />
              ) : (
                ''
              )}
            </button>
          </div>
        );
      })}
    </section>
  );
}
