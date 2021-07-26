<template>
  <section class="pb-12">
    <div class="bg-theme-300 pb-96"></div>
    <div class="max-w-6xl px-4 mx-auto -mt-80">
      <div class="overflow-hidden bg-white rounded-md shadow-lg">
        <div class="flex flex-wrap">
          <div class="p-4 prose bg-gray-200 sm:order-2 md:w-1/2">
            <img
              src="~assets/img/book-an-appointment.035bfd4.png"
              alt="Book An Appointment"
              class="w-full"
            />
            <p>
              Book An Appointment to view ShowFlat &amp; get VVIP Discounts
              (Limited Time), Direct Developer Price, &amp; Hardcopy E-Brochure.
              Guaranteed with Best Price Possible.
            </p>
            <p>OR</p>
            <p>
              Fill up the form on the left and get a copy of Price, E-Brochure,
              and Latest Updates!
            </p>
            <p>Strictly no spam policy.</p>
          </div>
          <div class="p-4 md:order-1 md:w-1/2">
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
                    <label
                      for="make_appt"
                      class="block font-medium text-gray-500"
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
                        <a
                          href="/privacy-policy"
                          class="font-medium underline text-theme-600"
                          >Privacy Policy</a
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
}

[multiple],
[type='date'],
[type='datetime-local'],
[type='email'],
[type='month'],
[type='number'],
[type='password'],
[type='search'],
[type='tel'],
[type='text'],
[type='time'],
[type='url'],
[type='week'],
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

.form-input {
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

</style>
