import React, {useState} from 'react';
import jin from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState([' 남자 코트 추천1','강남 우동맛집', '파이썬', '자바스크립트']);
  let [modal, setModal] = useState(false);
  let [ntitle, setNtitle] = useState(1);
  let [입력값, set입력값] = useState('');

  function 제목추가하기(e, newtitle) {
    if (e.key == 'Enter') {
      var newArray = [...글제목];
      newArray.push(newtitle)
      글제목변경(newArray)
    }
  }

  function 제목바꾸기() {
    //var newArray = 글제목에 있던 0번째 데이터를 여자코트추천으로 바꿈\
    //  reference type vs copy
    // 변경함수도 글제목과 같은 어레이 갯수로 한다
    var newArray = [...글제목];
    newArray[0] = '여자코트추천'
    글제목변경( newArray ); //state를 대체하는 함수
  }

  let [따봉, 따봉변경] = useState(Array(글제목.length).fill(0));
  function  따봉업데이트(i) {
    var newArray = [...따봉];
    newArray[i] = newArray[i]+1
    따봉변경( newArray );
  }
  
  return (
    <div className="App">
      <div className="black-nav"> 
      <div> 개발 Blog</div>
      </div>

      {/* <button onClick={ 제목바꾸기 }>제목변경</button> */}

      <div className="list">      
        {
          글제목.map((a, i) => {
            return(
              <div className="list" key={i}> 
                <h3 onClick={ ()=>{ setModal(!modal); setNtitle(i)} } >{글제목[i]}
                <span onClick={(e)=>{ e.stopPropagation(); 따봉업데이트(i)} }>❤️</span> {따봉[i]} 
                <button> delete </button>
                </h3> 
                <p>2월 17일 발행</p>
                <hr/>
              </div>    
            )})
        }
        { modal ? <Modal 글제목={글제목} 제목숫자={ntitle} color={'grey'} 글수정={ 제목바꾸기 } /> : null}
      </div>
      <input 
      onChange={ (e)=>{ set입력값(e.target.value); console.log(입력값) }}
      onKeyDown={ (e) => 제목추가하기(e, 입력값)}
      /> 
      
      
    </div> //app
  );
}

function Modal(props){
  return(
    <div className='modal' style={{background: props.color}}>
      <h2>{props.글제목[props.제목숫자]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ props.글수정} >제목0바꾸기</button>
    </div>
  )
}


export default App;
