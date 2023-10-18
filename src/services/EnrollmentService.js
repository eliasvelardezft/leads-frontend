import axios from "axios";

const EnrollmentService = {
  api: axios.create({
    baseURL: "http://localhost:9000/api/v1/enrollments",
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
