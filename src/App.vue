<script setup>
import { ref } from 'vue';
import LeadForm from './components/LeadForm.vue';

const showForm = ref(true);
const leadId = ref(null);
const error = ref(null);

const handleLeadCreated = (id) => {
  leadId.value = id;
  showForm.value = false;
  error.value = null;
};

const resetForm = () => {
  showForm.value = true;
  leadId.value = null;
  error.value = null;
};
</script>

<template>
  <div>
    <div v-if="showForm">
      <LeadForm @lead-created="handleLeadCreated" />
    </div>
    <div v-if="!showForm">
      <p>Lead successfully created with ID: {{ leadId }}</p>
      <button @click="resetForm">Register Another Lead</button>
    </div>
  </div>
</template>

<style scoped></style>
