import Image from "next/image"
import useIsMobile  from "@/hook/useIsMobile"
import DoneItem from "./DoneITem";
import { Todo } from "@/type/type";

type TodoListProps = {
  todos: Todo[];
  onAdd: () => void;
};


const DoneList = ({todos,onAdd }:TodoListProps) => {
     const {isMobile} = useIsMobile();
         const  completed = todos.filter((todo) => todo.isCompleted === true)
         
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