import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import QuiSommesNous from "./pages/QuiSommesNous";
import Connexion from "./pages/Connexion";
import ContactUs from "./pages/ContactUs";
import Chat from "./pages/Chat";
import Incription from "./pages/Incription";
import Entrainement from "./pages/Entrainement";
import Don from "./pages/Don";
import AdminSit from "./pages/AdminSit";
import Cotisation from "./pages/Cotisation";
import Actualite from "./pages/Actualite";
import Ccotisation from "./pages/CRUD/Ccotisation";
import UpdatePassword from "./pages/CRUD/UpdatePassword";
// import{Protected } from ".";

import ProtectedRoute   from "./ProtectedRoute";
import Cactualite from "./pages/CRUD/Cactualite";
import Cadhesion from "./pages/CRUD/Cadhesion";
import Apdatepss from "./pages/CRUD/Apdatepss";

function Menu() {
  return (
    <div>
      <>
      <Route path="/" exact component={Home} />
      <Route path="/services" component={Services} />

      <ProtectedRoute noauth = {true}>
      <Route path="/quiSommesNous" component={QuiSommesNous} />
      </ProtectedRoute>

      <Route path="/connexion" component={Connexion} />
      <Route path="/cotisation" component={Cotisation} />

      <Route path="/contactUs" component={ContactUs} />

      <Route path="/chat" component={Chat} />
      <Route path="/actualite" component={Actualite} />

      <ProtectedRoute noauth = {true}>
      <Route path="/contact" component={Incription} />
      <Route path="/ccotisation" component={Ccotisation} />
      <Route path="/cactualite" component={Cactualite} />
      <Route path="/cadhesion" component={Cadhesion} />
      <Route path="/updatepass/:token" component={UpdatePassword} />
      <Route path="/motdepassoublier" component={Apdatepss} />
      </ProtectedRoute>
      

      <Route path="/entrainement" component={Entrainement} />
      <Route path="/don" component={Don} />
      <Route path="/admin_sat" component={AdminSit} />
      </>
    </div>
  );
}

export default Menu;
