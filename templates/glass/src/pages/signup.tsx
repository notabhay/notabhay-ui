import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { Zap } from "lucide-react";
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

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function getPasswordStrength(
  password: string
): "weak" | "medium" | "strong" | null {
  if (!password) return null;
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}

const strengthConfig = {
  weak: {
    label: "Weak",
    barClass: "w-1/3 bg-destructive",
  },
  medium: {
    label: "Medium",
    barClass: "w-2/3 bg-chart-4",
  },
  strong: {
    label: "Strong",
    barClass: "w-full bg-primary",
  },
};

export default function Signup() {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  const validateName = useCallback((value: string): string | undefined => {
    if (!value.trim()) return "Full name is required";
    return undefined;
  }, []);

  const validateEmail = useCallback((value: string): string | undefined => {
    if (!value) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address";
    return undefined;
  }, []);

  const validatePassword = useCallback(
    (value: string): string | undefined => {
      if (!value) return "Password is required";
      if (value.length < 8) return "Password must be at least 8 characters";
      return undefined;
    },
    []
  );

  const validateConfirmPassword = useCallback(
    (value: string, pw: string): string | undefined => {
      if (!value) return "Please confirm your password";
      if (value !== pw) return "Passwords do not match";
      return undefined;
    },
    []
  );

  const handleBlur = useCallback(
    (field: string) => {
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
            confirmPassword: validateConfirmPassword(
              confirmPassword,
              password
            ),
          }));
          break;
      }
    },
    [
      name,
      email,
      password,
      confirmPassword,
      validateName,
      validateEmail,
      validatePassword,
      validateConfirmPassword,
    ]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: FormErrors = {
        name: validateName(name),
        email: validateEmail(email),
        password: validatePassword(password),
        confirmPassword: validateConfirmPassword(confirmPassword, password),
      };
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
      });
    },
    [
      name,
      email,
      password,
      confirmPassword,
      validateName,
      validateEmail,
      validatePassword,
      validateConfirmPassword,
    ]
  );

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      {/* Vivid orbs for maximum glass effect */}
      <div className="orb orb-1 top-[5%] right-[15%]" aria-hidden="true" />
      <div className="orb orb-2 bottom-[10%] left-[10%]" aria-hidden="true" />
      <div className="orb orb-3 top-[40%] left-[60%]" aria-hidden="true" />
      <div className="orb orb-4 bottom-[25%] right-[30%]" aria-hidden="true" />

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 1.05, filter: "blur(12px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={transition}
        className="relative z-10 w-full max-w-lg"
      >
        <Card className="rounded-3xl">
          <CardHeader className="text-center" style={{ borderBottom: "1px solid oklch(1 0 0 / 12%)" }}>
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass-subtle glass-pulse">
                <Zap className="h-7 w-7 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">Create your account</CardTitle>
            <CardDescription>
              Get started with Flux in seconds
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="signup-name"
                  className="text-sm font-medium text-foreground"
                >
                  Full name
                </label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={
                    touched.name && errors.name
                      ? "signup-name-error"
                      : undefined
                  }
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
                <label
                  htmlFor="signup-email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={
                    touched.email && errors.email
                      ? "signup-email-error"
                      : undefined
                  }
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
                  className="text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  aria-invalid={touched.password && !!errors.password}
                  aria-describedby={
                    touched.password && errors.password
                      ? "signup-password-error"
                      : "password-strength"
                  }
                />
                {/* Strength indicator */}
                {strength && (
                  <div id="password-strength" className="space-y-1">
                    <div className="h-1.5 rounded-full overflow-hidden glass-subtle">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-300",
                          strengthConfig[strength].barClass
                        )}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Password strength:{" "}
                      <span
                        className={cn(
                          "font-medium",
                          strength === "weak" && "text-destructive",
                          strength === "medium" && "text-chart-4",
                          strength === "strong" && "text-primary"
                        )}
                      >
                        {strengthConfig[strength].label}
                      </span>
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

              {/* Confirm password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="signup-confirm"
                  className="text-sm font-medium text-foreground"
                >
                  Confirm password
                </label>
                <Input
                  id="signup-confirm"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  onBlur={() => handleBlur("confirmPassword")}
                  aria-invalid={
                    touched.confirmPassword && !!errors.confirmPassword
                  }
                  aria-describedby={
                    touched.confirmPassword && errors.confirmPassword
                      ? "signup-confirm-error"
                      : undefined
                  }
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

              <Button type="submit" className="w-full rounded-2xl glass-shimmer">
                Create account
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
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
