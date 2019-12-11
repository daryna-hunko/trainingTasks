let smth = function(url, mode = {mode: 'no-cors'}) {
  const resp = fetch(url, mode);
  resp.then(response => {
    return new Promise((resolve, reject) => {
      (response.status < 400) ? resolve(response) : reject('Failed');
    });
  });
};

let callWrap = function(url) {
  smth(url).then(data => console.log(data)).catch(error => console.log(error));
}
callWrap('https://dhunko.github.io/trainingTasks');
callWrap('https://dhunko.github.io/trainingTasks222222');