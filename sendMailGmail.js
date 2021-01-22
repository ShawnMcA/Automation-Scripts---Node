import robot from 'robotjs';

const openChrome = () => {
  robot.keyTap('command');
  robot.typeString('chrome');
  robot.keyTap('enter');
}

// Need to be signed into Gmail
const goToGmail = () => {
  robot.typeString('gmail.com');
  robot.keyTap('enter');
}

const sendMail = (recipient, subject, body) => {
  robot.keyTap('c');
  robot.typeString(recipient);
  robot.keyTap('tab');
  robot.keyTap('tab');
  robot.typeString(subject);
  robot.keyTap('tab');
  robot.typeString('Hello!');
  robot.keyTap('enter');
  robot.keyTap('enter');
  robot.typeString(body);
  robot.keyToggle('control', 'down');
  robot.keyTap('enter');
  robot.keyToggle('control', 'up');
}

const sendGmail = (recipient, subject, body) => {
  openChrome();
  goToGmail();
  setTimeout(() => sendMail(recipient, subject, body), 4000);
}

export default sendGmail;