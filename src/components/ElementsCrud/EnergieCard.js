import { useEffect, useState } from "react";
import EnergieCardRow from "./EnergieCardRow";
import EnergieService from "../../services/EnergieService";
import InputComponent from "./InputComponent";

export default function EnergieCard() {
  const [energies, setEnergies] = useState([]);
  const [inputId, setInputId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    EnergieService.getAllEnergies().then((response) => {
      if (response.data.message == "success") {
        setEnergies(response.data.data);
      }
    });
  }, [energies]);

  const actionHandler = (e) => {
    e.preventDefault();

    const newEnergie = {
      id: inputId,
      status: 1,
      nom: inputValue,
    };

    if (inputId == 0) {
      EnergieService.insertEnergie(newEnergie)
        .then((response) => {
          console.log(response);
          if (response.data.message == "success") {
            energies.push(response.data.data);
            setSeed(Math.random());

            setInputId(0);
            setInputValue("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EnergieService.updateEnergie(inputId, newEnergie)
        .then((response) => {
          if (response.data.message == "success") {
            let index = energies.findIndex(
              (energie) => energie.id === newEnergie.id
            );
            energies.splice(index, 1, newEnergie);
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

  const onDeleteFunction = (idEnergie) => {
    EnergieService.deleteEnergie(idEnergie)
    .then((response) => {
      if (response.data.messagee == "success") {
        setEnergies(
          energies.filter((energie) => energie.id != idEnergie)
        );
        setSeed(Math.random());
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const rows = [];
  energies.forEach((energie) => {
    rows.push(
      <EnergieCardRow key={energie.id} idEnergie={energie.id} nomEnergie={energie.nom} onButtonUpdatePerformed={onButtonUpdatePerformed} onDeleteFunction={onDeleteFunction} />
    );
  });

  return (
    <>
      <div className="col-md-6 px-3 mb-4">
        <div className="card mx-auto stat-section">
          <h4 className="card-title">Energie</h4>
          <div className="crud-section mt-2">
            <div className="header">
              <InputComponent
                placeholder={"Nom de l'energie"}
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
