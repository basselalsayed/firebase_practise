const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendMessage = functions.firestore
  .document(`users/{userId}`)
  .onCreate((snap, context) => {
    const id = context.params.userId;

    const data = snap.data();

    return admin
      .firestore()
      .collection('users')
      .doc(id)
      .set(
        { message: `Hello ${data.username} - from functions` },
        {
          merge: true,
        },
      );
  });
