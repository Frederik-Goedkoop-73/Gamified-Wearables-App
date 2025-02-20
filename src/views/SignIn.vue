<script setup>
import { ref } from 'vue';
import { getAuth, signInUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const errMsg = ref(); // ERROR MESSAGE

// Create register and signin methods
const register = () => {
    // need .value because ref()
    signInUserWithEmailAndPassword(getAuth(), email.value, password.value)

        // .then to catch succesful response
        .then((data) => {
            console.log("Succesfully loggeed in!");

            console.log(auth.currentUser); // The given account information is accessed here in firebase -> not sure what tutorial meant ??

            router.push('/'); // Reroute to home page if succesfully registered
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
                case "auth/wron-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        })
};

const signInWithGoogle = () => {

}
</script>

<template>
    <h1>Sign In to an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>