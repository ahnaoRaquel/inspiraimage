import * as Yup from 'yup'

export interface FormProps {
    name: string;
    tags: string;
    file: string | Blob;
}

export const formScheme: FormProps = { name: '', tags: '', file: '' }

export const formValidationScheme = Yup.object().shape({
    name: Yup.string().trim()
        .required('Nome é obrigatório!')
        .max(50, 'Nome tem um limite de 50 caracteres!'),
    tags: Yup.string().trim()
        .required('Tag é obrigatório!')
        .max(50, 'Tags tem um limite de 100 caracteres!'),
    file: Yup.mixed<Blob>()
        .required('Selecione uma imagem para upload!')
        .test('size', 'O tamanho da imagem é até 4 MB', (file) => {
            return file.size < 4000000;
        })
        .test('type', 'Formatos aceitos: jpeg, gif ou png', (file) => {
            return file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
        })
})