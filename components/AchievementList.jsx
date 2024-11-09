import Image from 'next/image';
export default function AchievementList({ dailies, content, fractalTier }) {
  const cssClass = `dailies daily_${content}`;

  if (dailies[content]) {
    return dailies[content].map((e) => {
      if (
        /*Early return wenn der Titel nicht "Rang X" beinhaltet*/
        !e.title.includes(fractalTier.toString()) ||
        (content == 'pve' && e.level.min <= 1)
      ) {
        return;
      }
      return (
        <section key={e.id} className={cssClass}>
          <Image
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
    return (
      <div>
        <h3>Keine Dailies gefunden!</h3>
        <h2>Update 11/2024:</h2>
        <p>
          Aufgrund eines Systemwechsels wurden die Daily-Achievements 2023 aus
          dem Spiel entfernt und gegen ein neues System ersetzt.
          <br />
          Der Code für das alte System wurde aufgrund der Nachvollziehbarkeit
          vollständing behalten.
          <br />
          <br />
          <br />
          ToDo: Update der REST-API-Abfragen auf die neue Version / das neue
          System!
        </p>
      </div>
    );
  }
}
