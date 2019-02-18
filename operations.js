const add = (x, y) => {
   return (+x) + (+y);
}

const subtract = (x, y) => {
    return (+x) - (+y);
}

const multiply = (x, y) => {
    return (+x) * (+y);
}

const divide =(x, y) => {
    return (+x) / (+y);
}

const mod = (x, y) => {
    return (+x) % (+y);
}

const validateNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return false;
    }
    return true
}

module.exports = { add, subtract, multiply, divide, validateNumbers, mod }