<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Book An Appointment
      </div>
    </div>
    <div class="py-12 space-y-6">
      <section class="max-w-4xl px-4 mx-auto space-y-8 divide-y">
        <div class="space-y-6">
          <p>
            It is important to only engage the Official Direct Developer Team to
            assist you on all matters related to the new launch condominium at
            Normanton Park. There are several complex procedures and key factors
            to consider before committing to purchase a unit. Rest assured that
            all our representatives are certified, well-trained and committed to
            delivering and value-add.
          </p>
          <p>
            By engaging the Official Direct Developer Team, you will also enjoy
            <span class="text-red-500">
              early bird discounts &amp; the best possible direct developer
              price </span
            >. There is no commission required to be paid.
          </p>
          <p>
            Viewing of Normanton Park Showflat is by appointment only. Register
            for an appointment below. Our friendly appointed representative will
            get back to you as soon as we can.
          </p>
        </div>
        <p class="py-6">
          <span class="font-semibold text-red-500">Important Note:</span> To
          book a unit, please call
          <a href="tel:+6561003337" class="font-medium text-brown-500"
            >+65 6100 3337</a
          >
          to tentatively reserve your choice unit before coming down to the show
          flat to avoid disappointment. Units are selling fast and are based on
          first come first serve basis. If you wish to visit the showflat first
          before making a decision, kindly book an appointment via the form
          below before coming down.
        </p>
      </section>
      <section class="max-w-2xl px-4 mx-auto space-y-4">
        <form class="space-y-4">
          <section
            class="grid grid-cols-1 gap-2 transition-all transform sm:gap-6"
          >
            <div>
              <label for="date" class="block font-medium text-gray-500"
                >Visit Date<span class="text-red-500">*</span></label
              >
              <input
                type="hidden"
                data-input="true"
                id="date"
                class="form-input flatpickr flatpickr-input"
              /><input
                class="form-input flatpickr form-control input"
                placeholder=""
                tabindex="0"
                type="text"
                readonly="readonly"
              />
              <!---->
            </div>
            <div>
              <label for="time" class="block font-medium text-gray-500"
                >Time<span class="text-red-500">*</span></label
              >
              <select id="time" required="required" class="form-input">
                <option>11:00 AM</option>
                <option>11:30 AM</option>
                <option>12:00 PM</option>
                <option>12:30 PM</option>
                <option>01:00 PM</option>
                <option>01:30 PM</option>
                <option>02:00 PM</option>
                <option>02:30 PM</option>
                <option>03:00 PM</option>
                <option>03:30 PM</option>
                <option>04:00 PM</option>
                <option>04:30 PM</option>
                <option>05:00 PM</option>
                <option>05:30 PM</option>
                <option>06:00 PM</option>
                <option>06:30 PM</option>
              </select>
              <!---->
            </div>
            <div>
              <label for="bedroom_size" class="block font-medium text-gray-500">
                Bedroom Size Preference<span class="text-red-500"
                  >*</span
                ></label
              >
              <select id="bedroom_size" required="required" class="form-input">
                <option>1 Bedroom</option>
                <option>2 Bedroom</option>
                <option>3 Bedroom</option>
                <option>4 Bedroom</option>
                <option>Penthouse</option>
              </select>
              <!---->
            </div>
            <div class="flex flex-wrap items-center justify-end pt-5 sm:pt-0">
              <!---->
            </div>
          </section>
        </form>
        <!---->
      </section>
    </div>
  </div>
</template>
