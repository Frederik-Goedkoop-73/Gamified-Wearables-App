<script setup>
import { ref } from 'vue';

const badges = [
    { text: "First Step" },
    { text: "Goal Getter" },
    { text: "Hot Streak" },
    { text: "Energy Saver" },
    { text: "Strength" },
    { text: "Cyclist" },
    { text: "Champion" },
    { text: "Star Performer" },
    { text: "Climber" },
    { text: "Marathon Runner" },
    { text: "Athlete" },
    { text: "Walker" },
];
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
                            <path
                                d="M22.838,1.455A1,1,0,0,0,22,1H16a1,1,0,0,0-.895.553L12,7.764,8.9,1.553A1,1,0,0,0,8,1H2a1,1,0,0,0-.914,1.406L5.739,12.889A6.937,6.937,0,0,0,5,16a7,7,0,0,0,14,0,6.937,6.937,0,0,0-.739-3.111L22.914,2.406A1,1,0,0,0,22.838,1.455ZM3.538,3H7.382l3.087,6.174A6.991,6.991,0,0,0,7.1,11.014ZM12,21a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,21Zm4.905-9.986a6.991,6.991,0,0,0-3.374-1.84L16.618,3h3.844ZM15,15.292l-1.667,1.375L13.854,19,12,17.667,10.146,19l.521-2.333L9,15.292,11,15l1-2,1,2Z">
                            </path>
                        </g>
                    </svg>
                </li>
                <li class="logo-header-header">
                    <h1>Your Badges</h1>
                </li>
                <li class="logo">
                    <svg fill="var(--bg-primary)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M22.838,1.455A1,1,0,0,0,22,1H16a1,1,0,0,0-.895.553L12,7.764,8.9,1.553A1,1,0,0,0,8,1H2a1,1,0,0,0-.914,1.406L5.739,12.889A6.937,6.937,0,0,0,5,16a7,7,0,0,0,14,0,6.937,6.937,0,0,0-.739-3.111L22.914,2.406A1,1,0,0,0,22.838,1.455ZM3.538,3H7.382l3.087,6.174A6.991,6.991,0,0,0,7.1,11.014ZM12,21a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,21Zm4.905-9.986a6.991,6.991,0,0,0-3.374-1.84L16.618,3h3.844ZM15,15.292l-1.667,1.375L13.854,19,12,17.667,10.146,19l.521-2.333L9,15.292,11,15l1-2,1,2Z">
                            </path>
                        </g>
                    </svg>
                </li>
            </ul>

            <hr>

            <div class="cards">
                <div v-for="(badges, index) in badges" :key="index" class="card">
                    <svg fill="var(--bg-primary)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        class="card-icon">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M22.838,1.455A1,1,0,0,0,22,1H16a1,1,0,0,0-.895.553L12,7.764,8.9,1.553A1,1,0,0,0,8,1H2a1,1,0,0,0-.914,1.406L5.739,12.889A6.937,6.937,0,0,0,5,16a7,7,0,0,0,14,0,6.937,6.937,0,0,0-.739-3.111L22.914,2.406A1,1,0,0,0,22.838,1.455ZM3.538,3H7.382l3.087,6.174A6.991,6.991,0,0,0,7.1,11.014ZM12,21a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,21Zm4.905-9.986a6.991,6.991,0,0,0-3.374-1.84L16.618,3h3.844ZM15,15.292l-1.667,1.375L13.854,19,12,17.667,10.146,19l.521-2.333L9,15.292,11,15l1-2,1,2Z">
                            </path>
                        </g>
                    </svg>
                    <div class="card-text">{{ badges.text }}</div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
/* .badge-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
}

.badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
} */
</style>
