import Layout from "@/components/container/layout";
import Header from "@/components/header/header";
import { getTodo } from '@/lib/api/todoApi'
import type { InferGetServerSidePropsType } from 'next';
import TodoList from "@/components/todo/TodoList";
import DoneList from "@/components/todo/DoneLlist";
import useIsMobile  from "@/hook/useIsMobile"


export async function getServerSideProps() {
    const todo = await getTodo()
    console.log('확인해봅시다 ', todo)

    return {
        props:{
            todo,
        }
    }
}


export default function Home({todo} : InferGetServerSidePropsType<typeof getServerSideProps> ) {
  const {isMobile} = useIsMobile();

  return (
    <>
      <Header/>
      <div className="relative mt-[60px]  ">
        <Layout>
          <div className="mt-8 flex justify-start flex-col md:flex-row ">
            <div className="w-1/2 mb-8">
              <TodoList todo={todo} />
            </div>
            <div className="w-1/2">
               <DoneList todo={todo} />
             </div>
          </div>
      </Layout>
      </div>
    </>
  );
}
