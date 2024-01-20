import { Input } from '../input/Input';

export const Search = ({ searchPhrase, onChange }) => {
	return (
		<div className="h-10 mt-10">
			<div>
				<Input
					className="w-80 transition ease-in-out duration-400 caret-blue-700 focus:bg-white focus:text-black focus:w-80"
					value={searchPhrase}
					placeholder="Поиск по названиям блюд"
					onChange={onChange}
				/>
			</div>
		</div>
	);
};
