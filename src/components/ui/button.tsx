import { cn } from "@/lib/utils";

type TButton = {
  children: string;
  clssName?: string;
};

const Button = ({ children, clssName }: TButton) => {
  return (
    <button
      className={cn("bg-primary-color hover:bg-primary-color-deep", clssName)}
    >
      {children}
    </button>
  );
};

export default Button;
