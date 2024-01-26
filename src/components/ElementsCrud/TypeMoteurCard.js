import { useEffect, useState } from "react";
import TypeMoteurCardRow from "./TypeMoteurCardRow";
import TypeMoteurService from "../../services/TypeMoteurService";
import InputComponent from "./InputComponent";
import { error } from "jquery";

export default function TypeMoteurCard() {
  const [typeMoteurs, setTypeMoteurs] = useState([]);
  const [inputId, setInputId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    TypeMoteurService.getAllTypeMoteurs().then((response) => {
      if (response.data.message == "success") {
        setTypeMoteurs(response.data.data);
      }
    });
  }, [typeMoteurs]);

  const actionHandler = (e) => {
    e.preventDefault();

    const newTypeMoteur = {
      id: inputId,
      status: 1,
      nom: inputValue,
    };

    if (inputId == 0) {
      TypeMoteurService.insertTypeMoteur(newTypeMoteur)
        .then((response) => {
          console.log(response);
          if (response.data.message == "success") {
            typeMoteurs.push(response.data.data);
            setSeed(Math.random());

            setInputId(0);
            setInputValue("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      TypeMoteurService.updateTypeMoteur(inputId, newTypeMoteur)
        .then((response) => {
          if (response.data.message == "success") {
            let index = typeMoteurs.findIndex(
              (typeMoteur) => typeMoteur.id === newTypeMoteur.id
            );
            typeMoteurs.splice(index, 1, newTypeMoteur);
            setSeed(Math.random());

            setInputId(0);
            setInputValue("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onButtonUpdatePerformed = (inputId, inputValue) => {
    setInputId(inputId);
    setInputValue(inputValue);
  }

  const onDeleteFunction = (idTypeMoteur) => {
    TypeMoteurService.deleteTypeMoteur(idTypeMoteur)
    .then((response) => {
      if (response.data.messagee == "success") {
        setTypeMoteurs(
          typeMoteurs.filter((typeMoteur) => typeMoteur.id != idTypeMoteur)
        );
        setSeed(Math.random());
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const rows = [];
  typeMoteurs.forEach((typeMoteur) => {
    rows.push(
      <TypeMoteurCardRow key={typeMoteur.id} idTypeMoteur={typeMoteur.id} nomTypeMoteur={typeMoteur.nom} onButtonUpdatePerformed={onButtonUpdatePerformed} onDeleteFunction={onDeleteFunction} />
    );
  });

  return (
    <>
      <div className="col-md-6 px-3 mb-4">
        <div className="card mx-auto stat-section">
          <h4 className="card-title">TypeMoteur</h4>
          <div className="crud-section mt-2">
            <div className="header">
              <InputComponent
                placeholder={"Nom du type de moteur"}
                inputValue={inputValue}
                inputId={inputId}
                onChangeValue={setInputValue}
                actionHandler={actionHandler}
              />
            </div>
            <div className="body">{rows}</div>
          </div>
        </div>
      </div>
    </>
  );
}
