export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLettersSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLettersSet].filter(letter => guessedLetterSet.has(letter)).length;
}
