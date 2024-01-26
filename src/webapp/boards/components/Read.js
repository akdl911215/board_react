import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {ReadAPI} from "../../api/BoardApi";

const Read = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        content: '',
        writerEmail: '',
        writerName: ''
    })
    const {title, content, writerEmail, writerName} = board
    useEffect(() => console.log(board), [board])
    useEffect(() => {
        ReadAPI(sessionStorage.getItem('boardId'))
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }, [])

    const onChange = (e) => {
        const {value, name} = e.target;
        setBoard({
            ...board,
            [name]: value
        })
    }

    // const save =  () => {
    //     RegisterAPI(board)
    //         .then(res => {
    //             console.log(res)
    //             if (res.status === 200) {
    //                 alert('게시글 등록 완료')
    //                 navigate('/')
    //             }
    //         })
    //         .catch(err => console.error(err))
    // }

    const backList = async () => {
        await navigate('/')
    }

    return (
        <>
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>작성자</span>
                <input type="text" name="writerName" value={writerName} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>email</span>
                <input type="text" name="writerEmail" value={writerEmail} onChange={onChange} />
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea name="content" cols="30" rows="10" value={content} onChange={onChange} />
            </div>
            <br/>
            <div>
                {/*<button onClick={save}>저장</button>*/}
                <button onClick={backList}>취소</button>
            </div>
        </>
    )
}

export default Read
