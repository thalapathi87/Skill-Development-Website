import React, { useState } from 'react';
import ReactSidebar from './ReactSidebar';
import ReactIntro from './ReactIntro';
import Components from './Components';
import Props from './Props';
import State from './State';
import Hooks from './Hooks';
import Events from './Events';
import Conditional from './Conditional';
import Lists from './Lists';
import Forms from './Forms';
import Routing from './Routing';
import Lifecycle from './Lifecycle';
import ReactFAQ from './Faq';

const ReactTutorial = () => {
  // MASTER STATE: Manages the navigation across different tutorial modules
  const [activeTab, setActiveTab] = useState('intro');

  /* DYNAMIC RENDERER: 
     This function acts as a controller that switches the main content 
     view based on the user's selection from the sidebar.
  */
  const renderContent = () => {
    switch (activeTab) {
      case 'intro': return <ReactIntro />;
      case 'components': return <Components />;
      case 'props': return <Props />;
      case 'state': return <State />;
      case 'hooks': return <Hooks />;
      case 'events': return <Events />;
      case 'conditional': return <Conditional />;
      case 'lists': return <Lists />;
      case 'forms': return <Forms />;
      case 'routing': return <Routing />;
      case 'lifecycle': return <Lifecycle />;
      case 'interview': return <ReactFAQ />;
      default: return <ReactIntro />;
    }
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar Navigation: Receives the activeTab state and the setter function as props */}
      <ReactSidebar activeTab={activeTab} onSelect={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto bg-slate-50/30">
        <div className="max-w-5xl mx-auto py-12 px-8">
          
          {/* CONTENT WRAPPER: 
              Using 'key={activeTab}' forces React to treat each module as a new element, 
              which helps in triggering entrance animations smoothly.
          */}
          
          <div key={activeTab} className="transition-all duration-300">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReactTutorial;