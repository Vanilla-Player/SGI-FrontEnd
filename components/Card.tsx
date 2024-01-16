import React from "react";
import Graph from "./graph";
import Order from "./order";

interface Card {
  contentType: string;
  dataToRender: any;
}

const Card: React.FC<Card> = (props) => {
  const { dataToRender, contentType } = props;
  let contenToRender;

  switch (contentType) {
    case "graph":
      contenToRender = <Graph data={dataToRender} />;
      break;
    case "order":
      contenToRender = (
        <Order state={dataToRender.state} id={dataToRender.id} />
      );
      break;
    case "carrier":
      contenToRender;
      break;
    case "shelving":
      contenToRender;

    default:
      contenToRender = <div>No content to render</div>;
  }

  return (
    <div className="h-[250px] w-[300px]">
      <div className="flex justify-center rounded-xl border-2 border-blue-600 bg-white shadow-2xl shadow-blue-500">
        {contenToRender}
      </div>
    </div>
  );
};

export default Card;
