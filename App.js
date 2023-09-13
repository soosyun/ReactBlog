import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '동숲좋아해?';
  let [글제목, b] = useState('동숲에서 친구만들기');

  return (
    <div className="App">
      <div className='yuntittle'>
        <h4>놀러와요 동물의 숲</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목 }</h4>
        <p>2023.09.13 발행</p>
      </div>
    </div>
  );
}

export default App;
