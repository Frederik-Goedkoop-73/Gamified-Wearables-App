<script setup>
import { useXPStore } from '../stores/xpStore';
import { useStreakStore } from '../stores/streakStore';
import { useCoinStore } from '../stores/coinStore'

// Initialise the Pinia store
const xpStore = useXPStore();
const streakStore = useStreakStore();
const coinStore = useCoinStore();

defineProps({
    UserName: String,
});
</script>

<template>
    <section class="header-container">
        <div class="header-top">
            <div class="empty-flex"></div>
            <div class="username">
                <h1>{{ UserName }}</h1>
            </div>
            <div class="streak-currency">
                <!-- v-if: Streak icon must be color:var(--text-primary) when inactive and var(--highlight-primary) when active-->
                <p>{{ streakStore.streak }}</p>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M12.8324 21.8013C15.9583 21.1747 20 18.926 20 13.1112C20 7.8196 16.1267 4.29593 13.3415 2.67685C12.7235 2.31757 12 2.79006 12 3.50492V5.3334C12 6.77526 11.3938 9.40711 9.70932 10.5018C8.84932 11.0607 7.92052 10.2242 7.816 9.20388L7.73017 8.36604C7.6304 7.39203 6.63841 6.80075 5.85996 7.3946C4.46147 8.46144 3 10.3296 3 13.1112C3 20.2223 8.28889 22.0001 10.9333 22.0001C11.0871 22.0001 11.2488 21.9955 11.4171 21.9858C10.1113 21.8742 8 21.064 8 18.4442C8 16.3949 9.49507 15.0085 10.631 14.3346C10.9365 14.1533 11.2941 14.3887 11.2941 14.7439V15.3331C11.2941 15.784 11.4685 16.4889 11.8836 16.9714C12.3534 17.5174 13.0429 16.9454 13.0985 16.2273C13.1161 16.0008 13.3439 15.8564 13.5401 15.9711C14.1814 16.3459 15 17.1465 15 18.4442C15 20.4922 13.871 21.4343 12.8324 21.8013Z"
                            fill="var(--highlight-primary)"></path>
                    </g>
                </svg>
                <p>{{ coinStore.coins }}</p>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M18.525 12C18.525 15.866 15.4693 19 11.7 19C7.93066 19 4.875 15.866 4.875 12C4.875 8.13401 7.93066 5 11.7 5C13.5101 5 15.2461 5.7375 16.526 7.05025C17.8059 8.36301 18.525 10.1435 18.525 12Z"
                            stroke="var(--coins)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M11.7 14.821C11.2858 14.821 10.95 15.1568 10.95 15.571C10.95 15.9852 11.2858 16.321 11.7 16.321V14.821ZM10.2375 11L10.7668 10.4687C10.738 10.44 10.7069 10.4137 10.6739 10.39L10.2375 11ZM9.75 10L10.4996 10.0252C10.4999 10.0168 10.5 10.0084 10.5 10L9.75 10ZM11.7 9.179C12.1142 9.179 12.45 8.84321 12.45 8.429C12.45 8.01479 12.1142 7.679 11.7 7.679V9.179ZM11.6686 16.3213C12.0824 16.3387 12.432 16.0173 12.4493 15.6034C12.4667 15.1896 12.1453 14.84 11.7314 14.8227L11.6686 16.3213ZM10.4936 13.2849C10.5477 12.8743 10.2586 12.4975 9.84792 12.4434C9.43726 12.3893 9.0605 12.6784 9.00642 13.0891L10.4936 13.2849ZM12.45 15.571C12.45 15.1568 12.1142 14.821 11.7 14.821C11.2858 14.821 10.95 15.1568 10.95 15.571H12.45ZM10.95 17C10.95 17.4142 11.2858 17.75 11.7 17.75C12.1142 17.75 12.45 17.4142 12.45 17H10.95ZM11.6567 7.68025C11.2432 7.70415 10.9273 8.05876 10.9513 8.47228C10.9752 8.88581 11.3298 9.20165 11.7433 9.17775L11.6567 7.68025ZM13.1792 9.04604L12.6199 9.54581L12.6199 9.54581L13.1792 9.04604ZM12.9073 10.5065C12.8496 10.9167 13.1354 11.296 13.5455 11.3537C13.9557 11.4114 14.335 11.1256 14.3927 10.7155L12.9073 10.5065ZM10.95 8.429C10.95 8.84321 11.2858 9.179 11.7 9.179C12.1142 9.179 12.45 8.84321 12.45 8.429H10.95ZM12.45 7C12.45 6.58579 12.1142 6.25 11.7 6.25C11.2858 6.25 10.95 6.58579 10.95 7H12.45ZM11.7 16.321C12.1182 16.321 12.7468 16.2238 13.2986 15.8998C13.8887 15.5533 14.4 14.9318 14.4 13.981H12.9C12.9 14.3022 12.7614 14.4757 12.5391 14.6062C12.2785 14.7592 11.9321 14.821 11.7 14.821V16.321ZM14.4 13.981C14.4 13.3981 14.2219 12.9209 13.8956 12.5343C13.5928 12.1756 13.1956 11.9368 12.8433 11.7501C12.0814 11.3465 11.3937 11.0932 10.7668 10.4687L9.70817 11.5313C10.5438 12.3638 11.5624 12.769 12.1411 13.0756C12.4591 13.2441 12.6408 13.3733 12.7494 13.5019C12.8344 13.6026 12.9 13.7319 12.9 13.981H14.4ZM10.6739 10.39C10.5648 10.312 10.4945 10.1761 10.4996 10.0252L9.00043 9.97478C8.97882 10.617 9.27558 11.234 9.80115 11.61L10.6739 10.39ZM10.5 10C10.5 9.73521 10.5564 9.58995 10.6045 9.51073C10.6518 9.43266 10.7194 9.37192 10.8194 9.3214C11.0517 9.204 11.3771 9.179 11.7 9.179V7.679C11.3725 7.679 10.723 7.6895 10.1429 7.9826C9.83668 8.13733 9.53866 8.37559 9.32201 8.73271C9.10606 9.08868 9 9.51479 9 10H10.5ZM11.7314 14.8227C11.3719 14.8076 11.0299 14.6377 10.7919 14.3466L9.63066 15.2961C10.1349 15.9128 10.8739 16.288 11.6686 16.3213L11.7314 14.8227ZM10.7919 14.3466C10.5533 14.0547 10.443 13.6691 10.4936 13.2849L9.00642 13.0891C8.90239 13.879 9.12705 14.6801 9.63066 15.2961L10.7919 14.3466ZM10.95 15.571V17H12.45V15.571H10.95ZM11.7433 9.17775C12.0696 9.15888 12.392 9.29073 12.6199 9.54581L13.7384 8.54628C13.2106 7.95573 12.447 7.63456 11.6567 7.68025L11.7433 9.17775ZM12.6199 9.54581C12.8488 9.80195 12.9568 10.1547 12.9073 10.5065L14.3927 10.7155C14.5029 9.93196 14.2652 9.13576 13.7384 8.54628L12.6199 9.54581ZM12.45 8.429V7H10.95V8.429H12.45Z"
                            fill="var(--coins)"></path>
                    </g>
                </svg>
            </div>
        </div>
        <div class="progress-bar-container">
            <p class="level-number" id="left-level-number">Lvl. {{ xpStore.level }}</p>
            <!-- Progress Bar -->
            <div class="progress-bar">
                <div class="progress" :style="{ width: xpStore.xpProgress() + '%' }"></div>
            </div>
            <p class="level-number" id="right-level-number">Lvl. {{ xpStore.level + 1 }}</p>
        </div>
    </section>
</template>

<style scoped>
.header-container {
    padding: 0;
    background-color: var(--bg-secondary);
    height: 9rem;
    /* normally 4rem*/
    overflow: visible;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.header-top {
    height: 80px;
    display: flex;
    flex-direction: row;
    width: 100%;
}

.empty-flex {
    flex-shrink: 1;
    flex-basis: 0;
}

/* To remove left div that centers text */ 
@media only screen and (min-width: 1200px) {
  .empty-flex {
    flex-grow: 1;
    transition: flex-grow 300ms ease;
  }
}

@media only screen and (max-width: 1200px) {
  .empty-flex {
    flex-grow: 0; 
    transition: flex-grow 300ms ease;
  }
}

.username {
    flex-grow: 2;
    flex-shrink: 1;
    flex-basis: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 240px;

    font-size: 20px;
    color: var(--text-secondary);
}

.streak-currency {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

/* To shrink streak and currency svgs */
@media only screen and (min-width: 800px) {
  svg {
    width: 60px;
    transition: width 300ms ease;
  }
} 

@media only screen and (max-width: 800px) {
  svg {
    width: 40px;
    transition: width 300ms ease;
  }
} 

p {
    color: var(--text-primary);
}

.level-number {
    min-width: 3rem;
}

#left-level-number {
    padding-left: 15px;
}

#right-level-number {
    padding-right: 15px;
}

.progress-info {
    flex-grow: 1;
}

.progress-bar-container {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    margin: 0;
    width: 100%;
    min-height: 4.4rem;
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
    background-color: var(--highlight-primary);
    border-radius: 10px;
    transition: width 300ms ease;
}
</style>