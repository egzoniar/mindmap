import React, { useEffect } from "react";
import { hotjar } from "react-hotjar";
import "reactflow/dist/base.css";
import AppLayout from "./pages/AppLayout";

const App: React.FC = () => {
  useEffect(() => {
    hotjar.initialize({ id: 5223093, sv: 6 });
  }, []);

  return (
    <div className="h-screen bg-[#FAFAFA]">
      <AppLayout />
    </div>
  );
};

export default App;
