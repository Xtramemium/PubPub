import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer, Error } from './components';
import { Authorization, AllMenuPositions } from './pages';
import { Registration } from './pages/registration/Registration';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setUser } from './actions';
import { MainPage } from './pages';
import { CreateOrEditProduct, MenuContent, MenuForm } from './pages/Menu';
import { BiAbacus } from 'react-icons/bi';
import { BarCard } from './pages/Bar-card/Bar-card';
import { ERROR } from './constants/error';

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
			<Header />
			<Wrapper>
				<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'/register'} element={<Registration />} />
					<Route path={'/login'} element={<Authorization />} />
					<Route path={'/menu'} element={<AllMenuPositions />} />
					<Route path={'/add-new-pos'} element={<CreateOrEditProduct />} />
					<Route path={'/menu/:id'} element={<CreateOrEditProduct />} />
					<Route path={'/menu/:id/edit'} element={<CreateOrEditProduct />} />
					<Route path={'/users'} element={<div>Users</div>} />
					<Route path={'/drink-menu'} element={<BarCard />} />
					<Route
						path={'*'}
						element={<Error error={ERROR.PAGE_NOT_EXIST}></Error>}
					/>
				</Routes>
			</Wrapper>
			<Footer />
		</>
	);
};
