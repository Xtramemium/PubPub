import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {checkAccess} from '../../../../utils';
import { selectUserRole } from "../../../../selectors";
import {ROLES} from "../../../../constants";
import {MdDeleteForever} from "react-icons/md";
import {removeMenuPosAsync} from "../../../../actions";

export const Panel = ({id, publishedAt, editButton}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRole = useSelector(selectUserRole);

    /*    const onMenuPosRemove = (id) => {
            dispatch(
                openModal({
                    text: 'Удалить статью?',
                    onConfirm: () => {
                        dispatch(removePostAsync(id)).then(() => {
                            navigate('/');
                        });
                        dispatch(CLOSE_MODAL);
                    },
                }),
            );
        };
        */
    const onMenuPosRemove = (id) => {
        dispatch(removeMenuPosAsync(id)).then(() => {
            navigate('/')
        })
    }


    const isAdmin = checkAccess([ROLES.ADMIN], userRole);

    return (
        <div className=''>
            {isAdmin && (
                <div className="buttons">
                    {editButton}
                    {publishedAt && (
                        <MdDeleteForever
                            onClick={() => onMenuPosRemove(id)}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

