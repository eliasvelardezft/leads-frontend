import axios from "axios";
import { apiRoot } from "@/constants";

const CourseService = {
  api: axios.create({
    baseURL: `${apiRoot}/admin/course`,
    withCredentials: false,
  }),

  async getCourses(filter) {
    const res = await this.api.get("", { params: filter });
    return res.data;
  },

  async getCourse(id) {
    const res = await this.api.get(`/${id}`);
    return res.data;
  },
};

export default CourseService;
