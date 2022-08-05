import { GatherCharacterData } from '@/components/GatherCharacterData';

export default function CharacterViewer() {
  return (
    <section className="character_view_animation">
      <GatherCharacterData />
      <div>CharacterViewer</div>
    </section>
  );
}
