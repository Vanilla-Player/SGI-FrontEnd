import React from "react";
import { useForm } from "react-hook-form";

export default function Form({
  defaultValues,
  children,
  onSubmit,
  className,
}: any) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                key: child.props.name,
                error: errors[child.props.name],
              },
            })
          : child;
      })}
    </form>
  );
}