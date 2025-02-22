<script setup>
import { useAuth } from '../composables/UseAuth.js'; // Adjust path as needed

const { email, password, errMsg, login, register, signInWithGoogle, handleSignOut } = useAuth();
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
            <div><router-link to="/">Go back</router-link></div>
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