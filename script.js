// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
async function fetchData(apiUrls) {
  const outputAll = document.getElementById('output-all');
  const outputAny = document.getElementById('output-any');

  // Using Promise.all
  const startAll = performance.now();
  try {
    const responses = await Promise.all(apiUrls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(response => response.json()));
    outputAll.innerHTML = `Promise.all completed in ${performance.now() - startAll}ms`;
  } catch (error) {
    outputAll.innerHTML = `Promise.all failed: ${error}`;
  }

  // Using Promise.any
  const startAny = performance.now();
  try {
    const response = await Promise.any(apiUrls.map(url => fetch(url)));
    const data = await response.json();
    outputAny.innerHTML = `Promise.any completed in ${performance.now() - startAny}ms`;
  } catch (error) {
    outputAny.innerHTML = `Promise.any failed: ${error}`;
  }
}
