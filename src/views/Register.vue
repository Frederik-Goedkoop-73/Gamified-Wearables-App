<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { routerKey, useRouter } from 'vue-router';

const email = ref("");
const password = ref("");

// Create register and signin methods
const register = () => {
    // need .value because ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)

        // .then to catch succesful response
        .then((data) => {
            console.log("Succesfully registered!");

            console.log(auth.currentUser); // The given account information is accessed here in firebase -> not sure what tutorial meant ??

            router.push('/'); // Reroute to home page if succesfully registered
        })

        // .catch to catch unsuccesful response
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })

}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithGoogle(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/")
        })
        .catch((error) => {
            // handle error
        })
}
</script>

<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>