import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {AuthFormError, Button, H2, Input} from '../../components';
import {Link, Navigate} from 'react-router-dom';
import {request} from "../../utils";
import {selectUserRole} from "../../selectors";
import {ROLES as ROLE} from "../../constants";
import {setUser} from "../../actions";

const authFormSchema = yup.object().shape({
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
});


const StyledLink = () => {
    return <Link to={'/register'}
                 className='font-light hover:font-normal underline decoration-sky-500 text-2xl'>Зарегистрироваться
    </Link>;
};

export const Authorization = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
        },
        resolver: yupResolver(authFormSchema),
    });
    const [serverError, setServerError] = useState(null);
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRole);

    const onSubmit = ({login, password}) => {
        request('/login', 'POST', {login, password}).then(({error, user}) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`);
                return;
            }

            dispatch(setUser(user));
            sessionStorage.setItem('userData', JSON.stringify(user));
        });
    };

    const formError = errors?.login?.message || errors?.password?.message;
    const errorMessage = formError || serverError;

    if (roleId !== ROLE.GUEST) {
        return <Navigate to="/menu"/>;
    }
    return (
        <div className='flex flex-col items-center'>
            <H2 className='text-8xl'>Авторизация</H2>
            <form className='flex flex-col w-140 border border-solid 1px p-10 rounded-md'
                  onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    placeholder='Логин...'
                    {...register('login', {
                        onChange: () => setServerError(null),
                    })}
                />
                <Input
                    className='focus: bg-white'
                    type='password'
                    placeholder='Пароль...'
                    {...register('password', {
                        onChange: () => setServerError(null),
                    })}
                />
                <Button type='submit' disabled={!!formError}>
                    Авторизоваться
                </Button>
                {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
            </form>
            <StyledLink to={'/register'}/>
        </div>
    );
};