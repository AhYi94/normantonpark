<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Contact Us
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <section class="space-y-6">
          <form class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label
                  for="send_brochure"
                  class="
                    inline-flex
                    items-center
                    w-full
                    p-4
                    font-medium
                    text-gray-600
                    border
                    rounded-lg
                    border-theme-100
                    bg-theme-50
                  "
                  ><input
                    id="send_brochure"
                    type="checkbox"
                    class="
                      border-gray-300
                      rounded
                      shadow-sm
                      text-theme-600
                      focus:border-theme-300
                      focus:ring
                      focus:ring-theme-200
                      focus:ring-opacity-50
                    "
                  />
                  <span class="ml-2"
                    >Send me E-Brochure, Floor Plan &amp; Pricing now</span
                  ></label
                >
                <!---->
              </div>
              <div>
                <label for="enquiry" class="block font-medium text-gray-500"
                  >Enquiry<span class="text-red-500">*</span></label
                >
                <select id="enquiry" required="required" class="form-input">
                  <option>Financing</option>
                  <option>Purchase</option>
                  <option>View Showflat</option>
                  <option>CPF Fund Usage</option>
                  <option>Loan Eligibility (LTV)</option>
                  <option>Total Debt Servicing Ratio (TDSR)</option>
                  <option>Additional Buyer Stamp Duty (ABSD)</option>
                  <option>I want updates only</option>
                  <option>Others</option>
                </select>
                <!---->
              </div>
              <div>
                <label for="name" class="block font-medium text-gray-500"
                  >Name<span class="text-red-500">*</span></label
                >
                <input
                  id="name"
                  type="text"
                  required="required"
                  class="uppercase form-input"
                />
                <!---->
              </div>
              <div>
                <label for="mobile" class="block font-medium text-gray-500"
                  >Mobile<span class="text-red-500">*</span></label
                >
                <input
                  id="mobile"
                  type="text"
                  required="required"
                  class="lowercase form-input"
                />
                <!---->
              </div>
              <div>
                <label for="email" class="block font-medium text-gray-500"
                  >Email<span class="text-red-500">*</span></label
                >
                <input
                  id="email"
                  type="email"
                  required="required"
                  class="form-input"
                />
                <!---->
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block font-medium text-gray-500"
                  >Message</label
                >
                <textarea class="form-input"></textarea>
                <!---->
              </div>
              <div class="sm:col-span-2">
                <label for="make_appt" class="block font-medium text-gray-500"
                  >Make an Appointment?<span class="text-red-500"
                    >*</span
                  ></label
                >
                <div class="space-y-2">
                  <label class="flex items-center"
                    ><input
                      type="radio"
                      value="Would like to make an appointment."
                      class="mr-2"
                    />
                    I have some questions and I would like to make an
                    appointment to discuss in details.
                  </label>
                  <label class="flex items-center"
                    ><input
                      type="radio"
                      value="No appointment required."
                      class="mr-2"
                    />
                    No appointment required for now.
                  </label>
                  <!---->
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block font-medium text-gray-500"
                  >Acceptance of Privacy Policy<span class="text-red-500"
                    >*</span
                  ></label
                >
                <label class="inline-flex items-center"
                  ><input
                    type="checkbox"
                    value="1"
                    required="required"
                    class="
                      border-gray-300
                      rounded
                      shadow-sm
                      text-theme-600
                      focus:border-theme-300
                      focus:ring
                      focus:ring-theme-200
                      focus:ring-opacity-50
                    "
                  />
                  <span class="ml-2"
                    >I have read and agree to the
                    <NuxtLink
                      to="/privacy-policy"
                      class="font-medium underline text-theme-600"
                      >Privacy Policy</NuxtLink
                    ></span
                  ></label
                >
                <!---->
              </div>
            </div>
            <button
              class="
                inline-flex
                items-center
                px-4
                py-2
                text-xs
                font-medium
                tracking-widest
                text-white
                uppercase
                transition
                bg-gray-800
                border border-transparent
                rounded-md
                hover:bg-gray-700
                active:bg-gray-900
                focus:outline-none
                focus:border-gray-900
                focus:shadow-outline-gray
                disabled:opacity-25
              "
            >
              Submit
            </button>
            <button
              class="
                inline-flex
                items-center
                px-4
                py-2
                text-xs
                font-medium
                tracking-widest
                uppercase
                transition
                border border-transparent border-gray-800
                rounded-md
                hover:border-theme-700 hover:text-theme-700
                focus:outline-none focus:shadow-outline-gray
                disabled:opacity-25
              "
            >
              Reset
            </button>
          </form>
          <!---->
        </section>
      </div>
    </section>
  </div>
</template>
