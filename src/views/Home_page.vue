<script setup>
import { useAuth } from '../composables/UseAuth.js';

const { isLoggedIn } = useAuth();

</script>

<template>
    <section>
        <div class="grey-border home-container">
            <!-- Header Section -->
            <header class="header">
                <h1>Welcome to the <br> KUL Wearables Health Monitor</h1>
                <p class="intro-text">Track your fitness progress with wearables, level up, and make exercise fun!</p>
            </header>

            <!-- Cards Section (similar to Duolingo's lessons/cards) -->
            <div class="cards">
                <div class="card">
                    <router-link :to="isLoggedIn ? '/health' : '/sign-in'">
                        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" fill="var(--bg-primary)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>run_fill</title>
                                <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Transport" transform="translate(-816.000000, -48.000000)"
                                        fill-rule="nonzero">
                                        <g id="run_fill" transform="translate(816.000000, 48.000000)">
                                            <path
                                                d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                                id="MingCute" fill-rule="nonzero"> </path>
                                            <path
                                                d="M13,2 C14.6569,2 16,3.34315 16,5 C16,6.4374272 14.989097,7.63873126 13.6394248,7.93171632 L13.469,7.96356 L14.9049,10.261 L16.6286,9.57154 C17.1414,9.36643 17.7234,9.61584 17.9285,10.1286 C18.11895,10.6047714 17.9175097,11.1406102 17.4771844,11.3789437 L17.3714,11.4285 L15.6477,12.118 C14.8018647,12.4563529 13.842291,12.1788886 13.3046353,11.4607687 L13.2089,11.321 L13.0463,11.0609 L12.4403,13.4851 C12.38606,13.7019 12.298348,13.901548 12.184076,14.0798456 L12.0935,14.2095 L13.7468,15.4377 C14.1430667,15.7320111 14.4146519,16.1610383 14.5132351,16.6403612 L14.542,16.8223 L14.895,20 L15,20 C15.5523,20 16,20.4477 16,21 C16,21.51285 15.613973,21.9355092 15.1166239,21.9932725 L15,22 L14.0895,22 C13.5690357,22 13.1258286,21.63665 13.0156081,21.1386974 L12.9962,21.0215 L12.5542,17.0431 L9.40368,14.7028 C9.34671,14.6605 9.29553,14.6132 9.2503,14.5621 C8.69851333,14.1201667 8.40463653,13.4019169 8.52705735,12.6715064 L8.55972,12.5149 L9.35399,9.33785 L7.78454,9.80869 L6.94868,12.3162 C6.77404,12.8402 6.20772,13.1234 5.68377,12.9487 C5.19725429,12.7865714 4.9183499,12.2866153 5.0208232,11.7965565 L5.05132,11.6838 L5.88717,9.17623 C6.07583833,8.61021583 6.50617896,8.16080701 7.05678434,7.94578318 L7.20984,7.89304 L10.6474,6.86176 C10.2421,6.35022 10,5.70338 10,5 C10,3.34315 11.3431,2 13,2 Z M9.6,15.2 C10.0418,15.5314 10.1314,16.1582 9.8,16.6 L8.5838,18.2216 C8.10614,18.8585 7.21414,19.0113 6.55175,18.5697 L4.62197,17.2832 C4.22939,17.5957 3.65616,17.5704 3.29289,17.2071 C2.90237,16.8166 2.90237,16.1834 3.29289,15.7929 L3.7871,15.2987 C4.12753,14.9583 4.66094,14.9055 5.06152,15.1725 L7.26759,16.6432 L8.2,15.4 C8.53137,14.9582 9.15817,14.8686 9.6,15.2 Z"
                                                id="形状" fill="var(--bg-primary)"> </path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <h2>Track Your Progress</h2>
                        <p>Sync your Fitbit data and get personalized fitness insights.</p>
                    </router-link>
                </div>
                <div class="card">
                    <router-link :to="isLoggedIn ? '/dashboard' : '/sign-in'">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M4.00003 21V18.5C4.00003 15.4624 6.46246 13 9.50003 13H14.5C17.5376 13 20 15.4624 20 18.5V21M8.00003 21V18M16 21V18M4.37966 7L6.37966 9M4.37966 7L2.12042 9M4.37966 7V11.5M16 6.5C16 8.70914 14.2092 10.5 12 10.5C9.79089 10.5 8.00003 8.70914 8.00003 6.5C8.00003 4.29086 9.79089 2.5 12 2.5C14.2092 2.5 16 4.29086 16 6.5Z"
                                    stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4">
                                </path>
                            </g>
                        </svg>
                        <h2>Level Up</h2>
                        <p>Complete challenges, earn XP, and improve your health.</p>
                    </router-link>
                </div>
                <div class="card">
                    <router-link :to="isLoggedIn ? '/' : '/sign-in'">
                        <svg fill="var(--bg-primary)" height="200px" width="200px" version="1.1" id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 263.976 263.976" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path
                                        d="M149.763,36.21c3.01-3.811,4.871-8.616,4.871-13.837C154.634,10.036,144.628,0,132.291,0s-22.358,10.036-22.358,22.373 c0,5.222,1.597,10.026,4.605,13.837c-9.211,5.839-15.55,16.117-15.55,27.807v27.22c0,4.143,3.785,7.739,7.928,7.739h50.811 c4.143,0,7.262-3.597,7.262-7.739v-27.22C164.988,52.327,158.976,42.048,149.763,36.21z">
                                    </path>
                                    <path
                                        d="M81.988,124.539v-27.22c0-11.689-5.754-21.969-14.967-27.807c3.01-3.811,5-8.616,5-13.837 c0-12.337-9.942-22.373-22.279-22.373S27.416,43.339,27.416,55.676c0,5.222,1.855,10.026,4.863,13.837 c-9.212,5.839-15.292,16.117-15.292,27.807v27.22c0,4.143,3.301,7.437,7.443,7.437h50.811 C79.384,131.976,81.988,128.682,81.988,124.539z">
                                    </path>
                                    <path
                                        d="M232.034,69.513c3.008-3.811,5.006-8.616,5.006-13.837c0-12.337-9.939-22.373-22.276-22.373 c-12.337,0-22.325,10.036-22.325,22.373c0,5.222,1.843,10.026,4.852,13.837c-9.212,5.839-15.304,16.117-15.304,27.807v27.22 c0,4.143,3.326,7.437,7.469,7.437h50.811c4.143,0,6.721-3.294,6.721-7.437v-27.22C246.988,85.63,241.245,75.351,232.034,69.513z">
                                    </path>
                                    <path
                                        d="M149.763,201.464c3.01-3.811,4.871-8.615,4.871-13.836c0-12.337-10.006-22.373-22.343-22.373s-22.358,10.036-22.358,22.373 c0,5.221,1.597,10.026,4.605,13.837c-9.211,5.839-15.55,16.117-15.55,27.807v27.22c0,4.143,3.785,7.484,7.928,7.484h50.811 c4.143,0,7.262-3.342,7.262-7.484v-27.22C164.988,217.581,158.976,207.304,149.763,201.464z M132.321,180.255 c4.065,0,7.373,3.308,7.373,7.373c0,4.066-3.308,7.373-7.373,7.373s-7.373-3.308-7.373-7.373 C124.948,183.563,128.255,180.255,132.321,180.255z M149.988,248.976h-36v-19.704c0-9.874,8.127-17.906,18.001-17.906 c9.872,0,17.999,8.032,17.999,17.906V248.976z">
                                    </path>
                                    <path
                                        d="M138.988,138.555v-24.854c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5v24.854c0,4.143,3.357,7.5,7.5,7.5 C135.63,146.055,138.988,142.697,138.988,138.555z">
                                    </path>
                                    <path
                                        d="M59.331,140.177c-3.009-2.847-7.753-2.718-10.604,0.289c-2.848,3.008-2.718,7.755,0.289,10.604l37.709,35.707 c1.451,1.373,3.305,2.054,5.156,2.054c1.987,0,3.972-0.786,5.447-2.343c2.848-3.008,2.718-7.755-0.289-10.604L59.331,140.177z">
                                    </path>
                                    <path
                                        d="M205.241,140.071l-37.606,35.789c-3.001,2.855-3.118,7.603-0.263,10.603c1.474,1.55,3.452,2.33,5.434,2.33 c1.857,0,3.718-0.686,5.169-2.067l37.606-35.789c3.001-2.855,3.118-7.602,0.263-10.602 C212.989,137.332,208.241,137.217,205.241,140.071z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <h2>Join the Community</h2>
                        <p>Compete with friends and climb the leaderboard.</p>
                    </router-link>
                </div>
            </div>

            <!-- Call-to-action Section -->
            <div class="cta-section">
                <router-link to="/sign-in">
                    <button class="cta-button">Get Started</button>
                </router-link>
            </div>
        </div>

        <div class="cta-section">
            <router-link to="/terms-of-service">
                <button class="cta-button">Terms fo Service</button>
            </router-link>
        </div>
        <div class="cta-section">
                <router-link to="/privacy-policy">
                    <button class="cta-button">Privacy Policy</button>
                </router-link>
            </div>
    </section>
</template>

<style scoped>
/* General layout styling */
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background-color: var(--bg-tertiary);
    height: 100%;
}

/* Header styling */
.header {
    margin-bottom: 2rem;
}

h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--green-primary)7;
    /* Duolingo green */
}

.intro-text {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #555;
}

svg {
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.5rem;
}

h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: var(--bg-primary);
}

p {
    font-size: 1rem;
    color: #777;
}

/* Call-to-action button */
.cta-section {
    margin-top: 2rem;
}

.cta-button {
    background-color: var(--green-primary);
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #2e7930;
}
</style>
