import React from "react";
import { types } from "../utils/effectiveness";

interface TypeSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ label, value, onChange }) => (
  <div style={{ marginBottom: "1rem" }}>
    <label>
      {label}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ marginLeft: "0.5rem", padding: "0.25rem" }}
      >
        <option value="">Selecciona un tipo</option>
        {types.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </label>
  </div>
);

export default TypeSelector;
