import { useState } from "react";
import ComponentB from "./b";

function ComponentA() {
  const [userInfo, setUserInfo] = useState({
    name: "Nguyen Van A",
    gender: "Nam",
    birthday: "14/12/2000",
    balance: 10000,
  }) ;

  return (
    <div style={{ margin: "auto", width: "50%", marginTop: "100px" }}>
      <div style={{ border: "1px solid red", width: "500px", padding: "10px" }}>
        <p>Component A</p>
        <p>Hi : {userInfo.name}</p>
        <p>Balance : {userInfo.balance}</p>
        <ComponentB />
      </div>
    </div>
  );
}

export default ComponentA;
