const palindromes = function (string) {
    string = string.toLowerCase();
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (!isLetter(string.charAt(left))) {
            left++;
            continue;
        }
        if (!isLetter(string.charAt(right))) {
            right--;
            continue;
        }

        if (string.charAt(left) !== string.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

const isLetter = (char) => {
    return 'a'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)
}

// Do not edit below this line
module.exports = palindromes;
