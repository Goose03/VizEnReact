import { useState } from "react";
import Item2 from "./../Routes/Components/Item";

export default function Map() {
  const [nuevoNombre, setNuevoNombre] = useState("");

  const [items, setItems] = useState([
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Maria" },
    { id: 4, nombre: "Karla" }
  ]);

  function invertirLista() {
    setItems(prev => [...prev].reverse());
  }

  function agregarItem() {
    setItems(prevItems => {
      const base = nuevoNombre.trim() || "Nuevo";

      let i = 1;
      let nombreFinal = base;

      const nombres = prevItems.map(item => item.nombre);

      while (nombres.includes(nombreFinal)) {
        nombreFinal = `${base}${i}`;
        i++;
      }

      const nextId = prevItems.length === 0 ? 1 : Math.max(...prevItems.map(i => i.id)) + 1;

      return [...prevItems, {id: nextId, nombre: nombreFinal}];
    });

    setNuevoNombre("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe un nombre"
        value={nuevoNombre}
        onChange={(e) => setNuevoNombre(e.target.value)}
      />

      <button onClick={agregarItem}>
        Agregar item
      </button>

      <button onClick={invertirLista}>
        Invertir lista
      </button>

      <ul>
        {items.map((item) => (
          <Item2
            key={item.id}
            nombre={item.nombre}
          />
        ))}
      </ul>
    </div>
  );
}