import { useState, useCallback } from "react";
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
} from "@notabhay-ui/ui";

interface FormErrors {
  email?: string;
  password?: string;
}

export default function Login() {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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
    [email, password, validateEmail, validatePassword]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const emailError = validateEmail(email);
      const passwordError = validatePassword(password);
      setErrors({ email: emailError, password: passwordError });
      setTouched({ email: true, password: true });
    },
    [email, password, validateEmail, validatePassword]
  );

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      {/* Vivid orbs for maximum glass effect */}
      <div className="orb orb-1 top-[10%] left-[15%]" aria-hidden="true" />
      <div className="orb orb-2 bottom-[15%] right-[10%]" aria-hidden="true" />
      <div className="orb orb-3 top-[50%] left-[55%]" aria-hidden="true" />
      <div className="orb orb-4 bottom-[30%] left-[30%]" aria-hidden="true" />

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
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your Flux account</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="login-email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={
                    touched.email && errors.email
                      ? "login-email-error"
                      : undefined
                  }
                />
                {touched.email && errors.email && (
                  <p
                    id="login-email-error"
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
                  htmlFor="login-password"
                  className="text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  aria-invalid={touched.password && !!errors.password}
                  aria-describedby={
                    touched.password && errors.password
                      ? "login-password-error"
                      : undefined
                  }
                />
                {touched.password && errors.password && (
                  <p
                    id="login-password-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={remember}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-ring accent-primary"
                />
                <label
                  htmlFor="remember-me"
                  className="text-sm text-muted-foreground"
                >
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full rounded-2xl glass-shimmer">
                Sign in
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
