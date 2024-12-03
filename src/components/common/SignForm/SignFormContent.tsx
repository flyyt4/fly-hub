interface SignFormContentProps {
  children: React.ReactNode;
}

function SignFormContent({ children }: SignFormContentProps) {
  return <div className="size-full p-6">{children}</div>;
}

export default SignFormContent;
