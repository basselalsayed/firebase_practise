// document.addEventListener("DOMContentLoaded", (event) => {
  
//   const app = firebase.app()
//   const db = firebase.firestore()

//   const myPost = db.collection('posts').doc('firstpost')

//   myPost.onSnapshot((doc) => {
//     const data = doc.data()
//     document.write( data.title + `<br>` )
//     document.write(data.createdAt  + `<br>`)
//     document.write(data.hi)
//   })

// });

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    const user = result.user;
    document.write(`Hello ${user.displayName}`);
    console.log(user)
  }
  )
  .catch(console.log('error'))
}

function updatePost(e) {
  const db = firebase.firestore()
  const myPost = db.collection('posts').doc('firstpost');
  myPost.update({ title: e.target.value})



}

function uploadFile(files) {
  const storageRef = firebase.storage().ref()
const horseRef = storageRef.child('horse.jpg')

const file = files.item(0)

const task = horseRef.put(file)

task.then((snapshot) => {
  
  console.log(snapshot.ref.getDownloadURL());
  snapshot.ref.getDownloadURL().then((downloadURL) => {
    document.querySelector('#imgUpload').setAttribute('src', downloadURL)

  }
  )
  
}
)
}