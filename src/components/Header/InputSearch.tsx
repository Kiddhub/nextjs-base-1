import { cn } from "@/lib/cn";
import { SearchIcon } from "lucide-react";
import React from "react";
import { InputProps } from "../ui/input";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.58366 17.5003C13.9559 17.5003 17.5003 13.9559 17.5003 9.58366C17.5003 5.2114 13.9559 1.66699 9.58366 1.66699C5.2114 1.66699 1.66699 5.2114 1.66699 9.58366C1.66699 13.9559 5.2114 17.5003 9.58366 17.5003Z"
            stroke="#52616B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.3337 18.3337L16.667 16.667"
            stroke="#52616B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <input
          {...props}
          type="search"
          ref={ref}
          className="w-[320px] p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="What are you looking for?"
        />
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };
