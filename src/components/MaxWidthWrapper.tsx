import { ReactNode } from "react";

import { cn } from "@/lib/utils";

// This component is used to wrap content that should be constrained to a max width
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    // cn() is a utility function that allows style cascading
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>       
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
