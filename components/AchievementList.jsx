export default function AchievementList({
  dailies,
  content,
  onlyMaxLvl,
  fractalTier,
}) {
  const cssClass = `dailies daily_${content}`;

  if (dailies[content].length) {
    return dailies[content].map((e) => {
      if (
        !e.title.includes(fractalTier.toString()) ||
        (content == 'pve' && e.level.min <= 1)
      ) {
        return;
      }
      return (
        <section key={e.id} className={cssClass}>
          <img
            className="daily-icon"
            src="/img/Daily_Achievement.png"
            alt="daily-icon"
            height="64"
            width="64"
          />
          <div className="daily-description">
            <h3 key={e.id}>{e.title}</h3>
            <p
              className="achievement-description slide-in-right"
              key={e.id + 'a'}
            >
              {e.description}
            </p>
          </div>
        </section>
      );
    });
  } else {
    return <h3>Keine Dailies gefunden!</h3>;
  }
}
