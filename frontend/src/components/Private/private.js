import { selectUserRole } from '../../selectors';
import { useSelector } from 'react-redux';
import { checkAccess } from '../../utils';
import { ERROR } from '../../constants/error';
import { Error } from '../Error/Error';

export const Private = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};
