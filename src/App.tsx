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
      <PokemonSearch
        label="Buscar mi Pokémon"
        onSelect={p => {
          setMyType1(p.types[0] || "");
          setMyType2(p.types[1] || "");
        }}
      />
      <PokemonSearch
        label="Buscar Pokémon rival"
        onSelect={p => {
          setOpponentType1(p.types[0] || "");
          setOpponentType2(p.types[1] || "");
        }}
      />
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
