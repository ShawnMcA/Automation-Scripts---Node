import robot from 'robotjs';

const openNotePad = () => {
  robot.keyTap('command');
  robot.typeString('notepad');
  robot.keyTap('enter');
}

const setFontSize = () => {
  robot.keyToggle('alt', 'down');
  robot.keyTap('o');
  robot.keyTap('f');
  robot.keyTap('s');
  robot.keyToggle('alt', 'up');
  robot.typeString('24');
  robot.keyTap('enter');
}

const writeText = textInput => {
  robot.typeString(textInput);
}

const openNewNotepad = textInput => {
  openNotePad();
  setFontSize();
  writeText(textInput);
}

export default openNewNotepad;
