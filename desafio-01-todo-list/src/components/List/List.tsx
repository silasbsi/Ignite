import { Trash } from "phosphor-react";
import React from "react";
import { CheckButton } from "../CheckButton";
import "./List.scss";
import { ticketType } from "../../App";

interface ListProps {
  items: ticketType[];
  checkAsCompleted: (id: number) => void;
  removeTicket: (id: number) => void;
}

const List: React.FC<ListProps> = ({
  items,
  checkAsCompleted,
  removeTicket,
}) => {
  return (
    <div className="list-container d-flex flex-column gap-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="item-list d-flex justify-content-between align-items-center p-3 rounded"
        >
          <div
            onClick={() => checkAsCompleted(item.id)}
            className="check-list d-flex justify-content-start gap-2"
          >
            <CheckButton size={17.45} active={item.done} />
            <span>{item.description}</span>
          </div>

          <Trash
            onClick={() => removeTicket(item.id)}
            className="trash-button"
            size={16}
          />
        </div>
      ))}
    </div>
  );
};

export default List;
