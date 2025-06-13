import Image from "next/image"
import useIsMobile  from "@/hook/useIsMobile"


const TodoList = ({todo}) => {
     const {isMobile} = useIsMobile();
     
    if(todo.length === 0){
        return(
            <div className="">
                <div className="relative w-[120px] h-[60px]">
                    <Image
                        fill
                        src="/assets/todo.png"
                        alt="doit"
                        className="object-contain"
                    ></Image>
                </div>
                <div className="mt-8 ">
                    <div className={`relative  ${isMobile ? 'w-full h-[240px] ' : 'w-full h-[300px]'}`}>
                        <Image
                            fill
                            src="/assets/empty2.png"
                            alt="doit"
                            className="object-contain"
                        ></Image>
                    </div>
                    <p className="text-center text-[var(--color-slate-3)]">할 일이 없어요. <br/> TODO를 새롭게 추가해주세요 </p>
                </div>
            </div>
        )
    }
    return(
        <></>
    )   
}

export default  TodoList