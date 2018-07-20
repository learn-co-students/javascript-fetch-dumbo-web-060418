const app = "I don't do much.";
const token = '713e0abeffa335a5fd7e66b0038bcbc0ea1aa29a'


fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: `token ${token}`
	}
}).
  then(res => res.json()).
  then(json => console.log(json))
