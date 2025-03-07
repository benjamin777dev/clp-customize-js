const container = document.getElementById('script-container');
if (!container) return;


const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
const age = userInfo.age || "Not set";
const gender = userInfo.gender || "Not set";

container.innerHTML = `
    <div style="padding: 1rem;">
      
















     <!-- add font -->
            <style>
                @font-face {
                    font-family: 'STIX Two Text';
                    src: url('https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/Fonts/STIXTwoText-VariableFont_wght.ttf') format('truetype');
                    /* font-weight: normal; */
                    /* font-style: normal; */
                }

                @font-face {
                    font-family: 'DM Sans';
                    src: url('https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/Fonts/DMSans-VariableFont_opsz,wght.ttf') format('truetype');
                    /* font-weight: normal; */
                    /* font-style: normal; */
                }

                .text-color {
                    color: #0E0B20;
                }




                .landing-cta-button {
                    width: 100%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    /* background-color: rgb(6, 32, 136); */
                    /* color: rgb(255, 255, 255); */
                    /* border: 2px solid rgb(6, 32, 136); */
                    /* border-radius: 6px; */
                    box-sizing: border-box;
                    cursor: pointer;
                    /* font-family: Figtree, "Figtree Fallback"; */
                    /* font-size: 14px; */
                    /* font-weight: 600; */
                    /* height: 56px; */
                    /* line-height: 20px; */
                    /* margin-bottom: 2rem; */
                    overflow: hidden;
                    /* padding: 20px 40px; */
                    position: relative;
                    text-align: center;
                    text-decoration: none;
                    transition:
                        color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                        background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                        border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                        text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                        fill 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                        stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1);
                    -webkit-font-smoothing: antialiased;
                    -webkit-tap-highlight-color: transparent;
                }

                .landing-cta-button:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0) 30%, rgb(188, 189, 132) 50%, rgba(255, 255, 255, 0) 70%);
                    background-size: 200% 200%;
                    opacity: 0.5;
                    transform: translateZ(0);
                    /* Improves animation performance */
                    animation: shine 4s infinite ease-out;
                    box-sizing: border-box;
                }

                @keyframes shine {
                    0% {
                        content: '';
                        background-position: 200% 0;
                    }

                    100% {
                        content: '';
                        background-position: -200% 0;
                    }
                }


                .pulsating-dot {
                    display: block;
                    width: 12px;
                    /* Size of the dot */
                    height: 12px;
                    float: left;
                    /* top: 2px; */
                    margin-right: 5px;
                    background-color: #45FF00;
                    /* Green color */
                    border-radius: 50%;
                    position: relative;
                    /* Necessary for positioning the pseudo-element */

                }

                .pulsating-dot::Before {
                    content: '';
                    /* Required for pseudo-elements to render */
                    position: absolute;
                    /* Position relative to .pulsating-dot */
                    top: 0;
                    left: 0;
                    width: 12px;
                    /* Same size as the dot */
                    height: 12px;
                    background-color: #45FF00;
                    /* Green color */
                    border-radius: 50%;
                    animation: pulsate 1s infinite ease-in-out;
                    opacity: 0.6;
                    /* Optional: Slight transparency for better effect */
                }

                @keyframes pulsate {
                    0% {
                        transform: scale(1);
                        opacity: 0.9;
                    }

                    50% {
                        transform: scale(2);
                        opacity: 0;
                    }

                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            </style>









<div class="text-center" style="font-family: DM Sans;">
                <!-- Header -->
                <div class="mb-4">
                    <h1 class="text-5xl text-color" style="font-family: STIX Two Text; font-weight: 500;">
                        Your Personalized
                    </h1>
                    <h2 class="text-5xl text-color mt-4" style="font-family: STIX Two Text; font-weight: 500;">
                        <span style="font-weight:bolder;">Sermorelin</span>
                        <span class="relative px-3 rounded">
                            <span>Plan</span>
                            <span class="absolute h-full">
                                <svg width="full" height="full" viewBox="0 0 437 121" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.7"
                                        d="M135.005 68.887C128.645 62.444 83.68 69.451 80.331 67.521C77.578 64.921 80.502 19.213 82.791 12.473C83.598 10.064 84.598 9.69099 86.954 10.805C90.692 12.905 138.182 8.958 138.182 8.958C138.855 10.381 140.595 5.60498 140.998 7.33498C142.213 11.358 219.198 6.135 225.772 5.924C229.758 5.793 226.682 8.54499 231.347 7.44399C241.292 5.28099 263.161 7.461 270.661 4.966C276.667 2.898 277.973 2.855 283.849 4.535C289.849 6.041 321.426 3.98701 324.949 0.808007C325.806 -0.0709927 326.492 0.246992 326.525 1.26699C326.532 1.47999 348.856 2.29098 348.981 3.08498C349.181 4.09998 349.874 4.585 350.481 3.885C351.611 2.835 375.245 -0.939005 375.713 2.03899C377.129 10.502 374.931 46.482 372.434 55.239C369.894 64.583 354.083 54.031 341.788 59.645L283.805 60.01L271.476 63.476C269.966 60.424 264.707 68.07 261.24 62.62C259.777 60.456 249.896 60.098 247.777 62.38C245.933 64.145 195.269 59.526 190.268 65.622C180.892 60.474 143.653 67.671 135.005 68.887Z"
                                        fill="#FEEF38" />
                                    <path opacity="0.7"
                                        d="M81.5919 116.218C71.492 109.649 7.42 120.502 3.017 118.93C-1.083 116.587 1.10297 70.659 4.20597 63.68C5.30597 61.202 6.75597 60.727 10.271 61.616C11.671 62.053 17.071 61.804 24.406 61.302C34.357 60.622 39.131 60.165 85.776 56.131C86.776 57.531 89.324 52.675 89.926 54.39C90.835 56.367 119.675 55.272 149.537 54.309C164.47 53.827 212.73 52.75 215.158 52.735C221.049 52.698 216.358 55.358 223.301 54.503C238.101 52.681 270.213 56.338 281.438 54.498C290.471 53.018 292.393 53.028 300.91 55.198C308.068 57.023 356.175 58.815 361.818 56.198C363.182 55.443 364.154 55.854 364.083 56.872C364.926 57.056 396.769 61.113 396.852 61.961C396.866 62.1986 396.942 62.4283 397.074 62.6265C397.206 62.8248 397.388 62.9844 397.601 63.0892C397.815 63.1939 398.053 63.2399 398.29 63.2225C398.527 63.205 398.756 63.1248 398.952 62.99C400.724 61.961 435.94 62.39 436.201 65.422C436.945 74.046 428.371 109.241 423.609 117.522C421.084 121.915 414.616 120.83 406.417 119.101C398.218 117.372 388.305 115.139 379.154 116.972C285.322 108.372 294.103 110.729 277.927 112.917C275.992 109.739 267.942 116.864 263.289 111.297C261.38 109.014 247.164 108.07 243.95 110.177C242.577 111.077 223.737 109.585 204.278 108.993C198.411 108.814 165.767 107.741 161.078 111.693C145.88 105.97 87.349 115.539 81.5919 116.218Z"
                                        fill="#FEEF38" />
                                </svg>
                            </span>
                            <span class="relative" style="font-style: italic;">
                                Is Ready!
                            </span>
                        </span>
                    </h2>
                </div>

                <!-- Message -->
                <div class="inline-block px-3 py-1 rounded-full mb-4" style="background-color: #fffee1;">
                    <span class="mr-2 font-bold bg-[#F8F93F] rounded-full px-[5px]" style="color: #000002;">✓</span>
                    <span class="text-color tracking-tight" style="font-family: DM Sans; font-weight: bold;">
                        Based on your quiz, you're the perfect candidate for Sermorelin therapy!
                    </span>
                </div>

                <!-- Second style option with gradient header -->
                <div class="rounded-xl shadow-lg border-2" style="background-color: #fff; border-color: #0E0B20;">
                    <div class="relative">
                        <div class="absolute top-[-2px] left-0 right-0 h-10"
                            style="border-radius:8px; background-color: #231F33;">
                        </div>

                        <div class="flex flex-col md:flex-row">
                            <div class="flex-1 my-3 relative font-bold">
                                <div class="uppercase  text-sm tracking-wider mb-3 relative z-10"
                                    style="color: #F8F93F; border-right-width: 2px; border-color: #F8F93F;">AGE</div>
                                <div style="color:#0E0B20 ; border-right-width: 2px; border-color: #0E0B20;">${age}</div>
                            </div>

                            <div class="flex flex-col my-3 relative font-bold">
                                <div class=" text-sm tracking-wider mb-3 relative z-10"
                                    style="color: #F8F93F; border-right-width: 2px; border-color: #F8F93F;">Function
                                </div>
                                <div class="px-6"
                                    style="color: #0E0B20; border-right-width: 2px; border-color: #0E0B20;">
                                    Enhanced GH Stimulation</div>
                            </div>
                            <div class="flex-1 p-3 relative font-bold">
                                <div class="uppercase  text-sm tracking-wider mb-3 relative z-10"
                                    style="color: #F8F93F;">SEX</div>
                                <div style="color: #0E0B20;">${gender}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Image Section -->
                <div>
                    <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/1-1.png" alt="Example image"
                        class="max-w-full h-auto mx-auto rounded-lg" style="max-width: 600px;">
                    <!-- <img src="https://picsum.photos/500/300" alt="Example image" class="max-w-full h-auto mx-auto rounded-lg shadow-md" style="max-width: 500px;"> -->
                </div>

                <!-- Features Section -->
                <div class="py-8 px-2 rounded-xl text-xl"
                    style="background-color: #ffd; font-family:DM Sans; color: #0E0B20; font-weight: 900;">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Free Overnight Shipping -->
                        <div class="flex h-[100px] items-center px-4 rounded-full"
                            style="background-color: #fff; border: 2px solid #F8F93F;">
                            <div class="relative flex-shrink-0 rounded-full "
                                style="border: 4px solid #F8F93F; width: 70px; height: 70px;">
                                <div class="w-18 h-18 absolute">
                                    <img class="w-full h-full"
                                        src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/2-1.png" alt=""
                                        srcset="">
                                </div>
                            </div>
                            <div class="ml-4 text-left tracking-tight">
                                <p class="text-lg leading-[1.2]">
                                    <span class="relative">
                                        <span class="absolute h-full -mx-3">
                                            <svg width="full" height="full" viewBox="0 0 109 31" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.7"
                                                    d="M20.557 29.415C17.884 26.582 2.32599 31.707 0.951986 30.915C-0.111014 29.927 -0.270004 10.2889 0.405996 7.29694C0.646996 6.23294 1.006 6.02492 1.906 6.39692C2.99 6.94592 16.392 4.4349 20.821 3.6789C21.09 4.2689 21.668 2.17895 21.842 2.90595C22.168 3.98595 52.43 1.14091 53.281 1.09491C54.76 1.01391 53.607 2.204 55.342 1.758C59.042 0.808999 67.136 1.97294 69.942 1.02594C72.2 0.262944 72.68 0.250973 74.837 1.05597C76.72 1.75597 88.743 1.75588 90.143 0.538883C90.481 0.192883 90.729 0.351883 90.716 0.788883C90.716 0.833883 94.808 1.46296 94.84 1.46796C96.2504 1.61935 97.6387 1.93175 98.978 2.39899C99.016 2.84199 99.26 3.06789 99.51 2.79889C99.946 2.33689 108.81 1.85294 108.885 3.14594C109.104 6.81894 107.085 22.0459 105.923 25.6719C104.696 29.5229 99.449 24.3209 94.811 26.2569C71.378 24.1819 74.463 24.6669 69.519 26.0939C69.011 24.7599 67.064 27.9289 65.854 25.5939C65.361 24.6429 61.807 24.4189 61.019 25.3609C60.686 25.7609 55.97 25.356 51.108 25.305C46.246 25.254 41.237 25.574 40.354 26.889C36.6 24.624 22.422 28.983 20.557 29.415Z"
                                                    fill="#FEEF38" />
                                            </svg>
                                        </span>
                                        <span class="relative">
                                            FREE
                                        </span>
                                    </span>
                                    <span class="relative">
                                        overnight shipping to
                                    </span>
                                </p>
                                <p class="text-lg leading-[1.2]" id="region">[State]</p>
                            </div>
                        </div>



                        <!-- Board-Certified Physicians -->
                        <div class="flex h-[100px] items-center px-4 rounded-full"
                            style="background-color: #fff; border: 2px solid #F8F93F;">
                            <div class="relative flex-shrink-0 rounded-full "
                                style="border: 4px solid #F8F93F; width: 70px; height: 70px;">
                                <div class="w-18 h-18 absolute">
                                    <img class="w-full h-full"
                                        src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/2-2.png" alt=""
                                        srcset="">
                                </div>
                            </div>
                            <div class="ml-4 text-left tracking-tight">
                                <p class="text-lg leading-[1.2]">Board-
                                    <span class="relative">
                                        <span class="absolute h-full">
                                            <svg width="full" height="full" viewBox="0 0 156 44" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.7"
                                                    d="M30.213 41.7701C26.406 37.7851 4.25203 44.994 2.29503 43.882C0.78203 42.493 0.55493 14.866 1.51793 10.657C1.86093 9.15703 2.36893 8.86806 3.64793 9.38506C5.19194 10.1581 24.276 6.62509 30.582 5.56109C30.965 6.39209 31.789 3.44805 32.036 4.47405C32.501 5.99405 75.5919 1.99108 76.8039 1.92608C78.9099 1.81308 77.268 3.48704 79.74 2.86004C85.005 1.52404 96.5329 3.16003 100.523 1.82903C103.738 0.75603 104.423 0.740022 107.493 1.87102C110.175 2.86002 127.293 2.86007 129.293 1.14507C129.774 0.65807 130.126 0.881999 130.108 1.497C130.108 1.559 135.935 2.4441 135.981 2.4511C138.92 2.9311 141.852 3.52301 141.873 3.76201C141.927 4.38401 142.273 4.70205 142.631 4.32805C143.251 3.67805 155.871 2.99709 155.981 4.81609C156.293 9.98309 153.41 31.3981 151.763 36.5041C150.015 41.9221 142.543 34.6041 135.94 37.3271C102.572 34.4081 106.964 35.091 99.925 37.099C99.201 35.222 96.43 39.6801 94.706 36.3991C94.006 35.0611 88.943 34.745 87.821 36.07C87.347 36.63 80.632 36.064 73.708 35.992C66.784 35.92 59.653 36.371 58.395 38.22C53.054 35.03 32.868 41.1631 30.213 41.7701Z"
                                                    fill="#FEEF38" />
                                            </svg>
                                        </span>
                                        <span class="relative">
                                            Certified
                                        </span>
                                    </span>
                                </p>
                                <p class="text-lg leading-[1.2]">
                                    <span class="relative">
                                        <span class="absolute h-full -mr-4">
                                            <svg width="full" height="full" viewBox="0 0 212 44" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.7"
                                                    d="M40.656 41.7701C35.492 37.7851 5.43301 44.994 2.77901 43.882C0.726009 42.493 0.417932 14.866 1.72493 10.657C2.18993 9.15703 2.87897 8.86806 4.61397 9.38506C6.70797 10.1581 32.6009 6.62509 41.1579 5.56109C41.6779 6.39209 42.795 3.44805 43.13 4.47405C43.761 5.99405 102.23 1.99108 103.871 1.92608C106.728 1.81308 104.5 3.48704 107.854 2.86004C114.997 1.52404 130.639 3.16003 136.054 1.82903C140.416 0.75603 141.344 0.740022 145.51 1.87102C149.15 2.86002 172.378 2.86007 175.082 1.14507C175.736 0.65807 176.214 0.881999 176.189 1.497C176.189 1.559 184.095 2.4441 184.157 2.4511C188.145 2.9311 192.123 3.52301 192.151 3.76201C192.225 4.38401 192.696 4.70205 193.179 4.32805C194.022 3.67805 211.143 2.99709 211.292 4.81609C211.716 9.98309 207.805 31.3981 205.569 36.5041C203.198 41.9221 193.061 34.6041 184.101 37.3271C138.829 34.4081 144.788 35.091 135.237 37.099C134.255 35.222 130.495 39.6801 128.156 36.3991C127.203 35.0611 120.336 34.745 118.815 36.07C118.171 36.63 109.061 36.064 99.666 35.992C90.271 35.92 80.597 36.371 78.89 38.22C71.647 35.03 44.259 41.1631 40.656 41.7701Z"
                                                    fill="#FEEF38" />
                                            </svg>
                                        </span>
                                        <span class="relative">
                                            Physicians
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>

                        <!-- Prescribed in less than 12 Hours -->
                        <div class="flex h-[100px] items-center px-4 rounded-full"
                            style="background-color: #fff; border: 2px solid #F8F93F;">
                            <div class="relative flex-shrink-0 rounded-full flex items-center justify-center"
                                style="border: 4px solid #F8F93F; width: 70px; height: 70px;">
                                <div class="w-18 h-18 absolute p-1">
                                    <img class="w-full h-full"
                                        src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/2-3.png" alt=""
                                        srcset="">
                                </div>
                                <img class="w-1/2" src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/12hs.png"
                                    alt="" srcset="">
                            </div>
                            <div class="ml-4 text-left tracking-tight">
                                <p class="text-lg leading-[1.2]">Prescribed in less</p>
                                <p class="text-lg leading-[1.2]">than
                                    <span class="relative">
                                        <span class="absolute h-full -mr-4">
                                            <svg width="full" height="full" viewBox="0 0 169 48" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.7"
                                                    d="M31.979 45.5179C27.832 41.0819 3.69896 49.106 1.56796 47.869C-0.0800368 46.322 -0.332045 15.569 0.721955 10.883C1.09495 9.21704 1.64896 8.89202 3.04196 9.46702C4.72296 10.328 25.511 6.39504 32.381 5.21104C32.799 6.13604 33.695 2.85796 33.965 4.00096C34.471 5.69296 81.411 1.23702 82.731 1.16502C85.025 1.03902 83.236 2.90196 85.931 2.20396C91.666 0.716959 104.224 2.53899 108.57 1.05699C112.07 -0.138013 112.817 -0.156016 116.163 1.10398C119.084 2.20398 137.734 2.20402 139.905 0.295024C140.43 -0.246976 140.813 0.00199163 140.793 0.686992C140.793 0.755992 147.141 1.741 147.193 1.749C150.393 2.283 153.588 2.94299 153.611 3.20799C153.67 3.90099 154.048 4.25497 154.436 3.83897C155.113 3.11497 168.859 2.35696 168.978 4.38096C169.319 10.133 166.178 33.972 164.384 39.656C162.484 45.687 154.341 37.541 147.148 40.572C110.8 37.323 115.585 38.083 107.917 40.318C107.128 38.229 104.109 43.192 102.231 39.536C101.466 38.047 95.953 37.696 94.731 39.17C94.214 39.794 86.899 39.164 79.357 39.083C71.815 39.002 64.047 39.505 62.676 41.563C56.86 38.015 34.871 44.8419 31.979 45.5179Z"
                                                    fill="#FEEF38" />
                                            </svg>
                                        </span>
                                        <span class="relative">
                                            12 Hours
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="flex h-[100px] items-center px-4 rounded-full"
                            style="background-color: #fff; border: 2px solid #F8F93F;">
                            <div class="relative flex-shrink-0 rounded-full "
                                style="border: 4px solid #F8F93F; width: 70px; height: 70px;">
                                <div class="w-18 h-18 absolute">
                                    <img class="w-full h-full"
                                        src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/2-4.png" alt=""
                                        srcset="">
                                </div>
                            </div>
                            <div class="ml-4 text-left tracking-tight">
                                <p class="text-lg leading-[1.2]">
                                    <span class="relative">
                                        <span class="absolute h-full">
                                            <svg width="full" height="full" viewBox="0 0 261 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.7" d="M49.916 49.314C43.529 44.514 6.35095 53.197 3.06795 51.858C0.52895 50.184 0.147901 16.901 1.7679 11.829C2.3439 10.029 3.19597 9.67398 5.34297 10.297C7.93197 11.228 39.9569 6.97193 50.5429 5.68993C51.1849 6.68993 52.567 3.14399 52.982 4.37999C53.762 6.21199 126.074 1.38905 128.108 1.31005C131.641 1.17405 128.886 3.19105 133.034 2.43505C141.869 0.826046 161.215 2.79896 167.91 1.19396C173.305 -0.0990425 174.453 -0.119017 179.61 1.24498C184.11 2.43498 212.841 2.43601 216.186 0.369006C216.994 -0.217994 217.586 0.0519564 217.554 0.792956C217.554 0.868956 227.332 1.93398 227.409 1.94298C232.342 2.52098 237.262 3.23496 237.297 3.52196C237.388 4.27196 237.97 4.65494 238.568 4.20494C239.61 3.42094 260.786 2.60498 260.968 4.79198C261.492 11.017 256.654 36.817 253.89 42.969C250.956 49.497 238.418 40.68 227.338 43.961C171.343 40.444 178.713 41.267 166.901 43.685C165.686 41.425 161.035 46.796 158.143 42.84C156.964 41.228 148.471 40.8479 146.589 42.4399C145.789 43.1149 134.525 42.433 122.906 42.345C111.287 42.257 99.32 42.802 97.206 45.03C88.246 41.194 54.372 48.582 49.916 49.314Z" fill="#FEEF38"/>
                                            </svg>
                                        </span>
                                        <span class="relative">
                                            FDA-Registered
                                        </span>
                                    </span>
                                </p>
                                <p class="text-lg leading-[1.2]">Pharmacies</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Get Started Button -->
                <div class="mt-12">
                    <button id="scrollButton"
                        class="landing-cta-button w-full py-4 px-6 rounded-lg text-white text-xl flex items-center justify-center"
                        style="background-color: #231F33; font-family: STIX Two Text; color: #F8F93F; font-weight: 600;">
                        WOOHOO! I'm Ready to Get Started
                        <span class="ml-4 -mt-1">
                            <img class="w-8" src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/4.png" alt="">
                        </span>
                    </button>
                </div>

                <!-- Sermorelin Benefits Section -->
                <div class="py-8 px-4">
                    <div class="flex flex-col md:flex-row items-center gap-6">
                        <div class="w-full md:w-1/3">
                            <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/3.png" alt="Bottle"
                                class="w-full max-w-[160px] ml-auto"
                                style="filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));">
                        </div>
                        <div class="w-full md:w-2/3 text-left">
                            <h2 class="text-3xl font-bold mb-6" style="color: #0E0B20; font-family: STIX Two Text;">
                                <span>
                                    What to Look Forward
                                </span><br>
                                <span class="relative mt-1" style="font-weight: bolder; font-size: 40px;">
                                    <span class="absolute h-full">
                                        <svg width="full" height="full" viewBox="0 0 656 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M147 48.0849C134.3 42.9019 48.263 49.42 42.589 48.115C37.309 46.18 42.949 10.6339 47.419 5.31493C49.007 3.42493 50.94 3.0991 55.511 3.8911C60.987 5.0371 128.95 2.44097 155.069 1.58397C156.325 2.68397 159.876 -1.01602 160.597 0.322982C162.112 2.43798 296.697 0.790939 325.397 1.05394C333.147 1.12594 326.938 3.09894 336.09 2.50194C355.582 1.23094 397.817 4.29103 412.604 2.89403C424.49 1.77103 427.013 1.81109 438.228 3.50609C448.112 5.00009 510.995 6.31796 518.368 4.25096C520.15 3.65896 521.435 3.9739 521.356 4.7639C522.511 4.9089 526.907 5.23103 528.087 5.32103C529.029 5.39303 564.443 7.9591 564.558 8.5471C564.794 9.3471 566.058 9.80402 567.342 9.33202C569.683 8.57602 615.973 8.5599 616.407 10.9099C617.645 17.5979 607.407 44.9809 601.324 51.4519C594.895 58.2929 566.914 48.3339 542.324 51.3369C418.524 45.0579 432.001 46.366 407.872 48.199C405.312 45.727 394.593 51.2169 388.437 46.866C385.911 45.081 367.062 44.2661 362.767 45.8711C360.939 46.5521 335.933 45.256 310.113 44.571C284.293 43.886 257.656 43.827 252.696 46.094C233.378 41.546 157.506 47.5199 147 48.0849Z" fill="#FEEF38"/>
                                            <path opacity="0.7" d="M122.161 76.8641C108.676 71.7251 9.15199 75.4171 1.93599 73.7151C-3.88301 71.5831 6.64604 36.315 12.215 31.179C14.199 29.35 16.415 29.101 21.474 30.064C29.546 31.894 123.434 30.664 133.784 30.513C135.149 31.635 139.324 27.9861 140.072 29.3401C142.686 32.8501 320.372 30.1401 325.843 30.1111C334.583 30.0661 327.671 32.12 337.965 31.357C359.865 29.735 407.677 31.719 424.236 29.771C437.508 28.209 440.343 28.2381 453.149 29.4871C466.192 30.7591 535.598 29.1421 543.349 26.4991C545.287 25.8381 546.749 26.0511 546.78 26.8431C547.593 26.8921 595.696 27.558 595.888 28.043C596.288 28.827 597.788 29.1981 599.149 28.6431C601.673 27.8431 653.515 24.5431 654.475 26.8431C657.216 33.4041 651.218 61.3179 645.519 68.1919C639.492 75.4629 605.168 67.5461 577.895 72.0281C428.061 72.8041 461.623 71.428 422.927 75.168C419.771 72.797 407.884 78.6311 400.444 74.4441C397.387 72.7231 375.667 72.4511 370.826 74.1551C366.69 75.6101 255.461 71.2409 244.047 75.7959C223.764 71.6449 141.31 76.2341 122.161 76.8641Z" fill="#FEEF38"/>
                                        </svg>
                                    </span>
                                    <span class="relative">
                                        with Sermorelin
                                    </span>
                                </span>
                            </h2>
                            <div class="space-y-3">
                                <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                                    <span class="rounded-full w-[20px] h-[20px] pl-1"
                                        style="color: #0E0B20; background-color: #F8F93F; ">
                                        <span class="w-4 h-4">
                                            <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                                    fill="#0E0B20" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span class="text-lg border-b-2 pr-3"
                                        style="color: #0E0B20; border-color: #F8F93F;">Boost
                                        Growth Hormone Naturally</span>
                                </div>
                                <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                                    <span class="rounded-full w-[20px] h-[20px] pl-1"
                                        style="color: #0E0B20; background-color: #F8F93F;">
                                        <span class="w-4 h-4">
                                            <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                                    fill="#0E0B20" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span class="text-lg border-b-2 pr-3"
                                        style="color: #0E0B20; border-color: #F8F93F;">Enhance Muscle Growth & Fat
                                        Loss</span>
                                </div>
                                <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                                    <span class="rounded-full w-[20px] h-[20px] pl-1"
                                        style="color: #0E0B20; background-color: #F8F93F;">
                                        <span class="w-4 h-4">
                                            <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                                    fill="#0E0B20" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span class="text-lg border-b-2 pr-3"
                                        style="color: #0E0B20; border-color: #F8F93F;">Improve Sleep & Recovery</span>
                                </div>
                                <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                                    <span class="rounded-full w-[20px] h-[20px] pl-1"
                                        style="color: #0E0B20; background-color: #F8F93F;">
                                        <span class="w-4 h-4">
                                            <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                                    fill="#0E0B20" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span class="text-lg border-b-2 pr-3"
                                        style="color: #0E0B20; border-color: #F8F93F;">Increase Energy & Vitality</span>
                                </div>
                                <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                                    <span class="rounded-full w-[20px] h-[20px] pl-1"
                                        style="color: #0E0B20; background-color: #F8F93F;">
                                        <span class="w-4 h-4">
                                            <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                                    fill="#0E0B20" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span class="text-lg pr-3" style="color: #0E0B20;">Support Cognitive Function</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sermorelin Testimonials Section -->
                <div class="py-8 rounded-xl"
                    style="background-color: #FFFEE1; font-family: STIX Two Text; color: #0E0B20;">
                    <div class="text-center mb-1">
                        <h2 class="text-3xl font-black">
                            What 
                            <span class="relative">
                                <span class="absolute h-full -mx-2">
                                    <svg width="full" height="full" viewBox="0 0 183 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.7" d="M34.541 48.7439C30.064 44.0709 4.00399 52.524 1.70299 51.22C-0.0770056 49.59 -0.344007 17.196 0.788993 12.26C1.18899 10.504 1.789 10.1601 3.294 10.7681C5.11 11.6751 27.558 7.53194 34.976 6.28494C35.427 7.25894 36.395 3.80604 36.686 5.01004C37.233 6.79204 87.921 2.09801 89.346 2.02201C91.823 1.89001 89.892 3.85198 92.799 3.11698C98.992 1.55098 112.553 3.47097 117.246 1.90897C121.028 0.649968 121.833 0.63104 125.446 1.95804C128.601 3.11704 148.739 3.11799 151.084 1.10599C151.651 0.53499 152.065 0.798075 152.043 1.51908C152.043 1.59208 158.897 2.62897 158.951 2.63797C162.409 3.19997 165.858 3.8951 165.882 4.1741C165.946 4.9041 166.354 5.27414 166.773 4.83914C167.503 4.07714 182.347 3.27792 182.473 5.41092C182.84 11.4689 179.449 36.5811 177.511 42.5691C175.455 48.9221 166.666 40.341 158.899 43.533C119.649 40.111 124.815 40.9119 116.535 43.2649C115.684 41.0649 112.424 46.2929 110.396 42.4419C109.57 40.8739 103.617 40.5039 102.296 42.0569C101.738 42.7139 93.84 42.0501 85.696 41.9651C77.552 41.8801 69.164 42.4099 67.684 44.5779C61.409 40.8399 37.665 48.0309 34.541 48.7439Z" fill="#FEEF38"/>
                                    </svg>
                                </span>
                                <span class="relative">Real</span>
                            </span> 
                            <span class="relative">
                                Sermorelin Users Are Saying
                            </span>
                        </h2>
                        <p class="text-2xl mt-2" style="font-weight: 500;">Sermorelin users are THRILLED about <em>their
                                results!</em></p>
                    </div>

                    <div class="relative" style="height: 232px;">
                        <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/layer-2.png" class="absolute"
                            style="width: 339px; left:-41px; top:62px">
                        <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/layer-1.png" class="absolute"
                            style="height: 85px; left: 120px;">
                        <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/layer-4.png" class="absolute"
                            style="width: 349px; right:-1px; top: 75px;">
                        <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/layer-3.png" class="absolute"
                            style="height: 82px; top: 62px; right:-21px">
                    </div>




                </div>

                <!-- Get Started TODAY Section -->
                <div class="p-8" id="scrollTargetPosition">
                    <h2 class="text-5xl font-bold mb-8 text-left" style="color: #0E0B20; font-family: STIX Two Text;">
                        Get Started 
                        <span class="relative pr-12" style="font-style: italic;">
                            <span class="absolute h-full w-full">
                                <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/Group%2022.svg" class="absolute">
                            </span>
                            <span class="relative">
                                TODAY
                            </span>
                        </span>
                    </h2>
                    <div class="space-y-3 text-left" style="font-family: DM Sans;">
                        <div class="flex items-center gap-4">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center"
                                style="background-color: #F8F93F;">
                                <span class="w-6 h-6" style="margin-right: -8px;">
                                    <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                            fill="#0E0B20" />
                                    </svg>
                                </span>
                            </div>
                            <p class="text-xl" style="color: #0E0B20; font-weight: 500;">UNLIMITED doctor support, 7
                                days a week
                            </p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center"
                                style="background-color: #F8F93F;">
                                <span class="w-6 h-6" style="margin-right: -8px;">
                                    <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                            fill="#0E0B20" />
                                    </svg>
                                </span>
                            </div>
                            <p class="text-xl" style="color: #0E0B20; font-weight: 500;">Prescribed & shipped within 48
                                HOURS
                            </p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center"
                                style="background-color: #F8F93F;">
                                <span class="w-6 h-6" style="margin-right: -8px;">
                                    <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                            fill="#0E0B20" />
                                    </svg>
                                </span>
                            </div>
                            <p class="text-xl" style="color: #0E0B20; font-weight: 500;">Cost of medication INCLUDED in
                                the
                                price</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center"
                                style="background-color: #F8F93F;">
                                <span class="w-6 h-6" style="margin-right: -8px;">
                                    <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                            fill="#0E0B20" />
                                    </svg>
                                </span>
                            </div>
                            <p class="text-xl" style="color: #0E0B20; font-weight: 500;">No hidden fees—what you see is
                                what you
                                pay</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center"
                                style="background-color: #F8F93F;">
                                <span class="w-6 h-6" style="margin-right: -8px;">
                                    <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                            fill="#0E0B20" />
                                    </svg>
                                </span>
                            </div>
                            <p class="text-xl" style="color: #0E0B20; font-weight: 500;">No contracts, cancel ANYTIME
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Sermorelin Plan Section -->
                <div id="sermorelinPlan" class="p-0 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl">
                    <div class="flex flex-col md:flex-row items-center border-4 relative"
                        style="border-color: #F8F93F; border-radius: 0.75rem;">
                        <div class="w-full md:w-1/3 px-4 flex justify-center items-center">
                            <div class="absolute left-0 top-0 h-full w-28" style="background-color: #F8F93F;"></div>
                            <div class="">
                                <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/3.png"
                                    alt="Sermorelin Vial" class="relative max-w-[150px] mx-auto">
                            </div>
                        </div>
                        <div class="w-full md:w-2/3 p-2 text-left -ml-4">
                            <h2 class="text-5xl font-bold mb-2" style="color: #0E0B20; font-family: STIX Two Text;">
                                Sermorelin Plan</h2>
                            <p class="text-2xl mb-4 font-semibold" style="color: #0E0B20; font-family: DM Sans;">Peptide
                                that supports natural growth hormone
                                production</p>
                            <div class="flex items-center gap-3 mb-4" style="font-family: DM Sans; color: #0E0B20;">
                                <span class="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 pulsating-dot"></span>
                                <span class="mr-3 font-bold">In-Stock</span>
                                <span class="px-4 py-2 rounded-full font-bold" style="background-color: #F8F93F;">Most
                                    Popular
                                    Peptide</span>
                            </div>
                            <div class="text-5xl font-bold" style="color: #0E0B20; font-family: STIX Two Text;">$249
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Get Started Button -->
                <div class="mt-4">
                    <button id="checkoutButton"
                        class="landing-cta-button w-full py-4 px-6 rounded-lg text-white text-2xl flex items-center justify-center"
                        style="background-color: #231F33; font-family: STIX Two Text; color: #F8F93F; font-weight: 600;">
                        Proceed To Checkout
                        <span class="flex justify-center items-center" >
                            <svg style="margin-right:-39px" width="140" height="2" viewBox="0 0 175 4" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.66803 1.84082H175" stroke="#F8F93F" stroke-width="3"
                                    stroke-miterlimit="10" />
                            </svg>
                        >
                    </button>
                </div>



                <!-- time counter -->
                <div>
                    <p id="downtimer" class="text-base my-3 font-semibold"
                        style="color: #0E0B20; font-family: DM Sans;">
                        Your approval is reserved for 13:59 </p>
                </div>

                <!-- FAQ Section -->
                <div class="p-8 rounded-xl">
                    <div class="text-center ">
                        <h2 class="text-4xl font-bold relative flex items-center justify-center">
                            <span class="absolute h-full">
                                <svg width="full" height="full" viewBox="0 0 455 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.7" d="M101.964 53.8187C93.143 48.0487 33.364 55.3059 29.426 53.8529C25.758 51.6979 29.676 12.12 32.781 6.20003C33.881 4.10003 35.228 3.7326 38.403 4.6136C42.203 5.8896 89.424 2.99976 107.57 2.04476C108.443 3.27276 110.909 -0.855146 111.411 0.644854C112.463 3.00085 205.965 1.1658 225.905 1.4598C231.29 1.5388 226.976 3.73564 233.334 3.07064C246.875 1.65564 276.218 5.06265 286.492 3.50765C294.749 2.25765 296.502 2.30278 304.292 4.18978C311.159 5.85278 354.847 7.3209 359.968 5.0179C361.207 4.3599 362.099 4.71068 362.045 5.58968C362.845 5.75068 365.901 6.1098 366.721 6.2098C367.375 6.2898 391.979 9.14759 392.059 9.80159C392.084 10.0135 392.164 10.2154 392.29 10.3875C392.416 10.5596 392.585 10.6961 392.78 10.784C392.974 10.8719 393.188 10.9085 393.4 10.8895C393.613 10.8705 393.817 10.7966 393.993 10.6756C395.619 9.83462 427.778 9.81694 428.08 12.4329C428.94 19.8789 421.827 50.3681 417.602 57.5731C413.135 65.1901 393.695 54.1006 376.611 57.4456C290.599 50.4546 299.964 51.9096 283.201 53.9456C281.423 51.1936 273.976 57.3057 269.701 52.4618C267.946 50.4738 254.851 49.5718 251.867 51.3538C250.597 52.1128 233.225 50.6697 215.286 49.9017C197.347 49.1337 178.842 49.0739 175.396 51.6019C161.974 46.5389 109.262 53.1907 101.964 53.8187Z" fill="#FEEF38"/>
                                    <path opacity="0.7" d="M84.707 85.8626C75.338 80.1396 6.19503 84.2518 1.18203 82.3568C-2.86097 79.9828 4.45402 40.7099 8.32302 34.9959C9.70102 32.9589 11.24 32.6817 14.756 33.7537C20.364 35.7917 85.591 34.4247 92.782 34.2537C93.73 35.5037 96.6311 31.4411 97.15 32.9481C98.966 36.8571 222.41 33.838 226.213 33.807C232.285 33.757 227.483 36.0437 234.635 35.1947C249.848 33.3887 283.066 35.5951 294.57 33.4281C303.791 31.6891 305.76 31.7216 314.657 33.1116C323.719 34.5276 371.938 32.727 377.321 29.785C378.667 29.049 379.683 29.2848 379.704 30.1678C380.269 30.2218 413.689 30.9677 413.822 31.5057C413.897 31.7243 414.023 31.9219 414.19 32.0819C414.357 32.2419 414.56 32.3597 414.781 32.4256C415.003 32.4915 415.237 32.5035 415.464 32.4608C415.691 32.418 415.905 32.322 416.087 32.18C417.841 31.289 453.858 27.6167 454.524 30.1727C456.424 37.4787 452.262 68.5577 448.303 76.2127C444.115 84.3127 420.269 75.4937 401.321 80.4837C297.226 81.3467 320.542 79.8127 293.659 83.9837C291.466 81.3437 283.208 87.8386 278.039 83.1766C275.915 81.2606 260.825 80.9588 257.462 82.8548C254.589 84.4758 177.313 79.6119 169.384 84.6829C155.294 80.0509 98.01 85.1606 84.707 85.8626Z" fill="#FEEF38"/>
                                </svg>
                            </span>
                            <span class="text-5xl font-black"
                                style="position: relative; z-index: 1; color: #0E0B20; font-family: STIX Two Text;">FAQ:</span>
                        </h2>
                    </div>

                    <div class="" style="color: #0E0B20;">
                        <div class="py-4 rounded-lg">
                            <h3 class="text-2xl font-bold text-center mb-2"
                                style="background-color: #FFFEE1; font-family: DM Sans;">How soon
                                will I feel results?</h3>
                            <p class="text-center text-xl px-2" style="font-family: DM Sans; font-weight: 500;">Many
                                users report better sleep, focus, and energy within 2–3 weeks,
                                with many reporting it within the first few days.</p>
                        </div>

                        <div class="py-4 rounded-lg">
                            <h3 class="text-2xl font-bold text-center mb-2"
                                style="background-color: #FFFEE1; font-family: DM Sans;">Is this
                                safe?</h3>
                            <p class="text-center text-xl px-2" style="font-family: DM Sans; font-weight: 500;">Yes!
                                Prescribed by licensed doctors and compounded in
                                FDA-registered
                                pharmacies.</p>
                        </div>

                        <div class="py-4 rounded-lg">
                            <h3 class="text-2xl font-bold text-center mb-2"
                                style="background-color: #FFFEE1; font-family: DM Sans;">What if I
                                don't like it?</h3>
                            <p class="text-center  text-xl px-2" style="font-family: DM Sans; font-weight: 500;">No
                                worries! Cancel anytime—no long-term commitment.</p>
                        </div>

                        <div class="py-4 rounded-lg">
                            <h3 class="text-2xl font-bold text-center mb-2"
                                style="background-color: #FFFEE1; font-family: DM Sans;">Is this
                                the same as HGH?</h3>
                            <p class="text-center  text-xl px-2" style="font-family: DM Sans; font-weight: 500;">No!
                                Sermorelin is NOT synthetic HGH—it doesn't replace
                                growth hormone
                                but stimulates your body to produce its own. This makes it safer, more natural, and
                                without the risks of HGH injections.</p>
                        </div>
                    </div>
                </div>


                <!-- footer -->
                <div class="flex flex-col py-3"
                    style="background-color: #F8F93F; font-size: 10px; line-height: 1; color: #0E0B20;">
                    <span>
                        *These are unsolicited comments from users on social media and online forums. Individual
                    </span>
                    <span>
                        experiences may vary, and results are not guaranteed.
                    </span>
                </div>
            </div>





















    
    
    </div>
`;

const targetPostionElement = document.getElementById('scrollTargetPosition');
document.getElementById("scrollButton").addEventListener("click", function () {
    targetPostionElement.scrollIntoView({ behavior: "smooth" });
});

const sermorelinPlanBtn = document.getElementById('sermorelinPlan');
const checkoutButton = document.getElementById('checkoutButton');


sermorelinPlanBtn.addEventListener('click', function () {
    const button = document.querySelector('[class="flex w-full flex-col gap-4 rounded-2xl px-5 py-4 bg-[--selected-background-color] ring-2 ring-[--selected-border-color]"]');
    console.log(button);
})


checkoutButton.addEventListener('click', function () {
    document.querySelectorAll("button").forEach(button => {
        if (button.innerText.trim() === "Continue") {
            console.log(button)
        }
    });
})

const hiddenDefaultElement = () => {
    // const button = document.querySelector('.flex.w-full.flex-col.gap-4.rounded-2xl.px-5.py-4.bg-\\[--selected-background-color\\].ring-2.ring-\\[--selected-border-color\\]');
    
    // if (button) {
    //     button.parentElement.style.display = "none";
    // }

    document.querySelectorAll("button").forEach(btn => {
        if (btn.innerText.trim() === "Continue") {
            // btn.parentElement.parentElement.parentElement.style.display = "none";
        }
    });
};


setTimeout(() => {
    hiddenDefaultElement();
}, 1000);


function startCountdown() {
    const countdownElement = document.getElementById("downtimer")
    if (!countdownElement) {
        console.error("Countdown element not found!");
        return;
    }

    let totalSeconds = 15 * 60;

    function updateTimer() {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        countdownElement.innerHTML = `Your approval is reserved for ${formattedTime}`;

        if (totalSeconds > 0) {
            totalSeconds--;
            setTimeout(updateTimer, 1000);
        } else {
            countdownElement.innerHTML = "Peptide Your approval time has expired";
        }
    }
    updateTimer();
}

startCountdown();


fetch('https://ipinfo.io/json')
.then(response => response.json())
.then(data => {
    document.getElementById('region').textContent = data.region;
    console.log(data.region)
})
.catch(error => console.error('Error fetching region:', error));