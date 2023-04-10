import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
const Menu = () => {
    return ( <div className="relative flex flex-col justify-center">
         <Navbar></Navbar>
      <img src="/background2.jpg" className="-z-9  absolute bottom-0 w-full h-full left-0 right-0 object-cover top-0 "></img>
        <div className="absolute z-9 top-0 left-0 right-0 bottom-0 opacity-50 bg-[#232323]">
        </div>
        <Button></Button>
    </div> );
}
 
export default Menu;