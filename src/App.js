import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AppLayout, SideNavigation } from "@awsui/components-react";
import { useState } from "react";
import WizardPage from "./pages/serverless-wizard.index";
import LandingPage from "./pages/home.index";
import CongratsPage from "./pages/congrats.index";
import { useRecoilState, useRecoilValue } from "recoil";
import * as atoms from "./atoms";
import ToolTipFormatter from "./components/ToolTips";

export default function App() {
  const [toolsOpen, setToolsOpen] = useRecoilState(atoms.toolsOpen);
  const [navigationOpen, setNavigationOpen] = useState(true);
  const toolsHide = useRecoilValue(atoms.toolsHide);
  const toolsContent = useRecoilValue(atoms.toolsContent);
  const toolsContentTitle = useRecoilValue(atoms.toolsContentTitle);

  const navigate = useNavigate();

  const handleNavigationChange = () => {
    setNavigationOpen((prevSetNavigationOpen) => !prevSetNavigationOpen);
  };

  const handleOnToolsChange = () => {
    setToolsOpen((prevToolsOpen) => !prevToolsOpen);
  };

  const handleNavigate = (event) => {
    event.preventDefault();
    navigate(`${event.detail.href}`);
  };

  return (
    <div className="App">
      <AppLayout
        tools={
          <ToolTipFormatter content={toolsContent} title={toolsContentTitle} />
        }
        toolsHide={toolsHide}
        toolsOpen={toolsOpen}
        onToolsChange={handleOnToolsChange}
        navigation={
          <SideNavigation
            onFollow={(event) => handleNavigate(event)}
            items={[
              {
                type: "link",
                text: `HomePage`,
                href: "/"
              },
              {
                type: "link",
                text: `Wizard`,
                href: "/wizard"
              }
            ]}
          />
        }
        navigationOpen={navigationOpen}
        onNavigationChange={handleNavigationChange}
        content={
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/wizard" element={<WizardPage />} />
            <Route path="/congrats" element={<CongratsPage />} />
          </Routes>
        }
      />
    </div>
  );
}
