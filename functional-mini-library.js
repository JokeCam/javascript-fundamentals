function isArray(obj) {
    return obj instanceof Array;
};

function isDate(obj) {
    return obj instanceof Date;
};

function isBoolean(obj) {
    return typeof obj === 'boolean';
};

function isNumber(obj) {
    return typeof obj === 'number';
};

function isString(obj) {
    return typeof obj === 'string';
};

function isFunction(obj) {
    return typeof obj === 'function';
};

function isUndefined(obj) {
    return typeof obj === 'undefined';
};

function isNull(obj) {
    return obj === null;
};

// Working with arrays:

function first(arr) {
    if (!isArray(arr)) {
        return null;
    };

    return arr[0];
};

function last(arr) {
    if (!isArray(arr)) {
        return null;
    };

    return arr[arr.length - 1];
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

function asChain(arr) {
    class ChainArray extends Array {
        skip(n) {
            return asChain(skip(arr, n));
        };

        take(n) {
            return asChain(take(arr, n));
        };
    };

    return new ChainArray(...arr);
};