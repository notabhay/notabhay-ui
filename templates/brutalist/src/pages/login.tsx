import { useState, useCallback } from "react";
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
  const [rememberMe, setRememberMe] = useState(false);
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

    if (!emailError && !passwordError) {
      // Form valid
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex">
      {/* Left: form */}
      <div className="flex-1 flex items-center justify-start p-8 md:p-16">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: "linear" }}
        >
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
            AUTH: LOGIN
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">
            SIGN IN
            <span className="text-primary">.</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-10 uppercase tracking-wider">
            ACCESS YOUR FLUX DASHBOARD
          </p>

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Email */}
            <div>
              <label
                htmlFor="login-email"
                className="block font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3"
              >
                FIELD: EMAIL
              </label>
              <Input
                id="login-email"
                type="email"
                placeholder="NAME@COMPANY.COM"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={errors.email ? "login-email-error" : undefined}
                autoComplete="email"
              />
              {touched.email && errors.email && (
                <p
                  id="login-email-error"
                  className="text-destructive text-xs uppercase tracking-wider mt-2 font-heading"
                  role="alert"
                >
                  ERROR: {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="login-password"
                className="block font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3"
              >
                FIELD: PASSWORD
              </label>
              <Input
                id="login-password"
                type="password"
                placeholder="ENTER PASSWORD"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                onBlur={() => handleBlur("password")}
                aria-invalid={touched.password && !!errors.password}
                aria-describedby={errors.password ? "login-password-error" : undefined}
                autoComplete="current-password"
              />
              {touched.password && errors.password && (
                <p
                  id="login-password-error"
                  className="text-destructive text-xs uppercase tracking-wider mt-2 font-heading"
                  role="alert"
                >
                  ERROR: {errors.password}
                </p>
              )}
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                role="checkbox"
                aria-checked={rememberMe}
                onClick={() => setRememberMe(!rememberMe)}
                className={`h-5 w-5 border-2 border-border flex items-center justify-center transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 ${
                  rememberMe ? "bg-foreground" : ""
                }`}
              >
                {rememberMe && (
                  <span className="text-background text-xs font-bold">&#10003;</span>
                )}
              </button>
              <label
                className="font-heading text-xs uppercase tracking-[0.1em] text-muted-foreground cursor-pointer select-none"
                onClick={() => setRememberMe(!rememberMe)}
              >
                REMEMBER ME
              </label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="outline"
              size="lg"
              className="w-full border-3 border-foreground hover:bg-foreground hover:text-background"
            >
              AUTHENTICATE
            </Button>
          </form>

          <div className="mt-8 border-t-2 border-border pt-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              NO ACCOUNT?{" "}
              <Link
                to="/signup"
                className="text-primary hover:text-foreground transition-colors duration-150 font-heading font-bold focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              >
                REGISTER HERE
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right: decorative panel */}
      <div className="hidden lg:flex w-[400px] border-l-4 border-border bg-muted items-center justify-center p-12">
        <div>
          <div className="border-4 border-border p-8 mb-8">
            <p className="font-heading text-6xl font-bold leading-none">
              FL
              <br />
              UX
              <span className="text-primary">.</span>
            </p>
          </div>
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">
            DEVELOPER ANALYTICS
            <br />
            PLATFORM // V2.4
          </p>
        </div>
      </div>
    </div>
  );
}
