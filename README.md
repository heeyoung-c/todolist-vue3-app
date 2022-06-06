# 📌 할 일 관리(Todo) 프로젝트

- 과제 기한:
  - 과제 수행 기간: 05월 19일(목) ~ 06월 09일(목)
  - 코드 리뷰 기간: 06월 09일(목) ~ 06월 17일(금)
- 내용:
  - 주어진 API를 활용해 할 일 관리 프로젝트를 만들어보세요.

## Preview
![Preview](/static/preview.gif)

## 과제 링크
-Netlify를 통해 배포한 사이트: [TodoList](https://super-cupcake-d4ecf8.netlify.app/)

## 요구사항

### 필수 요구사항

- [x] 할 일 목록(list)을 조회(Read)할 수 있어야 합니다.
- [x] 할 일 항목(item)을 추가(Create)할 수 있어야 합니다.
- [x] 할 일 항목을 수정(Update)할 수 있어야 합니다.
- [x] 할 일 항목을 삭제(Delete)할 할 수 있어야 합니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### 선택 요구사항

- [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어 보세요.
  - Sortablejs가 적용이 안된다.. 왜 안되는지 원인을 아직 찾지 못했는데, 목요일까지 최대한 고민해보고 꼭 구현하도록 해야겠다

- [x] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해 보세요.
  - `v-if`, `v-else-if`를 활용하여 각 항목에 맞는 조건을 부여하여 구현하였다. 이 부분으로 인해 Sortablejs가 작동하지 않는 것 같은 느낌이 든다..😥  
  `store` 상태관리를 이용하여 done 처리가 된 todo를 따로 렌더링 햬서 구현을 하는 쪽이 좋았을까? 라는 생각이 들었지만, 많은 부분에서 에러를 마주할 것 같아 우선 완성에 목표를 두었다.

- [x] 할 일을 완료한 항목을 한번에 삭제할 수 있도록 만들어 보세요.
  - 완료된 todo 항목이 보이는 조건 중 하나인 `showComplete` 데이터가 true인 상황에서만 버튼이 렌더링 된다. 빈 배열을 만들고, `filter()`, `forEach()`메소드를 사용하여 완료된 todo 목록의 id값을 빈 배열에 담고 `for of` 문을 사용하여 추출된 id값을 삭제를 담당하는 `actions`로 보내어 동작을 실행한다!

- [x] 할 일 항목의 최신 수정일을 표시해 보세요.
  - `li`로 각각의 todo 목록이 렌더링 되는데, 그 아래에 각각의 최신 수정일을 추가하였다. 받아온 todo 수정 날짜를 `new Date()`를 사용하여 새롭게 반환하고, `.toLocaleString()`와 같은 메소드를 사용하였다. 같은 조원분인 경찬님이 아이디어를 제공해주셨다😊

- [x] 최초 API 요청(Request)에 대한 로딩 애니메이션을 추가해 보세요.
  - todoList를 서버에서 가져오는 요청에 대한 메소드를 동작할 때, `loading`의 데이터 값을 `true`로 전환하는 형식으로 구현하였다.

- [x] SCSS, Bootstrap 등을 구성해 프로젝트를 최대한 예쁘게(?) 만들어 보세요.


## 과제를 하고 나서..
Sortablejs를 활용하여 할 일 항목의 순서를 바꾸는 부분의 구현을 하지 못하였다. 왜 안되는지 그 이유를 아직 찾지는 못하였는데, 이 부분에 너무나 많은 시간을 할애하고 있어서 우선 다른 부분을 완성하기로 했다.  
Vue.js로 과제를 진행하였는데, 간편하지만 아직은 어색하고 활용하지 못하는 부분도 많다.
특히 Vuex에 대해서 수업을 들을때는 이해를 다 한 줄 알았는데, 막상 과제를 할 때 제대로 활용해보지 못했다  
사실 Vue.js를 제대로 활용하고 있는지 아직 확신이 가지는 않는다😫 그래도 과제를 진행하면서 Vue.js에 대한 이해도가 어느정도 생긴 것 같아 기쁘다 