import * as yup from "yup";

export const YupLogin = yup.object().shape({
  email: yup
    .string()
    .email("El correo ingreso no es valido")
    .required("Ingrese su correo para continuar"),
  password: yup.string().required("Ingresa la contraseña"),
});

export const YupEditor = yup.object().shape({
  title: yup.string().required("Ingrese el titulo de la tarea"),
});
