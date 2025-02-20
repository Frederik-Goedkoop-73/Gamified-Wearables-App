import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

export function useAuth() {
  const email = ref("");
  const password = ref("");
  const errMsg = ref(null);
  
  const router = useRouter();
  const auth = getAuth();

  // Login method
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      console.log("Successfully logged in!");
      router.push("/dashboard");
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "User not found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
      }
    }
  };

  // Register method
  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      console.log("Successfully registered!");
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
      errMsg.value = error.message;
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
      errMsg.value = error.message;
    }
  };

  // Sign out method
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out!");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      errMsg.value = "Failed to sign out";
    }
  };

  return {
    email,
    password,
    errMsg,
    login,
    register,
    signInWithGoogle,
    handleSignOut
  };
}
