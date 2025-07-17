import React, { useState } from "react";
import TypeSelector from "./components/TypeSelector";
import UploadImage from "./components/UploadImage";
import PokemonSearch from "./components/PokemonSearch";
import { getEffectiveness, types } from "./utils/effectiveness";

import "./App.css";

function App() {
  const [myType1, setMyType1] = useState("");
  const [myType2, setMyType2] = useState("");
  const [opponentType1, setOpponentType1] = useState("");
  const [opponentType2, setOpponentType2] = useState("");
  const [result, setResult] = useState<null | string>(null);

  const [myPokemon, setMyPokemon] = useState<any>(null);
  const [opponentPokemon, setOpponentPokemon] = useState<any>(null);

  const handleCalculate = () => {
    if (myType1 && opponentType1) {
      // Calcula el factor de efectividad combinando ambos tipos del defensor
      const factor1 = getEffectiveness(myType1 as any, opponentType1 as any, opponentType2 as any);
      let factor2 = null;
      if (myType2) {
        factor2 = getEffectiveness(myType2 as any, opponentType1 as any, opponentType2 as any);
      }
      setResult(
        factor2
          ? `Ataque 1: ${factor1} | Ataque 2: ${factor2}`
          : factor1
      );
    } else {
      setResult(null);
    }
  };

  const handleSwap = () => {
    setMyType1(opponentType1);
    setMyType2(opponentType2);
    setOpponentType1(myType1);
    setOpponentType2(myType2);
    setResult(null);
  };

  return (
    <div className="container">
      <h1>PokeCalc - Efectividad de Tipos</h1>
      {/* <UploadImage /> */}
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", margin: "2rem 0" }}>
        <div style={{ flex: "1 1 350px", minWidth: 320 }}>
          <PokemonSearch
            label="Buscar mi Pokémon"
            onSelect={p => {
              setMyType1(p.types[0] || "");
              setMyType2(p.types[1] || "");
              setMyPokemon(p);
            }}
          />
        </div>
        <div style={{ flex: "1 1 350px", minWidth: 320 }}>
          <PokemonSearch
            label="Buscar Pokémon rival"
            onSelect={p => {
              setOpponentType1(p.types[0] || "");
              setOpponentType2(p.types[1] || "");
              setOpponentPokemon(p);
            }}
          />
        </div>
      </div>
      <div style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        margin: "2rem 0"
      }}>
        {myPokemon && myPokemon.stats && (
          <div className="pokemon-stats" style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            background: "#f8f9fa",
            borderRadius: "12px",
            boxShadow: "0 2px 8px #0002",
            padding: "1rem",
            minWidth: 320,
            maxWidth: 400
          }}>
            <img
              src={myPokemon.img}
              alt={myPokemon.name}
              width={80}
              height={80}
              style={{ background: "#fff", borderRadius: "8px", border: "1px solid #ddd" }}
            />
            <div>
              <h3 style={{ margin: 0, fontSize: "1.4em" }}>
                {myPokemon.name.charAt(0).toUpperCase() + myPokemon.name.slice(1)}
              </h3>
              <div style={{ marginBottom: "0.5rem", color: "#555" }}>
                <strong>Tipos:</strong> {myPokemon.types.join(", ")}
              </div>
              <div>
                <strong>Estadísticas:</strong>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>❤️ HP: <b>{myPokemon.stats.hp}</b></li>
                  <li>⚔️ Ataque: <b>{myPokemon.stats.attack}</b></li>
                  <li>🛡️ Defensa: <b>{myPokemon.stats.defense}</b></li>
                  <li>✨ Ataque Especial: <b>{myPokemon.stats.specialAttack}</b></li>
                  <li>🛡️ Defensa Especial: <b>{myPokemon.stats.specialDefense}</b></li>
                  <li>💨 Velocidad: <b>{myPokemon.stats.speed}</b></li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {opponentPokemon && opponentPokemon.stats && (
          <div className="pokemon-stats" style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            background: "#f8f9fa",
            borderRadius: "12px",
            boxShadow: "0 2px 8px #0002",
            padding: "1rem",
            minWidth: 320,
            maxWidth: 400
          }}>
            <img
              src={opponentPokemon.img}
              alt={opponentPokemon.name}
              width={80}
              height={80}
              style={{ background: "#fff", borderRadius: "8px", border: "1px solid #ddd" }}
            />
            <div>
              <h3 style={{ margin: 0, fontSize: "1.4em" }}>
                {opponentPokemon.name.charAt(0).toUpperCase() + opponentPokemon.name.slice(1)}
              </h3>
              <div style={{ marginBottom: "0.5rem", color: "#555" }}>
                <strong>Tipos:</strong> {opponentPokemon.types.join(", ")}
              </div>
              <div>
                <strong>Estadísticas:</strong>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>❤️ HP: <b>{opponentPokemon.stats.hp}</b></li>
                  <li>⚔️ Ataque: <b>{opponentPokemon.stats.attack}</b></li>
                  <li>🛡️ Defensa: <b>{opponentPokemon.stats.defense}</b></li>
                  <li>✨ Ataque Especial: <b>{opponentPokemon.stats.specialAttack}</b></li>
                  <li>🛡️ Defensa Especial: <b>{opponentPokemon.stats.specialDefense}</b></li>
                  <li>💨 Velocidad: <b>{opponentPokemon.stats.speed}</b></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <TypeSelector label="Tu tipo 1" value={myType1} onChange={setMyType1} />
        <TypeSelector label="Tu tipo 2" value={myType2} onChange={setMyType2} />
      </div>
      <div>
        <TypeSelector label="Tipo rival 1" value={opponentType1} onChange={setOpponentType1} />
        <TypeSelector label="Tipo rival 2" value={opponentType2} onChange={setOpponentType2} />
      </div>
      <button className="swap-btn" onClick={handleSwap} style={{marginBottom: "1rem"}}>Invertir tipos</button>
      <br />
      <button className="calc-btn" onClick={handleCalculate}>Calcular efectividad</button>
      {result && (
        <div className="result">
          Resultado: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
