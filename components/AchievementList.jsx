export default function AchievementList({
  dailies,
  content,
  onlyMaxLvl,
  fractalTier,
}) {
  const cssClass = `daily_${content}`;

  if (dailies[content].length) {
    return dailies[content].map((e) => {
      if (!e.title.includes(fractalTier.toString())) {
        return;
      }
      return (
        <section key={e.id} className={cssClass}>
          <h3 key={e.id}>{e.title}</h3>
          <p key={e.id + 'a'}>{e.description}</p>
        </section>
      );
    });
  } else {
    return <h3>Keine Dailies gefunden!</h3>;
  }
}
