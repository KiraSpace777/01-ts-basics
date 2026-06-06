import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});

//=========================================================
// Завдання 8. HTTP-запити (файл task-8.ts)
//=========================================================
// Функція fetchPosts робить GET-запит до API та повертає список постів.
// --------------------------------------------------------
// import axios from "axios";

// async function fetchPosts() {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts'
//   );
//   return response.data;
// }

// fetchPosts().then((posts) => {
//   console.log(posts[0].title);
// });
// --------------------------------------------------------
// Завдання:
// --------------------------------------------------------
// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.

// --------------------------------------------------------
// РЕЗУЛЬТАТ ВИКОНАННЯ КОДУ
// --------------------------------------------------------
//
// sunt aut facere repellat provident occaecati excepturi option reprehenderit —
// ----------------
//  це і є заголовок (title) найпершого поста (з id: 1) на навчальному сервері JSONPlaceholder. Функція успішно сходила в інтернет, забрала дані, TypeScript правильно розпізнав масив, а console.log(posts[0].title) вивів цей текст у консоль.
//
// XHR finished loading: GET "..."
// -----------------
// — це системне повідомлення браузера(найчастіше в Google Chrome).воно підтверджує, що мережевий запит до сервера пройшов успішно, сервер повернув статус 200 (OK) і віддав дані.
//
// -----------------
// Як остаточно переконатися для себе ? Щоб переконатися, що дані збігаються, ви можете зробити наступне:
// Скопіювати посилання
// https://jsonplaceholder.typicode.com/posts
// та просто вставить його в адресний рядок браузера. Відкриється великий масив тексту JSON. Знайти там найперший елемент (саме на початку сторінки). Ми побачимо :
//
// json
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi option reprehenderit",
//   "body": "..."
// }
