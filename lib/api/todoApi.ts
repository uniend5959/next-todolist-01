
import axios from '@/lib/axios'


// todo 목록 조회 
export const getTodo = async () => {
    const res = await axios.get(`/items`)
    console.log(res, '내가')
    return res.data
}


// todo 항목상세 조회 

// todo 등록 

// todo 수정 

// todo 삭제 

// 이미지 등록 


