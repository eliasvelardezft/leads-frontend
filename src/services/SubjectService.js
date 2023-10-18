import axios from "axios";

const SubjectService = {
  api: axios.create({
    baseURL: "http://localhost:9000/api/v1/admin/subject",
    withCredentials: false,
  }),

  async getSubjects(filter) {
    const res = await this.api.get("", { params: filter });
    return res.data;
  },

  async getSubject(id) {
    const res = await this.api.get(`/${id}`);
    return res.data;
  },
};

export default SubjectService;
