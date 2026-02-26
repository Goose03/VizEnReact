# VizEnReact

## Virtual DOM y su relación con React.memo y map()
React usa el Virtual DOM para ver que partes de la pantalla cambiaron y actualizar solo eso. React.memo ayuda a que un componente no se vuelva a renderizar si sus props son iguales, lo que reduce trabajo cuando se hace el diff. Cuando usamos map() para listas, si ponemos keys estables y combinamos con React.memo, React puede identificar mejor que elementos cambiaron y solo actualizar esos.


## Division de Tareas
María Gpe. Soto: Home screen y Nav Bar
Juan Pablo Gil: Map.jsx
Juan Pablo Torres: Memo.jsx
Gustavo Garcia Tellez: Map.jsx y Memo.jsx