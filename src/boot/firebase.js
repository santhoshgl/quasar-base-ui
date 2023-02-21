import { boot } from 'quasar/wrappers';
import { Loading } from 'quasar';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from 'stores/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();

export default boot(async () => {
  Loading.show();

  const authStore = useAuthStore();
  await new Promise(async resolve => {
    try {
      // attaching listener for auth state changed
      onAuthStateChanged(firebaseAuth, user => {
        if (user) {
          // user signed in
          authStore.isSignedIn = true;
        } else {
          // user not signed in
          authStore.isSignedIn = false;
        }
        // resolving after we get the user signed in state
        resolve();
      });
    } catch (error) {}
  });

  Loading.hide();
});

export { firebaseApp, firebaseAuth };
