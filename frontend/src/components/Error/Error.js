import { H2 } from '../H2/H2';

export const Error = ({ error }) =>
	error && (
		<div className="flex flex-col items-center text-2xl bg-error/70 w-80 rounded-box p-10 ">
			<H2>Ошибка</H2>
			<div className="animate-bounce">{error}</div>
		</div>
	);
