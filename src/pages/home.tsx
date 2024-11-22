import { rootRoute } from "@/lib/routes";
import { createRoute } from "@tanstack/react-router";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

function Home() {
  return <h2 className="font-bold text-2xl">🏡 Home Page</h2>;
}

export default Home;
