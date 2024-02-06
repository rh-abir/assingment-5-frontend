import { cn } from "@/lib/utils";

type TSectionTileProps = {
  heading: string;
  text: string;
  className?: string;
};

const SectionTitle = ({ heading, text, className }: TSectionTileProps) => {
  return (
    <div className={cn(" mx-auto text-center", className)}>
      <h2 className="font-extrabold text-primary">{heading}</h2>
      <p className="">{text}</p>
    </div>
  );
};

export default SectionTitle;
