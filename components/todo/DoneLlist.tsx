import Image from "next/image"
import useIsMobile  from "@/hook/useIsMobile"
import DoneItem from "./DoneITem";
import { Todo } from "@/type/type";

type TodoListProps = {
  todos: Todo[];
  onAdd: () => void;
};

// 완료된 할일 컴포넌트 
const DoneList = ({todos,onAdd }:TodoListProps) => {
     const {isMobile} = useIsMobile();
         const  completed = todos.filter((todo) => todo.isCompleted === true)
         
    // 받아오는 데이터의 길이에 따라, 이미지와 목록의 유무를 변화 
      if(completed.length === 0){
            return(
                <div className="">
                    <div className="relative w-[120px] h-[60px]">
                        <Image
                            fill
                            src="/assets/done.png"
                            alt="doit"
                            className="object-contain"
                        ></Image>
                    </div>
                    <div className="mt-8">
                        <div className={`relative ${isMobile ? 'w-full h-[240px]' : 'w-full h-[300px]'}`}>
                             <Image
                                 fill
                                  src="/assets/empty.png"
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
            <>
                <div className="">
                    <div className="relative w-[120px] h-[60px]">
                        <Image
                            fill
                            src="/assets/done.png"
                            alt="doit"
                            className="object-contain"
                        ></Image>
                    </div>
                    <div className="">
                           {completed.map((todo) => 
                       <DoneItem todo={todo} onAdd={onAdd}/>
                    )}
                    </div>
                </div>
            </>
        )   
}

export default  DoneList