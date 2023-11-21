import {useNavigate} from 'react-router-dom';
import {H2} from '../../../../components';
import {FaEdit} from "react-icons/fa";
import {Panel} from "../DeletePanel/Panel";

export const MenuContent = ({
                                menu: {id, title, imageUrl, content},
                            }) => {
    const navigate = useNavigate();
    console.log(id, title, content,'Content')
    return (
        <section className='bg-amber-600/40 h-full p-[30px] rounded-md '>
            <div className='w-[1500px] h-full flex drop-shadow-md'>
                <img className='w-[500px] h-[350px] float-left rounded-md object-cover' src={imageUrl} alt={title}/>
                <div className='ml-40 '>
{/*                    <H2 className='font-Cormodant'>{title}</H2>*/}
                    <h2 className='text-5xl mb-5 font-Cormodant font-bold '>{title}</h2>
                    <p className='opacity-60 items-center' >500гр</p>
                    <Panel
                        id={id}
                        margin="-20px 0 20px"
                        editButton={
                            <FaEdit
                                className='cursor-pointer'

                                onClick={() => navigate(`/menu/${id}/edit`)}
                            />
                        }
                    />
                    <div>{content}</div>
                </div>
            </div>
        </section>
    );
};
