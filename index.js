const app = "I don't do much.";
const token = '';

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const token = getToken();
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(`https://api.github.com/user/repos/${repo}/forks`, {
  method: 'POST',
  headers: {
    Authorization: `token ${token}`
  }
})
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}



// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));
//
// const postData = {
//   body: 'Great stuff'
// };
//
// fetch('https://api.github.com/repos/iwilliams83/js-advanced-scope-closures-lab-dumbo-web-060418/commits/a16454d1a7ab04936e6301ea8f12a615ae5fc14e/comments', {
//   method: 'POST',
//   body: JSON.stringify(postData),
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => console.log(res));
