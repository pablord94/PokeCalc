export type Pokemon = {
  name: string;
  types: string[];
};

export const pokemonList: Pokemon[] = [
  { name: "Bulbasaur", types: ["Planta", "Veneno"] },
  { name: "Charmander", types: ["Fuego"] },
  { name: "Squirtle", types: ["Agua"] },
  { name: "Pikachu", types: ["Eléctrico"] },
  { name: "Gengar", types: ["Fantasma", "Veneno"] },
  { name: "Dragonite", types: ["Dragón", "Volador"] },
  // Añade más Pokémon aquí...
];
