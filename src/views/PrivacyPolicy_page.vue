<script setup>
import { useAuth } from '../composables/UseAuth';

const { isLoggedIn } = useAuth();
</script>

<template>
    <main>
        <section>
            <div class="margin-lg">
                <div v-if="!isLoggedIn" class="btn-back">
                    <router-link to="/">
                        <button class="cta-button">Go back to homepage</button>
                    </router-link>
                </div>
                <h1>Privacy Policy</h1>
                <p><strong>Last Updated: </strong> March 3rd 2025</p>

                <h2>1. Introduction</h2>
                <p>
                    Welcome to the KUL Health Monitor (the "Website"). This Privacy Policy explains how we collect, use,
                    disclose, and protect your personal information when you use our Website. By using the Website, you
                    agree to the terms of this Privacy Policy.
                </p>

                <h2>2. Definitions</h2>
                <ul class="disc-list">
                    <li><strong>Account:</strong> A unique account created for you to access our Service.</li>
                    <li><strong>Cookies:</strong> Small files placed on your device to track activity on our Website.
                    </li>
                    <li><strong>Service:</strong> Refers to the Website and its features.</li>
                    <li><strong>Personal Data:</strong> Information that identifies or can be used to identify you.</li>
                    <li><strong>Service Provider:</strong> Third-party companies or individuals who process data on our
                        behalf.</li>
                </ul>

                <h2>3. Information We Collect</h2>
                <h3>3.1. Personal Information</h3>
                <p>
                    When you participate in our fitness study, we may collect:
                </p>
                <ul class="disc-list">
                    <li><strong>Demographic Information:</strong> Age, gender, and other demographic details provided in
                        the
                        initial survey.</li>
                    <li><strong>Email and username</strong>.</li>
                    <li><strong>Fitness History:</strong> Information about your exercise habits, fitness level, and use
                        of
                        fitness trackers.</li>
                    <li><strong>Health Goals:</strong> Your personal health goals and challenges as provided in the
                        initial
                        survey.</li>
                </ul>

                <h3>3.2. Fitbit Data</h3>
                <p>
                    If you connect your Fitbit account, we may collect:
                </p>
                <ul class="disc-list">
                    <li>Step count.</li>
                    <li>Activity levels (active zone minutes).</li>
                    <li>Exercise days.</li>
                    <li>Hourly activity.</li>
                    <li>Calories burned.</li>
                    <li>Heart rate.</li>
                    <li>Cardio load.</li>
                    <li>Distance covered.</li>
                </ul>
                <p>
                    This data is collected only with your explicit consent and used solely for the study.
                    We do <strong>NOT</strong> collect exact location data.
                </p>

                <h3>3.3. Survey Data</h3>
                <p>
                    We collect responses from the initial survey, weekly check-ins, and final survey to monitor your
                    progress and gather feedback.
                </p>

                <h2>4. How We Use Your Information</h2>
                <p>
                    We use your information to:
                </p>
                <ul class="disc-list">
                    <li>To provide and improve the Website and its features.</li>
                    <li>To monitor your fitness progress and provide feedback.</li>
                    <li>To analyze trends and improve the study experience.</li>
                    <li>To communicate with you about the study, including updates and reminders.</li>
                </ul>

                <h2>5. Data Sharing and Disclosure</h2>
                <p>
                    We do not sell, rent, or lease your personal information to third parties. However, we may share
                    your
                    information in the following circumstances:
                </p>
                <ul class="disc-list">
                    <li><strong>With Your Consent:</strong> We may share your information with third parties if you give
                        us
                        explicit consent to do so.</li>
                    <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or in
                        response to valid legal requests, such as subpoenas or court orders.</li>
                    <li><strong>Service Providers:</strong> We may share your information with third-party service
                        providers
                        who assist us in operating the Website and conducting the study. These providers are
                        contractually
                        obligated to protect your information and use it only for the purposes we specify.</li>
                </ul>

                <h2>6. Data Security</h2>
                <p>
                    We take the security of your information seriously and implement appropriate technical and
                    organizational measures to protect it from unauthorized access, disclosure, or misuse. These
                    measures
                    include encryption, access controls, and regular security audits.
                </p>

                <h2>7. Data Retention</h2>
                <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined
                    in
                    this Privacy Policy or as required by law. Once the retention period expires, we will delete your
                    data.
                </p>

                <h2>8. Your Rights</h2>
                <p>
                    You have the following rights regarding your personal information:
                </p>
                <ul class="disc-list">
                    <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.
                    </li>
                    <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete
                        information.</li>
                    <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to
                        certain legal obligations.</li>
                    <li><strong>Withdraw Consent:</strong> If you have provided consent for us to process your data, you
                        can
                        withdraw that consent at any time.</li>
                </ul>
                <p>
                    To exercise these rights, contact us at <a
                        href="mailto:Frederik.Goedkoop@student.uantwerpen.be">Frederik.Goedkoop@student.uantwerpen.be</a>.
                </p>

                <h2>9. Children’s Privacy</h2>
                <p>
                    Our Service is not intended for users under 13. We do not knowingly collect data from children.
                </p>

                <h2>10. Third-Party Links</h2>
                <p>
                    Our Website may contain links to third-party sites. We are not responsible for their privacy
                    practices.
                </p>

                <h2>11. Changes to This Policy</h2>
                <p>
                    We may update this policy. Changes will be posted on this page, and we will notify you of
                    significant
                    updates.
                </p>

                <h2>12. Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy or our data practices, please
                    contact us
                    at:
                </p>
                <p>
                    University of Leuven<br>
                    Biosystemen - Afdeling Dier en Mens, Kasteelpark Arenberg 30, 3001 Leuven <br>
                    <a
                        href="mailto:Frederik.Goedkoop@student.uantwerpen.be">Frederik.Goedkoop@student.uantwerpen.be</a><br>
                    <a href="tel:+32474547625">+32 4 74 54 76 25</a>
                </p>
            </div>
        </section>
    </main>
</template>

<style scoped>
section {
    padding-top: 1rem;
}

.margin-lg {
    margin: 0% 5% 0 5%;
}

h1 {
    font-size: xx-large;
}

a {
    color: black;
    text-decoration: underline;
}
</style>