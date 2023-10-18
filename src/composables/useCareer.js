import { ref } from "vue";
import CareerService from "@/services/CareerService.js";
import ExceptionAdapter from "@/adapters/exceptionAdapter.js";

export const useCareer = () => {
  const careers = ref([]);
  const career = ref({});
  const careerError = ref(null);

  const getCareers = async () => {
    try {
      const response = await CareerService.getCareers();
      careers.value = response;
      return response;
    } catch (err) {
      careerError.value = ExceptionAdapter(err);
    }
  };

  const getCareer = async (id) => {
    try {
      const response = await CareerService.getCareer(id);
      career.value = response;
    } catch (err) {
      careerError.value = ExceptionAdapter(err);
    }
  };

  return {
    careers,
    career,
    careerError,
    getCareers,
    getCareer,
  };
};
