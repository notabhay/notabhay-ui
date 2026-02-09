import { useState, useCallback, type ChangeEvent } from "react";
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
  email?: string;
  password?: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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

  const handleBlur = useCallback(
    (field: string) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      if (field === "email") {
        setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
      }
      if (field === "password") {
        setErrors((prev) => ({ ...prev, password: validatePassword(password) }));
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
      if (!emailError && !passwordError) {
        // Form is valid
      }
    },
    [email, password, validateEmail, validatePassword]
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
            Welcome Back
          </p>
          <h1 className="font-heading text-3xl font-semibold text-foreground tracking-tight mb-2">
            Sign In
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access your dashboard.
          </p>
        </motion.div>

        <hr className="hairline mb-8" />

        <form onSubmit={handleSubmit} noValidate>
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Email field */}
            <div className="space-y-1">
              <label
                htmlFor="login-email"
                className="font-heading text-xs tracking-wide text-muted-foreground"
              >
                Email
              </label>
              <Input
                id="login-email"
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

            {/* Password field */}
            <div className="space-y-1">
              <label
                htmlFor="login-password"
                className="font-heading text-xs tracking-wide text-muted-foreground"
              >
                Password
              </label>
              <Input
                id="login-password"
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                onBlur={() => handleBlur("password")}
                placeholder="Minimum 8 characters"
                aria-invalid={touched.password && !!errors.password}
                className="border-0 border-b border-border rounded-none font-body placeholder:font-body focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary"
              />
              {touched.password && errors.password && (
                <p className="text-xs text-destructive mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded-sm border border-border text-primary accent-primary focus-visible:outline-2 focus-visible:outline-ring"
              />
              <label htmlFor="remember" className="text-sm text-muted-foreground">
                Remember me
              </label>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Button
              type="submit"
              className="w-full small-caps border border-border/50"
            >
              Sign In
            </Button>
          </motion.div>
        </form>

        <motion.div variants={fadeUp} className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don&rsquo;t have an account?{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline underline-offset-4 transition-colors duration-300"
            >
              Create one
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
