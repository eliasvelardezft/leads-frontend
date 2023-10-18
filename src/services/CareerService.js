import axios from "axios";

const CareerService = {
  api: axios.create({
    baseURL: "http://localhost:9000/api/v1/admin/career",
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
