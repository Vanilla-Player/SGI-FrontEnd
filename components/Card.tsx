import React from "react";
import DynamicGraph from "./DynamicGrapgh";

interface Card {
  contentType: string;
  dataToRender: Array<any>;
}

const Card: React.FC<Card> = (props) => {
  const { dataToRender, contentType } = props;
  let contenToRender;

  switch (contentType) {
    case "graph":
      contenToRender = <DynamicGraph data={dataToRender} />;
      break;
    case "order":
      contenToRender;
      break;
    case "carrier":
      contenToRender;
      break;
    case "storage":
      contenToRender;

    default:
      contenToRender = <div>No content to render</div>;
  }

  return (
    <div className="h-[250px] w-[300px]">
      <div className="rounded-xl border-2 border-blue-600 bg-white shadow-2xl shadow-blue-500">
        {contenToRender}
      </div>
    </div>
  );
};

export default Card;
