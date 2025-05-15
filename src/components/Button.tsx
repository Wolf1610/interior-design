import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

import "@/app/globals.css";

const classes = cva("border h-12 rounded-lg px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-red-orange-500 text-white border-red-orange-500",
      secondary: "border-red-orange-500 text-red-orange-500 bg-transparent",
    },
    size: {
        sm: "h-10"
    }
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        className,
        size,
      })}
      {...otherProps}
    />
  );
}
