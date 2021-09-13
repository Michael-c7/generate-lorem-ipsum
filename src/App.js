import react,{useState, useEffect} from "react"
import { data } from "./data"

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState(data.slice(0, count))

  const handleClick = e => {
    e.preventDefault()
    if(count <= 0) {
      setCount(0)
    }

    setText(data.slice(0, count));

  }
  
  return (
    <section className="container">
      <h1>Generate Lorem Ipsum</h1>
      <form className="form" onSubmit={handleClick}>
        <label htmlFor="number">Paragraphs:</label>
        <input type="number" id="number" min="0" max="100" autoFocus={true}
         onChange={(e) => setCount(e.target.value)}/>
        <button className="btn">Generate</button>
      </form>
      <div className="msg"><sup>*</sup>Generates up to 100 paragraphs at once!</div>

      <section className="generated-text-section">
        {text.map((item, index) => {
          return (<p key={index}>{item}</p>)
        })}
      </section>
      
    </section>
  )
}

export default App

