"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProp = {
  children: React.ReactNode;
  className: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProp) {
  const status = useFormStatus();

  return (
    <button
      {...props}
      type="submit"
      className={`btn btn-primary ${className}`}
      disabled={status.pending}
    >
      {status.pending && (
        <span className="loading loading-infinity loading-xs"></span>
      )}
      {children}
    </button>
  );
}
