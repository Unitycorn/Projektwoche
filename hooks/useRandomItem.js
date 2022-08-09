/* Gibt ein mal beim Laden der Seite einen zufälligen Wert aus einem beliebigen Array zurück */

import { useEffect, useState } from 'react';

export default function useRandomItem(array) {
  const [item, setItem] = useState('');
  useEffect(() => setItem(array[Math.floor(Math.random() * array.length)]), []);
  return item;
}
