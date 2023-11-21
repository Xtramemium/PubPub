import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../../components';
import { HiSave } from 'react-icons/hi';
// import {SpecialPanel} from '../special-panel/special-panel';
import { saveMenuAsync } from '../../../../actions';
import { Panel } from '../DeletePanel/Panel';
import { sanitizeContent } from '../../utils/sanitize-content';

export const MenuForm = ({ menu: { id, title, imageUrl, content } }) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			saveMenuAsync(id, {
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/menu/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);

	return (
		<section className="bg-amber-600/40 h-full p-[30px] rounded-md ">
			<div>
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
				<div
					ref={contentRef}
					contentEditable={true}
					suppressContentEditableWarning={true}
				>
					{content}
				</div>
				<Panel id={id} margin="20px 0" editButton={<HiSave onClick={onSave} />} />
			</div>
		</section>
	);
};
