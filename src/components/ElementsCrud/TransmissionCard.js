import { useEffect, useState } from "react";
import TransmissionService from "../../services/TransmissionService";
import TransmissionCardRow from "./TransmissionCardRow";
import InputComponent from "./InputComponent";

export default function TransmissionCard() {
  const [transmissions, setTransmissions] = useState([]);
  const [inputId, setInputId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    TransmissionService.getAllTransmissions().then((response) => {
      if (response.data.message == "success") {
        setTransmissions(response.data.data);
      }
    });
  }, [transmissions]);

  const actionHandler = (e) => {
    e.preventDefault();

    const newTransmission = {
      id: inputId,
      status: 1,
      nom: inputValue,
    };

    if (inputId == 0) {
      TransmissionService.insertTransmission(newTransmission)
        .then((response) => {
          console.log(response);
          if (response.data.message == "success") {
            transmissions.push(response.data.data);
            setSeed(Math.random());

            setInputId(0);
            setInputValue("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      TransmissionService.updateTransmission(inputId, newTransmission)
        .then((response) => {
          if (response.data.message == "success") {
            let index = transmissions.findIndex(
              (transmission) => transmission.id === newTransmission.id
            );
            transmissions.splice(index, 1, newTransmission);
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
  };

  const onDeleteFunction = (idTransmission) => {
    TransmissionService.deleteTransmission(idTransmission)
      .then((response) => {
        if (response.data.messagee == "success") {
          setTransmissions(
            transmissions.filter(
              (transmission) => transmission.id != idTransmission
            )
          );
          setSeed(Math.random());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const rows = [];
  transmissions.forEach((transmission) => {
    rows.push(
      <TransmissionCardRow
        key={transmission.id}
        idTransmission={transmission.id}
        nomTransmission={transmission.nom}
        onButtonUpdatePerformed={onButtonUpdatePerformed}
        onDeleteFunction={onDeleteFunction}
      />
    );
  });

  return (
    <>
      <div class="col-md-6 px-3 mb-4">
        <div class="card mx-auto stat-section">
          <h4 class="card-title">Transmission</h4>
          <div class="crud-section mt-2">
            <div class="header">
              <InputComponent
                placeholder={"Nom du transmission"}
                inputValue={inputValue}
                inputId={inputId}
                onChangeValue={setInputValue}
                actionHandler={actionHandler}
              />
            </div>
            <div class="body">
              {rows}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
