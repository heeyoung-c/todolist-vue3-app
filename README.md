# ๐ ํ  ์ผ ๊ด๋ฆฌ(Todo) ํ๋ก์ ํธ

- ๊ณผ์  ๊ธฐํ:
  - ๊ณผ์  ์ํ ๊ธฐ๊ฐ: 05์ 19์ผ(๋ชฉ) ~ 06์ 09์ผ(๋ชฉ)
  - ์ฝ๋ ๋ฆฌ๋ทฐ ๊ธฐ๊ฐ: 06์ 09์ผ(๋ชฉ) ~ 06์ 17์ผ(๊ธ)
- ๋ด์ฉ:
  - ์ฃผ์ด์ง API๋ฅผ ํ์ฉํด ํ  ์ผ ๊ด๋ฆฌ ํ๋ก์ ํธ๋ฅผ ๋ง๋ค์ด๋ณด์ธ์.

## Preview
![Preview](/static/preview.gif)

## ๊ณผ์  ๋งํฌ
-Netlify๋ฅผ ํตํด ๋ฐฐํฌํ ์ฌ์ดํธ: [TodoList](https://super-cupcake-d4ecf8.netlify.app/)
-ํ  ์ผ ํญ๋ชฉ์ ์์๋ฅผ ๋ฐ๊พธ๋ ๋์์ด ์ํํ์ง ์์ต๋๋ค! ์์  ์ค์๋๋ค!

## ์๊ตฌ์ฌํญ

### ํ์ ์๊ตฌ์ฌํญ

- [x] ํ  ์ผ ๋ชฉ๋ก(list)์ ์กฐํ(Read)ํ  ์ ์์ด์ผ ํฉ๋๋ค.
- [x] ํ  ์ผ ํญ๋ชฉ(item)์ ์ถ๊ฐ(Create)ํ  ์ ์์ด์ผ ํฉ๋๋ค.
- [x] ํ  ์ผ ํญ๋ชฉ์ ์์ (Update)ํ  ์ ์์ด์ผ ํฉ๋๋ค.
- [x] ํ  ์ผ ํญ๋ชฉ์ ์ญ์ (Delete)ํ  ํ  ์ ์์ด์ผ ํฉ๋๋ค.
- [x] ์ค์  ์๋น์ค๋ก ๋ฐฐํฌํ๊ณ  ์ ๊ทผ ๊ฐ๋ฅํ ๋งํฌ๋ฅผ ์ถ๊ฐํด์ผ ํฉ๋๋ค.

### ์ ํ ์๊ตฌ์ฌํญ

- [ ] ํ  ์ผ ํญ๋ชฉ์ ์์๋ฅผ ๋ฐ๊ฟ ์ ์๋๋ก ๋ง๋ค์ด ๋ณด์ธ์.
  - ์์  ์ค์๋๋ค..!

- [x] ํ  ์ผ์ ์๋ฃํ์ง ์์ ํญ๋ชฉ๊ณผ ์๋ฃํ ํญ๋ชฉ์ ๋ถ๋ฅํด์ ์ถ๋ ฅํด ๋ณด์ธ์.
  - `v-if`, `v-else-if`๋ฅผ ํ์ฉํ์ฌ ๊ฐ ํญ๋ชฉ์ ๋ง๋ ์กฐ๊ฑด์ ๋ถ์ฌํ์ฌ ๊ตฌํํ์๋ค. 
  `store` ์ํ๊ด๋ฆฌ๋ฅผ ์ด์ฉํ์ฌ done ์ฒ๋ฆฌ๊ฐ ๋ todo๋ฅผ ๋ฐ๋ก ๋ ๋๋ง ํฌ์ ๊ตฌํ์ ํ๋ ์ชฝ์ด ์ข์์๊น? ๋ผ๋ ์๊ฐ์ด ๋ค์์ง๋ง, ๋ง์ ๋ถ๋ถ์์ ์๋ฌ๋ฅผ ๋ง์ฃผํ  ๊ฒ ๊ฐ์ ์ฐ์  ์์ฑ์ ๋ชฉํ๋ฅผ ๋์๋ค.

- [x] ํ  ์ผ์ ์๋ฃํ ํญ๋ชฉ์ ํ๋ฒ์ ์ญ์ ํ  ์ ์๋๋ก ๋ง๋ค์ด ๋ณด์ธ์.
  - ์๋ฃ๋ todo ํญ๋ชฉ์ด ๋ณด์ด๋ ์กฐ๊ฑด ์ค ํ๋์ธ `showComplete` ๋ฐ์ดํฐ๊ฐ true์ธ ์ํฉ์์๋ง ๋ฒํผ์ด ๋ ๋๋ง ๋๋ค. ๋น ๋ฐฐ์ด์ ๋ง๋ค๊ณ , `filter()`, `forEach()`๋ฉ์๋๋ฅผ ์ฌ์ฉํ์ฌ ์๋ฃ๋ todo ๋ชฉ๋ก์ id๊ฐ์ ๋น ๋ฐฐ์ด์ ๋ด๊ณ  `for of` ๋ฌธ์ ์ฌ์ฉํ์ฌ ์ถ์ถ๋ id๊ฐ์ ์ญ์ ๋ฅผ ๋ด๋นํ๋ `actions`๋ก ๋ณด๋ด์ด ๋์์ ์คํํ๋ค!

- [x] ํ  ์ผ ํญ๋ชฉ์ ์ต์  ์์ ์ผ์ ํ์ํด ๋ณด์ธ์.
  - `li`๋ก ๊ฐ๊ฐ์ todo ๋ชฉ๋ก์ด ๋ ๋๋ง ๋๋๋ฐ, ๊ทธ ์๋์ ๊ฐ๊ฐ์ ์ต์  ์์ ์ผ์ ์ถ๊ฐํ์๋ค. ๋ฐ์์จ todo ์์  ๋ ์ง๋ฅผ `new Date()`๋ฅผ ์ฌ์ฉํ์ฌ ์๋กญ๊ฒ ๋ฐํํ๊ณ , `.toLocaleString()`์ ๊ฐ์ ๋ฉ์๋๋ฅผ ์ฌ์ฉํ์๋ค. ๊ฐ์ ์กฐ์๋ถ์ธ ๊ฒฝ์ฐฌ๋์ด ์์ด๋์ด๋ฅผ ์ ๊ณตํด์ฃผ์จ๋ค๐

- [x] ์ต์ด API ์์ฒญ(Request)์ ๋ํ ๋ก๋ฉ ์ ๋๋ฉ์ด์์ ์ถ๊ฐํด ๋ณด์ธ์.
  - todoList๋ฅผ ์๋ฒ์์ ๊ฐ์ ธ์ค๋ ์์ฒญ์ ๋ํ ๋ฉ์๋๋ฅผ ๋์ํ  ๋, `loading`์ ๋ฐ์ดํฐ ๊ฐ์ `true`๋ก ์ ํํ๋ ํ์์ผ๋ก ๊ตฌํํ์๋ค.

- [x] SCSS, Bootstrap ๋ฑ์ ๊ตฌ์ฑํด ํ๋ก์ ํธ๋ฅผ ์ต๋ํ ์์๊ฒ(?) ๋ง๋ค์ด ๋ณด์ธ์.


## ๊ณผ์ ๋ฅผ ํ๊ณ  ๋์.. 
Vue.js๋ก ๊ณผ์ ๋ฅผ ์งํํ์๋๋ฐ, ๊ฐํธํ์ง๋ง ์์ง์ ์ด์ํ๊ณ  ํ์ฉํ์ง ๋ชปํ๋ ๋ถ๋ถ๋ ๋ง๋ค.
ํนํ Vuex์ ๋ํด์ ์์์ ๋ค์๋๋ ์ดํด๋ฅผ ๋ค ํ ์ค ์์๋๋ฐ, ๋ง์ ๊ณผ์ ๋ฅผ ํ  ๋ ์ ๋๋ก ํ์ฉํด๋ณด์ง ๋ชปํ๋ค  
์ฌ์ค Vue.js๋ฅผ ์ ๋๋ก ํ์ฉํ๊ณ  ์๋์ง ์์ง ํ์ ์ด ๊ฐ์ง๋ ์๋๋ค๐ซ ๊ทธ๋๋ ๊ณผ์ ๋ฅผ ์งํํ๋ฉด์ Vue.js์ ๋ํ ์ดํด๋๊ฐ ์ด๋์ ๋ ์๊ธด ๊ฒ ๊ฐ์ ๊ธฐ์๋ค 