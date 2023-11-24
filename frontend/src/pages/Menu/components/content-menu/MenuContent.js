import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { Panel } from '../DeletePanel/Panel';

export const MenuContent = ({ menu: { id, title, weight, imageUrl, content } }) => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="bg-amber-600/60 h-full p-[30px] rounded-md dark:bg-black/60  ">
				<Panel
					id={id}
					editButton={
						<FaEdit
							className="cursor-pointer ml-4 text-black dark:text-white"
							onClick={() => navigate(`/menu/${id}/edit`)}
						/>
					}
				/>
				<div className="w-[1500px] h-full flex ">
					<div></div>
					<img
						className="w-[500px] h-[350px] float-left rounded-md object-cover shadow-xl ring-1 ring-base-100 dark:ring-white"
						src={imageUrl}
						alt={title}
					/>
					<div className="ml-40 ">
						<h2 className="text-5xl mb-5 font-Cormodant font-bold text-black dark:text-white ">
							{title}
						</h2>
						<p className="opacity-60 items-center text-black dark:text-white">
							{weight} Гр
						</p>

						<div className="font-Prata text-black dark:text-white">
							{content}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
