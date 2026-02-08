import { Outlet, useLocation } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { ErrorBoundary } from "./error-boundary";
import { CommandPalette } from "./command-palette";

export function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="neon-scanlines min-h-screen flex flex-col">
      <CommandPalette />
      <Navbar />
      {isDashboard ? (
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden">
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </main>
        </div>
      ) : (
        <main className="flex-1">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
      )}
      {!isDashboard && <Footer />}
    </div>
  );
}
