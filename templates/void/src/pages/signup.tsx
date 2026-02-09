import { useState, useCallback, useMemo, type ChangeEvent } from "react";
import { Link } from "react-router";
import {
  Button,
  Input,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  cn,
} from "@notabhay-ui/ui";
import { FadeIn } from "@/components/fade-in";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function validateName(name: string): string | undefined {
  if (!name.trim()) return "Full name is required.";
  if (name.trim().length < 2) return "Name must be at least 2 characters.";
  return undefined;
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

function validateConfirmPassword(
  password: string,
  confirmPassword: string
): string | undefined {
  if (!confirmPassword) return "Please confirm your password.";
  if (password !== confirmPassword) return "Passwords do not match.";
  return undefined;
}

function getPasswordStrength(
  password: string
): "weak" | "medium" | "strong" | null {
  if (!password) return null;
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const passwordStrength = useMemo(
    () => getPasswordStrength(password),
    [password]
  );

  const handleBlur = useCallback(
    (field: keyof FormErrors) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      switch (field) {
        case "name":
          setErrors((prev) => ({ ...prev, name: validateName(name) }));
          break;
        case "email":
          setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
          break;
        case "password":
          setErrors((prev) => ({
            ...prev,
            password: validatePassword(password),
          }));
          break;
        case "confirmPassword":
          setErrors((prev) => ({
            ...prev,
            confirmPassword: validateConfirmPassword(password, confirmPassword),
          }));
          break;
      }
    },
    [name, email, password, confirmPassword]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: FormErrors = {
        name: validateName(name),
        email: validateEmail(email),
        password: validatePassword(password),
        confirmPassword: validateConfirmPassword(password, confirmPassword),
      };
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
      });

      const hasErrors = Object.values(newErrors).some(Boolean);
      if (!hasErrors) {
        // Form is valid
      }
    },
    [name, email, password, confirmPassword]
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
              Create account
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Get started with Flux analytics.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="signup-name" className="text-sm">
                  Full name
                </label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={
                    touched.name && errors.name
                      ? "signup-name-error"
                      : undefined
                  }
                  autoComplete="name"
                />
                {touched.name && errors.name && (
                  <p
                    id="signup-name-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="signup-email" className="text-sm">
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={
                    touched.email && errors.email
                      ? "signup-email-error"
                      : undefined
                  }
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <p
                    id="signup-email-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label htmlFor="signup-password" className="text-sm">
                  Password
                </label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  aria-invalid={touched.password && !!errors.password}
                  aria-describedby="signup-password-strength signup-password-error"
                  autoComplete="new-password"
                />
                {/* Strength indicator */}
                {password.length > 0 && (
                  <div className="space-y-1" id="signup-password-strength">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-1 flex-1 rounded-full transition-colors",
                            passwordStrength === "weak" && i === 0
                              ? "bg-destructive"
                              : passwordStrength === "medium" && i <= 1
                                ? "bg-chart-5"
                                : passwordStrength === "strong"
                                  ? "bg-primary"
                                  : "bg-muted"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {passwordStrength === "weak" && "Weak password"}
                      {passwordStrength === "medium" && "Medium strength"}
                      {passwordStrength === "strong" && "Strong password"}
                    </p>
                  </div>
                )}
                {touched.password && errors.password && (
                  <p
                    id="signup-password-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label htmlFor="signup-confirm" className="text-sm">
                  Confirm password
                </label>
                <Input
                  id="signup-confirm"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  onBlur={() => handleBlur("confirmPassword")}
                  aria-invalid={
                    touched.confirmPassword && !!errors.confirmPassword
                  }
                  aria-describedby={
                    touched.confirmPassword && errors.confirmPassword
                      ? "signup-confirm-error"
                      : undefined
                  }
                  autoComplete="new-password"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <p
                    id="signup-confirm-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Create account
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-foreground hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
