let smth = function(url, mode = {mode: 'no-cors'}) {
  const resp = fetch(url, mode);
  resp.then(response => {
      (response.status < 400) ? console.log(response): console.log('Failed')
  });
};
smth('https://dhunko.github.io/trainingTasks');
smth('https://dhunko.github.io/trainingTasks222222');