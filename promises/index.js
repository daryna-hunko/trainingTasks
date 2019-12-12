let getAnswer = function(url, mode) {
  return fetch(url, mode).then(data => {
        if (data.status < 400) return Promise.resolve(data);
        return Promise.reject('Failed');
  });
};

getAnswer('https://dhunko.github.io/trainingTasks').then(data => console.log(data)).catch(error => console.log(error));
getAnswer('https://dhunko.github.io/trainidddddngTasks').then(data => console.log(data)).catch(error => console.log(error));