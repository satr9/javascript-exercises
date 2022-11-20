const removeFromArray = function (array, badItem) {
    const newArray = array.filter(removeBadItem);
    function removeBadItem(item) {
        return item !== badItem;
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
