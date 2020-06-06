const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// firebase.initializeAdminApp({ projectId: "test-8af68" });

exports.sendMessage = functions.firestore
  .document(`products/{productId}`)
  .onCreate((snap, context) => {
    const id = context.params.productId;

    const data = snap.data();

    return admin
      .firestore()
      .collection('products')
      .doc(id)
      .set(
        { message: `Nice ${data.name} - from functions` },
        {
          merge: true,
        }
      );
  });
