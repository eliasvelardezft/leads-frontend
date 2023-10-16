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
    <div>
        <label for="career-id">Career:</label>
        <select @change="updateParent" id="career-id" v-model="modelValue.career">
            <option v-for="career in careers" :key="career.id" :value="career">
                {{ career.name }}
            </option>
        </select>
        <label for="subect-times-taken">Times taken:</label>
        <input type="number" id="subect-times-taken" v-model="modelValue.subjectTimesTaken">

        <label for="subject-id">Subject:</label>
        <select @change="updateParent" id="subject-id" v-model="modelValue.subject" :disabled="!modelValue.career">
            <option v-for="subject in subjects" :key="subject.id" :value="subject">
                {{ subject.name }}
            </option>
        </select>

        <label for="course-id">Course:</label>
        <select @change="updateParent" id="course-id" v-model="modelValue.course" :disabled="!modelValue.subject">
            <option v-for="course in courses" :key="course.id" :value="course">
                {{ course.start_date }}/{{ course.end_date }}/{{ course.classroom }}/{{ course.professor }}
            </option>
        </select>
    </div>
</template>
