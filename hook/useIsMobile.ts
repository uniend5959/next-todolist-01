import { useMediaQuery } from "react-responsive"
import type {DeviceTypes} from "@/type/type"



// TAILWIND CSS를 보다 더 편리하게 활용하기 위한, 모바일전용 커스텀 훅 
const useIsMobile = () : DeviceTypes  => {

    const isMobile = useMediaQuery({
    query :"(max-width: 375px)"
  })

  return { isMobile } ;
}   

export default useIsMobile