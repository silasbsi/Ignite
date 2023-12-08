import "./global.css";
import { useEffect, useState } from "react";
import Logo from "./assets/logo/Logo.svg";
import Clipboard from "./assets/clipboard/Clipboard.svg";
import { PlusCircle } from "phosphor-react";
import "./App.scss";
import { List } from "./components/List";
import classNames from "classnames";
import AlertInfo from "./components/AlertInfo/AlertInfo";
export interface ticketType {
  id: number;
  done: boolean;
  description: string;
}

const App = () => {
  const [tickets, setTickets] = useState<ticketType[]>([]);
  const [newTicket, setNewTicket] = useState<string>("");
  const [doneTicketCount, setDoneTicketCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const messages = {
    "empty-field": "Favor preencher o campo com alguma atividade",
    duplicated: "Esta atividade ja existe na lista, por favor informe outra.",
  };

  const handleOnclick = () => {
    if (newTicket === "") {
      return setMessage(messages["empty-field"]);
    }

    const isTicketDuplicated = tickets.some(
      (ticket) => ticket.description.toLowerCase() === newTicket.toLowerCase()
    );

    if (isTicketDuplicated) {
      return setMessage(messages["duplicated"]);
    }

    setTickets((tickets) => [
      ...tickets,
      { id: Math.random(), done: false, description: newTicket },
    ]);

    setNewTicket("");
  };

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setNewTicket((event.target as HTMLInputElement).value);
    setMessage("");
  };

  const checkAsCompleted = (id: number) => {
    const ticketsUpdated = tickets.map((ticket) => {
      if (ticket.id === id) {
        return {
          ...ticket,
          done: !ticket.done,
        };
      }

      return ticket;
    });

    setTickets(ticketsUpdated);
  };

  const removeTicket = (id: number) => {
    const newListOfTickets = tickets.filter((ticket) => ticket.id !== id);

    setTickets(newListOfTickets);
  };

  useEffect(() => {
    const getListOfCompletedTickets = () => {
      const listOfCompletedTickets = tickets.filter(
        (ticket) => ticket.done === true
      ).length;

      console.log(listOfCompletedTickets);

      setDoneTicketCount(listOfCompletedTickets);
    };

    console.log(tickets);

    getListOfCompletedTickets();
  }, [tickets]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="todo-container d-flex flex-column align-items-center p-3">
        <div className="header-container pt-5 pb-4">
          <img src={Logo}></img>
        </div>

        <div className="form-container w-100 row">
          <input
            value={newTicket}
            className="new-ticket p-2 rounded col-12 col-sm-12 col-md-12 col-lg-10"
            name="new-ticket"
            placeholder="Adicione uma nova tarefa"
            onChange={handleOnChange}
          />

          <button
            onClick={handleOnclick}
            className="add-button p-2 rounded col-12 col-sm-12 col-md-12 col-lg-2"
            name="add-button"
          >
            Criar
            <PlusCircle className="ms-1" size={16} />
          </button>
        </div>

        <div className="todo-list-container w-100 mt-5 mb-3">
          <div className="todo-list-header d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-lg-between justify-content-md-between">
            <p className="ticket-created">
              Tarefas criadas{" "}
              <span className="rounded-circle">{tickets.length}</span>
            </p>
            <p className="ticket-done">
              Concluidas{" "}
              <span className="rounded-circle">{doneTicketCount}</span>
            </p>
          </div>
          <div
            className={classNames("todo-list-content  flex-column mt-4", {
              "d-flex align-items-center pt-5 pb-4 empty-list": !tickets.length,
            })}
          >
            {!tickets.length && (
              <>
                <img src={Clipboard} className="mb-3" />
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                </p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </>
            )}
            <List
              items={tickets}
              checkAsCompleted={checkAsCompleted}
              removeTicket={removeTicket}
            />
          </div>
        </div>
        {message && <AlertInfo message={message} />}
      </div>
    </div>
  );
};

export default App;
