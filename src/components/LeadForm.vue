<script setup>
import { ref, reactive, toRefs } from 'vue';
import { useLead } from '../composables/useLead';
import { useCareer } from '../composables/useCareer';

const emit = defineEmits();

const { createLead, leadId, error } = useLead();
const { getAllCareers, careers } = useCareer();

await getAllCareers();

const leadCreate = ref({
  firstName: 'elias',
  lastName: 'velardez',
  email: 'elias@gmail.com',
  phoneNumber: '+1234567',
  yearOfInscription: '2019',
  careerId: '1',
  address: reactive({
    street: 'augusto cortazar',
    number: '4000',
    city: 'cba',
    province: 'cba',
    country: 'ARG ',
  }),
});

const handleSubmit = async () => {
  error.value = null;
  await createLead(leadCreate.value)
  if (!error.value) {
    emit('lead-created', leadId.value);
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
  <div>
    <h1>Register a Lead</h1>
    <h3 v-if="error">Error: {{ error }}</h3>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" v-model="firstName">
      </div>

      <div>
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" v-model="lastName">
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
      </div>

      <div>
        <label for="phone-number">Phone Number:</label>
        <input type="text" id="phone-number" v-model="phoneNumber">
      </div>

      <div>
        <label for="year-of-inscription">Year of Inscription:</label>
        <input type="number" id="year-of-inscription" v-model="yearOfInscription">
      </div>

      <div>
        <label for="career-id">Career:</label>
        <select id="career-id" v-model="careerId">
          <option v-for="career in careers" :key="career.id" :value="career.id">
            {{ career.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="street">Street:</label>
        <input type="text" id="street" v-model="address.street">
      </div>
      <div>
        <label for="number">Number:</label>
        <input type="text" id="number" v-model="address.number">
      </div>
      <div>
        <label for="city">City:</label>
        <input type="text" id="city" v-model="address.city">
      </div>
      <div>
        <label for="province">Province:</label>
        <input type="text" id="province" v-model="address.province">
      </div>
      <div>
        <label for="country">Country:</label>
        <input type="text" id="country" v-model="address.country">
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
