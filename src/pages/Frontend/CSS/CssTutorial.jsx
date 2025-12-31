import { useState } from "react";
import CssSidebar from "./CssSidebar";

import CssIntro from "./CssIntro";
import Selectors from "./Selectors";
import BoxModel from "./BoxModel";
import Flexbox from "./Flexbox";
import Grid from "./Grid";
import Animation from "./Animation";
import Responsive from "./Responsive";

import CssFAQ from "./CssFAQ";

function CssTutorial() {
  const [active, setActive] = useState("Introduction");

  const componentMap = {
    Introduction: <CssIntro />,
    Selectors: <Selectors />,
    "Box Model": <BoxModel />,
    Flexbox: <Flexbox />,
    Grid: <Grid />,
    Animation: <Animation />,
    Responsive: <Responsive />,
    faq:<CssFAQ/>
  };

  return (
    <div className="flex min-h-screen">
      <CssSidebar active={active} setActive={setActive} />
      <div className="flex-1 p-8 bg-slate-50 overflow-y-auto">
        {componentMap[active]}
      </div>
    </div>
  );
}

export default CssTutorial;
