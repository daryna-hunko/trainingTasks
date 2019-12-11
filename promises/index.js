let getResponse = function(url, mode = {mode: 'no-cors'}) {
  const fetchPromise = fetch(url);
  fetchPromise.then(response => {
    checkStatus(response).then(data => console.log(data)).catch(error => console.log(error));
  });
};
function checkStatus (data) {
  return new Promise((res, rej) => {
    if (data.status < 400) res(data);
    rej('Failed');
  });
}

getResponse('https://dhunko.github.io/trainingTasks');
getResponse('https://dhunko.github.io/trainingTasks222222');