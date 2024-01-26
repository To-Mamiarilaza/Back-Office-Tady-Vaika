import { useEffect, useState } from "react";
import UsageCardRow from "./UsageCardRow";
import UsageService from "../../services/UsageService";
import InputComponent from "./InputComponent";
import { error } from "jquery";

export default function UsageCard() {
  const [usages, setUsages] = useState([]);
  const [inputId, setInputId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    UsageService.getAllUsages().then((response) => {
      if (response.data.message == "success") {
        setUsages(response.data.data);
      }
    });
  }, [usages]);

  const actionHandler = (e) => {
    e.preventDefault();

    const newUsage = {
      id: inputId,
      status: 1,
      nom: inputValue,
    };

    if (inputId == 0) {
      UsageService.insertUsage(newUsage)
        .then((response) => {
          console.log(response);
          if (response.data.message == "success") {
            usages.push(response.data.data);
            setSeed(Math.random());

            setInputId(0);
            setInputValue("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      UsageService.updateUsage(inputId, newUsage)
        .then((response) => {
          if (response.data.message == "success") {
            let index = usages.findIndex(
              (usage) => usage.id === newUsage.id
            );
            usages.splice(index, 1, newUsage);
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

  const onDeleteFunction = (idUsage) => {
    UsageService.deleteUsage(idUsage)
    .then((response) => {
      if (response.data.messagee == "success") {
        setUsages(
          usages.filter((usage) => usage.id != idUsage)
        );
        setSeed(Math.random());
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const rows = [];
  usages.forEach((usage) => {
    rows.push(
      <UsageCardRow key={usage.id} idUsage={usage.id} nomUsage={usage.nom} onButtonUpdatePerformed={onButtonUpdatePerformed} onDeleteFunction={onDeleteFunction} />
    );
  });

  return (
    <>
      <div className="col-md-6 px-3 mb-4">
        <div className="card mx-auto stat-section">
          <h4 className="card-title">Usage</h4>
          <div className="crud-section mt-2">
            <div className="header">
              <InputComponent
                placeholder={"Nom de l'usage"}
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
