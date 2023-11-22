import { useNavigate } from 'react-router-dom';
import { H2 } from '../../../../components';
import { FaEdit } from 'react-icons/fa';
import { Panel } from '../DeletePanel/Panel';

export const MenuContent = ({ menu: { id, title, weight, imageUrl, content } }) => {
	const navigate = useNavigate();
	return (
		<section className="bg-amber-600/40 h-full p-[30px] rounded-md ">
			<Panel
				id={id}
				editButton={
					<FaEdit
						className="cursor-pointer ml-4"
						onClick={() => navigate(`/menu/${id}/edit`)}
					/>
				}
			/>
			<div className="w-[1500px] h-full flex drop-shadow-md">
				<img
					className="w-[500px] h-[350px] float-left rounded-md object-cover"
					src={imageUrl}
					alt={title}
				/>
				<div className="ml-40 ">
					<h2 className="text-5xl mb-5 font-Cormodant font-bold ">{title}</h2>
					<p className="opacity-60 items-center">{weight} Гр</p>

					<div>{content}</div>
				</div>
			</div>
		</section>
	);
};
