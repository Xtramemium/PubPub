import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer, Error, ButtonToTop } from './components';
import {
	Authorization,
	AllMenuPositions,
	MainPage,
	CreateOrEditProduct,
	Registration,
} from './pages';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setUser } from './actions';
import { ERROR } from './constants/error';
import styled from 'styled-components';

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
			<ButtonToTop />
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
