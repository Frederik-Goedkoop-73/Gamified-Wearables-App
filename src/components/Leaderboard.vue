<script setup>
import { ref } from 'vue';
</script>

<template>
    <section>
        <div class="grey-border">
            <ul class="logo-header">
                <li class="logo">
                    <svg fill="var(--bg-primary)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M6.5,12h-4a.5.5,0,0,0-.5.5V20H7V12.5A.5.5,0,0,0,6.5,12Z"></path>
                            <path d="M14,4H10a.5.5,0,0,0-.5.5V20h5V4.5A.5.5,0,0,0,14,4Z"></path>
                            <path d="M21.5,8h-4a.5.5,0,0,0-.5.5V20h5V8.5A.5.5,0,0,0,21.5,8Z"></path>
                        </g>
                    </svg>
                </li>
                <li>
                    <h1>Leaderboard</h1>
                </li>
            </ul>

            <hr>

            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quasi, aliquid sint, illum quae
                    ut
                    repellendus
                    numquam officia corrupti voluptate vitae consequuntur dolorem nostrum voluptates! Veritatis veniam
                    quo
                    aspernatur
                    similique!
                </p>
                <img class="example-img" src="/EG_Leaderboard.png" alt="Example health data" />
            </div>

        </div>
    </section>
</template>

<style scoped>
.example-img {
    height: 30rem;
    width: 60rem;
}
</style>
