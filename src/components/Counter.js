import { useRef, useState } from "react"


export const Counter = () => {
    const [charLength, setCharLength] = useState(0);
    const [wordLength, setWordLength] = useState(0);

    const testRef = useRef();
    const handleCount =() => {
        const value = testRef.current.value;
        setCharLength(value.length);
        value.length ? setWordLength(value.trim().split(" ").length) : setWordLength(0)
    }
    function handleClick(){
        testRef.current.value="";
        handleCount();
    }
  return (
    <section className="counter">
        <textarea onChange={handleCount} ref={testRef} placeholder="Type or paste your tetxt"></textarea>
        <button onClick={()=>handleClick()} disabled={charLength ? "" :"disabled"}>Clear</button>
        <p className="result">
            <span>Charater: {charLength}</span>
            <span>Word: {wordLength}</span>
        </p>

    </section>
  )
}


