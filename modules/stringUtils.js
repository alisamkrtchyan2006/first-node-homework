const reverseString = (string) => {
    if(typeof string !== "string") {
        throw new Error("Error...")
    }
    return string.split("").reverse().join()
}


const capitalizeString = (string) => {
    if(typeof string !== "string") {
        throw new Error("Error...")
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function truncateString(string, length) {
    if(typeof string !== "string") {
        throw new Error("Error...")
    }
    if (string.length > length) {
      return string.slice(0, length) + "...";
    }
    return string; 
}

module.exports = {
    capitalizeString : capitalizeString,
    reverseString : reverseString,
    truncateString: truncateString
}