function isArray(obj) {
    if (obj instanceof Array) {
        return true
    } else return false
}

function isBoolean(obj) {
    if (typeof obj === 'boolean') {
        return true
    } else return false
}

function isDate(obj) {
    if (obj instanceof Date) {
        return true
    } else return false
}

function isNumber(obj) {
    if (typeof obj === 'number') {
        return true
    } else return false
}

function isString(obj) {
    if (typeof obj === 'string') {
        return true
    } else return false
}

function isFunction(obj) {
    if (typeof obj === 'function') {
        return true
    } else return false
}

function isUndefined(obj) {
    if (typeof obj === 'undefined') {
        return true
    } else return false
}

function isNull(obj) {
    if (obj === null) {
        return true
    } else return false
}

// Working with arrays:

const testArr = [{ 1: 1 }, 2, 3, 4, 5, { 6: 6 }]

function first(arr) {
    if (isArray(arr)) {
        return arr[0]
    } else return `${arr} Is not an array`
}

function last(arr) {
    if (isArray(arr)) {
        return arr[arr.length - 1]
    } else return `${arr} Is not an array`
}

function skip(arr, number) {
    if (isArray(arr)) {
        if (isNumber(number)) {
            let newArr = []
            for (let i = 0; i < arr.length; i++) {
                if (i < number) {
                    newArr.push(arr[i])
                }
            }
            return newArr
        } else return `${number} Is not a number`
    } else return `${arr} Is not an array`
}

function take(arr, number) {
    if (isArray(arr)) {
        if (isNumber(number)) {
            let newArr = []
            for (let i = 0; i < arr.length; i++) {
                if (i >= number) {
                    newArr.push(arr[i])
                }
            }
            return newArr
        } else return `${number} Is not a number`
    } else return `${arr} Is not an array`
}

function asChain(arr) {
    let newArr = []

    let obj = {
        skip: function(num) {
            newArr = skip(arr, num)
            return this
        },
        take: function(num) {
            newArr = take(arr, num)
            return this
        }
    }
    return obj
}

// ???

console.log(asChain(testArr).skip(4).take(2))