import React from "react";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
        <h3>
            Veuillez Remplir le formulaire. Cliquez pour retourner à {" "}
        <Link to="/">Retour</Link>
        </h3>
        </div>
    );
}

export default ErrorPage;