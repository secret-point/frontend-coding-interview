import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Logo from "../../components/Logo";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/Input";
import Button from "../../components/Button";

const schema = z.object({
  username: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type Form = z.infer<typeof schema>;

export default function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({ username: "", password: "" });
  const [errors, setErrors] = useState<Partial<Form>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      const formErrors = parsed.error.formErrors.fieldErrors;
      setErrors({
        username: formErrors.username?.[0],
        password: formErrors.password?.[0],
      });
      return;
    }

    setErrors({});
    setSubmitting(true);
    signIn(form.username);
    navigate("/photos", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <Logo size={64} />
      <h1 className="mt-6 text-2xl font-semibold text-gray-900">
        Sign in to your account
      </h1>

      <form
        onSubmit={onSubmit}
        className="mt-8 w-full max-w-sm flex flex-col gap-4"
        autoComplete="on"
      >
        <Input
          label="Username"
          name="username"
          type="email"
          placeholder="you@example.com"
          value={form.username}
          error={errors.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          autoFocus
        />

        <div className="flex items-center justify-between">
          <span />
          <button type="button" className="text-sm text-brand hover:underline">
            Forgot password?
          </button>
        </div>

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          error={errors.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button type="submit" className="mt-2" disabled={submitting}>
          Sign in
        </Button>
      </form>
    </div>
  );
}
