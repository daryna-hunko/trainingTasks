let smth = async function(url, mode = {mode: 'no-cors'}) {
  const resp = await fetch(url, mode);
  return new Promise((resolve, reject) => {
      (resp.status < 400) ? resolve(resp/*.text()*/) : reject('Failed');
  });
};
let callWrap = function(url) {
  smth(url).then(data => console.log(data)).catch(error => console.log(error));
}
callWrap('https://learn.javascript.ru/fetch');
callWrap('https://learn.javascript.ru/aaaa');
/*let outputEl = document.querySelector('.output');

document.querySelector('.submit-btn').addEventListener('click', function(e) {
  let el = document.querySelector('.input').value;
  outputEl.innerText = task(+el);
});
document.querySelector('.clear').addEventListener('click', function(e) {
  outputEl.innerText = '';
  document.querySelector('.input').value ='';
});*/