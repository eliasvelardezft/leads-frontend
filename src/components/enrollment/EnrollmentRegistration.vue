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

<!-- <template>
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
</template> -->

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-50">
        <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="bg-gray-800 p-4 rounded-lg mx-auto w-3/4 mt-10">
            <label for="lead-id" class="block text-sm font-medium">Lead ID:</label>
            <input type="text" id="lead-id" v-model="leadId" class="bg-gray-50 text-gray-900 p-2 rounded w-full mb-4">
            <EnrollmentForm v-for="(enrollment, index) in enrollments" :key="index" v-model="enrollments[index]" />
            <button type="button" @click="addEnrollment"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Add Another
                Enrollment</button>
            <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
        <div v-else class="w-full max-w-md p-8 bg-white rounded shadow-md flex flex-col items-center">
            <h1 class="mb-4 text-2xl font-semibold text-gray-700">Enrollments Submitted</h1>
            <div v-for="(enrollment, index) in enrollments" :key="index"
                class="bg-gray-800 p-4 rounded-lg mx-auto w-full mt-4">
                <p>Lead ID: {{ leadId }}</p>
                <p>Career ID: {{ enrollment.career.name }}</p>
                <p>Subject ID: {{ enrollment.subject.name }}</p>
                <p>Times taken: {{ enrollment.subjectTimesTaken }}</p>
                <p>classroom: {{ enrollment.course.classroom }}</p>
                <p>professor: {{ enrollment.course.professor }}</p>
                <p>starts: {{ enrollment.course.start_date }}</p>
                <p>ends: {{ enrollment.course.end_date }}</p>
            </div>
            <button class="w-full p-8 bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded">
                <router-link to="/" class="text-white">Home</router-link>
            </button>
        </div>
    </div>
</template>
