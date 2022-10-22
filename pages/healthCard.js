import Navbar from "../components/Navbar/Navbar";
import Record from "../components/Record/Record";
import { postdata } from "../firestore/postdata";
import { useState } from "react";

function HealtCard() {
  const [bp, setBp] = useState(null);
  const [db, setDB] = useState(null);
  const [extra, setExtra] = useState(null);
  console.log(bp);
  console.log(db);
  console.log(extra);

  const getData = () => {
    if (bp && db && extra) {
      const healthData = { bloodpressure: bp, diabetes: db, extra: extra };
      postdata(healthData);
    } else {
      window.alert("select all options please and then click submit");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="logo">
          <img src="main.png" />
        </div>
        <div className="title">Health Form</div>
      </div>
      <div className="stats">
        <Record
          title="Blood Pressure State :"
          btns={[{ text: "Low" }, { text: "Medium" }, { text: "High" }]}
          setUserData={setBp}
          args={["Low", "Medium", "High"]}
        />
        <Record
          title="Diabetic :"
          btns={[{ text: "Yes" }, { text: "No" }]}
          args={["Yes", "No"]}
          setUserData={setDB}
        />
        <Record
          title="Food allergies from :"
          btns={[
            { text: "Nuts" },
            { text: "Apple" },
            { text: "Berries" },
            { text: "None" },
          ]}
          args={["Nuts", "Apple", "Berries", "None"]}
          setUserData={setExtra}
        />
      </div>
      <button
        className="m-auto bg-sky-500"
        onClick={() => {
          getData();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default HealtCard;
