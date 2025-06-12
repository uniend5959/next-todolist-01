import { useMediaQuery } from "react-responsive"
import type {DeviceTypes} from "@/type/type"



const useIsMobile = () : DeviceTypes  => {

    const isMobile = useMediaQuery({
    query :"(max-width: 375px)"
  })

  return { isMobile } ;
}   

export default useIsMobile