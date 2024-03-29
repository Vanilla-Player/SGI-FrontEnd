import Link from "next/link";
import DynamicGraph from "./DynamicGraph";

interface Graph {
  data: Array<any>;
}

const Graph: React.FC<Graph> = (props) => {
  const { data } = props;
  return (
    <div className="h-[200px] w-[275px] p-5">
      <DynamicGraph data={data} />
      <div className="relative bottom-3 z-10  flex justify-end ">
        <Link
          className="border-2 border-black bg-[#986de1] p-1 text-sm text-white"
          href={`graphs/1`}
        >
          See Graph
        </Link>
      </div>
    </div>
  );
};

export default Graph;
