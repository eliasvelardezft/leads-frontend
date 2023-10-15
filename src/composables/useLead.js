import { ref } from "vue";
import LeadService from "../services/LeadService.js";
import LeadAdapter from "../adapters/leadAdapter.js";
import ExceptionAdapter from "../adapters/exceptionAdapter.js";

export const useLead = () => {
  const leads = ref([]);
  const lead = ref({});
  const leadId = ref(null);
  const error = ref(null);

  const getAllLeads = async () => {
    try {
      const response = await LeadService.getAllLeads();
      leads.value = response.data.map((lead) => LeadAdapter.toFrontend(lead));
    } catch (err) {
      error.value = ExceptionAdapter("lead", err);
    }
  };

  const getOneLead = async (id) => {
    try {
      const response = await LeadService.getOneLead(id);
      lead.value = response.data;
    } catch (err) {
      error.value = ExceptionAdapter("lead", err);
    }
  };

  const createLead = async (lead) => {
    try {
      const leadData = LeadAdapter.toBackend(lead);
      const response = await LeadService.createLead(leadData);
      leadId.value = response;
    } catch (err) {
      error.value = ExceptionAdapter("lead", err);
    }
  };

  return { leads, lead, leadId, error, getAllLeads, getOneLead, createLead };
};
