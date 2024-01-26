import { useEffect, useState } from "react";
import MarqueCardRow from "./MarqueCardRow";
import MarqueService from "../../services/MarqueService";
import InputComponent from "./InputComponent";

export default function MarqueCard() {
  const [energies, setMarques] = useState([]);
  const [inputId, setInputId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    MarqueService.getAllMarques().then((response) => {
      if (response.data.message == "success") {
        setMarques(response.data.data);
      }
    });
  }, [energies]);

  const actionHandler = (e) => {
    e.preventDefault();

    const newMarque = {
      id: inputId,
      status: 1,
      nom: inputValue,
    };

    if (inputId == 0) {
      MarqueService.insertMarque(newMarque)
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
      MarqueService.updateMarque(inputId, newMarque)
        .then((response) => {
          if (response.data.message == "success") {
            let index = energies.findIndex(
              (energie) => energie.id === newMarque.id
            );
            energies.splice(index, 1, newMarque);
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

  const onDeleteFunction = (idMarque) => {
    MarqueService.deleteMarque(idMarque)
    .then((response) => {
      if (response.data.messagee == "success") {
        setMarques(
          energies.filter((energie) => energie.id != idMarque)
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
      <MarqueCardRow key={energie.id} idMarque={energie.id} nomMarque={energie.nom} onButtonUpdatePerformed={onButtonUpdatePerformed} onDeleteFunction={onDeleteFunction} />
    );
  });

  return (
    <>
      <div className="col-md-6 px-3 mb-4">
        <div className="card mx-auto stat-section">
          <h4 className="card-title">Marque</h4>
          <div className="crud-section mt-2">
            <div className="header">
              <InputComponent
                placeholder={"Nom du marque"}
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
