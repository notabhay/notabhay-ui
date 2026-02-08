import { useState, useCallback, type ChangeEvent } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button, Input } from "@notabhay-ui/ui";

interface FormErrors {
  email?: string;
  password?: string;
}

function validateEmail(email: string): string | undefined {
  if (!email) return "EMAIL IS REQUIRED";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "INVALID EMAIL FORMAT";
  return undefined;
}

function validatePassword(password: string): string | undefined {
  if (!password) return "PASSWORD IS REQUIRED";
  if (password.length < 8) return "MINIMUM 8 CHARACTERS";
  return undefined;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = useCallback(
    (field: "email" | "password") => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      if (field === "email") {
        setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
      } else {
        setErrors((prev) => ({ ...prev, password: validatePassword(password) }));
      }
    },
    [email, password]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setErrors({ email: emailError, password: passwordError });
    setTouched({ email: true, password: true });
  };

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[calc(100vh-8rem)]">
        {/* Left: section number */}
        <div className="hidden md:flex md:col-span-1 border-r border-border items-start justify-center pt-12">
          <span className="swiss-label text-muted-foreground swiss-section-number">01</span>
        </div>

        {/* Form */}
        <div className="md:col-span-5 p-8 md:p-12 lg:p-16 flex items-start">
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="w-full max-w-sm"
          >
            <p className="swiss-label text-muted-foreground mb-2">AUTHENTICATION</p>
            <h1 className="swiss-heading text-2xl md:text-3xl font-heading text-foreground mb-8">
              Login
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="swiss-label text-muted-foreground block mb-2"
                >
                  EMAIL
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="NAME@EXAMPLE.COM"
                  aria-invalid={touched.email && !!errors.email}
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                {touched.email && errors.email && (
                  <p className="swiss-label text-destructive mt-2 text-[10px]">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="swiss-label text-muted-foreground block mb-2"
                >
                  PASSWORD
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  placeholder="MINIMUM 8 CHARACTERS"
                  aria-invalid={touched.password && !!errors.password}
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                {touched.password && errors.password && (
                  <p className="swiss-label text-destructive mt-2 text-[10px]">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-3">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setRemember(e.target.checked)}
                  className="h-4 w-4 border border-border bg-background rounded-none accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <label
                  htmlFor="remember"
                  className="swiss-label text-muted-foreground cursor-pointer"
                >
                  REMEMBER ME
                </label>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full rounded-none uppercase text-xs tracking-widest swiss-mechanical border border-foreground bg-foreground text-background hover:bg-primary hover:text-primary-foreground hover:border-primary py-5"
              >
                SIGN IN
              </Button>

              <p className="text-sm text-muted-foreground">
                <span className="uppercase tracking-wider text-xs">No account? </span>
                <Link
                  to="/signup"
                  className="text-primary uppercase tracking-wider text-xs swiss-mechanical hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  CREATE ONE
                </Link>
              </p>
            </form>
          </motion.div>
        </div>

        {/* Right: decorative grid */}
        <div className="hidden md:block md:col-span-6 border-l border-border swiss-grid-overlay relative">
          <div className="absolute top-12 left-8">
            <p className="swiss-label text-muted-foreground mb-4">01 — LOGIN</p>
            <div className="w-48 h-48 grid grid-cols-6 grid-rows-6 gap-px">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className={
                    i % 7 === 0
                      ? "bg-primary/30"
                      : i % 3 === 0
                        ? "bg-border"
                        : "bg-transparent"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
