import Image from "next/image"
import useIsMobile  from "@/hook/useIsMobile"
import TodoItem from "./TodoItem";
import { Todo } from "@/type/type";


type TodoListProps = {
  todos: Todo[];
  onAdd: () => void;
};


const TodoList = ({todos, onAdd}:TodoListProps) => {
     const {isMobile} = useIsMobile();
     const  notCompleted = todos.filter((todo) => todo.isCompleted === false)
     
     
    if(todos.length === 0){
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
        <>
            <div className="">
                <div className="relative w-[120px] h-[60px]">
                    <Image
                        fill
                        src="/assets/todo.png"
                        alt="doit"
                        className="object-contain"
                    ></Image>
                </div>
                <div className="">
                    {notCompleted.map((todo) => 
                       <TodoItem todo={todo} onAdd={onAdd}/>
                    )}
                </div>
            </div>
        </>
    )   
}

export default  TodoList