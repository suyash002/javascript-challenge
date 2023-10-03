function customToLowerCase(word) {
  let lowercasedWord = "";
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (char >= "A" && char <= "Z") {
      lowercasedWord += String.fromCharCode(char.charCodeAt(0) + 32);
    } else {
      lowercasedWord += char;
    }
  }
  return lowercasedWord;
}
function findLongestWord(sentence) {
  const words = sentence.replace(/[^a-zA-Z\s]/g, "").split(/\s+/);
  let longestWord = "";
  let maxWordLength = 0;
  let maxVowelCount = 0;
  for (const word of words) {
    const cleanedWord = customToLowerCase(word);
    const vowelCount = (cleanedWord.match(/[aeiou]/g) || []).length;
    if (
      cleanedWord.length > maxWordLength ||
      (cleanedWord.length === maxWordLength && vowelCount > maxVowelCount)
    ) {
      longestWord = word;
      maxWordLength = cleanedWord.length;
      maxVowelCount = vowelCount;
    }
  }
  return longestWord;
}
// Example usage:
const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const longestWord = findLongestWord(sentence);
alert("Longest word with most vowels: " + longestWord);
console.log("Longest word with most vowels:", longestWord);
