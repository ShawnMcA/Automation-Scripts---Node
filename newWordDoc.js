import robot from 'robotjs';

const openWord = () => {
  robot.keyTap('command');
  robot.typeString('word');
  robot.keyTap('enter');
}

const writeText = textInput => {
  robot.typeString(textInput);
}

const openNewWord = textInput => {
  openWord();
  setTimeout(() => writeText(textInput), 2500);
}

export default openNewWord;