import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/index.vue";
import ContactUs from "./pages/Contact-us.vue";
import About from "./pages/About.vue";
import Blogs from "./pages/Blogs.vue";
import Services from "./pages/Services.vue";
import Projects from "./pages/Projects.vue";

const routes = [
    {
        name: "Home",
        path: "",
        component: Home,
    },
    {
        name: "About",
        path: "/about",
        component: About,
    },
    {
        name: "Blogs",
        path: "/blogs",
        component: Blogs,
    },
    {
        name: "Services",
        path: "/services",
        component: Services,
    },
    {
        name: "Projects",
        path: "/projects",
        component: Projects,
    },
    {
        name: "ContactUs",
        path: "/contact-us",
        component: ContactUs,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
