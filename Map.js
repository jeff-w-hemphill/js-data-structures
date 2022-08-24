// Map() example: Sort by most common words
let text = "The the pizza log frog toast loves toast a, b, c. the \n dog is a cat dog."

const wordMap = new Map();

let cleanText = (str) => {
    str = str.replaceAll(',','')
            .replaceAll('\n', '')
            .replaceAll('.', '')
            .toLowerCase();
    return str;
};

let wordArr = cleanText(text).split(' ');

// load word map
for (let i = 0; i < wordArr.length; i++) {
    wordMap.has(wordArr[i]) ? wordMap.set(wordArr[i], wordMap.get(wordArr[i]) + 1) : wordMap.set(wordArr[i], 1);
}

console.log(wordMap);

let sortedWords = [...wordMap].sort((a, b) => {
   return a[1] > b[1] ? -1 : 1;
})

console.log(sortedWords);
