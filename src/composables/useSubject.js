import { ref } from "vue";
import SubjectService from "@/services/SubjectService.js";
import ExceptionAdapter from "@/adapters/exceptionAdapter.js";

export const useSubject = () => {
  const subjects = ref([]);
  const subject = ref({});
  const error = ref(null);

  const getSubjects = async (filter) => {
    try {
      const response = await SubjectService.getSubjects(filter);
      subjects.value = response;
      return response;
    } catch (err) {
      error.value = ExceptionAdapter("subject", err);
    }
  };

  const getSubject = async (id) => {
    try {
      const response = await SubjectService.getSubject(id);
      subject.value = response;
    } catch (err) {
      error.value = ExceptionAdapter("subject", err);
    }
  };

  return {
    subjects,
    subject,
    error,
    getSubjects,
    getSubject,
  };
};
