import Container from "../Container"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
            <div className="flex flex-row items-center justsify-between gap-3 mg:gap-0">
                <Logo />
            </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
