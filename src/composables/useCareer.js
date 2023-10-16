import { ref } from "vue";
import CareerService from "@/services/CareerService.js";
import ExceptionAdapter from "@/adapters/exceptionAdapter.js";

export const useCareer = () => {
  const careers = ref([]);
  const career = ref({});
  const error = ref(null);

  const getCareers = async () => {
    try {
      const response = await CareerService.getCareers();
      careers.value = response;
      return response;
    } catch (err) {
      error.value = ExceptionAdapter("career", err);
    }
  };

  const getCareer = async (id) => {
    try {
      const response = await CareerService.getCareer(id);
      career.value = response;
    } catch (err) {
      error.value = ExceptionAdapter("career", err);
    }
  };

  return {
    careers,
    career,
    error,
    getCareers,
    getCareer,
  };
};
