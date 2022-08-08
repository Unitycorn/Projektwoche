import { useEffect, useState } from 'react';

export default function useRandomCharacter(array) {
  const [item, setItem] = useState('');
  useEffect(() => setItem(array[Math.floor(Math.random() * array.length)]), []);
  return item;
}
