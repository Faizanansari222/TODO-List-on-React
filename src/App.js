// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// import { render } from '@testing-library/react';

function App() {
const [question,setQuestion] = useState([])  
// const [answers,setAnswers] = useState([])  
const [currentIndex , setCurrentIndex] = useState(0)

useEffect(function(){
renderAPI()

},[])

function renderAPI(){
  fetch('https://the-trivia-api.com/v2/questions')

.then(res => res.json())
.then(res=> setQuestion(res))
}

function nextQuestion (){
setCurrentIndex (currentIndex + 1)
selectAns(0)

}

function restartIndex(){
  setCurrentIndex (0)
}

if(!question.length){
  return <h1>Loading...</h1>
}

// function wrongAns (){

// console.log('hello world');


// }

function selectAns (e,ans){

// console.log('hello');

  if(ans === question.correctAnswer){
    e.target.classList.add('correct')
    
  }else{
    e.target.classList.add('wrong')

  }
}

  return (
    <div className="App">
      <header className="App-header p-8">
        <h1 className='text-7xl mb-8 font-extrabold'>Quiz App</h1>
<h1 className='font-bold text-3xl mb-10 border-red-600 border bg-gray-900 p-5 rounded-xl'>{currentIndex + 1}) {question[currentIndex].question.text}</h1>

<ol>
<li onClick = {(e)=>{selectAns(e,currentIndex)}} className='cursor-pointer m-3 rounded-lg bg-[#fc3f3f] hover:shadow-lg px-36 py-1'>{question[currentIndex].correctAnswer}</li>
<li onClick = {(e)=>{selectAns(e,currentIndex)}} className='cursor-pointer m-3 rounded-lg bg-[#fc3f3f] hover:shadow-lg px-36 py-1'>{question[currentIndex].incorrectAnswers[0]}</li>
<li onClick = {(e)=>{selectAns(e,currentIndex)}} className='cursor-pointer m-3 rounded-lg bg-[#fc3f3f] hover:shadow-lg px-36 py-1'>{question[currentIndex].incorrectAnswers[1]}</li>
<li onClick = {(e)=>{selectAns(e,currentIndex)}} className='cursor-pointer m-3 rounded-lg bg-[#fc3f3f] hover:shadow-lg px-36 py-1'>{question[currentIndex].incorrectAnswers[2]}</li>
</ol>
<p className='font-semibold text-lg'>( {currentIndex + 1} " To " {question.length} ) </p>

{currentIndex === question.length -1 ?
<button className='flex items-center px-3 hover:bg-[#ff5b5b] rounded-lg my-9 py-1 bg-[#fc3f3f]' onClick={restartIndex}>Restart</button>
:
<button className='px-3 flex items-center hover:bg-[#ff5b5b] rounded-lg my-9 py-1 bg-[#fc3f3f]' onClick={nextQuestion}>Next</button>
}

      </header>
    </div>
  );
}

export default App;
