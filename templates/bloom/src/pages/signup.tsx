import { useState, useCallback } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { Eye, EyeOff } from "lucide-react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cn,
} from "@notabhay-ui/ui";
import { BlobBackground } from "@/components/blob-background";

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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
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
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  const score = [hasLower, hasUpper, hasNumber, hasSpecial].filter(
    Boolean
  ).length;

  if (password.length < 8) return "weak";
  if (score <= 2) return "weak";
  if (score === 3) return "medium";
  return "strong";
}

export default function Signup() {
  const shouldReduceMotion = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const strength = getPasswordStrength(password);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <div className="relative flex flex-1 items-center justify-center py-12 px-4">
      <BlobBackground variant="subtle" />
      <motion.div
        className="w-full max-w-md relative"
        {...(shouldReduceMotion
          ? {}
          : {
              initial: { opacity: 0, y: 20 } as const,
              animate: { opacity: 1, y: 0 } as const,
              transition: {
                duration: 0.5,
                type: "spring" as const,
                stiffness: 100,
              },
            })}
      >
        <Card className="rounded-3xl border-border/40 shadow-lg">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-primary"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992z"
                />
              </svg>
            </div>
            <CardTitle className="font-heading text-2xl font-bold">
              Create an account
            </CardTitle>
            <CardDescription>
              Get started with Flux in seconds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="signup-name" className="text-sm font-medium">
                  Full name
                </label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  onBlur={() => handleBlur("name")}
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={
                    errors.name ? "signup-name-error" : undefined
                  }
                  className="rounded-xl bg-muted/40"
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
                <label htmlFor="signup-email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  onBlur={() => handleBlur("email")}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={
                    errors.email ? "signup-email-error" : undefined
                  }
                  className="rounded-xl bg-muted/40"
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
                <label
                  htmlFor="signup-password"
                  className="text-sm font-medium"
                >
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    onBlur={() => handleBlur("password")}
                    aria-invalid={touched.password && !!errors.password}
                    aria-describedby={
                      errors.password ? "signup-password-error" : undefined
                    }
                    className="rounded-xl bg-muted/40 pr-10"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {touched.password && errors.password && (
                  <p
                    id="signup-password-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.password}
                  </p>
                )}
                {/* Strength indicator */}
                {strength && (
                  <div className="space-y-1.5">
                    <div className="flex gap-1">
                      {(["weak", "medium", "strong"] as const).map((level) => (
                        <div
                          key={level}
                          className={cn(
                            "h-1.5 flex-1 rounded-full transition-colors",
                            strength === "weak" && level === "weak"
                              ? "bg-destructive"
                              : strength === "medium" &&
                                  (level === "weak" || level === "medium")
                                ? "bg-chart-4"
                                : strength === "strong"
                                  ? "bg-secondary"
                                  : "bg-muted"
                          )}
                        />
                      ))}
                    </div>
                    <p
                      className={cn(
                        "text-xs",
                        strength === "weak"
                          ? "text-destructive"
                          : strength === "medium"
                            ? "text-muted-foreground"
                            : "text-secondary"
                      )}
                    >
                      Password strength:{" "}
                      <span className="font-medium">{strength}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="signup-confirm-password"
                  className="text-sm font-medium"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <Input
                    id="signup-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Repeat your password"
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setConfirmPassword(e.target.value)
                    }
                    onBlur={() => handleBlur("confirmPassword")}
                    aria-invalid={
                      touched.confirmPassword && !!errors.confirmPassword
                    }
                    aria-describedby={
                      errors.confirmPassword
                        ? "signup-confirm-error"
                        : undefined
                    }
                    className="rounded-xl bg-muted/40 pr-10"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
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

              <Button
                type="submit"
                className="w-full rounded-xl shadow-md hover:shadow-lg transition-shadow"
                size="lg"
              >
                Create account
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center pb-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
