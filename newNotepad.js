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

const writeText = () => {
  robot.typeString('Testing'); // NotePad String: Enter Notepad text
}

openNotePad();
setFontSize();
writeText();
