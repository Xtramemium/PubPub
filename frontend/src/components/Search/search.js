import {FcSearch} from "react-icons/fc";
import {Input} from "../input/Input";

export const Search = ({searchPhrase, onChange}) => {


    return (
        <div className='flex relative w-80 h-10 mt-10 mx-auto mr-[127px]'>
            <Input className='transition ease-in-out delay-150 caret-blue-700 focus:bg-white focus:text-black'
                value={searchPhrase}
                placeholder="Поиск по названиям блюд"
                onChange={onChange}
            />
        </div>

    );

    /*
        & > input {
            padding: 10px 32px 10px 10px;
        }

        & > div {
            position: absolute;
            top: 3px;
            right: 9px;
        }
    `;
    */

}