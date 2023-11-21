import {H2} from "../H2/H2";

export const Error = ({ error }) =>
    error && (
        <div className='flex flex-col items-center text-2xl'>
            <H2>Ошибка</H2>
            <div>{error}</div>
        </div>
    );
