import { useState } from "react";

const Box = () => {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const createBox = (e) => {
    e.preventDefault();

    setBoxes([...boxes, color]);
  };

  return (
    <div>
      <form onSubmit={createBox}>
        <label>Color: </label>

        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {boxes.map((boxColor, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: boxColor,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
    

export default Box;