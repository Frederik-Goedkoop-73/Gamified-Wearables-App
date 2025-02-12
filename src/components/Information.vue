<script setup>
import { ref } from 'vue';
</script>

<template>
    <main>
        <div class="body-box grey-border">
            <ul class="logo-header">
                <li class="logo">
                    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"
                        stroke-width="0.00024000000000000003">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                                fill="var(--bg-primary)"></path>
                        </g>
                    </svg>
                </li>
                <li>
                    <h1>Information About Website</h1>
                </li>
            </ul>

            <h2>Website purpose</h2>
            <p>A brief overview of the goal of the website (e.g., tracking health data through gamification to increase
                engagement).</p>
            <h2>How it works</h2>
            <p>Explain how users can sync their Fitbit data, participate in quests, and level up based on their
                activity.</p>
            <p>Describe the shop, XP system, and any other gamified elements.</p>
            <h2>User instructions</h2>
            <p>Provide step-by-step instructions on how to log in, sync data, and interact with the website.</p>
            <h2>Data privacy</h2>
            <p>Information about how user data (Fitbit data, login info) is stored, used, and protected.</p>
            <p>Mention any ethical approvals (like your SMEC approval) and the privacy policy.</p>
            <h2>Fitbit integration</h2>
            <p>Explanation of what data is collected from the Fitbit and how it’s used in the gamified system.</p>
            <h2>Contact information</h2>
            <p>See footer -> hoverlink to footer</p>
        </div>
    </main>
</template>

<style scoped>
.logo-header {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.logo {
    width: 4rem;
    max-width: 4rem;
    height: 4rem;
}

h2 {
    text-align: center;
}

p {
    text-align: center;
    text-justify: inter-word;
}

</style>
