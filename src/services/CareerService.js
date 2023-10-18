import axios from "axios";
import { apiRoot } from "@/constants";

const CareerService = {
  api: axios.create({
    baseURL: `${apiRoot}/admin/career`,
    withCredentials: false,
  }),

  async getCareers() {
    const res = await this.api.get("");
    return res.data;
  },

  async getCareer(id) {
    const res = await this.api.get(`/${id}`);
    return res.data;
  },
};

export default CareerService;
