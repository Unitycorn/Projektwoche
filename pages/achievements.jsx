import AchievementFilter from '@/components/AchievementFilter';
import AchievementList from '@/components/AchievementList';
import { Layout } from '@/components/Layout';
import { Fragment, useState } from 'react';

const apiKey = process.env.GW2_API_KEY;
const apiURL = process.env.GW2_API_URL;

let dailies = [];
let achievements = [];

export async function getStaticProps() {
  try {
    const dayliesResponse = await fetch(`${apiURL}achievements/daily`);
    dailies = await dayliesResponse.json();

    const contentTypes = Object.keys(dailies);

    await Promise.all(
      contentTypes.map((type) => {
        return getAdditionalDailyInfo(type);
      })
    );
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      dailies,
    },
  };
}

export default function Achievements({ dailies }) {
  const [content, setContent] = useState('pve');
  const [maxLvl, setMaxLvl] = useState(1);
  const [fractalTier, setFractalTier] = useState('');
  return (
    <>
      <AchievementFilter
        dailies={dailies}
        setContent={setContent}
        content={content}
        setOnlyMaxLvl={setMaxLvl}
        setFractalTier={setFractalTier}
      />
      <AchievementList
        dailies={dailies}
        content={content}
        fractalTier={fractalTier}
        maxLvlOnly={maxLvl}
      />
    </>
  );
}

async function getAdditionalDailyInfo(contentType) {
  const achievementIDs = dailies[contentType].map((daily) => daily.id);
  if (!achievementIDs.length) {
    return;
  }
  const achievementsResponse = await fetch(
    `${apiURL}achievements?ids=${achievementIDs}&lang=de`
  );
  achievements = await achievementsResponse.json();
  dailies[contentType].forEach((daily) => {
    const achievement = achievements.find(
      (achievement) => achievement.id === daily.id
    );
    daily.title = achievement.name;
    daily.description = achievement.requirement;
  });
}
