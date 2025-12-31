import { useState } from "react";
import HtmlSidebar from "./HtmlSidebar";

// import all content components
import Introduction from "./HtmlIntro";
import Basic from "./Basic";
import Tags from "./Tag";
import Forms from "./Froms";
import Semantic from "./Semantic";
import Html5 from "./Html5";
import Accessibility from "./Accessibility";

import HtmlFAQ from "./HtmlFAQ";


function HtmlTutorial() {
  // 👇 default first topic
const [active, setActive] = useState("intro");


  // 👇 mapping sidebar name → component
 const componentMap = {
  intro: <Introduction />,
  basics: <Basic />,
  tags: <Tags/>,
  forms: <Forms />,
  semantic: <Semantic />,
  html5: <Html5 />,
  accessibility: <Accessibility />,
  faq: <HtmlFAQ />,
};

  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <HtmlSidebar active={active} setActive={setActive} />


      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {componentMap[active]}
      </div>

    </div>
  );
}

export default HtmlTutorial;
