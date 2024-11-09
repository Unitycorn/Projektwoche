export default function AchievementFilter({
  dailies,
  content,
  setContent,
  setFractalTier,
}) {
  const contentTypes = Object.keys(dailies);
  if (dailies[content]) {
    return (
      <section className="daily_filters">
        <label htmlFor="contentType">Wähle eine Kategorie:</label>
        <select
          id="contentType"
          name="contentType"
          onChange={(e) => setContent(e.currentTarget.value)}
        >
          {contentTypes.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        {content == 'fractals' ? (
          <>
            <label htmlFor="fractalTier">Wähle eine Schwierigkeitsstufe:</label>
            <select
              id="farctalTier"
              name="fractalTier"
              onChange={(e) => setFractalTier(e.currentTarget.value)}
            >
              <option value="">Alle</option>
              <option value="Rang 1">Tier 1</option>
              <option value="Rang 2">Tier 2</option>
              <option value="Rang 3">Tier 3</option>
              <option value="Rang 4">Tier 4</option>
            </select>
          </>
        ) : (
          /* Wichtig: Den Schwierigkeitsfilter (wieder) zurücksetzen wenn vom Content Fraktale wieder 
        in einen anderen Content gewechselt wird, da ansonsten nichts mehr ausgegeben wird, weil nach "Rang x" gesucht wird*/
          setFractalTier('')
        )}
      </section>
    );
  }
}
