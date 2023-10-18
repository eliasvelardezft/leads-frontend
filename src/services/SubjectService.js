import axios from "axios";
import { apiRoot } from "@/constants";

const SubjectService = {
  api: axios.create({
    baseURL: `${apiRoot}/admin/subject`,
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
