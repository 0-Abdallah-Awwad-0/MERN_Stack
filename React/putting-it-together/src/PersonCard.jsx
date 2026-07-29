import { useState } from "react";

function PersonCard(props) {
  const [age, setAge] = useState(props.age);

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h2>{props.lastName}, {props.firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hairColor}</p>

      <button onClick={increaseAge}>
        Birthday Button for {props.firstName} {props.lastName}
      </button>

      <hr />
    </div>
  );
}

export default PersonCard;