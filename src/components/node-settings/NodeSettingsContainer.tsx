import { Hexagon } from "lucide-react";
import LayoutSelectContainer from "./LayoutSelectContainer";
import NodeSettingsForm from "./NodeSettingsForm";
import RadioThemeColorsSelector from "../RadioThemeColorsSelector";


const NodeSettingsContainer = () => {

  return (
    <div>
      <div className="flex pl-3 items-center justify-center text-slate-800 gap-1 my-7">
        <Hexagon size={26} />
        <h4 className="scroll-m-20 text-lg font-black tracking-tight">
          Node Settings
        </h4>
      </div>

      <NodeSettingsForm />
      <LayoutSelectContainer />
    </div>
  );
};

export default NodeSettingsContainer;