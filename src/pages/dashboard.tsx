import { rootRoute } from "@/lib/routes";
import { createRoute } from "@tanstack/react-router";

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

function Dashboard() {
  return <h2 className="font-bold text-2xl">🛹 Dashboard Page</h2>;
}

export default Dashboard;
