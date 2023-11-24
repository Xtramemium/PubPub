import { Link } from 'react-router-dom';

export const SingleMenuPos = ({
	id = { id },
	title = { title },
	imageUrl = { imageUrl },
	weight = { weight },
}) => {
	return (
		<div className="w-[400px] transition duration-500 rounded-box  ease-in-out p-4 hover:bg-amber-600  dark:hover:bg-black/60">
			<Link to={`/menu/${id}`}>
				<img className="rounded-md" src={imageUrl} alt={title} />
				<div className="flex justify-between">
					<div>
						<h4>{title}</h4>
					</div>
					<div className="opacity-70 text-2xl">{weight} грамм</div>
				</div>
			</Link>
		</div>
	);
};
