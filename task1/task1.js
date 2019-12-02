function task1(number) {
  let binaryNumber = number.toString(2);
  let i = 0;
  let j = 0;
  while (j < binaryNumber.length) {
    if (binaryNumber.charAt(j) == "1") {
      i++;
    }
    j++;
  }
  return i;
}

let outputEl = document.querySelector('.output');

document.querySelector('.submit-btn').addEventListener('click', function(e) {
  let el = document.querySelector('.input').value;
  outputEl.innerText = task1(+el);
});
document.querySelector('.clear').addEventListener('click', function(e) {
  outputEl.innerText = '';
  document.querySelector('.input').value ='';
});