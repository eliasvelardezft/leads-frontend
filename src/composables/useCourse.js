import { ref } from "vue";
import CourseService from "@/services/CourseService.js";
import ExceptionAdapter from "@/adapters/exceptionAdapter.js";

export const useCourse = () => {
  const courses = ref([]);
  const course = ref({});
  const error = ref(null);

  const getCourses = async (filter) => {
    try {
      const response = await CourseService.getCourses(filter);
      courses.value = response;
      return response;
    } catch (err) {
      error.value = ExceptionAdapter("course", err);
    }
  };

  const getCourse = async (id) => {
    try {
      const response = await CourseService.getCourse(id);
      course.value = response;
    } catch (err) {
      error.value = ExceptionAdapter("course", err);
    }
  };

  return {
    courses,
    course,
    error,
    getCourses,
    getCourse,
  };
};
