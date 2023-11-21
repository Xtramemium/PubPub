import { Link, useNavigate } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaUsersGear } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLogin, selectUserRole } from '../../../selectors';
import { ROLES } from '../../../constants';
import { logout } from '../../../actions';

export const ControlPanel = () => {
	const login = useSelector(selectUserLogin);
	const roleId = useSelector(selectUserRole);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	return (
		<div className="mr-8 mt-7 items-center">
			<div className="flex justify-end items-center">
				{roleId === ROLES.GUEST ? (
					<button className="text-3xl transition ease-in-out delay-100 hover:scale-125">
						<Link to="/login">Войти</Link>
					</button>
				) : (
					<div>
						<BiLogOutCircle
							className="cursor-pointer transition ease-in-out duration-200 hover:scale-125"
							onClick={onLogout}
						/>
						<div className="text-">{login}</div>
					</div>
				)}
			</div>
			<div className="flex justify-end items-center mt-2">
				<div className="pr-2">
					<IoMdArrowRoundBack
						className="cursor-pointer "
						onClick={() => navigate(-1)}
					/>
				</div>
				<div>
					<Link to="/users">
						<FaUsersGear />
					</Link>
				</div>
			</div>
		</div>
	);
};
