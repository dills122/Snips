const admin = require('firebase-admin');

const serviceAccount = require('./snipps-test-firebase-adminsdk-85q2g-c878184cef.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://snipps-test.firebaseio.com'
});

var db = admin.firestore();

module.exports = {
    db
}