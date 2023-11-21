import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Header, Footer} from './components';
import {Authorization, AllMenuPositions} from './pages';
import {Registration} from './pages/registration/Registration';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {useLayoutEffect} from "react";
import {setUser} from "./actions";
import {MainPage} from "./pages";
import {CreateOrEditProduct, MenuForm} from "./pages/Menu";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  flex: 1 1 auto;
`;


export const Pub = () => {

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        const currentUserDataJSON = sessionStorage.getItem('userData');

        if (!currentUserDataJSON) {
            return;
        }

        const currentUserData = JSON.parse(currentUserDataJSON);

        dispatch(
            setUser({
                ...currentUserData,
                roleId: Number(currentUserData.roleId),
            }),
        );
    }, [dispatch]);

    return (
        <>
            <Header/>
            <Wrapper>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/register'} element={<Registration/>}/>
                    <Route path={'/login'} element={<Authorization/>}/>
                    <Route path={'/menu'} element={<AllMenuPositions/>}/>
                    <Route path={'/menu/:id'} element={<CreateOrEditProduct/>}/>
                    <Route path={'/menu/:id/edit'} element={<MenuForm/>}/>
                    <Route path={'/users'} element={<div>Users</div>}/>
                </Routes>
            </Wrapper>
            <Footer/>
        </>
    );
};