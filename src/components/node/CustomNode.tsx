import BaseHandle from "../handle/BaseHandle";

type CustomNodeProps = {
  title: string;
  description?: string;
};

const CustomNode = ({
  title, 
  description = "Write a description here..."
}: CustomNodeProps) => {
  return (
    <>
      <div className="bg-white rounded-lg border border-stone-500 p-5 max-w-56">
        <h1 className="text-4xl font-bold text-purple-600">{title}</h1>
        <p className="text-lg text-neutral-700">{description}</p>
      </div>
      <BaseHandle type="source" position="bottom" />
      <BaseHandle type="source" position="top" />
      <BaseHandle type="target" position="left" />
      <BaseHandle type="target" position="right" />
    </>
  );
};

export default CustomNode;