let getResponse = function(url, mode = {mode: 'no-cors'}) {
  return fetch(url)  
      .then((response) => {return response});
};

let getAnswer = function(url, mode) {
  return getResponse(url, mode).then(data => {
      return new Promise((res, rej) => {
          if (data.status < 400) res(data);
          rej('Failed');
      });
  });
};

getAnswer('https://dhunko.github.io/trainingTasks').then(data => console.log(data)).catch(error => console.log(error));
getAnswer('https://dhunko.github.io/trainidddddngTasks').then(data => console.log(data)).catch(error => console.log(error));