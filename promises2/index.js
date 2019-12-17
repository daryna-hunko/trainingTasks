let getA = function(id) {
    return Promise.resolve('0001');
};
let getAFromAnotherServer = function(id) {
    return Promise.resolve('0000');
};

let answerSomethingFinaly = function(){
    return Promise.all([getA(), getAFromAnotherServer()])
        .then(results => {
            if ((results[0] == results[1]) && (results[0] !== undefined)) {
                console.log(results[0]);
                return results[0];
            } else if ((results[0] !== undefined) && (results[1] === undefined)) {
                console.log(results[0]);
                return results[0];
            } else if ((results[1] !== undefined) && (results[0] === undefined)) {
                console.log(results[1]);
                return results[1];
            }
            return Promise.reject('Faileddddd!')
        })
        .catch(e => {return Promise.reject('Failedк!')})
};
answerSomethingFinaly();