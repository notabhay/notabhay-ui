import { Outlet, useLocation } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { ErrorBoundary } from "./error-boundary";

export function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Gradient blobs */}
      <div className="candy-blob candy-blob-1" aria-hidden="true" />
      <div className="candy-blob candy-blob-2" aria-hidden="true" />
      <div className="candy-blob candy-blob-3" aria-hidden="true" />

      <Navbar />
      {isDashboard ? (
        <div className="flex flex-1 relative z-10">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </main>
        </div>
      ) : (
        <main className="flex-1 relative z-10">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
      )}
      {!isDashboard && <Footer />}
    </div>
  );
}
