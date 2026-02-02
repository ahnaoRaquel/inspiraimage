import * as Yup from 'yup'

export interface LoginForm {
    name?: string;
    email: string;
    password: string;
    passwordMatch?: string;
}

export const validationScheme  = Yup.object().shape({
    email: Yup.string().trim().required('Email é obrigatório!').email('Email inválido!'),
    password: Yup.string().required('Senha é obrigatório').min(8, 'A senha precisa ter mais 8 caracteres!'),
    passwordMatch: Yup.string().oneOf( [Yup.ref('password')], 'As senhas precisam ser iguais!' )
})

export const formScheme: LoginForm = { email: '', name: '', password: '', passwordMatch: '' }