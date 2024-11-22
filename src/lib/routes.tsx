import Layout from "@/components/layout";
import { dashboardRoute } from "@/pages/dashboard";
import { homeRoute } from "@/pages/home";
import { createRootRoute } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const routeTree = rootRoute.addChildren([homeRoute, dashboardRoute]);
