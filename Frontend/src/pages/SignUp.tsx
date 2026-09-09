import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Field, Input, Button } from "../components";
import { useRegister } from "../features/auth/useAuth";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = useRegister();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      await register.mutateAsync({ name, email, password });
      toast.success("Account created — sign in now");
      navigate("/signin");
    } catch (error) {
      console.log(`Page :: Signup :: onSubmit :: Error :: `, error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <Store size={24} className="mb-1 text-accent-500" />
          <CardTitle>Create your account</CardTitle>
          <p className="text-sm text-zinc-500">Takes less than a minute</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <Field label="Full name">
              <Input value={name} onChange={(e) => setName(e.target.value)} required minLength={3} maxLength={20} />
            </Field>
            <Field label="Email">
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Field>
            <Field label="Password">
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Field>

            {register.isError && (
              <p className="text-sm text-red-500">
                {(register.error as { response?: { data?: { Error?: string } } })?.response?.data?.Error ??
                  "Something went wrong."}
              </p>
            )}

            <Button type="submit" disabled={register.isPending} className="w-full">
              {register.isPending ? "Creating…" : "Sign up"}
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-accent-600 hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
