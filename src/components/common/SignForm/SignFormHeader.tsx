import { CardDescription, CardHeader, CardTitle } from "@components/ui/card";

interface SignFromHeaderProps {
  title: string;
  subTitle: string;
}

function SignFormHeader({ title, subTitle }: SignFromHeaderProps) {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{subTitle}</CardDescription>
    </CardHeader>
  );
}

export default SignFormHeader;
