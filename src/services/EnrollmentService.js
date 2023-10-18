import axios from "axios";
import { apiRoot } from "@/constants";

const EnrollmentService = {
  api: axios.create({
    baseURL: `${apiRoot}/enrollments`,
    withCredentials: false,
  }),

  async getEnrollments(filter) {
    const res = await this.api.get("");
    return res.data;
  },

  async getEnrollment(id) {
    const res = await this.api.get(`/${id}`);
    return res.data;
  },

  async createEnrollments(enrollmentsData) {
    const res = await this.api.post("/bulk", enrollmentsData);
    return res.data;
  },
};

export default EnrollmentService;
