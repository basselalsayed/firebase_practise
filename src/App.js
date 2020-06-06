// import React from 'react';
// import { Form, Button } from 'react-bootstrap';
// import logo from './logo.svg';
// import './App.css';
// import Firebase, { FirebaseContext } from './components/firebase';

// function App() {
//   const handleSubmit = (e) => {
//     console.log(e);
//   };

//   return (
//     <FirebaseContext.Provider value={new Firebase()}>
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />

//           <Form onSubmit={(e) => handleSubmit(e)}>
//             <Form.Group controlId='formBasicEmail'>
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type='email' placeholder='Enter email' />
//               <Form.Text className='text-muted'>
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId='formBasicPassword'>
//               <Form.Label>Password</Form.Label>
//               <Form.Control type='password' placeholder='Password' />
//             </Form.Group>
//             <Form.Group controlId='formBasicCheckbox'>
//               <Form.Check type='checkbox' label='Check me out' />
//             </Form.Group>
//             <Button variant='primary' type='submit'>
//               Submit
//             </Button>
//           </Form>
//         </header>
//       </div>
//     </FirebaseContext.Provider>
//   );
// }

// export default App;
