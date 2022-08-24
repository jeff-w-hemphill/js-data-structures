const arr = [1, 2, 3, 3, 4];
const s = new Set(arr);

const uniqueArray = [ ...s ];

let text = "The the pizza log frog toast loves toast a, b, c. the \n dog is a cat dog."

const wordMap = new Map();

let cleanText = (str) => {
    str = str.replaceAll(',','');
    str = str.replaceAll('\n', '');
    str = str.replaceAll('.', '').toLowerCase();
    return str;
};

let wordArr = cleanText(text).split(' ');

// load word map
for (let i = 0; i < wordArr.length; i++) {
    wordMap[wordArr[i]] ? wordMap[wordArr[i]]++ : wordMap[wordArr[i]] = 1;
}
console.log(wordMap);

// Example iterating through words in map
// for (let w in wordMap) {
//     console.log(w);
// }

