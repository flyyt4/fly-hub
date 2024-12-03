import { Button } from "@components/ui/button";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

interface SignFromFooterProps {
  children: React.ReactNode;
}

function SignFormFooter({ children }: SignFromFooterProps) {
  return (
    <footer className="px-6 pb-6">
      <span className="w-full flex justify-center pt-6 gap-[1ch] text-muted-foreground text-sm">
        {children}
      </span>
    </footer>
  );
}

export default SignFormFooter;
