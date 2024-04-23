https://youtu.be/nahwuaXmgt8?feature=shared

`npx create-react-app blog`

node js 설치 이유 - create react app이라는 라이브러리를 이용하기 위해서 설치함 그럼 npm(패키지매니저) 이라는 툴 이용가능하다.
npm 나머지 유용한 것들 살펴보기 

app.js 의 내용이 index.html에 모두 보여지는데 
이동작 요청은 index.js에서 한다.

# JSX
react는 html 대신에 jsx문법을 사용한다. 
jax는 class를 사용하지 않고 className을 사용한다
가장큰장점 중 하나 
리액트에서 데이터 바인딩이 쉽다
**데이터바인딩** 이 뭐냐? 서버에서 가져온 글을 html에 꽂아넣는것 
document.getElement...... 코드짜서 넣었었다. 
데이터 바인딩은 { 변수 또는 함수 } 이름을 이용할 수 있다.
리액트의 이미지 넣는법
1. 이미지를 임포트하고
2. { 임포트한 이름}을 사용하면된다.

div에 css 대신에 style을 바로 추가할 수도 있다. 단 object형식으로 넣어야 한다. {{color:'blue', font-size: '30px'}}
let style1 = {color:'blue', fontSize: '30px'}
  let posts = '강남 고기 맛집';

# State
데이터를 보관하는 방법 1. 변수 2. state
젤위에다가 useState() 함수를 쓴다고 선언
es6 desctrcturing 문법
[10,100] 이두개를 변수에 담는다면 
var [a,b] = [10, 100]
a = 10 이고  b=100이다
statue는 하상 두개의 변수가 저장된다. 하나는 보이는것 하나는 안보이는것. 이렇게 만든 변수 두개를 사용가능 하게 된다
```
let [글제목, 글제목변경] = useState(' 남자 코트 추천 ');
  let [글제목2, 글제목변경2] = useState(' 남자 코트 추천2 ');
```

변수쓰면 되지 왜 state를 쓰냐? 
리액트를 app처럼 동작하게 만들고 싶을 때 state를 사용한다. 
state는 변경되면 재렌더링이 된다. 
변수로 만든 데이터는 렌더링이 안되기때문에 새로고침해야한다.
블로그 제목같은거는 잘 안바뀌기 때문에 state를 사용안해도 된다.

# 하트를 클릭했을 때 숫자 올라가는거
예전에는 onclkick해서 이벤트 리스너로 읽어야 했다.

콜백함수 에로 펑션
() => {}
function 이름(){ }
addEventListener('click', function(){})
addEventListener('click', ()=>{})

state는 그냥 변경이 안됨
그래서 오른쪽에 생성되는 변수(함수)를 이용한다. 
let [따봉, 따봉변경] = useState(0);
따봉변경(10); 으로 적게되면 따봉변경이 10으로 변경한다

```
let [따봉, 따봉변경] = useState(0);
<span onClick={()=>{return 따봉변경(따봉+1)}}>❤️</span> {따봉}
```
state 변경함수를 변경할 수 있다. 
state의 데이터를 변경은 불가능하기 때문에 변수를 복사한 후 데이터를 변경한다. 

# Components
retrun 안에는 하나의 div를 이용해야 한다.
이걸 해결하기 위해서 함수를 새로 생성하고 생성한 함수를 필요한 자리에 불러오는데 이것을 컴포넌트를 만드는 문법이라고 한다. 
관리가 편해지는 장점이 있으나 너무 많으면 관리가 힘들어진다
반복적으로 출현하는 div를 컴포넌트로 만들면 도움이 된다
두번째 자주 바뀌는 UI (랜더링이 자주 일어나는것)를 컴포넌트로 만들면 성능적으로 도움이 된다.
다른페이지를 구성할때도 컴포넌트로 만들 수 있다. 
단점
state를 쓸때 복잡해짐, 모든 변수는 function 안에 살고 있는데 다른 function과 변수를 공유하지 않는다. 그럴때 props 문법을 이용해야 한다.

관습
- 대문자로 시작한다. 
- return() 안에 있는건 태그 하나로 묶어야 한다
- 프래그먼트 문법사용가능 <>
- 컴포넌트 위치는 function App()이랑 같이 놓으면 됨 (이 애도 컴포넌트)

## 동적 UI 만드는 3 STEP
경고문, 햄버거 메뉴

1. HTML CSS로 미리 디자인 완성
2. ui의 현재 상태를 STATE로 저장
3. STATE에 따라 UI가 어떻게 보일지 작성

## ternary operator 삼항연산자
조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
```
{
      1 == 1? '맞음' : '아님' null
    }
```
true이면 모달창이 보이게 하였다.

제목을 클릭했을 때 껏다 켯다 하는 기능 
setModal(!modal) 현재 기능의 반대 기능을 저장한다.  

# map: 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
자바스크립트 문법 map
[1,2,3,].map(function(){ }) map안에 콜백 함수를 적을 수 있다. map안의 함수를 리스트 갯수만큼 반복해준다
1. array  자료 갯수만큼 함수안의 코드 실행해줌
2. 함수의 파라미터는 array 안에 있던 자료임
3. return에 뭐 적으면 array로 담아줌

```
[1,2,3].map(()=> {return console.log("hello")})
[1,2,3].map((a)=> {return console.log(a)}) 
[1,2,3].map((a)=> {return '123'})

let apple=[1,2,3]
apple.map( ()=>{ })
```

이걸 활용하면 리스트만큼 div를 만들수도 있다

html에서는 중괄호를 활용해서 자바스크립트를 믹스 할 수 있는데 for 문의 사용이 불가능하다. 그래서  map함수를 쓰도록 한다
{
 
}
앞에 [1,2,3] 대신에 글제목을 쓰게 되면 리스트의 갯수를 가져온다
console.log(Array(3).fill(1))

# 자식이 부모의 state가져다 쓰고 싶을 때는 props
Modal 함수안에서 App()안에 있는 변수들을 사용하고자 할때 
부모 컴포넌트에서 자식 컴포넌트로는 변수를 전송해 줄 수 있다 즉 부모 컴포넌트의 state를 사용할 수 있다.즉 여기서는 글제목 state를 사용한다. 
사용방법
1. 부모컴포넌트에서  자식컨포넌트가 사용된 곳에서 작명후 state이름을 적어준다
2. 자식컨포넌트에 파라미트에 props로 적고 props가 들어갈 곳에 props.작명이라고 다시한번 써준다
```
{ modal ? <Modal title={글제목[i]} /> : null }   

function Modal(props){
  return(
    <div className='modal'>
      <h2>{props.title}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

  )
}
```

여기에 응용으로 코드는 같고 스타일만 바꾼다면 다음과 같이 응용할 수 있다. 
```
{ modal ? <Modal title={글제목[i]} color={'yellow'} /> : null }
function Modal(props){
  return(
    <div className='modal' style={{background: props.color}}>
      <h2>{props.title}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

  )
}
```

숙제 
모달창안에 글 수정 버튼을 만들고 그거 누르면 첫 글제목이 '여자코트 추천'으로 바뀌는 기능을 만들어 봅니다

Q. 제목이 모달창 안에 뜨게 할려면?

# 사용자로 부터 인풋받고 업데이트하기
1. input form 
2. input type은 여러 종류가 있다. button, checkbox, color, date, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week 
3. input onchage={ } 이벤트 핸들러를 사용할 수 있다. 값을 바꿀때마다 바뀐다
   input onInput={ }, onMouseOver, onScroll, 이벤트 종류는 30개 정도 있다. 찾아서 쓰자
4. input된 값을 사용하고 싶을 때 onChange={ (e.target) } 파라미터e를 넣어주자
event 객체가 담겨있다고 한다. e.target , e.target.value

이벤트 버블링 - 따봉이 있는 span 태그를 눌러도 모달창이 켜지는 현상.이것을 없애기 위해서도 e객체를 사용할 수 있다.  e.stopPropagation()
비동기로 실행되기 때문에 단어가 한개만 쳐졌을 때는 안보이다가 두개부터 보인다
숙제
1. 버튼누르면 글 하나 추가 되는 기능 만들기, 힌트 html 직접하나 만들 필요없음 state 조작하면됨
2. array에 자료 추가하는법 찾기
codingApple은 unshift? 사용

숙제2
글마다 삭제버튼 & 기능 만들기
1. state

React 옛날 문법 using class
```
class Modals2 extends React.Component{
  constructor(){
    super()
  }
  render(){
    
  }

}
```
```
//react 옛날 문법
class Modals2 extends React.Component{
  constructor(){
    super()
    this.state = {
      name: '김',
      age: 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age}
        <button onClick={() => {
          this.setState({age:21})
        }}> 변경

        </button>
      </div>
      
    )
  }
}
```

`npm run build`