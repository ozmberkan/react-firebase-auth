import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
import toast from "react-hot-toast";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_API_KEY || "AIzaSyCQ60T9Nrp5i29t_oTM8sEWtOgiHOwPPJg",
    authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN || "ozmberkan-auth.firebaseapp.com",
    projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID || "ozmberkan-auth",
    storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET || "ozmberkan-auth.appspot.com",
    messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID || "706122515009",
    appId: import.meta.env.VITE_REACT_APP_ID || "1:706122515009:web:07aaea0ab9fd3242df7cc0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        toast.error(error.message);
    }
}




export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        toast.error(error.message);
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        toast.error(error.message);
    }
}





export default app;