<script setup>
import { ref } from 'vue';
import EnrollmentForm from './EnrollmentForm.vue';
import { useEnrollment } from '@/composables/useEnrollment';

const enrollments = ref([{}]);
const leadId = ref(null);
const isSubmitted = ref(false);
const { createEnrollments, error } = useEnrollment();

const addEnrollment = async () => {
    enrollments.value.push({});
};

const handleSubmit = async () => {
    console.log("lead idL ", leadId.value)
    console.log("enrollments: ", enrollments.value)
    await createEnrollments(enrollments.value, leadId.value);
    if (!error.value) {
        isSubmitted.value = true;
    }
};

</script>

<template>
    <form v-if="!isSubmitted" @submit.prevent="handleSubmit">
        <label for="lead-id">Lead ID:</label>
        <input type="text" id="lead-id" v-model="leadId">
        <EnrollmentForm v-for="(enrollment, index) in enrollments" :key="index" v-model="enrollments[index]" />
        <button type="button" @click="addEnrollment">Add Another Enrollment</button>
        <button type="submit">Submit</button>
    </form>
    <div v-else>
        <h1>Enrollments Submitted</h1>
        <div v-for="(enrollment, index) in enrollments" :key="index">
            <p>------------------</p>
            <p>Lead ID: {{ leadId }}</p>
            <p>Career ID: {{ enrollment.career.name }}</p>
            <p>Subject ID: {{ enrollment.subject.name }}</p>
            <p>Times taken: {{ enrollment.subjectTimesTaken }}</p>
            <p>classroom: {{ enrollment.course.classroom }}</p>
            <p>professor: {{ enrollment.course.professor }}</p>
            <p>starts: {{ enrollment.course.start_date }}</p>
            <p>ends: {{ enrollment.course.end_date }}</p>
            <p>------------------</p>
        </div>
    </div>
</template>
