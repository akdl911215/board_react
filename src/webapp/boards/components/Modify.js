import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {ModifyAPI, ReadAPI} from "../../api/BoardApi";

const Modify = () => {

    const navigate = useNavigate();
    const { idx } = useParams();

    const [board, setBoard] = useState({
        id: idx,
        title: '',
        content: '',
        writerEmail: '',
        writerName: ''
    })
    const {title, content, writerEmail, writerName} = board
    useEffect(() => console.log(board), [board])
    useEffect(() => {
        ReadAPI(idx)
            .then(res => {
                console.log('read res : ', res)

                setBoard({
                    id: res?.data?.id,
                    title: res?.data?.title,
                    content: res?.data?.content,
                    writerEmail: res?.data?.writerEmail,
                    writerName: res?.data?.writerName
                })
            })
            .catch(err => console.error(err))
    }, [])

    const onChange = (e) => {
        const {value, name} = e.target;
        setBoard({
            ...board,
            [name]: value
        })
    }

    const backList = async () => {
        await navigate(`/read/${idx}`)
    }

    const modifyButton = () => {
        ModifyAPI(board)
            .then(res => {
                console.log('modify res : ', res)

                if (res.status === 200) {
                    alert('게시판 수정이 완료되었습니다.')
                    navigate(`/read/${idx}`)
                    // window.location.href = `read/${idx}`
                }
            })
            .catch(err => console.error(err))
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
                <input type="text" name="writerName" value={writerName} onChange={onChange} disabled={true} />
            </div>
            <br />
            <div>
                <span>email</span>
                <input type="text" name="writerEmail" value={writerEmail} onChange={onChange} disabled={true} />
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea name="content" cols="30" rows="10" value={content} onChange={onChange}/>
            </div>
            <br/>
            <div>
                <button onClick={modifyButton}>수정</button>
                <button onClick={backList}>취소</button>
            </div>
        </>
    )
}

export default Modify
