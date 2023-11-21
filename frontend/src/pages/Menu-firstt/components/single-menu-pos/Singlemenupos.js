import {Link} from "react-router-dom";

export const SingleMenuPos = ({
                                  id = {id},
                                  title = {title},
                                  imageUrl = {imageUrl},
                              }) => {

    return (
        <div >
            <Link to={`/menu/${id}`}>
                <img className='rounded-md' src={imageUrl} alt={title}/>
                <div className="">
                    <h4>{title}</h4>
                </div>
            </Link>
        </div>
    );
}