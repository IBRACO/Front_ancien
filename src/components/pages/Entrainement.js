import React from "react";
import "./css.css";

function Entrainement() {
  return (
    <div>
      

      <h1>Activiés Sporif</h1>
      <h2>Lieu de l'activité Sortif</h2>
      <div className="displayflex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.525786119508!2d3.071757372026084!3d50.6173487030366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5bf8b878e2f%3A0x75fc4081718f4140!2sStade%20Jean%20Bouin!5e0!3m2!1sfr!2sfr!4v1622980172511!5m2!1sfr!2sfr"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div>
          {/* <h1>Horaires des entrainement</h1> */}
          <table>
            <thead>
              <tr>
                <th colspan="2">Horaires des entrainement</th>
              </tr>
              <tr>
                <th>Jour</th>
                <th>Heur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Samedi</td>
                <td>12H00</td>
              </tr>
            </tbody>
          </table>

          

        </div>
      </div>
    </div>
  );
}

export default Entrainement;
