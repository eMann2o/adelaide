import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("details", "routes/details.tsx"),
    route("profile", "routes/profile.tsx"),
    route("exhibitions", "routes/exhibitions.tsx"),
    route("contact", "routes/contact.tsx"),
    route("*", "routes/404.tsx")
] satisfies RouteConfig;