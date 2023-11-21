import * as yup from 'yup'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AuthFormError, Button, H2, Input} from '../../components';
import {request} from "../../utils";
import {setUser} from "../../actions";
import * as PropTypes from "prop-types";
import {ROLES} from "../../constants";
import {selectUserRole} from "../../selectors";
import {Navigate, useNavigate} from "react-router-dom";

const regFormSchema = yup.object().shape({
    login: yup
        .string()
        .required('Заполните логин')
        .matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
        .min(3, 'Неверно заполнен логин. Минимум 3 символа')
        .max(15, 'Неверно заполнен логин. Максимум 15 символов'),
    password: yup
        .string()
        .required('Заполните пароль')
        .matches(
            /^[\w#%]+$/,
            'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %',
        )
        .min(6, 'Неверно заполнен пароль. Минимум 6 символов')
        .max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
    passcheck: yup
        .string()
        .required('Заполните повтор пароля')
        .oneOf([yup.ref('password'), null], 'Повтор пароля не совпадает'),
});


export const Registration = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
            passcheck: '',
        },
        resolver: yupResolver(regFormSchema),
    });


    const dispatch = useDispatch()
    const [serverError, setServerError] = useState(null);
    const roleId = useSelector(selectUserRole)
    const navigate = useNavigate()
    const onSubmit = ({login, password}) => {
        request('/register', 'POST', {login, password}).then(({error, user}) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`);
                return;
            }
            dispatch(setUser(user));
            sessionStorage.setItem('userData', JSON.stringify(user));
        });
    };

    const formError =
        errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
    const errorMessage = formError || serverError;


    if (roleId !== ROLES.GUEST) {
        return <Navigate to="/" />;

    }

    return (
        <div className='flex flex-col items-center'>
            <H2 className='text-8xl'>Регистрация</H2>
            <form className='flex flex-col w-140 border border-solid 1px p-10 rounded-md'
                  onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    placeholder="Логин..."
                    {...register('login', {
                        onChange: () => setServerError(null),
                    })}
                />
                <Input
                    type="password"
                    placeholder="Пароль..."
                    {...register('password', {
                        onChange: () => setServerError(null),
                    })}
                />
                <Input
                    type="password"
                    placeholder="Проверка пароля..."
                    {...register('passcheck', {
                        onChange: () => setServerError(null),
                    })}
                />
                <Button type="submit" disabled={!!formError}>
                    Зарегистрироваться
                </Button>
                {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
            </form>
        </div>
    )
}