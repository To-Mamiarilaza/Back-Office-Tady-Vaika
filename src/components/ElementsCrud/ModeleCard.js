import { useEffect, useState } from "react";
import ModeleCardRow from "./ModeleCardRow";
import ModeleService from "../../services/ModeleService";
import InputComponent from "./InputComponent";

export default function ModeleCard() {
  const [modeles, setModeles] = useState([]);
  const [inputId, setInputId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    ModeleService.getAllModeles().then((response) => {
      if (response.data.message == "success") {
        setModeles(response.data.data);
      }
    });
  }, [modeles]);

  const actionHandler = (e) => {
    e.preventDefault();

    const newModele = {
      id: inputId,
      status: 1,
      nom: inputValue,
    };

    if (inputId == 0) {
      ModeleService.insertModele(newModele)
        .then((response) => {
          console.log(response);
          if (response.data.message == "success") {
            modeles.push(response.data.data);
            setSeed(Math.random());

            setInputId(0);
            setInputValue("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ModeleService.updateModele(inputId, newModele)
        .then((response) => {
          if (response.data.message == "success") {
            let index = modeles.findIndex(
              (modele) => modele.id === newModele.id
            );
            modeles.splice(index, 1, newModele);
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

  const onDeleteFunction = (idModele) => {
    ModeleService.deleteModele(idModele)
    .then((response) => {
      if (response.data.messagee == "success") {
        setModeles(
          modeles.filter((modele) => modele.id != idModele)
        );
        setSeed(Math.random());
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const rows = [];
  modeles.forEach((modele) => {
    rows.push(
      <ModeleCardRow key={modele.id} idModele={modele.id} nomModele={modele.nom} onButtonUpdatePerformed={onButtonUpdatePerformed} onDeleteFunction={onDeleteFunction} />
    );
  });

  return (
    <>
      <div className="col-md-6 px-3 mb-4">
        <div className="card mx-auto stat-section">
          <h4 className="card-title">Modèle</h4>
          <div className="crud-section mt-2">
            <div className="header">
              <InputComponent
                placeholder={"Nom du modèle"}
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
