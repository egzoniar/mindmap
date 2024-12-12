import { Hexagon } from "lucide-react";
import LayoutSelectContainer from "./LayoutSelectContainer";
import NodeSettingsForm from "./NodeSettingsForm";

const NodeSettingsContainer = () => {
  return (
    <div>
      <NodeSettingsForm />
      <LayoutSelectContainer />
    </div>
  );
};

export default NodeSettingsContainer;
