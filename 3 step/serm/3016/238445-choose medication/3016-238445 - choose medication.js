const container = document.getElementById('script-container');
if (!container) return;

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
    </style>







    <div class="text-center" style="font-family: DM Sans;">
    <!-- Header -->
    <div class="mb-4">
        <h1 class="text-5xl text-color" style="font-family: STIX Two Text; font-weight: 500;">
            Your Personalized
        </h1>
        <h2 class="text-5xl text-color mt-4" style="font-family: STIX Two Text; font-weight: 500;">
            <span style="font-weight:bolder;">Sermorelin</span>
            <span>Plan</span>
            <span class="px-3 rounded" style="background-color: #ff0; font-style: italic;">
                Is Ready!
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
                    <div style="color:#0E0B20 ; border-right-width: 2px; border-color: #0E0B20;">31</div>
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
                    <div style="color: #0E0B20;">Male</div>
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
    <div class="py-8 px-6 rounded-xl text-xl"
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
                    <p class="text-lg leading-[1.2]">FREE overnight shipping to</p>
                    <p class="text-lg leading-[1.2]">[State]</p>
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
                    <p class="text-lg leading-[1.2]">Board-Certified</p>
                    <p class="text-lg leading-[1.2]">Physicians</p>
                </div>
            </div>


            <!-- <div class="flex items-center p-4 rounded-lg"
                style="background-color: #fff; border: 1px solid #009;">
                <div class="w-12 h-12 flex-shrink-0" style="background-color: #009;">
                    <svg class="w-full h-full p-2" viewBox="0 0 24 24" fill="#fff">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </div>
                <div class="ml-4 text-left">
                    <p class="font-bold" style="color: #009;">Board-Certified</p>
                    <p class="font-bold" style="color: #009;">Physicians</p>
                </div>
            </div> -->



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
                    <p class="text-lg leading-[1.2]">than 12 Hours</p>
                </div>
            </div>



            <!-- <div class="flex items-center p-4 rounded-lg"
                style="background-color: #fff; border: 1px solid #009;">
                <div class="w-12 h-12 flex-shrink-0" style="background-color: #009;">
                    <svg class="w-full h-full p-2" viewBox="0 0 24 24" fill="#fff">
                        <path
                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                </div>
                <div class="ml-4 text-left">
                    <p class="font-bold" style="color: #009;">Prescribed in less</p>
                    <p class="font-bold" style="color: #009;">than 12 Hours</p>
                </div> -->

            <!-- FDA-Registered Pharmacies -->

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
                    <p class="text-lg leading-[1.2]">FDA-Registered</p>
                    <p class="text-lg leading-[1.2]">Pharmacies</p>
                </div>
            </div>
            <!-- <div class="flex items-center p-4 rounded-lg"
                style="background-color: #fff; border: 1px solid #009;">
                <div class="w-12 h-12 flex-shrink-0" style="background-color: #009;">
                    <svg class="w-full h-full p-2" viewBox="0 0 24 24" fill="#fff">
                        <path
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z" />
                        <path
                            d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                    </svg>
                </div>
                <div class="ml-4 text-left">
                    <p class="font-bold" style="color: #009;">FDA-Registered</p>
                    <p class="font-bold" style="color: #009;">Pharmacies</p>
                </div>
            </div> -->
        </div>
    </div>

    <!-- Get Started Button -->
    <div class="mt-12">
        <button class="w-full py-4 px-6 rounded-lg text-white text-xl flex items-center justify-center"
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
                        with Sermorelin
                        <span class="absolute bottom-0 left-0 w-full h-3"
                            style="background-color: #ffff00; z-index: -1;"></span>
                    </span>
                </h2>
                <div class="space-y-3">
                    <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                        <span class="rounded-full w-[20px] h-[20px] pl-1"
                            style="color: #0E0B20; background-color: #ffff00; ">
                            <span class="w-4 h-4">
                                <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                        fill="#0E0B20" />
                                </svg>
                            </span>
                        </span>
                        <span class="text-lg border-b-2 pr-3" style="color: #0E0B20; border-color: #ffff00;">Boost
                            Growth Hormone Naturally</span>
                    </div>
                    <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                        <span class="rounded-full w-[20px] h-[20px] pl-1"
                            style="color: #0E0B20; background-color: #ffff00;">
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
                            style="color: #0E0B20; border-color: #ffff00;">Enhance Muscle Growth & Fat Loss</span>
                    </div>
                    <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                        <span class="rounded-full w-[20px] h-[20px] pl-1"
                            style="color: #0E0B20; background-color: #ffff00;">
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
                            style="color: #0E0B20; border-color: #ffff00;">Improve Sleep & Recovery</span>
                    </div>
                    <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                        <span class="rounded-full w-[20px] h-[20px] pl-1"
                            style="color: #0E0B20; background-color: #ffff00;">
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
                            style="color: #0E0B20; border-color: #ffff00;">Increase Energy & Vitality</span>
                    </div>
                    <div class="flex items-center gap-3" style="font-family: DM Sans; font-weight: bolder;">
                        <span class="rounded-full w-[20px] h-[20px] pl-1"
                            style="color: #0E0B20; background-color: #ffff00;">
                            <span class="w-4 h-4">
                                <svg width="full" height="full" viewBox="0 0 38 33" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.223 23.448L1.98799 18.3201C1.77781 18.2149 1.54198 18.1717 1.30818 18.1958C1.07439 18.2199 0.852309 18.3102 0.667985 18.4561C0.535157 18.5612 0.425412 18.6926 0.345566 18.8421C0.265721 18.9915 0.217476 19.1556 0.203873 19.3245C0.190271 19.4933 0.211596 19.6632 0.266495 19.8235C0.321395 19.9838 0.408712 20.1311 0.522996 20.2561C4.123 24.1891 7.43397 28.0061 11.623 31.3911C12.591 32.1741 13.785 32.991 14.983 32.646C15.998 32.355 16.598 31.3391 17.109 30.4141C23.162 19.4661 28.509 9.86395 37.29 1.53395C37.3683 1.45938 37.4167 1.35896 37.4261 1.25124C37.4355 1.14351 37.4053 1.03601 37.3411 0.94899C37.2769 0.861966 37.1831 0.801391 37.0774 0.778579C36.9717 0.755768 36.8614 0.77216 36.767 0.824966C28.181 5.63097 20.744 12.678 12.223 23.448Z"
                                        fill="#0E0B20" />
                                </svg>
                            </span>
                        </span>
                        <span class="text-lg pr-3"
                            style="color: #0E0B20;">Support Cognitive Function</span>
                    </div>

                    <!-- <div class="flex items-center gap-3">
                        <span style="color: #0E0B20;">✓</span>
                        <span class="text-lg font-semibold" style="color: #0E0B20;">More Energy</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span style="color: #0E0B20;">✓</span>
                        <span class="text-lg font-semibold" style="color: #0E0B20;">Healthy Weight
                            Management</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span style="color: #0E0B20;">✓</span>
                        <span class="text-lg font-semibold" style="color: #0E0B20;">Faster Muscle
                            Recovery</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span style="color: #0E0B20;">✓</span>
                        <span class="text-lg font-semibold" style="color: #0E0B20;">Anti-Aging
                            Benefits</span>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</div>

































    
    
    </div>
`;
