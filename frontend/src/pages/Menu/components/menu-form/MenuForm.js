import {useLayoutEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Input} from '../../../../components';
import {HiSave} from "react-icons/hi";
// import {SpecialPanel} from '../special-panel/special-panel';
import {saveMenuAsync} from '../../../../actions';
import {Panel} from "../DeletePanel/Panel";


export const MenuForm = ({
                             menu: {id, title, imageUrl, content}
                         }) => {
    const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
    const [titleValue, setTitleValue] = useState(title);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        setImageUrlValue(imageUrl);
        setTitleValue(title);
    }, [imageUrl, title]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(id, title, content, 'Menu Form')
    const onSave = () => {

        dispatch(
            saveMenuAsync(id, {
                imageUrl: imageUrlValue,
                title: titleValue,
                content
            }),
        ).then(({id}) => navigate(`/post/${id}`));
    };

    const onImageChange = ({target}) => setImageUrlValue(target.value);
    const onTitleChange = ({target}) => setTitleValue(target.value);

    return (
        <div >
            <Input
                value={imageUrlValue}
                placeholder="Изображение..."
                onChange={onImageChange}
            />
            <Input
                value={titleValue}
                placeholder="Заголовок..."
                onChange={onTitleChange}
            />
            <Panel
                id={id}
                margin="20px 0"
                editButton={
                    <HiSave
                        onClick={onSave}
                    />
                }
            />
            <div
                ref={contentRef}
                contentEditable={true}
                suppressContentEditableWarning={true}
            >
                {content}
            </div>
        </div>
    );
};
