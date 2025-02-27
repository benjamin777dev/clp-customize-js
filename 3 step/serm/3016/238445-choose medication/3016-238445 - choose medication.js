const container = document.getElementById('script-container');
if (!container) return;

container.innerHTML = `
    <div style="padding: 2rem; max-width: 800px;">
      





















  
            <div class="max-w-3xl mx-auto text-center">
                <!-- Header -->
                <div class="mb-8">
                    <h1 class="text-4xl font-bold" style="color: #009;">Your Personalized</h1>
                    <h2 class="text-4xl font-bold inline-block" style="color: #009;">
                        NAD+ Plan <span class="px-3 rounded" style="background-color: #ff0;">Is Ready!</span>
                    </h2>
                </div>

                <!-- Message -->
                <div class="inline-block px-4 py-3 rounded-lg mb-8" style="background-color: #eee;">
                    <span class="mr-2" style="color: #060;">✓</span>
                    Based on your quiz, you're the perfect candidate for NAD+ therapy!
                </div>

                <!-- Second style option with gradient header -->
                <div class="rounded-2xl shadow-lg overflow-hidden" style="background-color: #fff;">
                    <div class="relative">
                        <div class="absolute top-0 left-0 right-0 h-10"
                            style="background: linear-gradient(to right, #009, #099);"></div>
                        <div class="flex flex-col md:flex-row">
                            <div class="flex-1 p-5 relative border-b md:border-b-0 md:border-r"
                                style="border-color: #ccc;">
                                <div class="uppercase font-bold text-sm tracking-wider mb-3 relative z-10"
                                    style="color: #fff;">AGE</div>
                                <div style="color: #333;">31</div>
                            </div>
                            <div class="flex flex-col p-5 relative border-b md:border-b-0 md:border-r"
                                style="border-color: #ccc;">
                                <div class="uppercase font-bold text-sm tracking-wider mb-3 relative z-10"
                                    style="color: #fff;">Cellular Function</div>
                                <div style="color: #333;">Enhanced Mitochondrial Support</div>
                            </div>
                            <div class="flex-1 p-5 relative">
                                <div class="uppercase font-bold text-sm tracking-wider mb-3 relative z-10"
                                    style="color: #fff;">SEX</div>
                                <div style="color: #333;">Female</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Image Section -->
                <div class="mt-12">
                    <img src="https://picsum.photos/500/300" alt="Example image"
                        class="max-w-full h-auto mx-auto rounded-lg shadow-md" style="max-width: 500px;">
                </div>

                <!-- Features Section -->
                <div class="mt-12 p-8 rounded-xl" style="background-color: #ffd;">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Free Overnight Shipping -->
                        <div class="flex items-center p-4 rounded-lg"
                            style="background-color: #fff; border: 1px solid #ccc;">
                            <div class="w-12 h-12 flex-shrink-0" style="background-color: #009;">
                                <svg class="w-full h-full p-2" viewBox="0 0 24 24" fill="#fff">
                                    <path
                                        d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1a1 1 0 0 0 .7-1.7L12 2 2.3 11.3A1 1 0 0 0 3 13z" />
                                </svg>
                            </div>
                            <div class="ml-4 text-left">
                                <p class="font-bold" style="color: #009;">FREE overnight shipping to</p>
                                <p class="font-bold" style="color: #009;">[State]</p>
                            </div>
                        </div>

                        <!-- Board-Certified Physicians -->
                        <div class="flex items-center p-4 rounded-lg"
                            style="background-color: #fff; border: 1px solid #ccc;">
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
                        </div>

                        <!-- Prescribed in less than 12 Hours -->
                        <div class="flex items-center p-4 rounded-lg"
                            style="background-color: #fff; border: 1px solid #ccc;">
                            <div class="w-12 h-12 flex-shrink-0" style="background-color: #009;">
                                <svg class="w-full h-full p-2" viewBox="0 0 24 24" fill="#fff">
                                    <path
                                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                </svg>
                            </div>
                            <div class="ml-4 text-left">
                                <p class="font-bold" style="color: #009;">Prescribed in less</p>
                                <p class="font-bold" style="color: #009;">than 12 Hours</p>
                            </div>
                        </div>

                        <!-- FDA-Registered Pharmacies -->
                        <div class="flex items-center p-4 rounded-lg"
                            style="background-color: #fff; border: 1px solid #ccc;">
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
                        </div>
                    </div>
                </div>

                <!-- Get Started Button -->
                <div class="mt-12">
                    <button
                        class="w-full py-4 px-6 rounded-lg text-white text-xl font-bold flex items-center justify-center"
                        style="background: linear-gradient(to right, #000099, #009999);">
                        WOOHOO! I'm Ready to Get Started
                        <span class="ml-2">👋</span>
                    </button>
                </div>

                <!-- NAD+ Benefits Section -->
                <div class="mt-12 p-8">
                    <div class="flex flex-col md:flex-row items-center gap-8">
                        <div class="w-full md:w-1/3">
                            <img src="https://picsum.photos/200/400" alt="NAD+ Bottle"
                                class="w-full max-w-[200px] mx-auto"
                                style="filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));">
                        </div>
                        <div class="w-full md:w-2/3 text-left">
                            <h2 class="text-2xl font-bold mb-6" style="color: #0000ff;">
                                What to Look Forward with
                                <span class="relative">
                                    NAD+
                                    <span class="absolute bottom-0 left-0 w-full h-3"
                                        style="background-color: #ffff00; z-index: -1;"></span>
                                </span>
                            </h2>
                            <div class="space-y-4">
                                <div class="flex items-center gap-3">
                                    <span style="color: #0000ff;">✓</span>
                                    <span class="text-lg font-semibold" style="color: #0000ff;">Sharper Focus</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span style="color: #0000ff;">✓</span>
                                    <span class="text-lg font-semibold" style="color: #0000ff;">More Energy</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span style="color: #0000ff;">✓</span>
                                    <span class="text-lg font-semibold" style="color: #0000ff;">Healthy Weight
                                        Management</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span style="color: #0000ff;">✓</span>
                                    <span class="text-lg font-semibold" style="color: #0000ff;">Faster Muscle
                                        Recovery</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span style="color: #0000ff;">✓</span>
                                    <span class="text-lg font-semibold" style="color: #0000ff;">Anti-Aging
                                        Benefits</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Testimonials Section -->
                <div class="mt-12 p-8 rounded-xl" style="background-color: #fffff0;">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold" style="color: #0000ff;">
                            What <span class="relative">
                                Real
                                <span class="absolute bottom-0 left-0 w-full h-3"
                                    style="background-color: #ffff00; z-index: -1;"></span>
                            </span> NAD+ Users Are Saying
                        </h2>
                        <p class="text-xl mt-2" style="color: #0000ff;">NAD+ users are THRILLED about their results!</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Testimonial 1 -->
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                                <div>
                                    <h3 class="font-bold">Enrique</h3>
                                    <p class="text-sm text-gray-500">30 years old</p>
                                </div>
                            </div>
                            <p class="text-gray-700">"I'll say this: I'm 30 in school and work been so drained, stopped
                                working out and lost focus. I couldn't even read chapters without loosing attention
                                span. After NAD+ I have energy and retain more info"</p>
                            <div class="mt-4 flex items-center text-gray-500">
                                <span>❤️ 14</span>
                            </div>
                        </div>

                        <!-- Testimonial 2 -->
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                                <div>
                                    <h3 class="font-bold">lushunrest</h3>
                                    <p class="text-sm text-gray-500">Verified User</p>
                                </div>
                            </div>
                            <p class="text-gray-700">"NAD injections are the best thing since sliced bread. They are the
                                best they help me with my chronic fatigue"</p>
                            <div class="mt-4 flex items-center text-gray-500">
                                <span>❤️ 3</span>
                            </div>
                        </div>

                        <!-- Testimonial 3 -->
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                                <div>
                                    <h3 class="font-bold">bohobuttrfly</h3>
                                    <p class="text-sm text-gray-500">Verified User</p>
                                </div>
                            </div>
                            <p class="text-gray-700">"I swear by it, I notice a change not just in energy, but in my
                                skin, my work outs, my concentration. really helpful post menopause"</p>
                            <div class="mt-4 flex items-center text-gray-500">
                                <span>❤️ 49</span>
                            </div>
                        </div>

                        <!-- Testimonial 4 -->
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                                <div>
                                    <h3 class="font-bold">msKK</h3>
                                    <p class="text-sm text-gray-500">Verified User</p>
                                </div>
                            </div>
                            <p class="text-gray-700">"When I tell you we do not look 50! 🙌"</p>
                            <div class="mt-4 flex items-center text-gray-500">
                                <span>❤️ 3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Get Started TODAY Section -->
                <div class="mt-12 p-8 rounded-xl bg-white shadow-lg">
                    <h2 class="text-4xl font-bold mb-8" style="color: #0000ff;">
                        Get Started <span style="background-color: #ffff00; padding: 0 8px;">TODAY</span>
                    </h2>
                    <div class="space-y-6 text-left">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center"
                                style="background-color: #ffff00;">
                                <span class="text-2xl" style="color: #0000ff;">✓</span>
                            </div>
                            <p class="text-xl font-bold" style="color: #0000ff;">UNLIMITED doctor support, 7 days a week
                            </p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center"
                                style="background-color: #ffff00;">
                                <span class="text-2xl" style="color: #0000ff;">✓</span>
                            </div>
                            <p class="text-xl font-bold" style="color: #0000ff;">Prescribed & shipped within 48 HOURS
                            </p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center"
                                style="background-color: #ffff00;">
                                <span class="text-2xl" style="color: #0000ff;">✓</span>
                            </div>
                            <p class="text-xl font-bold" style="color: #0000ff;">Cost of medication INCLUDED in the
                                price</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center"
                                style="background-color: #ffff00;">
                                <span class="text-2xl" style="color: #0000ff;">✓</span>
                            </div>
                            <p class="text-xl font-bold" style="color: #0000ff;">No hidden fees—what you see is what you
                                pay</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center"
                                style="background-color: #ffff00;">
                                <span class="text-2xl" style="color: #0000ff;">✓</span>
                            </div>
                            <p class="text-xl font-bold" style="color: #0000ff;">No contracts, cancel ANYTIME</p>
                        </div>
                    </div>
                </div>

                <!-- Product Cards Section -->
                <div class="mt-12 space-y-8">
                    <!-- NAD+ Injection Card -->
                    <div class="rounded-xl overflow-hidden" style="background-color: #000080;">
                        <div class="p-6 flex flex-col md:flex-row items-center gap-6 text-white">
                            <div class="w-48 flex-shrink-0">
                                <img src="https://placehold.co/200x200/white/white" alt="NAD+ Injection Vial"
                                    class="w-full">
                            </div>
                            <div class="flex-grow text-left">
                                <h3 class="text-3xl font-bold mb-2">NAD+ Injection</h3>
                                <p class="text-lg mb-4">Boosts energy, supports brain function, and helps fight aging at
                                    the cellular level</p>
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="w-3 h-3 rounded-full bg-green-400"></span>
                                    <span>In-Stock</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-4xl font-bold">$249</span>
                                    <button class="px-6 py-3 rounded-lg font-bold text-blue-900"
                                        style="background-color: #ffff00;">
                                        High Demand
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Alternative Option Text -->
                    <div class="text-center py-8">
                        <h3 class="text-3xl font-bold" style="color: #000080;">
                            Not a fan of needles
                            <span class="inline-block mx-2" style="color: #000080;">?</span>
                            ?
                        </h3>
                        <p class="text-2xl font-bold mt-2" style="color: #000080;">
                            Try <span style="color: #000080;">NAD+ nasal spray!</span>
                        </p>
                    </div>

                    <!-- NAD+ Nasal Spray Card -->
                    <div class="rounded-xl overflow-hidden" style="background-color: #000080;">
                        <div class="p-6 flex flex-col md:flex-row items-center gap-6 text-white">
                            <div class="w-48 flex-shrink-0">
                                <img src="https://placehold.co/200x200/white/white" alt="NAD+ Nasal Spray Bottle"
                                    class="w-full">
                            </div>
                            <div class="flex-grow text-left">
                                <h3 class="text-3xl font-bold mb-2">NAD+ Nasal Spray</h3>
                                <p class="text-lg mb-4">Boosts energy, supports brain function, and helps fight aging at
                                    the cellular level</p>
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="w-3 h-3 rounded-full bg-green-400"></span>
                                    <span>In-Stock</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-4xl font-bold">$249</span>
                                    <button class="px-6 py-3 rounded-lg font-bold text-blue-900"
                                        style="background-color: #ffff00;">
                                        Needle-Free Option
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Get Started Button -->
                <div class="mt-12">
                    <button
                        class="w-full py-4 px-6 rounded-lg text-white text-xl font-bold flex items-center justify-center"
                        style="background: linear-gradient(to right, #000099, #009999);">
                        PROCEED TO CHECKOUT
                        <span class="ml-2">-></span>
                    </button>
                </div>

                <!-- Approval Timer Section -->
                <div class="mt-12 text-center">
                    <h3 class="text-2xl font-bold mb-4" style="color: #0000ff;">
                        Your approval is reserved for 13:59
                    </h3>
                    <p class="text-sm italic" style="background-color: #ffeb3b; padding: 8px;">
                        *These are unsolicited comments from users on social media and online forums. Individual
                        experiences may vary, and results are not guaranteed.
                    </p>
                </div>
            </div>






























    






    
    
    </div>
`;
