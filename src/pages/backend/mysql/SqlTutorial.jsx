import React, { useState } from 'react';
import SqlSidebar from './SqlSidebar'; 
import SqlIntro from "./SqlIntro.jsx";
import Normalization from './Normalization';
import CoreCommands from './CoreCommands';
import Filtering from './Filtering';
import SqlFunctions from './SqlFunctions';
import Aggregates from './Aggregates';
import Joins from './Joins';
import Subqueries from './Subqueries';
import ViewsCTEs from './ViewsCTEs';
import WindowFunctions from './WindowFunctions';
import StoredProcedures from './StoredProcedures';
import DataIntegration from './DataIntegration';
import ImportantQueries from './ImportantQueries';
import SqlInterviewQA from './SqlInterviewQA';

const SqlTutorial = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const renderContent = () => {
    switch (activeTab) {
      case 'intro': return <SqlIntro />;
      case 'normalization': return <Normalization />;
      case 'commands': return <CoreCommands />;
      case 'filtering': return <Filtering />;
      case 'functions': return <SqlFunctions />;
      case 'aggregates': return <Aggregates />;
      case 'joins': return <Joins />;
      case 'subqueries': return <Subqueries />;
      case 'views': return <ViewsCTEs />;
      case 'window': return <WindowFunctions />;
      case 'procedures': return <StoredProcedures />;
      case 'integration': return <DataIntegration />;
      case 'queries': return <ImportantQueries />;
      case 'interview': return <SqlInterviewQA />;
      default: return <SqlIntro />;
    }
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar eppovum left side-la irukum */}
      <SqlSidebar activeTab={activeTab} onSelect={setActiveTab} />
      
      {/* Content area right side-la irukum */}
      <main className="flex-1 overflow-y-auto bg-slate-50/30">
        <div className="max-w-5xl mx-auto py-12 px-8">
          <div key={activeTab} className="transition-all duration-300">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SqlTutorial;