import { cn } from "@/lib/utils";

function StatusBar() {
  return (
    <div
      className={cn(
        "size-full text-sm flex px-1 gap-2 overflow-hidden [&>div]:flex-[1] [&>div]:flex",
        "[&>div]:items-center [&>div]:flex-nowrap [&>div]:gap-2 [&>div]:text-nowrap"
      )}
    >
      <div>
        <span>1.0.0</span>
      </div>
      <div className="justify-end">
        <span>last</span>
      </div>
    </div>
  );
}

export default StatusBar;
