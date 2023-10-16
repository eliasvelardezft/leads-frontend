import axios from "axios";

const CourseService = {
  api: axios.create({
    baseURL: "http://localhost:9000/api/v1/admin/course",
    withCredentials: false,
  }),

  async getCourses(filter) {
    const res = await this.api.get("/", { params: filter });
    return res.data;
  },

  async getCourse(id) {
    const res = await this.api.get(`/${id}`);
    return res.data;
  },
};

export default CourseService;
