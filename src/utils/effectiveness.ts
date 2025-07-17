// Tabla de efectividad de tipos Pokémon (completa)
type Type =
  | "Normal" | "Fuego" | "Agua" | "Planta" | "Eléctrico"
  | "Hielo" | "Lucha" | "Veneno" | "Tierra" | "Volador"
  | "Psíquico" | "Bicho" | "Roca" | "Fantasma" | "Dragón"
  | "Siniestro" | "Acero" | "Hada";

const effectivenessChart: Record<Type, Partial<Record<Type, number>>> = {
  Normal:    { Roca: 0.5, Fantasma: 0, Acero: 0.5 },
  Fuego:     { Planta: 2, Hielo: 2, Bicho: 2, Acero: 2, Fuego: 0.5, Agua: 0.5, Roca: 0.5, Dragón: 0.5 },
  Agua:      { Fuego: 2, Tierra: 2, Roca: 2, Agua: 0.5, Planta: 0.5, Dragón: 0.5 },
  Planta:    { Agua: 2, Tierra: 2, Roca: 2, Fuego: 0.5, Planta: 0.5, Veneno: 0.5, Volador: 0.5, Bicho: 0.5, Dragón: 0.5, Acero: 0.5 },
  Eléctrico: { Agua: 2, Volador: 2, Eléctrico: 0.5, Planta: 0.5, Dragón: 0.5, Tierra: 0 },
  Hielo:     { Planta: 2, Tierra: 2, Volador: 2, Dragón: 2, Fuego: 0.5, Agua: 0.5, Hielo: 0.5, Acero: 0.5 },
  Lucha:     { Normal: 2, Hielo: 2, Roca: 2, Siniestro: 2, Acero: 2, Veneno: 0.5, Volador: 0.5, Psíquico: 0.5, Bicho: 0.5, Fantasma: 0, Hada: 0.5 },
  Veneno:    { Planta: 2, Hada: 2, Veneno: 0.5, Tierra: 0.5, Roca: 0.5, Fantasma: 0.5, Acero: 0 },
  Tierra:    { Fuego: 2, Eléctrico: 2, Veneno: 2, Roca: 2, Acero: 2, Planta: 0.5, Bicho: 0.5, Volador: 0 },
  Volador:   { Planta: 2, Lucha: 2, Bicho: 2, Eléctrico: 0.5, Roca: 0.5, Acero: 0.5 },
  Psíquico:  { Lucha: 2, Veneno: 2, Psíquico: 0.5, Acero: 0.5, Siniestro: 0 },
  Bicho:     { Planta: 2, Psíquico: 2, Siniestro: 2, Fuego: 0.5, Lucha: 0.5, Veneno: 0.5, Volador: 0.5, Fantasma: 0.5, Acero: 0.5, Hada: 0.5 },
  Roca:      { Fuego: 2, Hielo: 2, Volador: 2, Bicho: 2, Lucha: 0.5, Tierra: 0.5, Acero: 0.5 },
  Fantasma:  { Fantasma: 2, Psíquico: 2, Siniestro: 0.5, Normal: 0 },
  Dragón:    { Dragón: 2, Acero: 0.5, Hada: 0 },
  Siniestro: { Psíquico: 2, Fantasma: 2, Lucha: 0.5, Siniestro: 0.5, Hada: 0.5 },
  Acero:     { Hielo: 2, Roca: 2, Hada: 2, Fuego: 0.5, Agua: 0.5, Eléctrico: 0.5, Acero: 0.5 },
  Hada:      { Lucha: 2, Dragón: 2, Siniestro: 2, Fuego: 0.5, Veneno: 0.5, Acero: 0.5 }
};

export function getEffectiveness(
  attacker: Type,
  defender1: Type,
  defender2?: Type
): "No afecta" | "Débil" | "Neutro" | "Efectivo" {
  const factor1 = effectivenessChart[attacker]?.[defender1] ?? 1;
  const factor2 = defender2 ? (effectivenessChart[attacker]?.[defender2] ?? 1) : 1;
  const total = factor1 * factor2;
  if (total === 0) return "No afecta";
  if (total < 1) return "Débil";
  if (total === 2 || total > 2) return "Efectivo";
  return "Neutro";
}

export const types: Type[] = [
  "Normal", "Fuego", "Agua", "Planta", "Eléctrico",
  "Hielo", "Lucha", "Veneno", "Tierra", "Volador",
  "Psíquico", "Bicho", "Roca", "Fantasma", "Dragón",
  "Siniestro", "Acero", "Hada"
];
