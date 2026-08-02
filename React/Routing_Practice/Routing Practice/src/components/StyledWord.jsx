import { useParams } from "react-router-dom";

const StyledWord = ()=>{
    const {word,textColor,background} = useParams();
    return (
        <div>
            <h1 style={{color:textColor,backgroundColor:background}}>The word is : {word}</h1>
        </div>
    )

}
export default StyledWord;