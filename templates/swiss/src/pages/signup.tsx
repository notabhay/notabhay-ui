import { useState, useCallback, type ChangeEvent } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button, Input, cn } from "@notabhay-ui/ui";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function validateName(name: string): string | undefined {
  if (!name) return "NAME IS REQUIRED";
  if (name.length < 2) return "MINIMUM 2 CHARACTERS";
  return undefined;
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

function validateConfirmPassword(
  password: string,
  confirmPassword: string
): string | undefined {
  if (!confirmPassword) return "CONFIRM PASSWORD IS REQUIRED";
  if (password !== confirmPassword) return "PASSWORDS DO NOT MATCH";
  return undefined;
}

function getPasswordStrength(password: string): {
  level: "WEAK" | "MEDIUM" | "STRONG";
  score: number;
} {
  if (!password) return { level: "WEAK", score: 0 };
  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  if (score <= 2) return { level: "WEAK", score: 1 };
  if (score <= 3) return { level: "MEDIUM", score: 2 };
  return { level: "STRONG", score: 3 };
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
      switch (field) {
        case "name":
          setErrors((prev) => ({ ...prev, name: validateName(name) }));
          break;
        case "email":
          setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
          break;
        case "password":
          setErrors((prev) => ({ ...prev, password: validatePassword(password) }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {
      name: validateName(name),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, password: true, confirmPassword: true });
  };

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[calc(100vh-8rem)]">
        {/* Left: section number */}
        <div className="hidden md:flex md:col-span-1 border-r border-border items-start justify-center pt-12">
          <span className="swiss-label text-muted-foreground swiss-section-number">02</span>
        </div>

        {/* Form */}
        <div className="md:col-span-5 p-8 md:p-12 lg:p-16 flex items-start">
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="w-full max-w-sm"
          >
            <p className="swiss-label text-muted-foreground mb-2">AUTHENTICATION</p>
            <h1 className="swiss-heading text-2xl md:text-3xl font-heading text-foreground mb-8">
              Create Account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="swiss-label text-muted-foreground block mb-2"
                >
                  FULL NAME
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="ENTER FULL NAME"
                  aria-invalid={touched.name && !!errors.name}
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                {touched.name && errors.name && (
                  <p className="swiss-label text-destructive mt-2 text-[10px]">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="signup-email"
                  className="swiss-label text-muted-foreground block mb-2"
                >
                  EMAIL
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="NAME@EXAMPLE.COM"
                  aria-invalid={touched.email && !!errors.email}
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                {touched.email && errors.email && (
                  <p className="swiss-label text-destructive mt-2 text-[10px]">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="signup-password"
                  className="swiss-label text-muted-foreground block mb-2"
                >
                  PASSWORD
                </label>
                <Input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  placeholder="MINIMUM 8 CHARACTERS"
                  aria-invalid={touched.password && !!errors.password}
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                {touched.password && errors.password && (
                  <p className="swiss-label text-destructive mt-2 text-[10px]">
                    {errors.password}
                  </p>
                )}

                {/* Password strength */}
                {password.length > 0 && (
                  <div className="mt-3">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={cn(
                            "h-1 flex-1",
                            level <= strength.score
                              ? strength.level === "WEAK"
                                ? "bg-destructive"
                                : strength.level === "MEDIUM"
                                  ? "bg-muted-foreground"
                                  : "bg-primary"
                              : "bg-border"
                          )}
                        />
                      ))}
                    </div>
                    <p
                      className={cn(
                        "swiss-label text-[10px]",
                        strength.level === "WEAK"
                          ? "text-destructive"
                          : strength.level === "MEDIUM"
                            ? "text-muted-foreground"
                            : "text-primary"
                      )}
                    >
                      {strength.level}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="swiss-label text-muted-foreground block mb-2"
                >
                  CONFIRM PASSWORD
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  onBlur={() => handleBlur("confirmPassword")}
                  placeholder="RE-ENTER PASSWORD"
                  aria-invalid={touched.confirmPassword && !!errors.confirmPassword}
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <p className="swiss-label text-destructive mt-2 text-[10px]">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full rounded-none uppercase text-xs tracking-widest swiss-mechanical border border-foreground bg-foreground text-background hover:bg-primary hover:text-primary-foreground hover:border-primary py-5"
              >
                CREATE ACCOUNT
              </Button>

              <p className="text-sm text-muted-foreground">
                <span className="uppercase tracking-wider text-xs">Have an account? </span>
                <Link
                  to="/login"
                  className="text-primary uppercase tracking-wider text-xs swiss-mechanical hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  SIGN IN
                </Link>
              </p>
            </form>
          </motion.div>
        </div>

        {/* Right: decorative grid */}
        <div className="hidden md:block md:col-span-6 border-l border-border swiss-grid-overlay relative">
          <div className="absolute top-12 left-8">
            <p className="swiss-label text-muted-foreground mb-4">02 — SIGNUP</p>
            <div className="w-48 h-48 grid grid-cols-6 grid-rows-6 gap-px">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className={
                    i % 5 === 0
                      ? "bg-primary/30"
                      : i % 4 === 0
                        ? "bg-border"
                        : "bg-transparent"
                  }
                />
              ))}
            </div>
          </div>
          <div className="absolute bottom-12 right-8">
            <div className="text-right">
              <p className="swiss-section-number text-6xl font-heading font-bold text-border/30">
                02
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
