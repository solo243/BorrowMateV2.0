// import { auth } from "./fireabase.config";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut
// } from "firebase/auth";

// export const signUpFunction = async (email, password) => {
//   try {
//     const { user } = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log("User created:", user);
//     return user;
//   } catch (error) {
//     if (e.code === "auth/email-already-in-use") {
//       console.log(alert("email is ALready in use sir"));
//     } else if (e.code === "auth/invalid-email") {
//       console.log(alert("Please Enter a valid email  "));
//     } else if (e.code === "auth/weak-password") {
//       console.log(alert("Password is too short "));
//     } else if (e.code === "auth/missing-password") {
//       console.log(alert(" Password is missing "));
//     } else {
//       console.log(alert(e));
//       console.log(e);
//     }
//   }
// };

// export const signInFunction = async (email, password) => {
//   try {
//     const { user } = await signInWithEmailAndPassword(auth, email, password);
//     console.log("User signed in:", user);
//     console.log(alert("User signed in successfully, welcome to BorrowBuddy"));
//     return user;
//   } catch (e) {
//     if (e.code === "auth/invalid-login-credentials") {
//       console.log(alert("Pleas Check your Email and Password Its wrong!") && e);
//     } else if (e.code === "auth/invalid-credential") {
//       console.log(alert("Please Enter a valid email and password "));
//     } else if (e.code === "auth/wrong-password") {
//       console.log(alert("Password is wrong"));
//     } else if (e.code === "auth/user-not-found") {
//       console.log(alert("User not found"));
//     } else if (e.code === "auth/invalid-email") {
//       console.log(alert("Please Enter a valid email  "));
//     } else if (e.code === "auth/weak-password") {
//       console.log(alert("Password is too short "));
//     } else if (e.code === "auth/missing-password") {
//       console.log(alert(" Password is missing "));
//     } else {
//       console.log(alert(e));
//       console.log(e);
//     }
//   }
// };

// export const signOutFunction = async () => {
//   try {
//     await signOut(auth);
//     console.log("User signed out successfully.");
//   } catch (error) {
//     console.error("SignOut Error:", error.message);
//     throw error;
//   }
// };

// export const getCurrentUser = () => auth.currentUser;

import axios from "axios";
import { auth } from "./fireabase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { doc, getFirestore, setDoc } from "firebase/firestore";
import { BASE_URL } from "../constants/SampleData";

export const signUpFunction = async (Username, email, password) => {
  try {
    if (!Username || !email || !password) {
      return console.log(alert("Enter fill all field..."));
    }
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User created:", user.uid);
    await axios
      .post(`http://localhost:5000/profile/create/${user.uid}`, {
        uid: user.uid,
        name: Username,
        email: email,
        pass: password
      })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error posting data:",
          error.response?.data || error.message
        );
      });

    const db = getFirestore();
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
      uid: user.uid,
      name: Username,
      email: email,
      password: password,
      createdAt: new Date()
    });

    console.log(alert("Account Created Successfully! Welcome to BorrowBuddy"));

    return user;
  } catch (e) {
    handleAuthError(e);
    return null;
  }
};

export const signInFunction = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", user);

    // Toast.show({
    //   type: "success",
    //   text1: "Login Successful",
    //   text2: `Welcome back, ${user.email}!`
    // });

    console.log(alert("User signed in successfully, welcome to BorrowBuddy"));

    return user;
  } catch (e) {
    handleAuthError(e);
    return null;
  }
};

// Sign Out Function
export const signOutFunction = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully.");

    // Toast.show({
    //   type: "info",
    //   text1: "Logged Out",
    //   text2: "You have been signed out.",
    // });
    console.log(alert("User signed out successfully."));
  } catch (error) {
    console.error("SignOut Error:", error.message);
    // Toast.show({
    //   type: "error",
    //   text1: "Logout Failed",
    //   text2: error.message
    // });
    console.log(alert("SignOut Error:", error.message));
    throw error;
  }
};

// Get Current User
export const getCurrentUser = () => auth.currentUser;

// Handle Firebase Authentication Errors
const handleAuthError = (e) => {
  let message = "An error occurred. Please try again.";

  switch (e.code) {
    case "auth/email-already-in-use":
      message = "This email is already in use.";
      break;
    case "auth/invalid-email":
      message = "Please enter a valid email address.";
      break;
    case "auth/weak-password":
      message = "Your password is too weak.";
      break;
    case "auth/missing-password":
      message = "Password is required.";
      break;
    case "auth/invalid-login-credentials":
    case "auth/invalid-credential":
    case "auth/wrong-password":
      message = "Invalid email or password.";
      break;
    case "auth/user-not-found":
      message = "User not found. Please sign up first.";
      break;
    default:
      message = e.message;
  }

  console.error("Auth Error:", e);

  // Toast.show({
  //   type: "error",
  //   text1: "Authentication Error",
  //   text2: message
  // });

  console.log(
    alert("Wrong Email or Password Please Check and Try Again " + message)
  );
};
