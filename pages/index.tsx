import Layout from "@/components/container/layout";

import { getTodo } from '@/lib/api/todoApi'
import type { InferGetServerSidePropsType } from 'next';
import TodoList from "@/components/todo/TodoList";
import DoneList from "@/components/todo/DoneLlist";
import useIsMobile  from "@/hook/useIsMobile"
import { useState } from "react";
import AddTodo from "@/components/todo/AddTodo";


// 메인페이지 조회를 위한 서버사이딩 
// 맨 처음 보여지는 페이지의 속도 향상을 위해 서버사이드를 시도함  
export async function getServerSideProps() {
    const todo = await getTodo()

    return {
        props:{
            todo,
        }
    }
}


export default function Home({todo} : InferGetServerSidePropsType<typeof getServerSideProps> ) {
  const {isMobile} = useIsMobile();
  const [todos, setTodos] = useState(todo);

  // 클라이언틓 환경에서 , 새로고침 없이 데이터를 재호출 하기위한 함수  
    const refreshTodo = async () => {
    const updated = await getTodo();
    setTodos(updated);
  };

  return (
    <>
      <div className="relative mt-[60px]  ">
        <Layout>
          <div className="mt-8">
            <AddTodo onAdd={refreshTodo}/>
          </div>
      <div className="mt-8 flex justify-start gap-8 flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8">
            <TodoList todos={todos} onAdd={refreshTodo} />
          </div>
          <div className="w-full md:w-1/2">
            <DoneList todos={todos} onAdd={refreshTodo} />
          </div>
        </div>
        </Layout>
      </div>
    </>
  );
}
