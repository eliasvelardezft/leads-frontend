<script setup>
import { watch } from 'vue';
import { useCareer } from '@/composables/useCareer';
import { useSubject } from '@/composables/useSubject';
import { useCourse } from '@/composables/useCourse';

const emit = defineEmits();
const { getCareers, careers } = useCareer();
const { getSubjects, subjects } = useSubject();
const { getCourses, courses } = useCourse();
const { modelValue } = defineProps(["modelValue"]);

await getCareers();


watch(() => modelValue, async (newEnrollment) => {
    if (newEnrollment.career) {
        await getSubjects({ career_id: newEnrollment.career.id });
    }
    if (newEnrollment.subject) {
        await getCourses({ subject_id: newEnrollment.subject.id });
    }
}, { deep: true });

const updateParent = () => {
    emit("update:modelValue", modelValue);
};

</script>

<template>
    <div class="bg-gray-800 p-4 rounded-lg mb-4">
        <label for="career-id" class="block text-sm font-medium">Career:</label>
        <select @change="updateParent" id="career-id" v-model="modelValue.career"
            class="bg-gray-50 text-gray-900 p-2 rounded w-full mb-4">
            <option v-for="career in careers" :key="career.id" :value="career">
                {{ career.name }}
            </option>
        </select>
        <label for="subject-id" class="block text-sm font-medium">Subject:</label>
        <select @change="updateParent" id="subject-id" v-model="modelValue.subject" :disabled="!modelValue.career"
            class="bg-gray-50 text-gray-900 p-2 rounded w-full mb-4">
            <option v-for="subject in subjects" :key="subject.id" :value="subject">
                {{ subject.name }}
            </option>
        </select>
        <label for="subect-times-taken" class="block text-sm font-medium">Times taken:</label>
        <input required type="number" id="subect-times-taken" v-model="modelValue.subjectTimesTaken"
            class="bg-gray-50 text-gray-900 p-2 rounded w-full mb-4">
        <label for="course-id" class="block text-sm font-medium">Course:</label>
        <select @change="updateParent" id="course-id" v-model="modelValue.course" :disabled="!modelValue.subject"
            class="bg-gray-50 text-gray-900 p-2 rounded w-full mb-4">
            <option v-for="course in courses" :key="course.id" :value="course">
                {{ course.start_date }}/{{ course.end_date }}/{{ course.classroom }}/{{ course.professor }}
            </option>
        </select>
    </div>
</template>
