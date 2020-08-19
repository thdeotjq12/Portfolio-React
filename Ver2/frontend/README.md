## package.json

next : 코드스플리팅, 서버사이드 랜더링(react 기반 프레임워크)
react-dom : 웹
antd : 디자인 컴포넌트
prop-types : 부모컴포넌트로 부터 받아온 props 의 유효성 검사
next-redux-wrapper : 메인 레이아웃(_app.js) 에서 스토어를 받을 수 있게 해줌
next-redux-saga : SSR을 하기위함. 프론트에서의 서버사이드랜더링 처리
react-helmet : 검색엔진의 규격을 맞춤 (head 태그의 meta,title,script,style 을 관리)
styled-components : 코드정리(인라인 스타일의 코드를)
cross-env : 윈도 환경에서 환경변수를 npm 명령어에 넣어주기(윈도우 환경에서)(맥or리눅스는 기본 지원)
webpack-ant-icon-loader : 엔티디 아이콘 트리셰이킹
next/bundle-analyzer : next의 최적화(next.config.js)를 위한 서비스 분석(프론트, 프론트 서버 패키지 분석해줌)
compression-webpack-plugin : 빌드 용량을 줄여줌
## Dev

nodemon :
webpack :
eslint : 팀단위 협업을 하기위한 라이브러리, 코딩스타일 규칙 통합
"eslint-plugin-import": "^2.20.1", --> eslint 에서 사용할 플러그인 추가
"eslint-plugin-react": "^7.18.3",
"eslint-plugin-react-hooks": "^2.4.0"

"eslint-config-airbnb" : eslint 의 엄격한 스타일관리자 -> extends 부분에서 recommended 를 "airbnb" 로 대체 
"eslint-plugin-jsx-a11y" : 장애인 위한 웹 접근성 교정 (airbnb 와 같이 사용)
"immer" : 가독성 개선, 불변성 유지(코드정리) reducer, setState 등
## Version
Node : 13.13.0