function isArray(obj) {
    return obj instanceof Array;
};

function isNumber(obj) {
    return typeof obj === 'number';
};

function isFunction(obj) {
    return typeof obj === 'function';
};

function take(arr, number) {
    if (!isArray(arr)) {
        return null;
    };

    if (!isNumber(number)) {
        return `${number} Is not a number`;
    };

    const newArr = [];
    for (let i = 0; i < number; i++) {
        newArr.push(arr[i]);
    };

    return newArr;
};

function skip(arr, number) {
    if (!isArray(arr)) {
        return null;
    };

    if (!isNumber(number)) {
        return `${number} Is not a number`;
    };

    const newArr = [];
    for (let i = number; i < arr.length; i++) {
        newArr.push(arr[i]);
    };

    return newArr;
};

function map(array, callback) {
    if (!isArray(array)) {
        return null;
    };

    if (!isFunction(callback)) {
        return `${callback} Is not a function`;
    };

    const newArr = [];
    for (let index = 0; index < array.length; index++) {
        const currentItem = array[index];
        newArr.push(callback(currentItem, index));
    };

    return newArr;
}

function reduce(array, callback, initialValue) {
    if (!isArray(array)) {
        return null;
    };

    if (!isFunction(callback)) {
        return `${callback} Is not a function`;
    };

    let accumulator = initialValue ?? 0;
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index];
        accumulator = callback(accumulator, currentValue, index, array);
    };

    return accumulator;
};

function foreach(array, callback) {
    if (isArray(array)) {
        return null;
    };

    if (!isFunction(callback)) {
        return `${callback} Is not a function`;
    };

    for (let index = 0; index < array.length; index++) {
        const currentItem = array[index];
        callback(currentItem, index);
    };
};

function filter(array, callback) {
    if (!isArray(array)) {
        return null;
    };

    if (!isFunction(callback)) {
        return `${callback} Is not a function`;
    };

    const newArr = [];
    for (let index = 0; index < array.length; index++) {
        const currentItem = array[index];
        if (callback(currentItem, index, array)) {
            newArr.push(array[index]);
        };
    };

    return newArr;
};

const arrayLib = {
    arr: [],
    value() {
        return this.arr;
    },
    chain: function (arr) {
        this.arr = arr;
        return this;
    },
    take: function (num) {
        this.arr = take(this.arr, num);
        return this;
    },
    skip: function (num) {
        this.arr = skip(this.arr, num);
        return this;
    }
};

console.log(arrayLib.chain([1, 2, 3]).take(2).skip(1).value());