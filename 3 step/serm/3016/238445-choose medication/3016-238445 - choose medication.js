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
                            <span class="relative" style="font-style: italic;">
                                <span class="absolute w-full h-full">
                                    <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/Group%202.svg?updatedAt=1741351998897">
                                </span>
                                <span class="relative">
                                    Is Ready!
                                </span>
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
                                        <span class="absolute h-full" style="margin-left: -12px; margin-right: -12px;">
                                            <img class="w-full" src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/Path%2016.svg?updatedAt=1741526557674">
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
                                            <img class="w-full" src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/Path%2015.svg?updatedAt=1741526999975">
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
                                    <span class="absolute w-full h-full">
                                        <img src="https://ik.imagekit.io/fwkcsfdx5/GLP/sermoreline/img/Group%2023.svg?updatedAt=1741319321369" class="absolute">
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
                <div class="flex flex-col space-y-3" id="sermorelinePlanSection">
                    <div id="sermorelinPlan" class="p-0 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl" style="display: none">
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
                </div>
            </div>
    </div>
`;








const testimonialContainer = `
    <!-- Get Started Button -->
                <div class="mt-4">
                    <div id="checkoutButton"
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
                    </div>
                </div>



                <!-- time counter -->
                <div>
                    <p id="downtimer" class="text-base my-3 font-semibold text-center"
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
                <div class="flex flex-col py-3 text-center"
                    style="background-color: #F8F93F; font-size: 10px; line-height: 1; color: #0E0B20;">
                    <span>
                        *These are unsolicited comments from users on social media and online forums. Individual
                    </span>
                    <span>
                        experiences may vary, and results are not guaranteed.
                    </span>
                </div>
`



// Add CSS for enhancements
const style = document.createElement('style');
style.innerHTML = `
        .active-radio {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            padding: 10px;
            display: flex;
            justify-content: start;
            align-items: center;
            float: left;
            border-right:1px solid #E1E5EC;
            width: 120px;
            height: 100%;
        }

        .active-radio > span{
            display: inline-block; 
            border-radius: 50%; 
            width: 20px; 
            height: 20px; 
            border: 2px solid #1A1F71
        }

        .active-radio > .active{
            background-color: #FFB400;
            border-color: #fff;
        }
    `;
document.head.appendChild(style);

const targetPostionElement = document.getElementById('scrollTargetPosition');
document.getElementById("scrollButton").addEventListener("click", function () {
    targetPostionElement.scrollIntoView({ behavior: "smooth" });
});

const sermorelinPlanBtn = document.getElementById('sermorelinPlan');
const checkoutButton = document.getElementById('checkoutButton');


sermorelinPlanBtn.addEventListener('click', function () {
    const button = document.querySelector('[class="flex w-full flex-col gap-4 rounded-2xl px-5 py-4 bg-[--selected-background-color] ring-2 ring-[--selected-border-color]"]');
    // console.log(button);
})


if(checkoutButton){
    checkoutButton.addEventListener('click', function () {
        document.querySelectorAll("button").forEach(button => {
            if (button.innerText.trim() === "Continue") {
                // console.log(button)
            }
        });
    })
}

const hiddenDefaultElement = () => {
    document.querySelectorAll("button").forEach(btn => {
        if (btn.innerText.trim() === "Continue") {
            btn.parentElement.parentElement.style.display = "none";
        }
    });
};


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

setTimeout(() => {
    hiddenDefaultElement();
    startCountdown();
}, 1000);



fetch('https://ipinfo.io/json')
.then(response => response.json())
.then(data => {
    document.getElementById('region').textContent = data.region;
    console.log(data.region)
})
.catch(error => console.error('Error fetching region:', error));




const updateRadioButton = () => {
    const parentElement = document.querySelector('.flex.flex-wrap.justify-center.gap-2');
    console.log('parentElement', parentElement)
    
    if (parentElement) {
        const imgElements = parentElement.querySelectorAll('img');
        imgElements.forEach((img) => {
            const parentDivOfImg = img.parentNode;
            parentDivOfImg.style.height = '80%';
            parentDivOfImg.style.width = '150px';
            parentDivOfImg.style.zIndex = '10';
            img.style.transform = 'scale(1.7)';
            img.style.top = '24px';
        });
    
        const btnElements = parentElement.querySelectorAll('button');
        console.log('btnElements', btnElements)
    
        btnElements.forEach((btn, index) => {
            let activeColor = '#FFB400';
            if (btn.className.includes('bg-[--selected-background-color]')) {
                activeColor = '#1A1F71';
            }
    
            btn.style.cssText = `
                border-radius: 10px;
                position: relative;
                padding-left: 40px;
                overflow: hidden;
                box-shadow: none;
                border: 4px solid #E1E5EC;
                padding-top: 30px;
                padding-bottom: 30px;
            `;
    
            const section = btn.querySelector('section');
            if (section) section.style.gap = '0';
    
            if (!btn.querySelector('.active-radio')) {
                const radioElements = document.createElement('div');
                radioElements.className = 'active-radio';
                radioElements.innerHTML = `<span></span>`;
                btn.appendChild(radioElements);
            }
    
            const titleElements = btn.querySelectorAll('h1');
            if (titleElements[0]) {
                titleElements[0].style.cssText = `
                    font-size: 2rem;
                    font-weight: bold;
                    font-family: "STIX Two Text";
                    line-height: 1.1;
                    color: #0E0B20;
                `;
                if(index==0){
                    titleElements[0].innerText = 'Sermorelin Monthly Plan';
                } else if(index==1){
                    titleElements[0].innerText = 'Sermorelin 3-Month Plan';
                }

                titleElements[0].parentNode.style.flexWrap = 'wrap-reverse';
            }
    
            if (titleElements[1]) {
                titleElements[1].style.cssText = `
                    font-size: 2rem;
                    margin-top: 7px;
                    color: #0E0B20;
                    font-family: "STIX Two Text";
                `;
                if(!titleElements[2]){
                    titleElements[1].style.cssText = `
                            font-weight: 700;
                            font-size: 3rem;
                            margin-top: 7px;
                            color: #0E0B20;
                            font-family: "STIX Two Text";
                        `;
                }
            }
            
            if(titleElements[2]) {
                titleElements[2].style.cssText = `
                    font-size: 3rem;
                    font-weight: 700;
                    margin-top: 7px;
                    color: #0E0B20;
                    font-family: "STIX Two Text";
                `;
            }
     
            const pElements = btn.querySelectorAll('p');
            if(pElements[0]){
                pElements[0].style.cssText = `
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: #0E0B20;
                    font-family: DM Sans;
                    margin-bottom: 16px;
                    line-height: 1.5;
                `;
                pElements[0].innerText = 'Peptide that supports natural growth hormone production';
            }


            // Check if the in-stock div already exists
            if (!btn.querySelector('.in-stock-container')) {
                const inStockDiv = document.createElement('div');
                inStockDiv.classList.add('in-stock-container'); // Add a class to identify it
                var statebadge = '';
                if(index==1){
                    statebadge = 'Best Value';
                } else if(index == 0) {
                    statebadge = 'Most Popular Peptide';
                }
                inStockDiv.innerHTML = `
                    <div class="flex items-center gap-3 mb-4" style="font-family: DM Sans; color: #0E0B20;">
                        <span class="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 pulsating-dot"></span>
                        <span class="mr-3 font-bold">In-Stock</span>
                        <span class="px-4 py-2 rounded-full font-bold" style="background-color: #F8F93F;">
                            ${statebadge}
                        </span>
                    </div>
                `;

                pElements[0].parentNode.appendChild(inStockDiv);
            }        
        });
    
        btnElements.forEach((btn) => {
            btn.addEventListener('click', () => {
                btnElements.forEach((otherBtn) => {
                    const spanElement = otherBtn.querySelector('.active-radio span');
                    if (spanElement) {
                        otherBtn.style.borderColor = '#E1E5EC';
                        spanElement.parentNode.style.backgroundColor = 'transparent';
                        spanElement.classList.remove('active');
                    }
                });
    
                const clickedSpan = btn.querySelector('.active-radio span');
                if (clickedSpan) {
                    btn.style.borderColor = '#F8F93F';
                    clickedSpan.parentNode.style.backgroundColor = '#F8F93F';
                    clickedSpan.classList.add('active');
                }
            });
        });
    
        btnElements[0]?.click();

        const newDiv = document.createElement('div');
        newDiv.id = 'testimonialContainer';
        newDiv.innerHTML = testimonialContainer;

        const oldTestContainer = document.getElementById('testimonialContainer');
        if(!oldTestContainer) {
            btnElements[0].parentNode.appendChild(newDiv);
        }
        
        
    } else {
        console.error('Parent element not found');
    }
}

setTimeout(() => {
    updateRadioButton();
}, 1000);