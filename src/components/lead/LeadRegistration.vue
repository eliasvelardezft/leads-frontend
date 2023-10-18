<script setup>
import { ref, reactive, toRefs } from 'vue';
import { useLead } from '@/composables/useLead';
import { useCareer } from '@/composables/useCareer';

const { createLead, leadId, leadError } = useLead();
const { getCareers, careers } = useCareer();

await getCareers();

const isSubmitted = ref(false);
const leadCreate = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  yearOfInscription: '',
  careerId: '',
  address: reactive({
    street: '',
    number: '',
    city: '',
    province: '',
    country: '',
  }),
});

const handleSubmit = async () => {
  leadError.value = null;
  await createLead(leadCreate.value)
  if (!leadError.value) {
    isSubmitted.value = true;
  }
};

const {
  firstName,
  lastName,
  email,
  phoneNumber,
  yearOfInscription,
  careerId,
  address,
} = toRefs(leadCreate.value);


</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-50">
    <div v-if="!isSubmitted"
      class="w-full max-w-md p-8 bg-gray-800 rounded shadow-md flex flex-col justify-center items-center">
      <h3 v-if="leadError" class="text-red-500">Error: {{ leadError }}</h3>
      <h1 class="mb-4 text-2xl font-semibold">Register a Lead</h1>
      <form @submit.prevent="handleSubmit" class="w-full">
        <div class="mb-4">
          <label class="block text-sm font-medium" for="first-name">First Name:</label>
          <input required type="text" minlength="3" id="first-name" v-model="firstName"
            class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="last-name">Last Name:</label>
          <input required type="text" minlength="1" id="last-name" v-model="lastName"
            class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="email">Email:</label>
          <input required type="email" id="email" v-model="email" class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="phone-number">Phone Number:</label>
          <input required type="text" minlength="1" id="phone-number" v-model="phoneNumber"
            class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="year-of-inscription">Year of Inscription:</label>
          <input required type="number" id="year-of-inscription" v-model="yearOfInscription"
            class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="career-id">Career:</label>
          <select id="career-id" v-model="careerId" class="mt-1 p-2 w-full border rounded-md text-gray-900">
            <option v-for="career in careers" :key="career.id" :value="career.id">
              {{ career.name }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="street">Street:</label>
          <input required type="text" minlength="1" id="street" v-model="address.street"
            class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="number">Number:</label>
          <input required type="text" minlength="1" id="number" v-model="address.number"
            class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="city">City:</label>
          <input required type="text" minlength="1" id="city" v-model="address.city"
            class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="province">Province:</label>
          <input required type="text" minlength="1" id="province" v-model="address.province"
            class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="country">Country:</label>
          <input required type="text" minlength="1" id="country" v-model="address.country"
            class="mt-1 p-2 w-full border rounded-md text-gray-900">
        </div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
    <div v-else class="w-full max-w-md p-8 bg-white rounded shadow-md">
      <h1 class="mb-4 text-2xl font-semibold text-gray-700">Lead successfully registered</h1>
      <p class="mb-4 text-lg text-gray-600">Lead ID: {{ leadId }}</p>
      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <router-link to="/" class="block inset-0">Home</router-link>
      </button>
    </div>
  </div>
</template>
