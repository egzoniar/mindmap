import { Settings } from "lucide-react";
import RadioThemeColorsSelector from "src/components/RadioThemeColorsSelector";


const MindmapSettingsContainer = () => {
  return (
    <div>
      <div className="flex pl-3 items-center justify-center text-slate-800 gap-1 my-7">
        <Settings size={26} />
        <h4 className="scroll-m-20 text-lg font-black tracking-tight">
          Mindmap Settings
        </h4>
      </div>
      <RadioThemeColorsSelector />
    </div>
  );
};

export default MindmapSettingsContainer;