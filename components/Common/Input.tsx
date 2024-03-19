import { ErrorMessage } from "@hookform/error-message";

export function Input({
  register,
  error,
  label,
  className,
  name,
  validations,
  ...rest
}: any) {
  return (
    <div className={className}>
      <label
        htmlFor={label}
        className="block text-left text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(name, validations)}
          {...rest}
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ErrorMessage // TODO: ver como carajos mostrare un label con el error
          errors={error ?? []}
          name={name}
          render={(data: any) => {
            console.log(data);
            return (
              <p className="block text-left text-sm font-medium leading-6 text-gray-900">
                test
              </p>
            );
          }}
        />
      </div>
    </div>
  );
}
