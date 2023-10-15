import { ref } from "vue";
import CareerService from "../services/CareerService.js";
import ExceptionAdapter from "../adapters/exceptionAdapter.js";

export const useCareer = () => {
  const careers = ref([]);
  const career = ref({});
  const error = ref(null);

  const getAllCareers = async () => {
    try {
      const response = await CareerService.getAllCareers();
      careers.value = response;
      return response;
    } catch (err) {
      error.value = ExceptionAdapter("career", err);
    }
  };

  const getOneCareer = async (id) => {
    try {
      const response = await CareerService.getOneCareer(id);
      career.value = response;
    } catch (err) {
      error.value = ExceptionAdapter("career", err);
    }
  };

  return {
    careers,
    career,
    error,
    getAllCareers,
    getOneCareer,
  };
};
