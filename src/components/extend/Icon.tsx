import { Icon as Iconify } from "@iconify-icon/react";

interface IconProps {
  icon: string;
  className?: string;
}

function Icon({ icon, className }: IconProps) {
  //TODO: extend logic
  return <Iconify icon={icon} className={className} />;
}
export default Icon;
