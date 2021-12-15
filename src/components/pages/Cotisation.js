import React from "react";
import ReactDOM from "react-dom";

//pour que ca fonction il faut metre le cdn et le client id du compte pay pal dans index.html

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Cotisation() {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "5", //la somme que va payer les gens
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    console.log(data);
    return actions.order.capture();
  };

//   const viewCotisation = () => {
            
//     setInscription(<CotisationVieuw  id = {id_Utilisateur}/>)
//     // window.location.href = "/contact";
  
// };

  return (
    <div className="app">
      <div className="wrapper">
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
        <h2>Le montant de la cotisation mensuel est de 5 euro</h2>
        <h2> Pour payer par virement bancaire</h2>

        <p>Merci de contacter le secretaire au tel: 00000000000 ou par</p>
        <p>busokozakIRIKOU@gmail.com</p>
        {/* <button  onClick={viewCotisation}> Voir mes cotisation</button> */}
      </div>
    </div>
  );

  //   return (



  //   );
}

export default Cotisation;
