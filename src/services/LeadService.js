import axios from "axios";
import { apiRoot } from "@/constants";

const LeadService = {
  api: axios.create({
    baseURL: `${apiRoot}/leads`,
    withCredentials: false,
  }),

  async getLeads() {
    const res = await this.api.get("");
    return res.data;
  },

  async getLead(id) {
    const res = await this.api.get(`/${id}`);
    return res.data;
  },

  async createLead(lead) {
    const res = await this.api.post("", lead);
    return res.data;
  },
};

export default LeadService;
