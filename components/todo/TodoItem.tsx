import { patchIsCompleted,  } from "@/lib/api/todoApi";
import { Todo } from "@/type/type";
import Image from "next/image"
import { useRouter } from 'next/router';

type TodoItemProps = {
  todo: Todo;
  onAdd: () => void;
};

const TodoItem = ({todo,onAdd}:TodoItemProps) => {
      const router = useRouter();

    const headleMove =  () => {
      router.push(`/edit/${todo.id}`)
    } 

    const isCompleted =  async (e :  React.MouseEvent<HTMLImageElement>) => {
       e.stopPropagation();
       
       try{
        await patchIsCompleted (todo.id, { isCompleted: true });
        onAdd()
       }
       catch(error){
        console.log('전송실패', error )
       }
    }


    return(
        <>
          {todo ? (
            <ul className="w-full h-[48px] mt-4">
              <li 
                key={todo.id}
                className="border-2 border-black  rounded-3xl px-4 py-2 cursor-pointer flex gap-4 justify-start items-center hover:bg-[var(--color-lime-3)] "
                onClick={headleMove}
                >
                 <Image
                    src="/assets/Property.png"
                    alt="todo"
                    width={40}
                    height={40}
                    className="object-contain"
                    onClick={(e) => isCompleted(e)}
                  ></Image>
                 <p>{todo.name}</p>
              </li>
            </ul>
      ) : (
        <p>할 일이 없습니다.</p>
      )}
        </>
    )
}

export default  TodoItem