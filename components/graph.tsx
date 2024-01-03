import DynamicGraph from "./DynamicGrapgh";

interface Graph {
  data: Array<any>;
}

const Graph: React.FC<Graph> = (props) => {
  const { data } = props;
  return (
    <div className="h-[250px] w-[300px]">
      <DynamicGraph data={data} />
    </div>
  );
};

export default Graph;
