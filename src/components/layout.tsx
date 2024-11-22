import { Link, Outlet } from "@tanstack/react-router";
import { Button } from "./ui/button";

function Layout() {
  return (
    <>
      <nav className="mb-5">
        <Button asChild variant="link">
          <Link to="/" activeProps={{ className: "font-bold" }}>
            Home
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link to="/dashboard" activeProps={{ className: "font-bold" }}>
            Dashboard
          </Link>
        </Button>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
