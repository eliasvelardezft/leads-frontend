import { ref } from "vue";
import CourseService from "@/services/CourseService.js";
import ExceptionAdapter from "@/adapters/exceptionAdapter.js";

export const useCourse = () => {
  const courses = ref([]);
  const course = ref({});
  const courseError = ref(null);

  const getCourses = async (filter) => {
    try {
      const response = await CourseService.getCourses(filter);
      courses.value = response;
      return response;
    } catch (err) {
      courseError.value = ExceptionAdapter(err);
    }
  };

  const getCourse = async (id) => {
    try {
      const response = await CourseService.getCourse(id);
      course.value = response;
    } catch (err) {
      courseError.value = ExceptionAdapter("course", err);
    }
  };

  return {
    courses,
    course,
    courseError,
    getCourses,
    getCourse,
  };
};
