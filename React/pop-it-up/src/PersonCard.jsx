function PersonCard({ firstName, lastName, age, hairColor }) {
  return (
    <div>
      <h2>
        {lastName}, {firstName}
      </h2>

      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <hr />
    </div>
  );
}

export default PersonCard;
