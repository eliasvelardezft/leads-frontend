import axios from "axios";

const LeadService = {
  api: axios.create({
    baseURL: "http://localhost:9000/api/v1/leads",
    withCredentials: false,
  }),

  async getAllLeads() {
    const res = await this.api.get("/");
    return res.data;
  },

  async getOneLead(id) {
    const res = await this.api.get(`/${id}`);
    return res.data;
  },

  async createLead(lead) {
    const res = await this.api.post("/", lead);
    return res.data;
  },
};

export default LeadService;
