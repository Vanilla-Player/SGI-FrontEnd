import React from "react";

export function Select({ register, options, name, ...rest }: any) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value: any) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
}
