import { Card } from "@components/ui/card";

interface SignFormProps {
  children: React.ReactNode;
}

function SignForm({ children }: SignFormProps) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px]">{children}</Card>
    </main>
  );
}

export default SignForm;
