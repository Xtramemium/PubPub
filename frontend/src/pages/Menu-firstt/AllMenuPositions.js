import {useEffect, useMemo, useState} from "react";
import {Search} from '../../components'
import {request} from "../../utils";
import {PAGINATION_LIMIT} from "../../constants";
import {debounce} from "../../utils";
import {Pagination, SingleMenuPos} from "./components";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMenuPos, selectUserRole} from "../../selectors";


export const AllMenuPositions = () => {
    const [menu, setMenu] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [shouldSearch, setShouldSearch] = useState(false);

    useEffect(() => {
        request(
            `/menu?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`,
        ).then(({data: {menu, lastPage}}) => {
            console.log(menu)
            setMenu(menu);
            setLastPage(lastPage);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, shouldSearch]);
    const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

    // const menuSelector = useSelector(selectMenuPos);
    // console.log(menuSelector,'menu store')
    const onSearch = ({target}) => {
        setSearchPhrase(target.value);
        startDelayedSearch(!shouldSearch);
    };


    return (
        <div className='flex justify-center flex-col w-[500px] items-center'>
            <div>
                <Search searchPhrase={searchPhrase} onChange={onSearch}/>
                {menu.length > 0 ? (
                    <div className="mt-16 flex justify-center flex-col w-[500px]">
                        {menu.map(({id, title, imageUrl,}) => (
                            <SingleMenuPos
                                key={id}
                                id={id}
                                title={title}
                                imageUrl={imageUrl}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-posts-found">Статьи не найдены</div>
                )}
            </div>
        </div>
    )
}