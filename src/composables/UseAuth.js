import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

export function useAuth() {
    const email = ref("");
    const password = ref("");
    const errMsg = ref(null);
    const isLoggedIn = ref(false);

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
            router.push("/");
        } catch (error) {
            console.log(error.message);
            errMsg.value = "Failed to sign out";
        }
    };

    // Check for changes to the auth state (user logged in or not)
    onMounted(() => {
        onAuthStateChanged(auth, (user) => {
            isLoggedIn.value = !!user; // User exists -> logged in
        });
    });

    return {
        email,
        password,
        errMsg,
        isLoggedIn,
        login,
        register,
        signInWithGoogle,
        handleSignOut
    };
}


// Old js
/* // Create register and signin methods
const login = () => {
    // need .value because ref()
    signInWithEmailAndPassword(getAuth(), email.value, password.value)

        // .then to catch succesful response
        .then((data) => {
            console.log("Succesfully loggeed in!");

            console.log(auth.currentUser); // The given account information is accessed here in firebase -> not sure what tutorial meant ??

            router.push("/dashboard"); // Reroute to dashboard page if succesfully registered
        })
        .catch((error) => {
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
                    break;
            }
        })
};

// Create register and signin methods
const register = () => {
    // need .value because ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)

        // .then to catch succesful response
        .then((data) => {
            console.log("Succesfully registered!");

            console.log(auth.currentUser); // The given account information is accessed here in firebase -> not sure what tutorial meant ??

            router.push('/dashboard'); // Reroute to home page if succesfully registered
        })

        // .catch to catch unsuccesful response
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })

}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/dashboard");
        })
        .catch((error) => {
            console.log(error.message); // Handle error
        })
}; */


/* Idem App.vue
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

// We use onMounted hook so we have access to firebase once app is created
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) { // So if user != null
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  });
};   */