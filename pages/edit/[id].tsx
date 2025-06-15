import Button from "@/components/button/boxButton";
import Layout from "@/components/container/layout";
import TodoMemo from "@/components/todo/TodoMemo";
import UploadImage from "@/components/todo/UploadImage";
import useInput from "@/hook/useInput";
import { deleteTodo, getTodoDetail, patchDetail } from "@/lib/api/todoApi";
import Image from "next/image"
import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext,  } from "next";
import { TodoDetailType } from "@/type/type";

type EditTodoProps = {
  todoDetail: TodoDetailType;
};


export async function getServerSideProps(context: GetServerSidePropsContext){
    const { id } = context.params 
    const todoDetail = await getTodoDetail(id)
    return{
        props: {
            todoDetail
        }
    }
}


// 다이나믹 페이지로, 하나의 페이지로 파람 값에 맞는 데이터를 보여주는 컴포넌트 
const EditTodo = ({todoDetail}: EditTodoProps) => {
    const router = useRouter();
    const [isCheked, setIsChecked] = useState(todoDetail.isCompleted ?? true)
    const memoInput= useInput("")
    const [serverImg , setServerImg] = useState('')
    
 
    const handleChange = () => {
        setIsChecked((prev) => !prev);
    }

    const handleEdit = async () => {
        const data = {
             name: todoDetail.name,
             memo: memoInput.value,
             imageUrl: serverImg,
             isCompleted: isCheked,
        } 

        try{
            await patchDetail(todoDetail.id, data)
            alert('내용이 수정되었습니다. ')
             router.push("/");
        }
        catch(error){
            console.log(error)
        }
    }

    const handleDelete = async () => {
        try{
            await deleteTodo(todoDetail.id)
            alert("삭제 완료!");
            router.push("/");

        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <div className="relative mt-[60px]  ">
            <Layout>
                <li 
                    className="mt-[40px] border-2 border-black rounded-3xl px-4 py-2 cursor-pointer flex gap-4 justify-start items-center hover:bg-[var(--color-lime-3)] "
                    >
                     <Image
                        src={ isCheked  ? '/assets/check2.png' : '/assets/Property.png'}
                        alt="todo"
                        width={40}
                        height={40}
                        className="object-contain"
                        onClick={handleChange}
                      ></Image>
                      <span> {todoDetail.name}</span>
                </li>
                <div className="mt-8 flex justify-start gap-8 flex-col md:flex-row">
                    <div className="w-1/2 mb-8">
                         <UploadImage setServerImg={setServerImg} todoDetail={todoDetail}/>
                    </div>
                    <div className="w-1/2">
                        <TodoMemo memoInput={memoInput} todoDetail={todoDetail}/>
                    </div>
                </div>
                <div className="flex gap-2 justify-end">
                        <Button
                            theme={todoDetail.isCompleted ? 'complete' : 'edit'}
                            type="submit"
                            onClick={handleEdit}
                        >수정완료</Button>
                        <Button
                            theme="delete"
                            type="submit"
                            onClick={handleDelete}
                        >삭제</Button>
                </div>
            </Layout>
        </div>
        </>
    )
}

export default EditTodo;