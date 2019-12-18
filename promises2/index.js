let getA = function(id) {
    return Promise.resolve(2);
};
let getAFromAnotherServer = function(id) {
    return Promise.resolve(undefined);
};

let answerSomethingFinaly = function(){
    return Promise.all([getA(), getAFromAnotherServer()])
        .then(results => {
          if ((results[0] == results[1]) && (results[0] !== undefined)) {
            return results[0];
          }
          if (results[0] !== results[1]) {
            if (results[0] ===  undefined) {
              return results[1];
            } 
            if (results[1] ===  undefined) {
              return results[0];
            } 
          }
          return Promise.reject('Vse ploxo');
        })
        .catch(e => {return Promise.reject('something went totally wrong')})
};
console.log(answerSomethingFinaly());