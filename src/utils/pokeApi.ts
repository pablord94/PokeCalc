const typeMap: Record<string, string> = {
  normal: "Normal",
  fire: "Fuego",
  water: "Agua",
  electric: "Eléctrico",
  grass: "Planta",
  ice: "Hielo",
  fighting: "Lucha",
  poison: "Veneno",
  ground: "Tierra",
  flying: "Volador",
  psychic: "Psíquico",
  bug: "Bicho",
  rock: "Roca",
  ghost: "Fantasma",
  dragon: "Dragón",
  dark: "Siniestro",
  steel: "Acero",
  fairy: "Hada",
};

export async function fetchPokemon(name: string): Promise<{
  name: string;
  types: string[];
  img: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
} | null> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      name: data.name,
      types: data.types.map((t: any) => typeMap[t.type.name] || t.type.name),
      img: data.sprites.front_default,
      stats: {
        hp: data.stats.find((s: any) => s.stat.name === "hp")?.base_stat ?? 0,
        attack: data.stats.find((s: any) => s.stat.name === "attack")?.base_stat ?? 0,
        defense: data.stats.find((s: any) => s.stat.name === "defense")?.base_stat ?? 0,
        specialAttack: data.stats.find((s: any) => s.stat.name === "special-attack")?.base_stat ?? 0,
        specialDefense: data.stats.find((s: any) => s.stat.name === "special-defense")?.base_stat ?? 0,
        speed: data.stats.find((s: any) => s.stat.name === "speed")?.base_stat ?? 0,
      },
    };
  } catch {
    return null;
  }
}
