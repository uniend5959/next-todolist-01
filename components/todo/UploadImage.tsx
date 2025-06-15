import { postUploadImage } from "@/lib/api/todoApi";
import { TodoDetailType } from "@/type/type";
import Image from "next/image"
import {  useRef, useState } from "react"

type imageProps = {
  setServerImg: React.Dispatch<React.SetStateAction<string>>;
  todoDetail: TodoDetailType
};


// 이미지를 업로드, 이미지 업로드 , 서버로 받아온 이미지를 보여주는 컴포넌트 
// 전달되는 데이터의 종류에따라, 이미지를 다르게 보여주는 기능을 포함  
const UploadImage = ({setServerImg, todoDetail }:imageProps ) => {

    const fileRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string | null>(null);


    const handleUpload = () => {
        fileRef.current?.click() 
    }

    const handleChange= async (e : React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return;

          const fileName = file.name;

            // 한글이 포함되어 있으면 차단
            const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(fileName);
            if (hasKorean) {
                alert("파일 이름에 한글이 포함되어 있습니다. 영문 파일명으로 변경해주세요.");
                return;
            }

        const previewUrl = URL.createObjectURL(file) // 미리 보여주면서 서버로 동시에 url을 받아 활용하는게 ux에 효과적 
        setPreview(previewUrl)

        const formData = new FormData()
        formData.append("image", file)

        try{
            // 서버로부터 이미지를 받아옴 
            const res = await postUploadImage(formData)
            // 부모컴포넌트로 이미지를 보냄  
            setServerImg(res.url)
        }
        catch(error){
            console.log(error)
        }
    }


    return(
        <>
            <div className="">
                <div 
                className="relative w-full h-[300px] border-2 border-dashed border-gray-300 rounded-2xl bg-[var(--color-slate-1)] cursor-pointer  flex items-center justify-center"
                onClick={handleUpload}
                >
                    {preview ? (
                        <div className="relative w-full h-full">
                            <Image
                            fill
                            src={preview}
                            alt="업로드 이미지"
                            className="object-contain rounded-2xl"
                            />
                        </div>
                        ) : todoDetail.imageUrl ? (
                        <div className="relative w-full h-full">
                            <Image
                            fill
                            src={todoDetail.imageUrl}
                            alt="서버 이미지"
                            className="object-contain rounded-2xl"
                            />
                        </div>
                        ) : (
                        <div className="text-gray-300">
                            <Image
                            src="/assets/img-1.png"
                            alt="기본 이미지"
                            width={80}
                            height={80}
                            className="object-contain"
                            />
                        </div>
                        )}
                                            
                    <button
                        type="button"
                        className="absolute bottom-2 right-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-300 transition"
                    >
                        <span className="text-xl text-gray-600">+</span>
                    </button>

                    <input 
                        type="file"
                        accept="image/*"
                        ref={fileRef}
                        className="hidden"
                        onChange={handleChange}
                        />
                </div>
            </div>
        </>
    )
}

export default  UploadImage