import { useState, useCallback, useMemo, type ChangeEvent } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button, Input } from "@notabhay-ui/ui";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function getPasswordStrength(password: string): { label: string; level: number } {
  if (!password) return { label: "", level: 0 };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { label: "Weak", level: 1 };
  if (score <= 3) return { label: "Medium", level: 2 };
  return { label: "Strong", level: 3 };
}

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  const validateName = useCallback((value: string): string | undefined => {
    if (!value.trim()) return "Full name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    return undefined;
  }, []);

  const validateEmail = useCallback((value: string): string | undefined => {
    if (!value.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
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
      const validators: Record<string, () => string | undefined> = {
        name: () => validateName(name),
        email: () => validateEmail(email),
        password: () => validatePassword(password),
        confirmPassword: () => validateConfirmPassword(confirmPassword),
      };
      const validator = validators[field];
      if (validator) {
        setErrors((prev) => ({ ...prev, [field]: validator() }));
      }
    },
    [name, email, password, confirmPassword, validateName, validateEmail, validatePassword, validateConfirmPassword]
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
      setTouched({ name: true, email: true, password: true, confirmPassword: true });
      const isValid = !Object.values(newErrors).some(Boolean);
      if (isValid) {
        // Form is valid
      }
    },
    [name, email, password, confirmPassword, validateName, validateEmail, validatePassword, validateConfirmPassword]
  );

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="w-full max-w-sm"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <p className="font-heading text-xs small-caps tracking-[0.2em] text-primary mb-3">
            Join Flux
          </p>
          <h1 className="font-heading text-3xl font-semibold text-foreground tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Start measuring what matters for your engineering team.
          </p>
        </motion.div>

        <hr className="hairline mb-8" />

        <form onSubmit={handleSubmit} noValidate>
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Name field */}
            <div className="space-y-1">
              <label
                htmlFor="signup-name"
                className="font-heading text-xs tracking-wide text-muted-foreground"
              >
                Full Name
              </label>
              <Input
                id="signup-name"
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                onBlur={() => handleBlur("name")}
                placeholder="Your full name"
                aria-invalid={touched.name && !!errors.name}
                className="border-0 border-b border-border rounded-none font-body placeholder:font-body focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary"
              />
              {touched.name && errors.name && (
                <p className="text-xs text-destructive mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email field */}
            <div className="space-y-1">
              <label
                htmlFor="signup-email"
                className="font-heading text-xs tracking-wide text-muted-foreground"
              >
                Email
              </label>
              <Input
                id="signup-email"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                onBlur={() => handleBlur("email")}
                placeholder="reader@example.com"
                aria-invalid={touched.email && !!errors.email}
                className="border-0 border-b border-border rounded-none font-body placeholder:font-body focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary"
              />
              {touched.email && errors.email && (
                <p className="text-xs text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password field with strength */}
            <div className="space-y-1">
              <label
                htmlFor="signup-password"
                className="font-heading text-xs tracking-wide text-muted-foreground"
              >
                Password
              </label>
              <Input
                id="signup-password"
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                onBlur={() => handleBlur("password")}
                placeholder="Minimum 8 characters"
                aria-invalid={touched.password && !!errors.password}
                className="border-0 border-b border-border rounded-none font-body placeholder:font-body focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary"
              />
              {/* Strength indicator */}
              {password.length > 0 && (
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex gap-1 flex-1">
                    {[1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                          level <= strength.level
                            ? strength.level === 1
                              ? "bg-destructive"
                              : strength.level === 2
                                ? "bg-chart-4"
                                : "bg-primary"
                            : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                  <span
                    className={`font-mono text-xs ${
                      strength.level === 1
                        ? "text-destructive"
                        : strength.level === 2
                          ? "text-muted-foreground"
                          : "text-primary"
                    }`}
                  >
                    {strength.label}
                  </span>
                </div>
              )}
              {touched.password && errors.password && (
                <p className="text-xs text-destructive mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm password */}
            <div className="space-y-1">
              <label
                htmlFor="signup-confirm"
                className="font-heading text-xs tracking-wide text-muted-foreground"
              >
                Confirm Password
              </label>
              <Input
                id="signup-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                onBlur={() => handleBlur("confirmPassword")}
                placeholder="Re-enter your password"
                aria-invalid={touched.confirmPassword && !!errors.confirmPassword}
                className="border-0 border-b border-border rounded-none font-body placeholder:font-body focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-xs text-destructive mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Button
              type="submit"
              className="w-full small-caps border border-border/50"
            >
              Create Account
            </Button>
          </motion.div>
        </form>

        <motion.div variants={fadeUp} className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline underline-offset-4 transition-colors duration-300"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
