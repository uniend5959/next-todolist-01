
import axios from '@/lib/axios'


// todo 목록 조회 
export const getTodo = async () => {
    const res = await axios.get(`/items`)
    return res.data
}


// todo 항목상세 조회 
export const getTodoDetail = async (itemId : number ) => {
    const res = await axios.get(`/items/${itemId}`)
    return res.data
}


// todo 등록 
export const postTodo = async (data: { name: string }) => {
    const res = await axios.post(`/items`, data)
    return res.data
}


// todo 완료 체크 
export const patchIsCompleted = async ( 
    itemId: number,
    data: { isCompleted: boolean }) => {
    const res = await axios.patch(`/items/${itemId}`, data)
    return res.data
}

// todo 수정 
export const patchDetail = async (
    itemId: number,
    data: {
        name: string,
        memo: string,
        imageUrl: string,
        isCompleted: boolean
    }
    ) => {
    const res = await axios.patch(`/items/${itemId}`, data)
    return res.data
}

// todo 삭제 
export const deleteTodo = async ( itemId: number) => {
    const res = await axios.delete(`/items/${itemId}`)
    return res.data
}


// 이미지 등록 
export const postUploadImage = async (formData: FormData) => {
    const res = await axios.post(`/images/upload`, formData, {
        headers: {
         "Content-Type": "multipart/form-data",
         },
    })

    return res.data
}

