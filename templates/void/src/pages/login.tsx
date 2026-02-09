import { useState, useCallback, type ChangeEvent } from "react";
import { Link } from "react-router";
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from "@notabhay-ui/ui";
import { FadeIn } from "@/components/fade-in";

interface FormErrors {
  email?: string;
  password?: string;
}

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
  const [rememberMe, setRememberMe] = useState(false);
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
    [email, password]
  );

  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <div className="absolute inset-0 void-dot-grid void-fade-mask opacity-30" />
      <FadeIn className="relative">
        <Card className="w-full max-w-sm border border-border shadow-none">
          <CardHeader className="text-center">
            <p className="font-heading text-sm font-semibold tracking-tight mb-1">
              flux_
            </p>
            <CardTitle className="font-heading text-lg font-bold tracking-tighter">
              Sign in
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Enter your credentials to continue.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="space-y-1.5">
                <label htmlFor="login-email" className="text-sm">
                  Email
                </label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={
                    touched.email && errors.email
                      ? "login-email-error"
                      : undefined
                  }
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <p
                    id="login-email-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="login-password" className="text-sm">
                  Password
                </label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  aria-invalid={touched.password && !!errors.password}
                  aria-describedby={
                    touched.password && errors.password
                      ? "login-password-error"
                      : undefined
                  }
                  autoComplete="current-password"
                />
                {touched.password && errors.password && (
                  <p
                    id="login-password-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded-sm border border-border bg-transparent text-primary accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <label
                  htmlFor="remember-me"
                  className="text-sm text-muted-foreground"
                >
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full">
                Sign in
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-foreground hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
