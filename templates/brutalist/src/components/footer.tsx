export function Footer() {
  return (
    <footer className="border-t-4 border-border bg-background" role="contentinfo">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Block 1: Brand */}
        <div className="border-b-4 md:border-b-0 md:border-r-4 border-border p-8">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            PRODUCT
          </p>
          <p className="font-heading text-2xl font-bold uppercase tracking-wider">
            FLUX
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Developer analytics platform
          </p>
        </div>

        {/* Block 2: Links */}
        <div className="border-b-4 md:border-b-0 md:border-r-4 border-border p-8">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            NAVIGATION
          </p>
          <ul className="space-y-2">
            {["Home", "Dashboard", "Components", "Login", "Signup"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-heading text-sm uppercase tracking-wider hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Block 3: Meta */}
        <div className="p-8">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            STATUS
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="block h-3 w-3 bg-primary" />
              <span className="text-sm font-heading uppercase tracking-wider">
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              UPTIME: 99.97% / 30D
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-4 border-border px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading">
          &copy; 2024 FLUX. ALL RIGHTS RESERVED.
        </p>
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading">
          BRUTALIST TEMPLATE // NOTABHAY-UI
        </p>
      </div>
    </footer>
  );
}
