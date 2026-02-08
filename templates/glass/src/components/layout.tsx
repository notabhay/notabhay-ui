import { Outlet, useLocation } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { ErrorBoundary } from "./error-boundary";

export function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="min-h-screen flex flex-col mesh-bg">
      <Navbar />
      {isDashboard ? (
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 relative">
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </main>
        </div>
      ) : (
        <main className="flex-1 relative">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
      )}
      {!isDashboard && <Footer />}
    </div>
  );
}
