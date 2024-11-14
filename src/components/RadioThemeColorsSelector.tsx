import { useCallback } from "react";
import { RadioGroup, RadioGroupItem } from "src/shadcn-components/ui/radio-group";
import useMindmapStore from "src/store/mindmap.store";

const RadioThemeColorsSelector = () => {
  const { settings } = useMindmapStore().mindmap;
  const { setThemeColorGroup } = useMindmapStore();
  
  const useSafeSettings = useCallback(() => {
    if (!settings || !settings.theme) return {
      colors: {},
      selectedColorGroup: ''
    };
    const { theme } = settings;

    return {
      colors: theme.colors,
      selectedColorGroup: theme.selectedColorGroup,
    }
  }, [settings]);

  const { selectedColorGroup, colors } = useSafeSettings();

  return (
    <RadioGroup defaultValue="comfortable">
      {
        Object.keys(colors).map((cgKey:string, index:number) => {
          const colorGroup = colors[cgKey];

          return (
            <div key={cgKey + index} className="flex items-center space-x-2">
              <RadioGroupItem 
                id={cgKey + index}
                value={cgKey}
                checked={cgKey === selectedColorGroup}
                onClick={() => setThemeColorGroup(cgKey)}
              />
              <label htmlFor={cgKey+index} className="cursor-pointer">
                <div className="flex">
                  <div style={{backgroundColor: colorGroup[0]}} className="w-10 h-4 rounded-l"></div>
                  <div style={{backgroundColor: colorGroup[1]}} className="w-10 h-4"></div>
                  <div style={{backgroundColor: colorGroup[2]}} className="w-10 h-4"></div>
                  <div style={{backgroundColor: colorGroup[3]}} className="w-10 h-4 rounded-r"></div>
                </div>
              </label>
            </div>
          )
        })
      }
    </RadioGroup>
  );
};

export default RadioThemeColorsSelector;