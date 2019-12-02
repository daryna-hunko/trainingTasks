function sortString(str) {
  let wordsArr = str.split(' ');
  wordsArr.sort(function(a, b){
    return (+a.match(/\d+/)) - (+b.match(/\d+/));
  });
  wordsArr = wordsArr.join(' ');
  return(wordsArr);
}
let outputEl = document.querySelector('.output');

document.querySelector('.submit-btn').addEventListener('click', function(e) {
  let el = document.querySelector('.input').value;
  outputEl.innerText = sortString(el);
});
document.querySelector('.clear').addEventListener('click', function(e) {
  outputEl.innerText = '';
  document.querySelector('.input').value ='';
});