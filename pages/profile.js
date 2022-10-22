import Navbar from "../components/Navbar/Navbar"

function Profile(){
    return(
        <div className="h-screen">
        <Navbar/>
        <div className="flex flex-col justify-center items-center ">
            <img className="m-4" src="favicon.ico" height="100px" width="100px"/>
            <div className="m-4 p-5 bg-[#0002] rounded-lg">
                <label className="p-4" for="fname">Name :</label>
                <span>JUGYA KAMAL GOGOI</span>
            </div>
            <div className="m-4 p-5 bg-[#0002] rounded-lg">
                <label className="p-4" for="email">Email :</label>
                <span>crjugya123@gmail.com</span>
            </div>
            <button className="m-4 p-3 bg-sky-500 text-white rounded-lg">Log Out</button>
        </div>
        </div>
    )
}

export default Profile