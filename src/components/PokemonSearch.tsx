import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../utils/pokeApi";

type Pokemon = {
  name: string;
  types: string[];
};

type Props = {
  label: string;
  onSelect: (pokemon: Pokemon) => void;
};

const PokemonSearch: React.FC<Props> = ({ label, onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const [allNames, setAllNames] = useState<string[]>([]);

  useEffect(() => {
    // Cargar todos los nombres de Pokémon al montar el componente
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
      .then(res => res.json())
      .then(data => setAllNames(data.results.map((p: any) => p.name)));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      setSuggestions(
        allNames
          .filter(name => name.toLowerCase().includes(value.toLowerCase()))
          .slice(0, 10) // máximo 10 sugerencias
          .map(name => ({ name, types: [] }))
      );
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        {label}:{" "}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar Pokémon..."
          style={{ marginRight: "1rem" }}
        />
      </label>
      {suggestions.length > 0 && (
        <ul style={{ border: "1px solid #ccc", padding: "0.5rem", margin: 0 }}>
          {suggestions.map((p) => (
            <PokemonSuggestionItem key={p.name} name={p.name} onSelect={onSelect} setQuery={setQuery} setSuggestions={setSuggestions} />
          ))}
        </ul>
      )}
    </div>
  );
};

type SuggestionProps = {
  name: string;
  onSelect: (pokemon: Pokemon) => void;
  setQuery: (q: string) => void;
  setSuggestions: (s: Pokemon[]) => void;
};

const PokemonSuggestionItem: React.FC<SuggestionProps> = ({ name, onSelect, setQuery, setSuggestions }) => {
  const [data, setData] = useState<{ types: string[]; img: string } | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then(res => res.ok ? res.json() : null)
      .then(json => {
        if (json && mounted) {
          const types = json.types.map((t: any) => typeMap[t.type.name] || t.type.name);
          const img = json.sprites.front_default;
          setData({ types, img });
        }
      });
    return () => { mounted = false; };
  }, [name]);

  return (
    <li
      style={{ cursor: "pointer", padding: "0.2rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}
      onClick={async () => {
        setQuery(name);
        setSuggestions([]);
        const pokemon = await fetchPokemon(name);
        if (pokemon) {
          onSelect(pokemon);
        } else {
          onSelect({ name, types: [] });
        }
      }}
    >
      {data && data.img && (
        <img src={data.img} alt={name} width={32} height={32} style={{ background: "#eee", borderRadius: "4px" }} />
      )}
      <span style={{ fontWeight: "bold" }}>{name}</span>
      {data && (
        <span style={{ fontSize: "0.9em", color: "#555" }}>
          {data.types.join(", ")}
        </span>
      )}
    </li>
  );
};

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

export default PokemonSearch;
