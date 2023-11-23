import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../../components';
import { HiSave } from 'react-icons/hi';
import { saveMenuAsync } from '../../../../actions';
import { Panel } from '../DeletePanel/Panel';
import { sanitizeContent } from '../../utils/sanitize-content';

export const MenuForm = ({ menu: { id, title, weight, imageUrl, content } }) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const [weightValue, setWeightValue] = useState(weight);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
		setWeightValue(weight);
	}, [imageUrl, title, weight]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			saveMenuAsync(id, {
				imageUrl: imageUrlValue,
				weight: weightValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/menu/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);
	const onWeightChange = ({ target }) => setWeightValue(target.value);

	return (
		<section className="bg-amber-600/40 h-full p-[30px] rounded-md ">
			<div className=" justify-center w-full ">
				<Input
					value={imageUrlValue}
					placeholder="Изображение"
					onChange={onImageChange}
				/>
				<Input
					value={titleValue}
					placeholder="Заголовок"
					onChange={onTitleChange}
				/>
				<Input
					value={weightValue}
					placeholder="Вес в граммах"
					onChange={onWeightChange}
				/>
				<div
					className="border-solid border rounded-md mt-10 p-3"
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
