<script setup>
import { ref } from 'vue';
// https://youtu.be/CfTvye31Ad0
</script>

<template>
  <section>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <a href="#" class="nav-link">
            <span class="link-text logo-text">KUL</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
              <g class="fa-group">
                <path fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"></path>
                <path fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"></path>
              </g>
            </svg>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"
              stroke-width="0.00024000000000000003">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                  fill="#f1ede7"></path>
              </g>
            </svg>
            <span class="link-text">Info</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.96173 18.4687C6.01943 16.2137 2 12.4886 2 8.96653C2 3.08262 7.50016 0.885859 12 5.43111C16.4998 0.885859 22 3.08262 22 8.9665C22 12.4887 17.9806 16.2137 15.0383 18.4687C13.7063 19.4896 13.0403 20 12 20C10.9597 20 10.2937 19.4896 8.96173 18.4687ZM16.5 6.25C16.9142 6.25 17.25 6.58579 17.25 7V8.25002H18.5C18.9142 8.25002 19.25 8.5858 19.25 9.00002C19.25 9.41423 18.9142 9.75002 18.5 9.75002H17.25V11C17.25 11.4142 16.9142 11.75 16.5 11.75C16.0858 11.75 15.75 11.4142 15.75 11V9.75002L14.5 9.75002C14.0858 9.75002 13.75 9.41423 13.75 9.00002C13.75 8.5858 14.0858 8.25002 14.5 8.25002H15.75V7C15.75 6.58579 16.0858 6.25 16.5 6.25Z"
                  fill="#f1ede7"></path>
              </g>
            </svg>
            <span class="link-text">Health</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg fill="#f1ede7" viewBox="0 -336 1557 1557" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>Asset 1</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      d="M158,885V812H0v73Zm1099,0V812H300v73Zm300,0V812H1399v73ZM1240,394a238.81563,238.81563,0,0,1,14.5,24q7.5,14,8.5,21,2.00005,12-5.5,32T1240,498q-51.99995,30-147,28T935,498q-26-11-45.5-37.5T870,393q0-64,51-130L779,0,636,263l13,19q13,18,25.5,50.5T687,393q0,41-19.5,67.5T622,498q-63,26-158,28T317,498q-10-7-18-27t-6-32q3-15,31-56L239,239,199,391,300,763h957l101-372-40-152-85,144Z">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
            <span class="link-text">Quests</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3.77791 3.65484C3.59687 4.01573 3.50783 4.46093 3.32975 5.35133L2.73183 8.34093C2.35324 10.2339 3.8011 12 5.73155 12C7.30318 12 8.61911 10.8091 8.77549 9.24527L8.8445 8.55515C8.68141 10.4038 10.1385 12 11.9998 12C13.8737 12 15.338 10.382 15.1515 8.51737L15.2245 9.24527C15.3809 10.8091 16.6968 12 18.2685 12C20.1989 12 21.6468 10.2339 21.2682 8.34093L20.6703 5.35133C20.4922 4.46095 20.4031 4.01573 20.2221 3.65484C19.8406 2.89439 19.1542 2.33168 18.3337 2.10675C17.9443 2 17.4903 2 16.5823 2H14.4998H7.41771C6.50969 2 6.05567 2 5.66628 2.10675C4.84579 2.33168 4.15938 2.89439 3.77791 3.65484Z"
                  fill="#f1ede7"></path>
                <path
                  d="M18.2685 13.5C19.0856 13.5 19.8448 13.2876 20.5 12.9189V14C20.5 17.7712 20.5 19.6568 19.3284 20.8284C18.3853 21.7715 16.9796 21.9554 14.5 21.9913V18.5C14.5 17.5654 14.5 17.0981 14.299 16.75C14.1674 16.522 13.978 16.3326 13.75 16.201C13.4019 16 12.9346 16 12 16C11.0654 16 10.5981 16 10.25 16.201C10.022 16.3326 9.83261 16.522 9.70096 16.75C9.5 17.0981 9.5 17.5654 9.5 18.5V21.9913C7.02043 21.9554 5.61466 21.7715 4.67157 20.8284C3.5 19.6568 3.5 17.7712 3.5 14V12.9189C4.15524 13.2876 4.91439 13.5 5.73157 13.5C6.92864 13.5 8.02617 13.0364 8.84435 12.2719C9.67168 13.0321 10.7765 13.5 11.9998 13.5C13.2232 13.5 14.3281 13.032 15.1555 12.2717C15.9737 13.0363 17.0713 13.5 18.2685 13.5Z"
                  fill="#f1ede7"></path>
              </g>
            </svg>
            <span class="link-text">Shop</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg fill="#f1ede7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M22.838,1.455A1,1,0,0,0,22,1H16a1,1,0,0,0-.895.553L12,7.764,8.9,1.553A1,1,0,0,0,8,1H2a1,1,0,0,0-.914,1.406L5.739,12.889A6.937,6.937,0,0,0,5,16a7,7,0,0,0,14,0,6.937,6.937,0,0,0-.739-3.111L22.914,2.406A1,1,0,0,0,22.838,1.455ZM3.538,3H7.382l3.087,6.174A6.991,6.991,0,0,0,7.1,11.014ZM12,21a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,21Zm4.905-9.986a6.991,6.991,0,0,0-3.374-1.84L16.618,3h3.844ZM15,15.292l-1.667,1.375L13.854,19,12,17.667,10.146,19l.521-2.333L9,15.292,11,15l1-2,1,2Z">
                </path>
              </g>
            </svg>
            <span class="link-text">Badges</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg fill="#f1ede7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6.5,12h-4a.5.5,0,0,0-.5.5V20H7V12.5A.5.5,0,0,0,6.5,12Z"></path>
                <path d="M14,4H10a.5.5,0,0,0-.5.5V20h5V4.5A.5.5,0,0,0,14,4Z"></path>
                <path d="M21.5,8h-4a.5.5,0,0,0-.5.5V20h5V8.5A.5.5,0,0,0,21.5,8Z"></path>
              </g>
            </svg>
            <span class="link-text">Leaderboard</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" fill="#f1ede7">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>profile_image_round [#1326]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2199.000000)" fill="#f1ede7">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M342,2055.615 C342,2055.722 341.97,2055.821 341.939,2055.918 C341.723,2052.974 339.918,2050.482 337.375,2049.283 C338.368,2048.369 339,2047.071 339,2045.615 C339,2043.534 337.728,2041.753 335.92,2041 L341,2041 C341.552,2041 342,2041.063 342,2041.615 L342,2055.615 Z M339.963,2057 L327.975,2057 C327.974,2057 327.969,2056.741 327.969,2056.701 C327.969,2053.605 330.326,2050.96 333.339,2050.645 C334,2050.733 334.255,2050.622 334.623,2050.576 C337.625,2050.902 339.969,2053.623 339.969,2056.71 C339.969,2056.75 339.964,2057 339.963,2057 L339.963,2057 Z M326,2055.615 L326,2041.615 C326,2041.063 326.448,2041 327,2041 L332.08,2041 C330.272,2041.753 329,2043.534 329,2045.615 C329,2047.06 329.622,2048.351 330.602,2049.264 C328.107,2050.422 326.307,2052.82 326.012,2055.675 C326.011,2055.654 326,2055.636 326,2055.615 L326,2055.615 Z M337,2045.615 C337,2047.055 335.979,2048.26 334.623,2048.548 C334.033,2048.5 333.868,2048.508 333.368,2048.545 C332.017,2048.254 331,2047.052 331,2045.615 C331,2043.961 332.346,2042.615 334,2042.615 C335.654,2042.615 337,2043.961 337,2045.615 L337,2045.615 Z M342,2039 L326,2039 C324.895,2039 324,2039.895 324,2041 L324,2057 C324,2058.104 324.895,2059 326,2059 L342,2059 C343.105,2059 344,2058.104 344,2057 L344,2041 C344,2039.895 343.105,2039 342,2039 L342,2039 Z"
                        id="profile_image_round-[#1326]"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span class="link-text">Profile</span>
          </a>
        </li>

        <li class="nav-item" id="themeButton">
          <a href="#" class="nav-link">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z"
                  fill="#f1ede7"></path>
              </g>
            </svg>
            <span class="link-text">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
section {
  margin-left: 0;
  padding: 0;
}

/* Navbar */
.navbar {
  position: fixed;
  background-color: var(--bg-primary);
  transition: width 600ms ease;
  overflow: scroll;
}

.navbar::-webkit-scrollbar {
  display: none;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--text-secondary);
}

.link-text {
  display: none;
  margin-left: 1rem;
}

.nav-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.fa-primary {
  color: #ff7eee;
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo svg {
  transform: rotate(0deg);
  transition: var(--transition-speed);
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
}

.navbar:hover .logo svg {
  transform: rotate(-180deg);
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }

  main {
    margin: 0;
  }
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  .navbar:hover {
    width: 16rem;
  }

  .navbar:hover .link-text {
    display: inline;
  }

  .navbar:hover .logo svg {
    margin-left: 11rem;
  }

  .navbar:hover .logo-text {
    left: 0px;
  }
}

.dark {
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
}

.light {
  --text-primary: #1f1f1f;
  --text-secondary: #000000;
  --bg-primary: #ffffff;
  --bg-secondary: #e4e4e4;
}

.solar {
  --text-primary: #576e75;
  --text-secondary: #35535c;
  --bg-primary: #fdf6e3;
  --bg-secondary: #f5e5b8;
}

.theme-icon {
  display: none;
}

.dark #darkIcon {
  display: block;
}

.light #lightIcon {
  display: block;
}

.solar #solarIcon {
  display: block;
}
</style>
