import { useState, useCallback } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { Button, Input, Card, CardContent, cn } from "@notabhay-ui/ui";
import { motion } from "motion/react";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function validateName(name: string): string | undefined {
  if (!name.trim()) return "Full name is required";
  if (name.trim().length < 2) return "Name must be at least 2 characters";
  return undefined;
}

function validateEmail(email: string): string | undefined {
  if (!email) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Please enter a valid email address";
  return undefined;
}

function validatePassword(password: string): string | undefined {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  return undefined;
}

function validateConfirmPassword(
  password: string,
  confirmPassword: string
): string | undefined {
  if (!confirmPassword) return "Please confirm your password";
  if (password !== confirmPassword) return "Passwords do not match";
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
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 2) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}

const strengthConfig = {
  weak: {
    label: "Weak",
    barClass: "bg-destructive",
    width: "33%",
  },
  medium: {
    label: "Medium",
    barClass: "bg-secondary",
    width: "66%",
  },
  strong: {
    label: "Strong",
    barClass: "bg-accent",
    width: "100%",
  },
};

const springBouncy = {
  type: "spring" as const,
  stiffness: 300,
  damping: 15,
};

export default function Signup() {
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
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (!Object.values(newErrors).some(Boolean)) {
      // Would submit here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={springBouncy}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={springBouncy}
            className="inline-flex items-center justify-center w-14 h-14 rounded-full candy-gradient-bg candy-glow mb-4"
          >
            <Sparkles className="h-7 w-7 text-white" />
          </motion.div>
          <h1 className="font-heading font-extrabold text-3xl tracking-tight">
            Create an account
          </h1>
          <p className="text-muted-foreground mt-1">
            Start shipping with Flux in seconds
          </p>
        </div>

        <Card className="candy-glow border-border/50">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="signup-name"
                  className="block text-sm font-medium mb-1.5"
                >
                  Full Name
                </label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={touched.name && !!errors.name}
                  className="rounded-full"
                  autoComplete="name"
                />
                {touched.name && errors.name && (
                  <p className="text-xs text-destructive mt-1.5" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="signup-email"
                  className="block text-sm font-medium mb-1.5"
                >
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={touched.email && !!errors.email}
                  className="rounded-full"
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <p className="text-xs text-destructive mt-1.5" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="signup-password"
                  className="block text-sm font-medium mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    aria-invalid={touched.password && !!errors.password}
                    className="rounded-full pr-10"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                  <p className="text-xs text-destructive mt-1.5" role="alert">
                    {errors.password}
                  </p>
                )}

                {/* Strength indicator */}
                {password && strength && (
                  <div className="mt-2 space-y-1">
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className={cn(
                          "h-full rounded-full",
                          strengthConfig[strength].barClass
                        )}
                        initial={{ width: 0 }}
                        animate={{ width: strengthConfig[strength].width }}
                        transition={springBouncy}
                      />
                    </div>
                    <p
                      className={cn(
                        "text-xs font-medium",
                        strength === "weak" && "text-destructive",
                        strength === "medium" && "text-secondary",
                        strength === "strong" && "text-accent"
                      )}
                    >
                      {strengthConfig[strength].label}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="signup-confirm"
                  className="block text-sm font-medium mb-1.5"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    id="signup-confirm"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={() => handleBlur("confirmPassword")}
                    aria-invalid={
                      touched.confirmPassword && !!errors.confirmPassword
                    }
                    className="rounded-full pr-10"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                  <p className="text-xs text-destructive mt-1.5" role="alert">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98, rotate: -1 }}
                transition={springBouncy}
              >
                <Button
                  type="submit"
                  className="w-full rounded-full candy-gradient-bg text-white border-0 candy-glow font-semibold h-11"
                >
                  Create Account
                </Button>
              </motion.div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
