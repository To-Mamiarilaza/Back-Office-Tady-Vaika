import { useEffect, useState } from "react";
import CouleurCardRow from "./CouleurCardRow";
import CouleurService from "../../services/CouleurService";
import InputComponent from "./InputComponent";
import ColorInputComponent from "./ColorInputComponent";

export default function CouleurCard() {
  const [couleurs, setCouleurs] = useState([]);
  const [idCouleur, setIdCouleur] = useState(0);
  const [nomCouleur, setNomCouleur] = useState("");
  const [codeCouleur, setCodeCouleur] = useState("");
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    CouleurService.getAllCouleurs().then((response) => {
      if (response.data.message == "success") {
        setCouleurs(response.data.data);
      }
    });
  }, [couleurs]);

  const actionHandler = (e) => {
    e.preventDefault();

    const newCouleur = {
      id: idCouleur,
      status: 1,
      nom: nomCouleur,
      rgb: codeCouleur
    };

    if (idCouleur == 0) {
      CouleurService.insertCouleur(newCouleur)
        .then((response) => {
          console.log(response);
          if (response.data.message == "success") {
            couleurs.push(response.data.data);
            setSeed(Math.random());

            setIdCouleur(0);
            setNomCouleur("");
            setCodeCouleur("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      CouleurService.updateCouleur(idCouleur, newCouleur)
        .then((response) => {
          if (response.data.message == "success") {
            let index = couleurs.findIndex(
              (couleur) => couleur.id === newCouleur.id
            );
            couleurs.splice(index, 1, newCouleur);
            setSeed(Math.random());

            setIdCouleur(0);
            setNomCouleur("");
            setCodeCouleur("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onButtonUpdatePerformed = (idCouleur, nomCouleur, codeCouleur) => {
    setIdCouleur(idCouleur);
    setNomCouleur(nomCouleur);
    setCodeCouleur(codeCouleur);
  }

  const onDeleteFunction = (idCouleur) => {
    CouleurService.deleteCouleur(idCouleur)
    .then((response) => {
      if (response.data.messagee == "success") {
        setCouleurs(
          couleurs.filter((couleur) => couleur.id != idCouleur)
        );
        setSeed(Math.random());
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const rows = [];
  couleurs.forEach((couleur) => {
    rows.push(
      <CouleurCardRow key={couleur.id} idCouleur={couleur.id} nomCouleur={couleur.nom} codeCouleur={couleur.rgb} onButtonUpdatePerformed={onButtonUpdatePerformed} onDeleteFunction={onDeleteFunction} />
    );
  });
  
  return (
    <>
      <div className="col-md-6 px-3 mb-4">
        <div className="card mx-auto stat-section">
          <h4 className="card-title">Couleur</h4>
          <div className="crud-section mt-2">
            <div className="header">
              <ColorInputComponent nomCouleur={nomCouleur} codeCouleur={codeCouleur} idCouleur={idCouleur} onColorNameChange={setNomCouleur} onColorValueChange={setCodeCouleur} actionHandler={actionHandler} />
            </div>
            <div className="body">
              {rows}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
