import { useState, useCallback, type ChangeEvent } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button, Input, Card, CardContent, CardHeader, CardTitle, cn } from "@notabhay-ui/ui";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

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
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 2) return "weak";
  if (score <= 4) return "medium";
  return "strong";
}

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const strength = getPasswordStrength(password);

  const handleBlur = useCallback(
    (field: keyof FormErrors) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors((prev) => {
        const next = { ...prev };
        switch (field) {
          case "name":
            next.name = validateName(name);
            break;
          case "email":
            next.email = validateEmail(email);
            break;
          case "password":
            next.password = validatePassword(password);
            break;
          case "confirmPassword":
            next.confirmPassword = validateConfirmPassword(
              password,
              confirmPassword
            );
            break;
        }
        return next;
      });
    },
    [name, email, password, confirmPassword]
  );

  const handleSubmit = (e: React.FormEvent) => {
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
            Create your account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground font-body">
            Start measuring what matters with Flux.
          </p>
        </div>

        <Card className="card-grain gold-accent-top border-border/50">
          <CardHeader>
            <CardTitle className="font-heading text-lg">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="signup-name"
                  className="block text-sm font-heading text-foreground mb-1.5"
                >
                  Full Name
                </label>
                <Input
                  id="signup-name"
                  type="text"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="Jane Doe"
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  autoComplete="name"
                />
                {touched.name && errors.name && (
                  <p
                    id="name-error"
                    className="mt-1.5 text-xs text-destructive font-body"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="signup-email"
                  className="block text-sm font-heading text-foreground mb-1.5"
                >
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="you@example.com"
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={errors.email ? "signup-email-error" : undefined}
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <p
                    id="signup-email-error"
                    className="mt-1.5 text-xs text-destructive font-body"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="signup-password"
                  className="block text-sm font-heading text-foreground mb-1.5"
                >
                  Password
                </label>
                <Input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  placeholder="Create a strong password"
                  aria-invalid={touched.password && !!errors.password}
                  aria-describedby={
                    errors.password
                      ? "signup-password-error"
                      : strength
                        ? "password-strength"
                        : undefined
                  }
                  autoComplete="new-password"
                />
                {/* Strength indicator */}
                {password && (
                  <div className="mt-2 space-y-1.5" id="password-strength">
                    <div className="flex gap-1">
                      {(["weak", "medium", "strong"] as const).map(
                        (level, i) => (
                          <div
                            key={level}
                            className={cn(
                              "h-1 flex-1 rounded-full transition-colors duration-400",
                              strength === "weak" && i === 0
                                ? "bg-destructive"
                                : strength === "medium" && i <= 1
                                  ? "bg-[oklch(0.7_0.15_60)]"
                                  : strength === "strong"
                                    ? "bg-primary"
                                    : "bg-muted"
                            )}
                          />
                        )
                      )}
                    </div>
                    <p
                      className={cn(
                        "text-xs font-body",
                        strength === "weak"
                          ? "text-destructive"
                          : strength === "medium"
                            ? "text-[oklch(0.7_0.15_60)]"
                            : "text-primary"
                      )}
                    >
                      {strength === "weak"
                        ? "Weak password"
                        : strength === "medium"
                          ? "Medium strength"
                          : "Strong password"}
                    </p>
                  </div>
                )}
                {touched.password && errors.password && (
                  <p
                    id="signup-password-error"
                    className="mt-1.5 text-xs text-destructive font-body"
                    role="alert"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="signup-confirm-password"
                  className="block text-sm font-heading text-foreground mb-1.5"
                >
                  Confirm Password
                </label>
                <Input
                  id="signup-confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  onBlur={() => handleBlur("confirmPassword")}
                  placeholder="Repeat your password"
                  aria-invalid={
                    touched.confirmPassword && !!errors.confirmPassword
                  }
                  aria-describedby={
                    errors.confirmPassword
                      ? "confirm-password-error"
                      : undefined
                  }
                  autoComplete="new-password"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <p
                    id="confirm-password-error"
                    className="mt-1.5 text-xs text-destructive font-body"
                    role="alert"
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground font-body">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary transition-colors duration-400 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
