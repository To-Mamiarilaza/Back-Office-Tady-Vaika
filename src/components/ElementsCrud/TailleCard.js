import { useEffect, useState } from "react";
import TailleService from "../../services/TailleService";
import InputComponent from "./InputComponent";
import { error } from "jquery";
import TailleCardRow from "./TailleCardRow";

export default function TailleCard() {
  const [tailles, setTailles] = useState([]);
  const [inputId, setInputId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    TailleService.getAllTailles().then((response) => {
      if (response.data.message == "success") {
        setTailles(response.data.data);
      }
    });
  }, [tailles]);

  const actionHandler = (e) => {
    e.preventDefault();

    const newTaille = {
      id: inputId,
      status: 1,
      nom: inputValue,
    };

    if (inputId == 0) {
      TailleService.insertTaille(newTaille)
        .then((response) => {
          console.log(response);
          if (response.data.message == "success") {
            tailles.push(response.data.data);
            setSeed(Math.random());

            setInputId(0);
            setInputValue("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      TailleService.updateTaille(inputId, newTaille)
        .then((response) => {
          if (response.data.message == "success") {
            let index = tailles.findIndex(
              (taille) => taille.id === newTaille.id
            );
            tailles.splice(index, 1, newTaille);
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

  const onDeleteFunction = (idTaille) => {
    TailleService.deleteTaille(idTaille)
    .then((response) => {
      if (response.data.messagee == "success") {
        setTailles(
          tailles.filter((taille) => taille.id != idTaille)
        );
        setSeed(Math.random());
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const rows = [];
  tailles.forEach((taille) => {
    rows.push(
      <TailleCardRow key={taille.id} idTaille={taille.id} nomTaille={taille.nom} onButtonUpdatePerformed={onButtonUpdatePerformed} onDeleteFunction={onDeleteFunction} />
    );
  });

  return (
    <>
      <div className="col-md-6 px-3 mb-4">
        <div className="card mx-auto stat-section">
          <h4 className="card-title">Taille</h4>
          <div className="crud-section mt-2">
            <div className="header">
              <InputComponent
                placeholder={"Nom de la taille"}
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
