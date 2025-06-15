import { useState } from "react"


// 메모와 할일등록에서 재사용하기 위한 INPUT 커스텀 훅 
const useInput = (initialValue: string ) => {
    const [value, setValue] = useState(initialValue)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     setValue(e.target.value)
    }

    return  { value, setValue, handleChange}
}

export default useInput