import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import LoginForm from "../LoginForm";
import { Tables } from "./Tables";
import  Incription  from "./Incription";
// import "../css/admin.css";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


function AdminSit() {
  const [dataList, setDataList] = useState([]);
  const [isVerif, setVerif] = useState(false);
   const [inscriptionC, setInscription] = useState(null);
  const [tname, setTableName] = useState("utilisateur");

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    fetch(`http://localhost:3005/utilisateur`, { method: "GET", headers }).then(
      (response) => {
        // setDataList(response);
        console.log(dataList);
        return response.text().then((text) => {
          let data = null;
          data = JSON.parse(text);
          setDataList(data);
        });
      }
    );
  }, []);

//   console.log(dataList);
  console.log(tname);

  const displayDatas = (nom) => {
      setTableName(nom)
    const headers = { "Content-Type": "application/json" };
    fetch(`http://localhost:3005/${nom}`, { method: "GET", headers }).then(
      (response) => {
        // setDataList(response);
        // console.log(dataList);
        return response.text().then((text) => {
          let data = null;
          data = JSON.parse(text);
          setDataList(data);
        //   setTableName(`${nom}`)
        });
      }
    );
  };
  const deleted = (id) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`http://localhost:3005/utilisateur/delete/${id}`, { method: "POST", headers }).then(
      (response) => {
        // setDataList(response);
        // console.log(dataList);
        return response.text().then((text) => {
        //   let data = null;
          // eslint-disable-next-line no-lone-blocks
          {
              alert(text)
              window.location.href = "/admin_sat";
            }
        //   data = JSON.parse(text);
        //   setDataList(data);
        });
      }
    );
  };
  const addUser = (item) => {
            
            setInscription(<Incription  item = {item}/>)
            // window.location.href = "/contact";
          
  };

  return (
    <>
    <div>
    
      {!isVerif ? (
          //on donne set verif a login forme pour le changer en true ou false
        <LoginForm setVerif={setVerif} />

      ) :
      inscriptionC !== null ? (inscriptionC):
      
      (

        <>
  
        
          <h1>Les donnes a afficher</h1>
          
          <div className="tables">
            {Tables.map((item, index) => {
               
              return (
                <div className="itemt" key={index}>
                  {/* <span>{item.nom} onclick= {item.nom}</span> */}
        
                  <button onClick={() => displayDatas(item.nom)}>
                    {item.nom}
                  </button>
                </div>
              );
            })}
          </div>

          {/* <div>Create a new {tname}</div> */}
            
            
             
              
              
            
         
         _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

          <div>
            {dataList.map((item, index) => {
              let elements = [];

              for (const key in item) {
                elements.push(<div className="col-2">{item[key]}</div>);
              }

              return <div className="row">{elements}<Button variant="danger"  onClick={()=>deleted(item[Object.keys(item)[0]])}>Delete</Button > <Button  onClick={()=>addUser(item)}> Add User</Button></div>;
            })}
          </div>
        </>
      )}
    </div>
    </>
  );
}

export default AdminSit;
