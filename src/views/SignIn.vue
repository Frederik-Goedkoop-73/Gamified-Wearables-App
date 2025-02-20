<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const errMsg = ref(); // ERROR MESSAGE

const router = useRouter();
const auth = getAuth();


// Create register and signin methods
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
};
</script>

<template>
    <main>
        <section>
            <div class="grey-border ">
                <h1>Sign In to an Account</h1>
                <p><input type="text" placeholder="Email" v-model="email" /></p>
                <p><input type="password" placeholder="Password" v-model="password" /></p>
                <p v-if="errMsg">{{ errMsg }}</p>
                <p><button @click="login">Submit</button></p>
                <p><button @click="signInWithGoogle">Sign In With Google</button></p>
            </div>
            <div class="grey-border">
                <h1>Create an Account</h1>
                <p><input type="text" placeholder="Email" v-model="email" /></p>
                <p><input type="password" placeholder="Password" v-model="password" /></p>
                <p><button @click="register">Submit</button></p>
                <p><button @click="signInWithGoogle">Sign In With Google</button></p>
            </div>
            <div><button class="log-out-btn" @click="handleSignOut">Log Out</button></div>
        </section>
    </main>
</template>

<style scoped>
button,
input {
    width: 40%;
    min-width: 10rem;
}

div {
    text-align: center;
}

.log-out-btn {
    font-size: 20px;
    height: 4rem;
    width: 50%;
    border: 2px solid red;
    transition: background 300ms ease;
}

.log-out-btn:hover {
    background: red;
    transition: background 300ms ease;
}
</style>