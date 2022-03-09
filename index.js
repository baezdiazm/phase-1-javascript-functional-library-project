function objToArr(collection) {
    return (collection instanceof Array)? collection.slice() : Object.values(collection)
}

function objToKeys(obj) {
    return Object.keys(obj)
}

function myEach(arg, alert) {
    if(typeof(arg)==='object') {
        const newArr = Object.values(arg)
        newArr.forEach(element => {
                alert(element)
        })
    }
    return arg
}


function myMap(collection, callback) {
    const newCollection = objToArr(collection)
    let newArr = [];
    for (let i = 0; i < newCollection.length; i++) {
      newArr.push(callback(newCollection[i]));
    }
    return newArr;
}

function myReduce(arr, callback, initial) {
    let newArr = objToArr(arr)
    if (!(initial)) {
        initial = newArr[0]
        newArr = newArr.slice(1)
    }
    const red = newArr.reduce(callback, initial)
    return red
}

function myFind(coll, callback) {
    return coll.find(callback)
}

function myFilter(coll, callback) {
    const newArr = objToArr(coll)
    return (newArr.filter(callback)? newArr.filter(callback): null)
}

function mySize(arr) {
    const newArr = objToArr(arr)
    return ((arr)? newArr.length : null)
}

function myFirst(arr, amount) {
    const newArr = objToArr(arr)
    return ((amount)? newArr.slice(0, amount) : newArr[0])
}

function myLast(arr, amount=false) {
    return (amount? arr.slice(arr.length-amount, arr.length) : arr[arr.length-1])
}

function myKeys(obj) {
    return objToKeys(obj)
}

function myValues(obj) {
    return objToArr(obj)
}