<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Gallery
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-6">
          <img
            src="/_nuxt/img/Normanton-Park-50m-Pool-1024x502.d50107f.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-Commercial-1024x563.bfb906d.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-Facilities-1024x717.75a3a05.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-Grand-Lobby-1024x512.95aef3d.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-HERO-1-1024x768.65cc162.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-Landscape-1024x614.7fd5c32.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-LanternTrail-1024x614.6e49473.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-Overall_HERO-2-1024x716.7f62961.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-Panoramic-HERO-1024x293.05328c5.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-Strata-1-1024x560.1dd89bf.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-Strata-2-1024x563.af1f211.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          /><img
            src="/_nuxt/img/Normanton-Park-Unit-Views-1024x563.4114f6c.jpg"
            alt=""
            class="object-cover w-full h-full mx-auto rounded cursor-pointer"
          />
        </div>
        <section class="py-6">
          <NuxtLink
            to="/e-brochure"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              px-3
              py-3
              text-white
              transition
              rounded
              sm:px-0
              hover:bg-theme-900
              bg-theme-700
            "
          >
            Continue To e-Brochue
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M13 6l6 6-6 6M5 6l6 6-6 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
          ></NuxtLink>
        </section>
      </div>
    </section>
    <BookAppointment />
    <div class="fixed inset-0 z-20 overflow-y-auto" style="display: none">
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          px-4
          pt-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <div aria-hidden="true" class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          aria-hidden="true"
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          >&ZeroWidthSpace;</span
        >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          class="
            inline-block
            overflow-hidden
            text-left
            align-bottom
            transition-all
            transform
            bg-white
            rounded-lg
            shadow-xl
            sm:my-8 sm:align-middle sm:max-w-xl sm:w-full
          "
          style="display: none"
        >
          <div class="p-4 bg-white sm:p-6">
            <div class="space-y-2 text-center">
              <img
                src="/_nuxt/img/Normanton-Park-Commercial-1024x563.bfb906d.jpg"
                alt=""
                class="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
