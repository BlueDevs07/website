import Navbar from "../components/Navbar/Navbar";
import Record from "../components/Record/Record";

function HealtCard () {
    return(
        <div>
            <Navbar/>
            <div className="main">
                <div className="logo">
                    <img src="main.png"/>
                </div>
                <div className="title">Health Form</div>
            </div>
            <div className="stats">
                <Record title="Blood Pressure State :" btns={[{ text: "Low"},{ text:"Medium"},{text:"High"}]}/>
                <Record title="Diabetic :" btns={[{ text: "Yes"},{ text:"No"}]}/>
                <Record title="If any heart condtition specify :" btns={[{ text: "High"}]}/>
            </div>
        </div>
    )
}

export default HealtCard