shop 프로젝트 생성

`npx create-react-app shop`
`npm start`
Starts the development server.

`npm run build`
Bundles the app into static files for production.

`npm test`
Starts the test runner.

`npm run eject`
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!


# Bootstrap library
React Bootstrap https://react-bootstrap.netlify.app/  
`npm install react-bootstrap bootstrap`

1. ADD css link - 여기서는 html에 추가했음
2. button  사용해보기
    - import button `import { Button } from 'react-bootstrap';`
    - button 추가
3. NAV 추가
    - import `import { Button, Nav, Link } from 'react-bootstrap';`
    - add code  

# 이미지 넣기 & public folder
1. div를 추가하고 class main-bg추가
2. css 파일에서 main-bg의 이미지를 넣고 css로 디테일 조정하기
    - background-image: url()
    - background-size: cover;
    - background-position: center;
3. js페이지에서 바로 이미지넣기
    - 상단에 로고를 불러왔던 것처럼 사용할 이미지 변수이름과 경로 설정
    - 변수를 style안에 추가 <div className="main-bg" style={ {backgroundImage: 'url('+cat+')'} }


# 상품 정보 넣기
1. layout 3칸
2. 상품 명, 상품 설명 넣기
    - image가 100 개 이상일 경우에는 어떻게 할것인가? 위의 두가지 방법으로 추가하기에는 무리가 있지않을까? public 폴더안에 넣고 사용하는것이 편한다.
    - npm build를 하게되면 개발한 코드를 압축 (bundling)하여 public폴더에 저장된다. 그래서 src안에 있던 이미지의 경우는 이미지 파일이름이 변경되거나 압축되기도 한다.하지만 public폴더안의 파일은 압축되지 않는다. 
    - public 폴더 주의 사항. 이미지를 /image경로로 불러왔을 때 절대 경로가 안될경우도 있다. 이경우를 대비해서 public 폴더의 이미지를 사용할때는 앞의 코드를 추가해준다 `<img src={process.env.PUBLIC_URL + '/logo192.png'} /> ` 이렇게 하면 압축후에도 또는 웹사이트 주소가 바뀌어도 이미지가 보여지는데는 문제가 없다.

# 코드가 길어지면 import export하면 된다
서버에서 상품데이터 가져와서 데이터 집어넣어주세요. 
1. import useState
2. useState를 사용한 변수 선언

길고 복잡한 데이터는 다른 곳에다 넣었다가 가져올 수 있다. 
예를들면 let a = 10이라는 변수가 data.js에 있다면, a 변수를 export하고 사용할려는 코드에서  여기서는 app.js에서 변수를 import한다
```
let a = 10;
export default a;

//app.js
import aa from './data.js';

// 만약 변수가 두개 이상이라면
let a = 10;
let b = 100;

export {a,b}

import {a, b} from './data.js';
```
shoes[0].title

숙제. 
1. 상품을 컴포넌트로 만들기
2. 컴포넌트를 만든 후 데이터 바인딩 
3. 3개의 컴포넌트 대신에 반복문으로 축약하기