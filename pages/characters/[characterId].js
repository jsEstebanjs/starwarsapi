
const CharactersId = ({ characterStarWars }) => {

  return (
    <>
      <h1>Detalle del personaje</h1>
      <div key={characterStarWars.url}>
        <h2>{characterStarWars.name}</h2>
        <p>{characterStarWars.gender}</p>
        <p>{characterStarWars.height}</p>
      </div>
    </>
  )
}

export default CharactersId

export async function getServerSideProps({ params }) {
  const apiStarWars = await fetch(`https:/swapi.dev/api/people/${params.characterId}`, {
    method: "GET"
  })
  const characterStarWars = await apiStarWars.json()
  console.log(params.characterId)

  return {
    props: {
      characterStarWars
    }, 
  }
}