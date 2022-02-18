import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-32"/>
                </div>
                <div className="flex flex-1 justify-evenly item-center flex-wrap sm:mt-0 mt-5 w-full">

                </div>
            </div>
        </div>
    )
}

export default Footer;