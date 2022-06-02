import { getMessaging } from "@firebase/messaging/sw";
import { initializeApp } from "firebase/app";
import { getToken, onMessage } from "firebase/messaging";
import { useEffect, useState } from "react";

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

const PushNotification = () => {
    const [isTokenFound, setTokenFound] = useState(false);

    /* Firebase web 9 */

    const messaging = getMessaging(app);

    useEffect(() => {
        async function fetchData() {
            //registration
            await navigator.serviceWorker.ready;
        }
        fetchData();
    }, []);

    useEffect(() => {
        onMessage(messaging, (payload) => {
            console.log("Message received. ", payload);
            // ...
        });
        getToken(messaging)
            .then((currentToken) => {
                if (currentToken) {
                    console.log('token',currentToken)
                    setTokenFound(true);
                    // Send the token to your server and update the UI if necessary
                    localStorage.setItem("firebaseToken", currentToken);
                } else {
                    // Show permission request UI
                    console.log("No registration token available. Request permission to generate one.");
                }
            })
            .catch((err) => {
                // enqueueSnackbar("Vui lòng bật thông báo!", {
                //   variant: "error",
                //   preventDuplicate: true,
                // });

                console.log("An error occurred while retrieving token. ", err);
            });
    }, [messaging]);

    useEffect(() => {
        !isTokenFound &&
        setTimeout(() => {
            //do something
        });
    }, [messaging]);

    return <div className="badge-noti"/>;
};

export default PushNotification;