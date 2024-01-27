import React, {useEffect, useState} from 'react'
import {DeletedAPI, ListAPI} from "../../api/BoardApi";
import {Pagination} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

const List = () => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const [boardId, setBoardId] = useState(0)
    const [pagination, setPagination] = useState({
        end: 1,
        page: 1,
        size: 10,
        start: 1,
        totalPage:11

    })

    useEffect(() => {
        ListAPI(1, 10).then((res) =>
        {
            const data = res?.data
            console.log('data : ', data)
            setPagination({
                ...pagination,
                end: data.end,
                page: data.page,
                size: data.size,
                start:data.start,
                totalPage: data.totalPage
            })

            const response = res?.data?.dtoList;
            const resList = response ? response : []
            setList(resList);
        }).catch(err => console.error(err));
    },[])

    useEffect(() => console.log('list : ', list), [list])

    const deleteButton = () => {
        DeletedAPI(boardId).then((res) =>
        {
            const response = res?.data
            if (response) window.location.reload()
        }).catch(err => console.error(err));
    }

    const modifyButton = (boardId) => {
        // sessionStorage.setItem('boardId', boardId)
        navigate(`/read/${boardId}`)
    }


    return (
        <>
            <div>
                <h2 className="text-center">Board List</h2>
                <div style={{width: 500}}>
                    <div>
                        <div style={{display: 'flex', padding: 15}}>
                            <div></div>
                            <div style={{paddingLeft: 10, paddingRight: 10}}>게시판 번호</div>
                            <div style={{paddingLeft: 10, paddingRight: 10}}>제목</div>
                            <div style={{paddingLeft: 40, paddingRight: 40}}>작성자</div>
                        </div>
                        {
                            list?.map(el =>
                                <div style={{display: 'flex'}} key={el.id}>
                                    <input
                                        type="checkbox"
                                        onChange={() => setBoardId(el.id)}
                                    />
                                    <div onClick={() => modifyButton(el.id)} style={{paddingLeft: 20, paddingRight: 20}}>{el.id}</div>
                                    <div onClick={() => modifyButton(el.id)} style={{paddingLeft: 20, paddingRight: 20}}>{el.title}</div>
                                    <div onClick={() => modifyButton(el.id)} style={{paddingLeft: 20, paddingRight: 20}}>{el.writerName}</div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <button onClick={() => navigate('/register')}>작성</button>
                    <button onClick={deleteButton}>삭제</button>
                </div>
            </div>
            <div style={{textAlign: "center", paddingTop: "4rem"}}>
                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={pagination.totalPage}
                //     end: 1,
                // next: true,
                // page: 1,
                // size: 10,
                // start: 1,
                // totalPage:11
                />
            </div>
        </>
    )
}

export default List
