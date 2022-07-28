import { useEffect, useState } from 'react';
import './App.css';
import Quotebox from '../components/Quotebox';


function App() {
  const [author, setAuthor] = useState("")
  const [quote, setQuote] = useState("");
  const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  }

  const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(70);

    return `hsl(${h}deg, ${s}%, ${l}%)`;
  }

  const randomColor = getRandomColor();

  useEffect(()=>{
    fetch("https://api.quotable.io/random")
    .then(response=> response.json())
    .then(quoteResponse => {
      setQuote(quoteResponse.content)
      setAuthor(quoteResponse.author)
      console.log(quoteResponse.content);
    });

  },[]);
  
  const onButtonClick = () => {
    fetch("https://api.quotable.io/random")
    .then(response=> response.json())
    .then(quoteResponse => {
      setQuote(quoteResponse.content)
      setAuthor(quoteResponse.author)
      console.log(quoteResponse.content);
    });
    document.querySelector("body").style.backgroundColor = randomColor;
    document.querySelector(".quote").style.color = randomColor;
    document.querySelector(".author").style.color = randomColor;
    document.querySelector(".new-quote-btn").style.backgroundColor = randomColor;
  }


  return (
    <div className="App background-color">
      <h1 className='title'>Random Quote Machine</h1>
      <h3 className="quote-container background-color">
        <Quotebox quote={quote} author={author} onButtonClick={onButtonClick}/>
      </h3>

    </div>
  );
}

export default App;
