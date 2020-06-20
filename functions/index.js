const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

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
        },
      );
  });
