const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let specialCases = ['OO', 'API', 'NaN', 'JSONP?'];
  let specialWords = ['stopPropagation', 'preventDefault?']
  return tutorials.map((string) => {
    return string
      .split(' ')
      .map(word => {
        if (specialCases.includes(word)) {
          return word; // Preserve special case words
        }
        if (specialWords.includes(word)) {
          return word[0].toUpperCase() + word.slice(1);//preserves special words with capital letters mid-word
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  });
}

console.log(titleCased());