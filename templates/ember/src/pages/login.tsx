import { useState, useCallback, type ChangeEvent } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from "@notabhay-ui/ui";

interface FormErrors {
  email?: string;
  password?: string;
}

const transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

function validateEmail(email: string): string | undefined {
  if (!email) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Please enter a valid email address.";
  return undefined;
}

function validatePassword(password: string): string | undefined {
  if (!password) return "Password is required.";
  if (password.length < 8) return "Password must be at least 8 characters.";
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
        setErrors((prev) => ({
          ...prev,
          password: validatePassword(password),
        }));
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
    <div className="flex flex-1 items-center justify-center px-4 py-16 sm:py-24">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-semibold text-foreground">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-muted-foreground font-body">
            Sign in to your Flux account.
          </p>
        </div>

        <Card className="card-grain gold-accent-top border-border/50">
          <CardHeader>
            <CardTitle className="font-heading text-lg">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-heading text-foreground mb-1.5"
                >
                  Email
                </label>
                <Input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="you@example.com"
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <p
                    id="email-error"
                    className="mt-1.5 text-xs text-destructive font-body"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-heading text-foreground mb-1.5"
                >
                  Password
                </label>
                <Input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  placeholder="Enter your password"
                  aria-invalid={touched.password && !!errors.password}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                  autoComplete="current-password"
                />
                {touched.password && errors.password && (
                  <p
                    id="password-error"
                    className="mt-1.5 text-xs text-destructive font-body"
                    role="alert"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-border accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-body text-muted-foreground"
                >
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground font-body">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="text-primary transition-colors duration-400 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
