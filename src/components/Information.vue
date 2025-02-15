<script setup>
import { ref } from 'vue';

const scrollToFooter = () => {
    const FooterElement = document.getElementById("Footer");
    if (FooterElement) {
        FooterElement.scrollIntoView({ behavior: "smooth" });
    }
};

const isContentVisible = ref(false);

const toggleContentVisisbility = () => {
    isContentVisible.value = !isContentVisible.value;
};

// Function to unfold content when navigating from navbar
const unfoldContent = () => {
    isContentVisible = true;
};

</script>

<template>
    <section>
        <div class="grey-border">
            <ul class="logo-header" @click="toggleContentVisisbility">
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
                    <h1>Information About The Website</h1>
                </li>
            </ul>

            <hr>
            <transition name="slide">
                <div v-show="isContentVisible">
                    <ul class="text-center text-justify content-list">
                        <li class="to-fix">
                            <h3>To fix:</h3>
                            <ul class="disc-list">
                                <li><strong>Fix jolting motion after transition</strong></li>
                                <li><strong>Use Pinia / eventBus / provide-inject to use unFold() in navbar.vue</strong></li>
                                <li><strong>Add dropdown arrow with animation -> idem navbar</strong></li>
                            </ul>
                        </li>
                        <li>
                            <h3>Webiste purpose:</h3>
                            <p>Welcome, this website is a platform designed to analyse Fitbit activity data. The goal of
                                this
                                study is to observe how the use of this website may influence users’ physical activity
                                over
                                time. By syncing your Fitbit data with the website, we aim to collect valuable
                                information
                                to
                                assess the relationship between digital platforms and health engagement.</p>
                        </li>

                        <li>
                            <h3>How it works:</h3>
                            <ul class="disc-list">
                                <li><strong>Fitbit Syncing:</strong> Sync your Fitbit data with the website to
                                    automatically
                                    track your activity metrics such as steps, calories burned, and other key health
                                    indicators.
                                </li>
                                <li><strong>Progress Monitoring:</strong> View your activity data over time and monitor
                                    your
                                    progress through your personal dashboard.</li>
                                <li><strong>Data Collection:</strong> Your Fitbit data will be collected for analysis as
                                    part of
                                    this study, which will help us evaluate the impact of the website on physical
                                    activity.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h3>User Instructions:</h3>
                            <ol>
                                <li><strong>Log In:</strong> Create an account or log in with your existing credentials.
                                </li>
                                <li><strong>Sync Fitbit Data:</strong> Navigate to the sync page and connect your Fitbit
                                    to
                                    allow the website to access your activity data.</li>
                                <li><strong>Track Progress:</strong> Use the dashboard to see your tracked fitness
                                    metrics
                                    and
                                    review how your physical activity evolves over time.</li>
                            </ol>
                        </li>

                        <li>
                            <h3>Data Privacy:</h3>
                            <p>We prioritise your privacy. All data collected from your Fitbit and the website is
                                securely
                                stored and used exclusively for this research study. We adhere to ethical guidelines and
                                data
                                protection regulations (SMEC approval). For full details on how your data is handled,
                                please
                                refer to our <a>[Privacy Policy]</a>.</p>
                        </li>

                        <li>
                            <h3>Contact Information:</h3>
                            <ul class="disc-list">
                                <li><strong>Email:</strong> <a
                                        href="mailto:Frederik.Goedkoop@student.uantwerpen.be">Frederik.Goedkoop@student.uantwerpen.be</a>
                                    or <a
                                        href="mailto:frederik.goedkoop@student.kuleuven.be">frederik.goedkoop@student.kuleuven.be</a>
                                </li>
                                <li><strong>Phone:</strong> <a href="tel:+32474547625">+32 4 74 54 76 25</a></li>
                            </ul>
                            <p>More contact information can be found in the <a href="#"
                                    @click.prevent="scrollToFooter">contact
                                    information section</a>.</p>
                        </li>

                        <li>
                            <h3>Fitbit Integration:</h3>
                            <p>This website integrates with your Fitbit device to gather activity data such as steps,
                                calories
                                burned, and heart rate. By syncing your Fitbit, we can collect data in real time, which
                                will
                                contribute to the study's analysis of how digital platforms may impact physical activity
                                levels.
                            </p>
                        </li>

                    </ul>
                </div>
            </transition>
        </div>
    </section>
</template>

<style scoped>
h1 {
    text-align: start;
    /* Prevent "About" from sticking to right*/
}

.content-list {
    text-align: start;
}

p {
    text-align: justify;
}

/* Transition styles */
.content-wrapper {
    overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
    transition: max-height 0.5s ease-in-out;
    overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
    max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
    max-height: 1000px;
    /* Adjust this value based on your content's maximum height */
}
</style>
