import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {getMessaging,} from "firebase/messaging/sw";
import { initializeApp } from "firebase/app";
import { onMessage } from "@firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyDICVLbPeeqdEQVFsSzyBPgZjKpjJNtj08",
    authDomain: "digifarm-555cf.firebaseapp.com",
    projectId: "digifarm-555cf",
    storageBucket: "digifarm-555cf.appspot.com",
    messagingSenderId: "466815016937",
    appId: "1:466815016937:web:ac3aefb3e188a8d8b4f578",
    measurementId: "G-84KBXEQSPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 function App() {
  /* Firebase web 9 */
  //   useEffect(() => {
  //       async function fetchData() {
  //           //registration
  //           await navigator.serviceWorker.ready;
  //       }
  //       fetchData().then((t) => console.log(t)).catch(err => {
  //           console.log(err)})
  //   }, []);
  //  const messaging = getMessaging(app);
  //   useEffect(() => {
  //       onMessage(messaging, (payload) => {
  //         console.log("Message received. ", payload);
  //         // ...
  //     })
  // }, [messaging]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
