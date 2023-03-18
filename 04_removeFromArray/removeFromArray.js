const removeFromArray = function(array, ...values) {
    const result = array.filter((element) => !values.includes(element));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
