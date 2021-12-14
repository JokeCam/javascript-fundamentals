let testArr = [1, 2, 3, 4, 5, 6]

function isArray(obj) {
    if (obj instanceof Array) {
        return true
    } else return false
}

function isNumber(obj) {
    if (typeof obj === 'number') {
        return true
    } else return false
}

function isFunction(obj) {
    if (typeof obj === 'function') {
        return true
    } else return false
}

function skip(array, number) {
    if (isArray(array)) {
        if (isNumber(number)) {
            let newArr = []
            for (let i = 0; i < array.length; i++) {
                if (i >= number) {
                    newArr.push(array[i])
                }
            }
            return newArr
        } else return `${number} Is not a number`
    } else return `${array} Is not an array`
}

function take(array, number) {
    if (isArray(array)) {
        if (isNumber(number)) {
            let newArr = []
            for (let i = 0; i < array.length; i++) {
                if (i < number) {
                    newArr.push(array[i])
                }
            }
            return newArr
        } else return `${number} Is not a number`
    } else return `${array} Is not an array`
}

function map(array, callback) {
    if (isArray(array)) {
        if (isFunction(callback)) {
            let newArr = []
            let index
            for (index = 0; index < array.length; index++) {
                newArr.push(callback(array[index], index))
            }
            return newArr
        } else return `${callback} Is not a function`
    } else return `${array} Is not an array`
}

function reduce(array, callback, initialValue) {
    if (isArray(array)) {
        if (isFunction(callback)) {
            let accumulator = initialValue ?? 0
            let index
            for (index = 0; index < array.length; index++) {
                accumulator = callback(accumulator, currentValue = array[index], index, array)
            }
            return accumulator
        } else return `${callback} Is not a function`
    } else return `${array} Is not an array`
}

function foreach(array, callback) {
    if (isArray(array)) {
        if (isFunction(callback)) {
            let index
            for (index = 0; index < array.length; index++) {
                callback(array[index], index)
            }
        } else return `${callback} Is not a function`
    } else return `${array} Is not an array`
}

function filter(array, callback) {
    if (isArray(array)) {
        if (isFunction(callback)) {
            let index
            let newArr = []
            for (index = 0; index < array.length; index++) {
                if (callback(array[index], index, array)) {
                    newArr.push(array[index])
                }
            }
            return newArr
        } else return `${callback} Is not a function`
    } else return `${array} Is not an array`
}

const arrayLib = {
    arr: [],
    value() {
        return this.arr
    },
    chain: function(arr) {
        this.arr = arr
        return this
    },
    take: function(num) {
        this.arr = take(this.arr, num)
        return this
    },
    skip: function(num) {
        this.arr = skip(this.arr, num)
        
        return this
    }
}

console.log(arrayLib.chain([1, 2, 3]).take(2).skip(1).value())