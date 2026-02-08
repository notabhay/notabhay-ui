import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button, Input } from "@notabhay-ui/ui";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
}

function validateName(name: string): string | undefined {
  if (!name.trim()) return "NAME IS REQUIRED";
  if (name.trim().length < 2) return "MINIMUM 2 CHARACTERS";
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

function validateConfirm(password: string, confirm: string): string | undefined {
  if (!confirm) return "CONFIRMATION IS REQUIRED";
  if (password !== confirm) return "PASSWORDS DO NOT MATCH";
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
  if (/[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 2) return { level: "WEAK", score: 1 };
  if (score <= 4) return { level: "MEDIUM", score: 2 };
  return { level: "STRONG", score: 3 };
}

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  const handleBlur = useCallback(
    (field: "name" | "email" | "password" | "confirm") => {
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
        case "confirm":
          setErrors((prev) => ({
            ...prev,
            confirm: validateConfirm(password, confirm),
          }));
          break;
      }
    },
    [name, email, password, confirm]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmError = validateConfirm(password, confirm);
    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirm: confirmError,
    });
    setTouched({ name: true, email: true, password: true, confirm: true });

    if (!nameError && !emailError && !passwordError && !confirmError) {
      // Form valid
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex">
      {/* Left: decorative panel */}
      <div className="hidden lg:flex w-[400px] border-r-4 border-border bg-muted flex-col justify-between p-12">
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            PLATFORM: FLUX
          </p>
          <h2 className="font-heading text-5xl font-bold uppercase leading-[0.9]">
            JOIN
            <br />
            THE
            <br />
            GRID
            <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {["REAL-TIME DASHBOARDS", "DEPLOY TRACKING", "REVIEW VELOCITY", "INCIDENT TIMELINE"].map(
            (item, i) => (
              <div key={item} className="flex items-center gap-3 border-b-2 border-border pb-3">
                <span className="font-heading text-xs text-muted-foreground">0{i + 1}</span>
                <span className="font-heading text-xs uppercase tracking-[0.1em]">{item}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Right: form */}
      <div className="flex-1 flex items-center justify-start p-8 md:p-16">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: "linear" }}
        >
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
            AUTH: REGISTER
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">
            CREATE
            <br />
            ACCOUNT
            <span className="text-primary">.</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-10 uppercase tracking-wider">
            ESTABLISH YOUR FLUX IDENTITY
          </p>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <div>
              <label
                htmlFor="signup-name"
                className="block font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3"
              >
                FIELD: FULL_NAME
              </label>
              <Input
                id="signup-name"
                type="text"
                placeholder="ENTER FULL NAME"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                onBlur={() => handleBlur("name")}
                aria-invalid={touched.name && !!errors.name}
                aria-describedby={errors.name ? "signup-name-error" : undefined}
                autoComplete="name"
              />
              {touched.name && errors.name && (
                <p
                  id="signup-name-error"
                  className="text-destructive text-xs uppercase tracking-wider mt-2 font-heading"
                  role="alert"
                >
                  ERROR: {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="signup-email"
                className="block font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3"
              >
                FIELD: EMAIL
              </label>
              <Input
                id="signup-email"
                type="email"
                placeholder="NAME@COMPANY.COM"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={errors.email ? "signup-email-error" : undefined}
                autoComplete="email"
              />
              {touched.email && errors.email && (
                <p
                  id="signup-email-error"
                  className="text-destructive text-xs uppercase tracking-wider mt-2 font-heading"
                  role="alert"
                >
                  ERROR: {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="signup-password"
                className="block font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3"
              >
                FIELD: PASSWORD
              </label>
              <Input
                id="signup-password"
                type="password"
                placeholder="CREATE PASSWORD"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                onBlur={() => handleBlur("password")}
                aria-invalid={touched.password && !!errors.password}
                aria-describedby="signup-password-strength"
                autoComplete="new-password"
              />

              {/* Strength indicator */}
              {password && (
                <div className="mt-3" id="signup-password-strength">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className={`h-2 flex-1 border border-border transition-colors duration-150 ${
                          strength.score >= level
                            ? strength.level === "WEAK"
                              ? "bg-destructive"
                              : strength.level === "MEDIUM"
                                ? "bg-primary"
                                : "bg-secondary"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p
                    className={`text-xs uppercase tracking-wider font-heading ${
                      strength.level === "WEAK"
                        ? "text-destructive"
                        : strength.level === "MEDIUM"
                          ? "text-primary"
                          : "text-secondary"
                    }`}
                  >
                    STRENGTH: {strength.level}
                  </p>
                </div>
              )}

              {touched.password && errors.password && (
                <p
                  className="text-destructive text-xs uppercase tracking-wider mt-2 font-heading"
                  role="alert"
                >
                  ERROR: {errors.password}
                </p>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label
                htmlFor="signup-confirm"
                className="block font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3"
              >
                FIELD: CONFIRM_PASSWORD
              </label>
              <Input
                id="signup-confirm"
                type="password"
                placeholder="REPEAT PASSWORD"
                value={confirm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirm(e.target.value)}
                onBlur={() => handleBlur("confirm")}
                aria-invalid={touched.confirm && !!errors.confirm}
                aria-describedby={errors.confirm ? "signup-confirm-error" : undefined}
                autoComplete="new-password"
              />
              {touched.confirm && errors.confirm && (
                <p
                  id="signup-confirm-error"
                  className="text-destructive text-xs uppercase tracking-wider mt-2 font-heading"
                  role="alert"
                >
                  ERROR: {errors.confirm}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="outline"
              size="lg"
              className="w-full border-3 border-foreground hover:bg-foreground hover:text-background mt-4"
            >
              CREATE ACCOUNT
            </Button>
          </form>

          <div className="mt-8 border-t-2 border-border pt-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              HAVE AN ACCOUNT?{" "}
              <Link
                to="/login"
                className="text-primary hover:text-foreground transition-colors duration-150 font-heading font-bold focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              >
                SIGN IN
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
