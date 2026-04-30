import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { useToast } from "../hooks/useToast";

export default function Login() {
  const navigate = useNavigate();
  const { message, notify } = useToast();

  return (
    <section className="container-pad section-pad grid min-h-[70vh] place-items-center">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-3xl font-black">Welcome back</h1>
        <p className="mt-2 text-sm text-neutral-600">Login is simulated until backend authentication is added.</p>
        <div className="mt-6 grid gap-4">
          <Input label="Email" type="email" placeholder="you@goyatra.com" />
          <Input label="Password" type="password" placeholder="Password" />
          <Button
            icon={LogIn}
            onClick={() => {
              notify("Login simulated");
              setTimeout(() => navigate("/dashboard"), 700);
            }}
          >
            Login
          </Button>
        </div>
      </Card>
      <Toast message={message} />
    </section>
  );
}
