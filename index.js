const app = "I don't do much.";
const token = '6686f709427783fa0050a297463e3508bd2a3895'

fetch('https://api.github.com/mrkutly/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
