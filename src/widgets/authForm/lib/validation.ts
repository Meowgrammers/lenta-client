import * as yup from 'yup'

export const yupSchemaAuthForm = yup.object().shape({
  username: yup.string().required('Поле обязательно для заполнения'),
  password: yup
    .string()
    .required('Поле пароль обязательно для заполнения')
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .max(20, 'Пароль должен содержать не более 20 символов'),
})
