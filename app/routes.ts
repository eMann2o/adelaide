import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("details", "routes/details.tsx")
] satisfies RouteConfig;
