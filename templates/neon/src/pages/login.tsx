import { useState, useCallback } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { Terminal, LogIn } from "lucide-react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@notabhay-ui/ui";

interface FormErrors {
  email?: string;
  password?: string;
}

export default function Login() {
  const prefersReduced = useReducedMotion();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = useCallback((value: string): string | undefined => {
    if (!value) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
    return undefined;
  }, []);

  const validatePassword = useCallback((value: string): string | undefined => {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters";
    return undefined;
  }, []);

  const handleBlur = useCallback(
    (field: string) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      if (field === "email") {
        setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
      }
      if (field === "password") {
        setErrors((prev) => ({
          ...prev,
          password: validatePassword(password),
        }));
      }
    },
    [email, password, validateEmail, validatePassword]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const emailError = validateEmail(email);
      const passwordError = validatePassword(password);
      setErrors({ email: emailError, password: passwordError });
      setTouched({ email: true, password: true });

      if (!emailError && !passwordError) {
        // Form is valid
      }
    },
    [email, password, validateEmail, validatePassword]
  );

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <motion.div
        {...(prefersReduced
          ? {}
          : {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            })}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm"
      >
        <Card className="neon-card-accent neon-glow-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-muted">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
            </div>
            <CardTitle className="text-sm font-heading">
              <span className="text-primary">{">"}</span> flux login
            </CardTitle>
            <CardDescription className="text-xs font-heading">
              Authenticate to access your dashboard
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="login-email"
                  className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="user@flux.dev"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={errors.email ? "login-email-error" : undefined}
                  className="neon-glow-focus"
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <p
                    id="login-email-error"
                    className="text-[10px] font-heading text-destructive"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="login-password"
                  className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground"
                >
                  Password
                </label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Min 8 characters"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  aria-invalid={touched.password && !!errors.password}
                  aria-describedby={
                    errors.password ? "login-password-error" : undefined
                  }
                  className="neon-glow-focus"
                  autoComplete="current-password"
                />
                {touched.password && errors.password && (
                  <p
                    id="login-password-error"
                    className="text-[10px] font-heading text-destructive"
                    role="alert"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 rounded-sm border-border bg-muted accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <label
                  htmlFor="remember-me"
                  className="text-xs font-heading text-muted-foreground"
                >
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full neon-glow-hover"
              >
                <LogIn className="h-4 w-4" />
                Authenticate
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-xs font-heading text-muted-foreground">
              No account?{" "}
              <Link
                to="/signup"
                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                flux register
              </Link>
            </p>
          </CardFooter>
        </Card>

        {/* Terminal hint */}
        <div className="mt-4 rounded-sm border bg-muted/50 p-3 text-center">
          <p className="text-[10px] font-heading text-muted-foreground">
            <span className="text-primary">$</span> flux auth login
            --sso-provider github
          </p>
        </div>
      </motion.div>
    </div>
  );
}
