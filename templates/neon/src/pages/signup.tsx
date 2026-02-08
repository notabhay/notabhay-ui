import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { Terminal, UserPlus } from "lucide-react";
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
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function getPasswordStrength(
  pw: string
): "weak" | "medium" | "strong" | null {
  if (!pw) return null;
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 2) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}

const strengthConfig = {
  weak: {
    label: "weak",
    color: "bg-destructive",
    textColor: "text-destructive",
    width: "33%",
  },
  medium: {
    label: "medium",
    color: "bg-primary",
    textColor: "text-primary",
    width: "66%",
  },
  strong: {
    label: "strong",
    color: "bg-secondary",
    textColor: "text-secondary",
    width: "100%",
  },
};

export default function Signup() {
  const prefersReduced = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  const validateName = useCallback((value: string): string | undefined => {
    if (!value.trim()) return "Name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    return undefined;
  }, []);

  const validateEmail = useCallback((value: string): string | undefined => {
    if (!value) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Invalid email format";
    return undefined;
  }, []);

  const validatePassword = useCallback((value: string): string | undefined => {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters";
    return undefined;
  }, []);

  const validateConfirmPassword = useCallback(
    (value: string): string | undefined => {
      if (!value) return "Please confirm your password";
      if (value !== password) return "Passwords do not match";
      return undefined;
    },
    [password]
  );

  const handleBlur = useCallback(
    (field: string) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      const validators: Record<string, (v: string) => string | undefined> = {
        name: validateName,
        email: validateEmail,
        password: validatePassword,
        confirmPassword: validateConfirmPassword,
      };
      const values: Record<string, string> = {
        name,
        email,
        password,
        confirmPassword,
      };
      const validator = validators[field];
      if (validator) {
        setErrors((prev) => ({ ...prev, [field]: validator(values[field]) }));
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
        confirmPassword: validateConfirmPassword(confirmPassword),
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
              <span className="text-primary">{">"}</span> flux register
            </CardTitle>
            <CardDescription className="text-xs font-heading">
              Create your account to get started
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="signup-name"
                  className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground"
                >
                  Full Name
                </label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={errors.name ? "signup-name-error" : undefined}
                  className="neon-glow-focus"
                  autoComplete="name"
                />
                {touched.name && errors.name && (
                  <p
                    id="signup-name-error"
                    className="text-[10px] font-heading text-destructive"
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
                  className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="user@flux.dev"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={errors.email ? "signup-email-error" : undefined}
                  className="neon-glow-focus"
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <p
                    id="signup-email-error"
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
                  htmlFor="signup-password"
                  className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground"
                >
                  Password
                </label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Min 8 characters"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  aria-invalid={touched.password && !!errors.password}
                  aria-describedby="signup-password-strength signup-password-error"
                  className="neon-glow-focus"
                  autoComplete="new-password"
                />
                {/* Strength indicator */}
                {strength && (
                  <div id="signup-password-strength" className="space-y-1">
                    <div className="h-1 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-250 ${strengthConfig[strength].color}`}
                        style={{ width: strengthConfig[strength].width }}
                      />
                    </div>
                    <p
                      className={`text-[10px] font-heading ${strengthConfig[strength].textColor}`}
                    >
                      Strength: {strengthConfig[strength].label}
                    </p>
                  </div>
                )}
                {touched.password && errors.password && (
                  <p
                    id="signup-password-error"
                    className="text-[10px] font-heading text-destructive"
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
                  className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground"
                >
                  Confirm Password
                </label>
                <Input
                  id="signup-confirm"
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  onBlur={() => handleBlur("confirmPassword")}
                  aria-invalid={
                    touched.confirmPassword && !!errors.confirmPassword
                  }
                  aria-describedby={
                    errors.confirmPassword ? "signup-confirm-error" : undefined
                  }
                  className="neon-glow-focus"
                  autoComplete="new-password"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <p
                    id="signup-confirm-error"
                    className="text-[10px] font-heading text-destructive"
                    role="alert"
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full neon-glow-hover"
              >
                <UserPlus className="h-4 w-4" />
                Create Account
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-xs font-heading text-muted-foreground">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                flux login
              </Link>
            </p>
          </CardFooter>
        </Card>

        {/* Terminal hint */}
        <div className="mt-4 rounded-sm border bg-muted/50 p-3 text-center">
          <p className="text-[10px] font-heading text-muted-foreground">
            <span className="text-primary">$</span> flux auth register
            --method email
          </p>
        </div>
      </motion.div>
    </div>
  );
}
