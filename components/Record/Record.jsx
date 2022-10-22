import styles from "../Record/Record.module.css"

/*

btns :

[{text:"High"},{text:"medium"},{text:"Low"}]




*/


function Record({title="", btns=[]}){
    return(
        <div className=" flex flex-row gap-x-2 items-center bg-[#E9E9E9] mx-10 my-10 px-10 py-5 rounded-lg">
            <div>
                {title}
            </div>
            <div className="ml-auto flex flex-row p gap-10">
           { btns.map((item, index)=>{
                return(
                    <div key={index} className="font-sans rounded-lg px-3 bg-[#fff] text-black cursor-pointer py-1 duration-200 hover:bg-[#0006] hover:text-white ">
                          {item.text}
                    </div>
                )
           })}</div>
        </div>
    )
}

export default Record