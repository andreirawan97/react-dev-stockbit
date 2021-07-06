const arrOfWord = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
const finalArray = [];

function sumCharCode(word) {
  let charCodeSum = 0;

  for (let i = 0; i < word.length; i++) {
    charCodeSum += word.charCodeAt(i);
  }

  return charCodeSum;
}

function groupedAnagram() {
  // Loop through arr of words
  for (let i = 0; i < arrOfWord.length; i++) {
    let canPushWord = true;

    const word = arrOfWord[i];

    // Get the sum char code
    const charCodeSum = sumCharCode(word);

    for (let j = 0; j < finalArray.length; j++) {
      // If ada yang sama sum char codenya
      if (sumCharCode(finalArray[j][0]) === charCodeSum) {
        finalArray[j].push(word);
        canPushWord = false;
        break;
      }
    }

    if (canPushWord) {
      finalArray.push([word]);
    }
  }
}

groupedAnagram();
console.log(finalArray);
