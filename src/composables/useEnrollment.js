import { ref } from "vue";
import EnrollmentService from "@/services/EnrollmentService.js";
import EnrollmentAdapter from "@/adapters/enrollmentAdapter.js";
import ExceptionAdapter from "@/adapters/exceptionAdapter.js";

export const useEnrollment = () => {
  const enrollments = ref([]);
  const enrollment = ref({});
  const enrollmentId = ref(null);
  const enrollmentError = ref(null);

  const getEnrollments = async (filter) => {
    try {
      const response = await EnrollmentService.getEnrollments(filter);
      enrollments.value = response.data.map((enrollment) =>
        EnrollmentAdapter.toFrontend(enrollment)
      );
    } catch (err) {
      enrollmentError.value = ExceptionAdapter(err);
    }
  };

  const getEnrollment = async (id) => {
    try {
      const response = await EnrollmentService.getEnrollment(id);
      enrollment.value = response.data;
    } catch (err) {
      enrollmentError.value = ExceptionAdapter(err);
    }
  };

  const createEnrollments = async (enrollmentsCreate, leadId) => {
    try {
      enrollmentsCreate = enrollmentsCreate.map((enrollment) => ({
        ...enrollment,
        leadId,
      }));
      const enrollmentsData = enrollmentsCreate.map((enrollment) => {
        return EnrollmentAdapter.toBackend(enrollment);
      });
      const response = await EnrollmentService.createEnrollments(enrollmentsData);
      enrollments.value = response;
      return response;
    } catch (err) {
      enrollmentError.value = ExceptionAdapter(err);
    }
  };

  return {
    enrollments,
    enrollment,
    enrollmentId,
    enrollmentError,
    getEnrollments,
    getEnrollment,
    createEnrollments,
  };
};
