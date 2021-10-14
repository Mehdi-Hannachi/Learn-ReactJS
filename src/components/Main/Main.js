import React from "react";
import { Card } from "../Card/Card";
import Logos from "../Logos/Logos";
import "./main.css";

const data = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    name: "Mehdi",
    lastName: "Hannachi",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    name: "Mehdi",
    lastName: "Hannachi",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    name: "Mehdi",
    lastName: "Hannachi",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    name: "Mehdi",
    lastName: "Hannachi",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    name: "Mehdi",
    lastName: "Hannachi",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    name: "Mehdi",
    lastName: "Hannachi",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    name: "Mehdi",
    lastName: "Hannachi",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    name: "Mehdi",
    lastName: "Hannachi",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    name: "Mehdi",
    lastName: "Hannachi",
  },
];
const Main = () => {
  return (
    <>
      <div className="cardsList">
        {data.map((user, i) => (
          <Card key={i} />
        ))}
      </div>

      <Logos />
    </>
  );
};

export default Main;
