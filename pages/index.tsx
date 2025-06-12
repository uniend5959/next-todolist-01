import Layout from "@/components/container/layout";
import Header from "@/components/header/header";



export default function Home() {
  return (
    <>
      <Header/>
      <div className="relative mt-[60px]  ">
        <Layout>
        <div className=" ">감자</div>
        <p className="text-bold-2xl">20px Bold</p>
        <p className="text-bold-xl">18px Bold</p>
        <p className="text-bold-base">16px Bold</p>
        <p className="text-base">16px</p>
      </Layout>
      </div>
    </>
  );
}
