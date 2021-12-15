import React from "react";
import ReactDOM from "react-dom";
//pour que ca fonction il faut metre le cdn et le client id du compte pay pal dans index.html
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
function Don() {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "10", //la somme que va payer les gens
          },
        },
      ],
    });
  };
const onApprove = (data, actions) => { console.log(data);
 return actions.order.capture();
  };
return (
    <div className="app">
      <div className="wrapper">
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
        <label for="name">Entrer le montant pour paypal et carte bancaire</label>
        <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" value="10"
        />

        <h2>virement bancaire</h2>
        <p>Merci de contacter le secretaire au tel: 00000000000 ou par</p>
        <p>busokozakIRIKOU@gmail.com</p>
      </div>
    </div>
  );
}

export default Don;
