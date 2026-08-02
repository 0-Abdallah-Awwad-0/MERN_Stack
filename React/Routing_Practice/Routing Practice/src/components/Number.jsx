import { useParams } from "react-router-dom";

const Number = () => {
  const { num } = useParams();
  return (
    <div>
      {!isNaN(+num) ? (
        <h1>The Number is: {num}</h1>
      ) : (
        <h1>Please enter a number</h1>
      )}
    </div>
  );
};
export default Number;
