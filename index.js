import openNewNotePad from './newNotepad.js';
import openNewWord from './newWordDoc.js';
import sendGmail from './sendMailGmail.js';


// ============ Creates and updates Notepad File ==================== //
const notepadMessage = 'Hello, just testing out the Notepad app!';
// openNewNotePad(notepadMessage);


// ============ Creates and updates Word File ==================== //
const wordMessage = 'Hello, just testing out the Word app!';
openNewWord(wordMessage);


// ============ Sends out gmail message ==================== //
const email = {
  recipient: '', // UPDATE: update recipient email
  subject: 'Just testing the Gmail app!',
  body: 'Hello, just testing out the Gmail app!'
}
// sendGmail(email.recipient, email.subject, email.body);