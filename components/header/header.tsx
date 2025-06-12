import Image from "next/image"
import Link from "next/link"
import Layout from "../container/layout"
import useIsMobile  from "@/hook/useIsMobile"


const Header = () => {
    const {isMobile} = useIsMobile();

    return(
        <>
            <div className="fixed top-0 flex justify-start items-center  w-full h-[60px]  pt-[1px] boder-b-[2px]  shadow  z-50">
                <Layout>
                    <Link href="/">
                        <h1 className={`relative ${isMobile ? 'w-14 h-8' : 'w-28 h-8'}`}>
                            <Image
                                fill
                                src={isMobile ? "/assets/doit (2).png" : "/assets/logo.png" }
                                alt="로고고"
                                className="object-contain"
                            ></Image>
                        </h1>
                    </Link>
                </Layout>
            </div>
        </>
    )

}

export default Header 