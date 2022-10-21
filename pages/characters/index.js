import Link from "next/link";

const Characters = ({ dataStarWars }) => {
  return (
    <>
      <h1>Personajes</h1>
      {dataStarWars.results.map((item) => {
        return (
          <Link href={`/characters/${item.url.replace("https://swapi.dev/api/people/","")}`} key={item.url}>
            <div>
              <h2>{item.name}</h2>
              <a>Ver detalles</a>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Characters;

export async function getServerSideProps(context) {
  const apiStarWars = await fetch(`https://swapi.dev/api/people`, {
    method: "GET",
  });
  const dataStarWars = await apiStarWars.json();
  console.log("datos:",dataStarWars)

  return {
    props: {
      dataStarWars,
    },
  };
}
