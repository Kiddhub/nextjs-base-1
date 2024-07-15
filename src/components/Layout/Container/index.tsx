import { cn } from "@/lib/cn";
import { PropsWithClassNameAndChildren } from "@/types";

const Container = ({ className, children }: PropsWithClassNameAndChildren) => {
  return (
    <div className={cn('mx-auto  main:max-w-[1320px] 2xl:max-w-screen-2xl ', className)}>
      {children}
    </div>
  );
};

export default Container;
