import { auth } from "./fireabase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

export const signUpFunction = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User created:", user);
    return user;
  } catch (error) {
    console.error("SignUp Error:", error.message);
    throw error;
  }
};

export const signInFunction = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("SignIn Error:", error.message);
    throw error;
  }
};

export const signOutFunction = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
  } catch (error) {
    console.error("SignOut Error:", error.message);
    throw error;
  }
};

export const getCurrentUser = () => auth.currentUser;
