import { useState, useCallback } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { Button, Input, Card, CardContent, cn } from "@notabhay-ui/ui";
import { motion } from "motion/react";

interface FormErrors {
  email?: string;
  password?: string;
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

const springPlayful = {
  type: "spring" as const,
  stiffness: 400,
  damping: 10,
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = useCallback(
    (field: string) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      if (field === "email") {
        setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
      }
      if (field === "password") {
        setErrors((prev) => ({
          ...prev,
          password: validatePassword(password),
        }));
      }
    },
    [email, password]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setErrors({ email: emailError, password: passwordError });
    setTouched({ email: true, password: true });

    if (!emailError && !passwordError) {
      // Would submit here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12 relative candy-dots">
      {/* Floating decorations — trimmed to 2 */}
      <div className="absolute top-20 left-[10%] candy-float opacity-25" aria-hidden="true">
        <div className="w-10 h-4 rounded-full candy-gradient-bg" />
      </div>
      <div className="absolute bottom-20 right-[15%] candy-float-slow opacity-20" aria-hidden="true">
        <div className="w-6 h-6 rounded-xl bg-accent" />
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.95, rotate: -1 }}
        animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
        transition={springPlayful}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <motion.div
            whileHover={{ rotate: 20, scale: 1.15 }}
            transition={springPlayful}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full candy-gradient-bg candy-glow-intense mb-4"
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight">
            <span className="text-primary">Welcome</span>{" "}
            <span className="text-secondary">back</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Sign in to your Flux account
          </p>
        </div>

        <Card className="candy-glow border border-primary/30 candy-gradient-border">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-bold mb-1.5 text-primary"
                >
                  Email
                </label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={touched.email && !!errors.email}
                  className="rounded-full candy-input"
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <p className="text-xs text-destructive mt-1.5 font-medium" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-bold mb-1.5 text-primary"
                >
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    aria-invalid={touched.password && !!errors.password}
                    className="rounded-full candy-input pr-10"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
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
                  <p className="text-xs text-destructive mt-1.5 font-medium" role="alert">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className={cn(
                    "h-4 w-4 rounded border-border accent-primary",
                    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                />
                <label htmlFor="remember" className="text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97, rotate: -2 }}
                transition={springPlayful}
              >
                <Button
                  type="submit"
                  className="w-full rounded-full candy-gradient-bg text-white border-0 candy-glow candy-shimmer font-bold h-12 text-base"
                >
                  Sign In
                </Button>
              </motion.div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-secondary font-bold hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
