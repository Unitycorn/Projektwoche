import * as character_data from '../library/character_data';
import Character from '@/components/Character';
import Image from 'next/future/image';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

export default function CharacterViewer() {
  return (
    <>
      <BrowserRouter>
        <section className="cards">
          {character_data.default.map((character) => {
            <Routes>
              <Route
                path={'/character/:id'}
                element={<Character character={character} />}
              />
            </Routes>;
            return (
              <div
                key={character.name}
                className="character_view_animation card"
              >
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
                <h3>
                  <Link to={`/character/${character.name}`}>
                    {character.name}
                  </Link>
                </h3>
                <ul className="slide-in-right">
                  <li>
                    <b>Level: </b>
                    {character.level}
                  </li>
                  <li>
                    <b>Volk: </b>
                    {character.race}
                  </li>
                  <li>
                    <b>Klasse: </b>
                    {character.profession}
                  </li>
                  <li>
                    <b>Spezialisierung: </b>
                    {character.specialization}
                  </li>
                </ul>
              </div>
            );
          })}
        </section>
      </BrowserRouter>
    </>
  );
}
