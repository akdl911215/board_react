import React, {useEffect} from 'react'
import {DisplayAPI} from "../../api/MoviApi";

const Display = () => {

    useEffect(() => {
        DisplayAPI('2024%2F02%2F02%2Fdb3098b9-1602-4e55-bfdb-7b48ef7d2614%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%A1%E1%86%AB_%E1%84%80%E1%85%B3%E1%86%AB%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A1_%E1%84%92%E1%85%AA%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC_240129.jpeg')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    return <>display</>
}

export default Display
