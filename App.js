import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '동숲좋아해?';
  let [글제목, b] = useState(['동숲친구만들기', '너굴씨한테 빚갚기', '부엉과 박물관탐방']);
  let [복숭아, 복숭아추가] = useState(0);

  return (
    <div className="App">
      <div className='yuntittle'>
        <h4>놀러와요 동물의 숲</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 복숭아추가(복숭아+1) }}>🍑</span> {복숭아} </h4>
        <p>2023.09.13 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2023.09.13 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2023.09.13 발행</p>
      </div>
    </div>
  );
}

export default App;
