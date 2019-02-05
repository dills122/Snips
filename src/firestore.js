const admin = require('firebase-admin');

var serviceAccount = require('./snipps-test-firebase-adminsdk-85q2g-d0150bb1d8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://snipps-test.firebaseio.com'
});

var db = admin.firestore();

module.exports = {
    db
}