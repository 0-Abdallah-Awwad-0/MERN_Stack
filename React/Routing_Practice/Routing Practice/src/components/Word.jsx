import { useParams } from "react-router-dom"

const Word = () => {
    const {word} = useParams();
    return (
        <div>
            <h1>The Word is: {word}</h1>
        </div>
    )
}
export default Word;