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

const sendMail = () => {
  robot.keyTap('c');
  robot.typeString(''); // [Update] Email here: Enter recipient email address
  robot.keyTap('tab');
  robot.keyTap('tab');
  robot.typeString('Just Testing!'); // Email Subject: Enter email subject
  robot.keyTap('tab');
  robot.typeString('Hello!');
  robot.keyTap('enter');
  robot.keyTap('enter');
  robot.typeString('This is an automated message.'); // Email Body: Enter email body
  robot.keyToggle('control', 'down');
  robot.keyTap('enter');
  robot.keyToggle('control', 'up');
}

openChrome();
goToGmail();
setTimeout(sendMail, 4000);