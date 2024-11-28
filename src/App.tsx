import React, { useEffect } from "react";
import AppLayout from "./pages/AppLayout";
import Clarity from "@microsoft/clarity";
import "reactflow/dist/base.css";

const App: React.FC = () => {
  useEffect(() => {
    Clarity.init("p5kwy5c7r3");
  }, []);

  return (
    <div className="h-screen bg-[#FAFAFA]">
      <AppLayout />
    </div>
  );
};

export default App;
