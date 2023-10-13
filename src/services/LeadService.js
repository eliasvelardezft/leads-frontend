import axios from 'axios';

const LeadService = {
  api: axios.create({
    baseURL: 'http://localhost:9000/api/v1/leads',
    withCredentials: true,
  }),

  async getAllLeads() {
    try {
      const res = await this.api.get('/');
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  async getOneLead(id) {
    try {
      const res = await this.api.get(`/${id}`);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  async createLead(lead) {
    try {
      const res = await this.api.post('/', lead);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default LeadService;
