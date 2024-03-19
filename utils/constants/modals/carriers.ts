export const CARRIER_FIELDS = [
  {
    name: "firstName",
    label: "Nombre",
    className: "sm:col-span-3",
    validations: {
      required: "Este campo es requerido",
    },
  },
  {
    name: "lastName",
    label: "Apellido",
    className: "sm:col-span-3",
    validations: {
      required: "Este campo es requerido",
    },
  },
  {
    name: "email",
    label: "Correo",
    className: "sm:col-span-3",
    validations: {
      pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: "Correo invalido",
      },
    },
  },
  {
    name: "phone",
    label: "Telefono",
    className: "sm:col-span-3",
    validations: {
      required: "Este campo es requerido",
    },
  },
  {
    name: "address",
    label: "Direccion",
    className: "sm:col-span-full",
    validations: {
      required: "Este campo es requerido",
    },
  },
  {
    name: "city",
    label: "Ciudad",
    className: "sm:col-span-3",
    validations: {
      required: "Este campo es requerido",
    },
  },
  {
    name: "state",
    label: "Estado",
    className: "sm:col-span-2",
    validations: {
      required: "Este campo es requerido",
    },
  },
  {
    name: "zip",
    label: "Zip",
    className: "sm:col-span-2",
    validations: {
      required: "Este campo es requerido",
    },
  },
];
