export async function getStaticProps() {
  let characterInfo = [];
  const characterNames = [
    'Dwayna Nebelranke',
    'Cataleya De Fleur',
    'Mia Drachenfluch',
  ];
  try {
    await Promise.all(
      characterNames.map((name) => {
        characterInfo = getAdditionalCharacterInfo(name);
      })
    );
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      characterInfo,
    },
  };
}

export default function GatherCharacterData() {
  return <div>GatherCharacterData</div>;
}

async function getAdditionalCharacterInfo(name) {
  try {
    const characterDataResponse = await fetch(
      `${apiURL}characters/${name}?access_token=${apiKey}`
    );
    const characterData = await characterDataResponse.json();
    console.log(characterData);
    let jsonData = [
      {
        Name: name,
        Level: characterData.level,
        Profession: characterData.Profession,
      },
    ];
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
  return jsonData;
}
