<script setup>
import { ref } from 'vue';
import UserProgress from '../composables/UserProgress';

const { level, xpProgress,} = UserProgress();

defineProps({
    UserName: String,
});

</script>

<template>
    <section class="header-container">
        <h1>{{ UserName }}</h1>
        <div class="progress-bar-container">
            <p id="left-level">Lvl. {{ level }}</p>
            <!-- Progress Bar -->
            <div class="progress-bar">
                <div class="progress" :style="{ width: xpProgress() + '%' }"></div>
            </div>
            <p>Lvl. {{ level + 1 }}</p>
        </div>
    </section>
</template>

<style scoped>
.header-container {
    padding: 5px 0 0 0;
    background-color: var(--bg-secondary);
    height: 9rem;
    /* normally 4rem*/
    overflow: visible;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

h1 {
    margin-top: 5px;
    font-size: xx-large;
    color: var(--text-secondary);
    text-align: center;
}

p {
    color: var(--text-primary);
}

#left-level {
    padding-left: 15px;
}

.progress-info {
    flex-grow: 1;
}

.progress-bar-container {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    margin:0;
    width: 100%;
    background-color: var(--bg-primary);
}

.progress-bar {
    width: 100%;
    height: 20px;
    background-color: #ddd;
    margin: 0 10px;
    border-radius: 10px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background-color: #4caf50;
    border-radius: 10px;
    transition: width 300ms ease;
}
</style>