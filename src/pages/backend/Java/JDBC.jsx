import React from "react";
import { 
  Database, Terminal, Play, ShieldAlert, Code2, Zap, Layers, 
  Server, RefreshCw, Trash2, Edit3, PlusCircle, Box, Cpu, Activity, List, CheckCircle2
} from "lucide-react";

const FULL_CRUD_DETAILS = [
  {
    title: "1. The Menu System",
    icon: <List className="text-purple-500" />,
    logic: "The program uses a 'while' loop to keep running. It asks you to pick a number (1-5) and uses a 'switch' to start the right action.",
    code: `while(true) {
  System.out.println("1. CREATE, 2. DISPLAY...");
  int choice = scan.nextInt();
  switch(choice) {
    case 1: create(); break;
    case 5: System.exit(0);
  }
}`
  },
  {
    title: "2. CREATE (Add Data)",
    icon: <PlusCircle className="text-green-500" />,
    logic: "This part takes the ID and Name from you. It uses a 'PreparedStatement' to safely save this info into the database table.",
    code: `String query = "INSERT INTO STUDENT VALUES(?,?)";
PreparedStatement ps = con.prepareStatement(query);
ps.setInt(1, id);
ps.setString(2, stdName);
ps.executeUpdate();`
  },
  {
    title: "3. READ (Show Data)",
    icon: <RefreshCw className="text-blue-500" />,
    logic: "This fetches all rows from the table. The 'ResultSet' acts like a pointer that moves through each row so you can print them.",
    code: `Statement st = con.createStatement();
ResultSet rs = st.executeQuery("Select * from Student");
while(rs.next()) {
  System.out.print(rs.getInt(1) + " " + rs.getString(2));
}`
  },
  {
    title: "4. UPDATE (Change Data)",
    icon: <Edit3 className="text-orange-500" />,
    logic: "It asks for an ID and a New Name. It finds that specific person in your database and updates their information.",
    code: `String query = "UPDATE STUDENT SET Name=? WHERE RegNo=?";
PreparedStatement ps = con.prepareStatement(query);
ps.setString(1, stdName);
ps.setInt(2, id);
ps.executeUpdate();`
  },
  {
    title: "5. DELETE (Remove Data)",
    icon: <Trash2 className="text-red-500" />,
    logic: "This permanently removes a student's record using their Registration Number (RegNo).",
    code: `String query = "DELETE FROM STUDENT WHERE RegNo=?";
PreparedStatement ps = con.prepareStatement(query);
ps.setInt(1, id);
ps.executeUpdate();`
  }
];

export default function JDBCMaster() {
  return (
    /* Main Container: px-4 on mobile prevents content from touching edges */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-20 pt-10 pb-20 font-sans bg-white">
      
      {/* 1. HERO HEADER - Simple English */}
      <section className="space-y-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mx-auto md:mx-0">
           <Cpu className="w-3 h-3" /> Full Stack Connectivity
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
          JDBC <span className="text-orange-600 italic font-serif">Engine</span>
        </h1>
        <p className="text-slate-500 text-base md:text-xl max-w-3xl font-medium leading-relaxed mx-auto md:mx-0">
          This is a full breakdown of how your Java app talks to a Database. We will cover everything from connecting to the server to managing your data.
        </p>
      </section>

      {/* 2. THREE PHASES GRID - Responsive 1 to 3 columns */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4 hover:shadow-lg transition-all">
            <h4 className="font-black text-orange-600 uppercase text-[10px] tracking-widest">Phase 1</h4>
            <h3 className="text-xl font-bold text-slate-900">Build the Bridge</h3>
            <p className="text-sm text-slate-500">Opening a connection to your MySQL server using your username and password.</p>
          </div>
          <div className="p-6 md:p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4 hover:shadow-lg transition-all">
            <h4 className="font-black text-orange-600 uppercase text-[10px] tracking-widest">Phase 2</h4>
            <h3 className="text-xl font-bold text-slate-900">Prepare Query</h3>
            <p className="text-sm text-slate-500">Writing the SQL command and getting it ready to send your data safely.</p>
          </div>
          <div className="p-6 md:p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4 hover:shadow-lg transition-all">
            <h4 className="font-black text-orange-600 uppercase text-[10px] tracking-widest">Phase 3</h4>
            <h3 className="text-xl font-bold text-slate-900">Close Stream</h3>
            <p className="text-sm text-slate-500">Closing the connection when finished to keep your computer running fast.</p>
          </div>
      </section>

      {/* 3. STEP-BY-STEP IMPLEMENTATION */}
      <section className="space-y-12">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 flex items-center gap-3 justify-center md:justify-start">
          <Terminal className="w-8 h-8 md:w-10 md:h-10 text-orange-600" /> 
          How to Build It
        </h2>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {FULL_CRUD_DETAILS.map((item, idx) => (
            <div key={idx} className="group bg-white border border-slate-100 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 hover:shadow-xl transition-all duration-500">
               <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="lg:w-1/3 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 md:p-4 bg-slate-900 rounded-2xl text-white group-hover:bg-orange-600 transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed italic">
                      {item.logic}
                    </p>
                  </div>

                  <div className="lg:w-2/3 bg-slate-900 rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-white text-3xl md:text-4xl">0{idx + 1}</div>
                    <pre className="text-xs md:text-sm font-mono leading-6 md:leading-7 text-orange-400 overflow-x-auto whitespace-pre no-scrollbar">
                      <code>{item.code}</code>
                    </pre>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXECUTION METHODOLOGY - Responsive Grid */}
      <section className="bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 text-center">Which Method to Use?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-4 p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-orange-500 font-bold uppercase tracking-widest text-[10px]">To Read</h4>
              <h3 className="text-xl md:text-2xl font-bold">executeQuery()</h3>
              <p className="text-slate-400 text-sm">Use this for <strong>SELECT</strong>. It brings back a table of data (ResultSet).</p>
            </div>
            <div className="space-y-4 p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-orange-500 font-bold uppercase tracking-widest text-[10px]">To Write</h4>
              <h3 className="text-xl md:text-2xl font-bold">executeUpdate()</h3>
              <p className="text-slate-400 text-sm">Use this for <strong>INSERT, UPDATE, DELETE</strong>. It tells you how many rows were changed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL SECURITY TIP - Responsive column to row */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-8 md:p-12 bg-orange-50 rounded-[2.5rem] md:rounded-[3rem] border border-orange-100 text-center md:text-left">
        <div className="bg-orange-600 p-5 md:p-6 rounded-3xl text-white shadow-xl shrink-0">
          <ShieldAlert size={40} />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase">Stay Safe with PreparedStatement</h4>
          <p className="text-sm md:text-base text-slate-600 font-medium max-w-2xl">
            By using the <code>?</code> symbol, you create a security wall. This prevents hackers from breaking your database and ensures that names and IDs are treated as data, not as dangerous code.
          </p>
        </div>
      </div>

    </div>
  );
}