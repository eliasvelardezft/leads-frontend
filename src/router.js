import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";
import LeadRegistration from "@/components/lead/LeadRegistration.vue";
import EnrollmentRegistration from "@/components/enrollment/EnrollmentRegistration.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/register-lead", component: LeadRegistration },
  { path: "/enroll", component: EnrollmentRegistration },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
