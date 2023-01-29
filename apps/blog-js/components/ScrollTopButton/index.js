import { BiArrowToTop } from "react-icons/bi"
import ButtonClean from "../ButtonClean"

const ScrollTop = () => {
  const onClick = () => {
    if (typeof window === 'object') {
      window.scrollTop = 0;
    }
  }

  return (
    <ButtonClean onClick={onClick}>
      <BiArrowToTop />
    </ButtonClean>
  )
}

export default ScrollTop;