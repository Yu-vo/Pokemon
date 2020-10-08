const getResource = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`)
  }
  return await res.json()
}

export const getPokemons = async (offset = 0, limit = 20) => {
  return await getResource(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  )
}

export const getByLink = async ref => {
  return await getResource(ref)
}

export const getInfoPokemon = async (i = 1) => {
  return await getResource(`https://pokeapi.co/api/v2/pokemon/${i}/`)
}

export const getInfoPokemons = async (start = 1, quantity = 20) => {
  const result = []
  for (let i = start; i <= quantity; i++)
    await getResource(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(info =>
      result.push(info)
    )
  return await result
}
