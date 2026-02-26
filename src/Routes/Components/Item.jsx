import { memo, useState, createElement } from "react";

const Item = memo(function Item({ nombre }) {
  const [likes, setLikes] = useState(0);

  const obj = createElement(
    "li",
    null,
    <>
      {nombre} ❤️ {likes}
      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>
    </>
  );

  console.log("Render Item:", nombre);

  return obj;
});

export default Item;