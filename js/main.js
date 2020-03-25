var userObj = {
    firstName : "John",
    lastName : "Smith",
    age : 25,
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(userObj.fullName());

function defUpperStr (param){
    return (param || "DEFAULT TEXT").toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());

function evenFn (n) {

    var arr= [];
    for(var i = 0 ; i <= n; i++){
        if(i % 2 === 0){
            arr.push(i);    
        }
    }
    arr.shift();
    return arr;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function weekFn(n) {
    var status ;

        switch (n){
        case n = 1 : status ="Понедельник";
        break;
        case n = 2 : status ="Вторник";
        break;
        case n = 3 : status ="Среда";
        break;
        case n = 4 : status ="Четверг";
        break;
        case n = 5 : status ="Пятница";
        break;
        case n = 6 : status ="Суббота";
        break;
        case n = 7 : status ="Воскресенье";
        break;
        default : status = null;
        }
    return status;
  }

console.log(weekFn(1)); 
console.log(weekFn(3)); 
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));

function ageClassification(n){
    return  n > 0 && n <= 24 ? "детский возраст" :  n > 24 && n <= 44 ? 'молодой возраст': n > 44 && n <= 65 ? "средний возраст": n >= 65 && n <= 75 ?  "пожилой возраст" : n > 75 && n <=90 ? "старческий возраст": n > 90 && n <= 122 ? "долгожители": n > 122 && n < 0 ?  null : null
}


console.log('-1 :', ageClassification(-1)); // -1 : null

console.log('5 :', ageClassification(5)); // 5 : детский возраст

console.log('34 :', ageClassification(34)); // -1 : null

console.log('50 :', ageClassification(50)); // 50 : средний возраст

console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст

console.log('80 :', ageClassification(80)); // 80 : старческий возраст

console.log('110 :', ageClassification(110)); // 110 : долгожители

console.log('130 :', ageClassification(130)); // 130 : null

console.log(2, ageClassification(0.1));

function oddFn(n){
    var arr = [];
    var i = 0;
    while (i <= n ) {
        if (i % 2 !== 0){
           arr.push(i);
           
        }
        i++;
    } 


    return arr;
}


console.log(oddFn(10)); 

console.log(oddFn(15)); 

console.log(oddFn(20)); 


function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function'){
        return cb(a, b);
    }
    return false;
}

function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(x, y) {
    return Math.pow(x,y);
}

function cbAdd(param1, param2) {
    return param1 + param2;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2,2,cbPow));
console.log(mainFunc(5,7,cbAdd));

