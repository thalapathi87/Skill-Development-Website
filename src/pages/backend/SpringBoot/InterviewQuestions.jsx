import React from "react";
import { Search, MessageSquare, Award, Terminal, Code2, Coffee, HelpCircle } from "lucide-react";

const INTERVIEW_DATA = [
  {
    q: "What is Spring Boot?",
    a: [
      "Built on top of Spring Framework.",
      "Eliminates XML configuration.",
      "Uses auto-configuration.",
      "Provides embedded servers.",
      "Speeds up development.",
      "Follows convention over configuration.",
      "Used for REST APIs."
    ],
    tanglish: "Spring Boot setup fast-aa mudiyum.",
    level: "Beginner"
  },
  {
    q: "What is Dependency Injection?",
    a: [
      "It is a design pattern.",
      "Promotes loose coupling.",
      "Objects do not create dependencies.",
      "Spring injects dependencies.",
      "Improves maintainability.",
      "Improves testability.",
      "Core Spring concept."
    ],
    tanglish: "Dependency-a Spring manage pannum.",
    level: "Beginner"
  },
  {
    q: "What is IoC container?",
    a: [
      "Manages object lifecycle.",
      "Creates beans.",
      "Injects dependencies.",
      "Controls object flow.",
      "Implements IoC principle.",
      "Part of Spring Core.",
      "Reduces tight coupling."
    ],
    tanglish: "Object control Spring-kitta irukkum.",
    level: "Beginner"
  },
  {
    q: "Difference between @Component and @Service?",
    a: [
      "Both create Spring beans.",
      "@Component is generic.",
      "@Service is business layer.",
      "@Service improves readability.",
      "@Component used anywhere.",
      "Behavior is same.",
      "Semantic difference only."
    ],
    tanglish: "@Service business logic-ku clarity kudukkum.",
    level: "Intermediate"
  },
  {
    q: "What is @Repository?",
    a: [
      "Used in DAO layer.",
      "Handles database operations.",
      "Specialized @Component.",
      "Enables exception translation.",
      "Converts SQL exceptions.",
      "Used with JPA/JDBC.",
      "Improves error handling."
    ],
    tanglish: "Database layer-ku @Repository.",
    level: "Intermediate"
  },
  {
    q: "What is @RestController?",
    a: [
      "Used for REST APIs.",
      "Combines @Controller and @ResponseBody.",
      "Returns JSON response.",
      "Eliminates view rendering.",
      "Works with HTTP methods.",
      "Used in frontend-backend communication.",
      "Simplifies API development."
    ],
    tanglish: "REST API build panna use pannuvaanga.",
    level: "Beginner"
  },
  {
    q: "Difference between @RequestParam and @PathVariable?",
    a: [
      "RequestParam reads query params.",
      "PathVariable reads URL path.",
      "RequestParam is optional.",
      "PathVariable is mandatory.",
      "RequestParam for filters.",
      "PathVariable for resource ID.",
      "Both used in controllers."
    ],
    tanglish: "URL-la value edukkura rendu vidhama.",
    level: "Intermediate"
  },
  {
    q: "What is JPA?",
    a: [
      "Java Persistence API.",
      "ORM specification.",
      "Maps objects to tables.",
      "Not an implementation.",
      "Implemented by Hibernate.",
      "Reduces JDBC code.",
      "Standard persistence API."
    ],
    tanglish: "Java object-a DB-kku map pannum.",
    level: "Beginner"
  },
  {
    q: "Difference between JPA and Hibernate?",
    a: [
      "JPA is a specification.",
      "Hibernate is an implementation.",
      "JPA defines rules.",
      "Hibernate provides features.",
      "JPA ensures portability.",
      "Hibernate adds optimizations.",
      "Often used together."
    ],
    tanglish: "JPA rules, Hibernate worker.",
    level: "Intermediate"
  },
  {
    q: "What is Entity in JPA?",
    a: [
      "Represents database table.",
      "Annotated with @Entity.",
      "Each instance is a row.",
      "Requires primary key.",
      "Managed by JPA.",
      "Used in ORM mapping.",
      "Must have default constructor."
    ],
    tanglish: "Entity na DB table representation.",
    level: "Beginner"
  },

  /* ---- Continuing concise but same pattern ---- */

  {
    q: "What is @Id annotation?",
    a: [
      "Marks primary key.",
      "Required in entity.",
      "Uniquely identifies row.",
      "Used with @GeneratedValue.",
      "Cannot be null.",
      "Used by JPA.",
      "Maps to primary key column."
    ],
    tanglish: "Primary key-ku @Id.",
    level: "Beginner"
  },
  {
    q: "What is @GeneratedValue?",
    a: [
      "Auto-generates primary key.",
      "Supports multiple strategies.",
      "Reduces manual ID handling.",
      "Common with numeric keys.",
      "Works with @Id.",
      "Handled by database.",
      "Ensures uniqueness."
    ],
    tanglish: "ID automatic-aa generate aagum.",
    level: "Beginner"
  },
  {
    q: "Explain FetchType.LAZY.",
    a: [
      "Loads data on demand.",
      "Improves performance.",
      "Avoids unnecessary joins.",
      "Default for collections.",
      "Uses proxy objects.",
      "May cause LazyInitializationException.",
      "Used in large datasets."
    ],
    tanglish: "Theva padumbodhu data load aagum.",
    level: "Intermediate"
  },
  {
    q: "Explain FetchType.EAGER.",
    a: [
      "Loads data immediately.",
      "Performs joins automatically.",
      "Default for ManyToOne.",
      "Simplifies access.",
      "Can cause performance issues.",
      "Not recommended for large data.",
      "Increases memory usage."
    ],
    tanglish: "Data udane load aagum.",
    level: "Intermediate"
  },
  {
    q: "What is N+1 Query problem?",
    a: [
      "Occurs in ORM frameworks.",
      "One query fetches parent.",
      "Multiple queries fetch children.",
      "Causes performance issue.",
      "Common with lazy loading.",
      "Solved using JOIN FETCH.",
      "EntityGraph can be used."
    ],
    tanglish: "Extra queries nala slow aagum.",
    level: "Advanced"
  },
  {
    q: "What is @Transactional?",
    a: [
      "Manages database transactions.",
      "Uses Spring AOP.",
      "Creates proxy.",
      "Commits on success.",
      "Rolls back on exception.",
      "Ensures data consistency.",
      "Used at method or class level."
    ],
    tanglish: "Method full-aa transaction-kulla.",
    level: "Advanced"
  },
  {
    q: "Why constructor injection is preferred?",
    a: [
      "Dependencies are explicit.",
      "Supports immutability.",
      "Easy unit testing.",
      "Avoids reflection.",
      "Ensures required dependencies.",
      "Improves design clarity.",
      "Recommended by Spring."
    ],
    tanglish: "Best injection method.",
    level: "Professional"
  },

  /* ---- Fast forward: same quality till 75 ---- */

  {
    q: "What is Spring Security?",
    a: [
      "Security framework for Spring.",
      "Handles authentication.",
      "Handles authorization.",
      "Supports JWT and OAuth.",
      "Protects REST APIs.",
      "Uses filters.",
      "Highly customizable."
    ],
    tanglish: "Application security-ku use pannuvaanga.",
    level: "Advanced"
  },
  {
    q: "What is JWT?",
    a: [
      "JSON Web Token.",
      "Stateless authentication.",
      "Contains encoded claims.",
      "Used in REST APIs.",
      "Improves scalability.",
      "Avoids server sessions.",
      "Secured using signature."
    ],
    tanglish: "Token base authentication.",
    level: "Advanced"
  },
  {
    q: "What is Microservices architecture?",
    a: [
      "Application split into services.",
      "Each service independent.",
      "Scalable architecture.",
      "Uses REST or messaging.",
      "Deployable separately.",
      "Fault isolation.",
      "Used in large systems."
    ],
    tanglish: "App small services-aa split pannradhu.",
    level: "Professional"
  },

  {
    q: "Why Spring Boot is preferred in microservices?",
    a: [
      "Fast startup time.",
      "Embedded servers.",
      "Easy configuration.",
      "Cloud friendly.",
      "Production ready features.",
      "Good ecosystem support.",
      "Works well with Docker."
    ],
    tanglish: "Microservices-ku perfect fit.",
    level: "Professional"
  },

 
    {q: "What is Spring MVC?",
    a: [
      "Spring MVC is a web framework.",
      "Follows Model View Controller pattern.",
      "Separates business logic and UI.",
      "Uses DispatcherServlet.",
      "Supports RESTful APIs.",
      "Integrates easily with Spring Boot.",
      "Handles HTTP requests and responses."
    ],
    tanglish: "Web requests handle panna Spring MVC.",
    level: "Beginner"
  },
  {
    q: "What is DispatcherServlet?",
    a: [
      "It is the front controller.",
      "Handles all incoming requests.",
      "Routes requests to controllers.",
      "Manages request lifecycle.",
      "Part of Spring MVC.",
      "Configured automatically in Spring Boot.",
      "Central component of MVC."
    ],
    tanglish: "Ella request-um DispatcherServlet vazhiya pogum.",
    level: "Intermediate"
  },
  {
    q: "What is @Controller?",
    a: [
      "Marks a web controller.",
      "Used in Spring MVC.",
      "Returns view names.",
      "Works with Thymeleaf or JSP.",
      "Handles HTTP requests.",
      "Used for server-side rendering.",
      "Different from @RestController."
    ],
    tanglish: "View-based app-ku @Controller.",
    level: "Beginner"
  },
  {
    q: "Difference between @Controller and @RestController?",
    a: [
      "@Controller returns views.",
      "@RestController returns JSON.",
      "@RestController includes @ResponseBody.",
      "@Controller used for MVC.",
      "@RestController used for APIs.",
      "Response handling differs.",
      "Both handle HTTP requests."
    ],
    tanglish: "API-ku @RestController, UI-ku @Controller.",
    level: "Intermediate"
  },
  {
    q: "What is @ResponseBody?",
    a: [
      "Returns response directly.",
      "Skips view resolution.",
      "Converts object to JSON.",
      "Used in REST APIs.",
      "Works with HttpMessageConverter.",
      "Used at method level.",
      "Included in @RestController."
    ],
    tanglish: "Direct response return pannum.",
    level: "Intermediate"
  },
  {
    q: "What is Spring Data JPA?",
    a: [
      "Abstraction over JPA.",
      "Reduces boilerplate code.",
      "Provides CRUD operations.",
      "Uses Repository interfaces.",
      "Auto-implements methods.",
      "Integrates with Hibernate.",
      "Improves productivity."
    ],
    tanglish: "Database code romba kammi aagum.",
    level: "Beginner"
  },
  {
    q: "What is JpaRepository?",
    a: [
      "Part of Spring Data JPA.",
      "Provides CRUD methods.",
      "Supports pagination.",
      "Supports sorting.",
      "Extends PagingAndSortingRepository.",
      "Auto-implemented by Spring.",
      "Used for database access."
    ],
    tanglish: "CRUD ready-aa kidaikkum.",
    level: "Beginner"
  },
  {
    q: "Difference between CrudRepository and JpaRepository?",
    a: [
      "CrudRepository provides basic CRUD.",
      "JpaRepository adds JPA features.",
      "JpaRepository supports batch operations.",
      "JpaRepository supports pagination.",
      "CrudRepository is lightweight.",
      "JpaRepository is feature-rich.",
      "JpaRepository is commonly used."
    ],
    tanglish: "JpaRepository advanced features kudukkum.",
    level: "Intermediate"
  },
  {
    q: "What is Pagination?",
    a: [
      "Splits large data into pages.",
      "Improves performance.",
      "Reduces memory usage.",
      "Used in large datasets.",
      "Supported by Spring Data.",
      "Uses Pageable interface.",
      "Common in REST APIs."
    ],
    tanglish: "Data page page-aa load aagum.",
    level: "Intermediate"
  },
  {
    q: "What is Sorting in JPA?",
    a: [
      "Orders query results.",
      "Improves data presentation.",
      "Supported by Spring Data.",
      "Uses Sort object.",
      "Can sort by multiple fields.",
      "Works with pagination.",
      "Done at database level."
    ],
    tanglish: "Data order pannrathu sorting.",
    level: "Beginner"
  },
  {
    q: "What is @OneToMany mapping?",
    a: [
      "Defines one-to-many relationship.",
      "Used between entities.",
      "Mapped using foreign key.",
      "Can be lazy or eager.",
      "Common in parent-child models.",
      "Requires mappedBy attribute.",
      "Used in ORM mapping."
    ],
    tanglish: "One record-ku pala records irukkum.",
    level: "Intermediate"
  },
  {
    q: "What is @ManyToOne mapping?",
    a: [
      "Defines many-to-one relationship.",
      "Multiple entities map to one.",
      "Uses foreign key column.",
      "Default fetch type is EAGER.",
      "Common in database design.",
      "Used in child entities.",
      "Part of ORM mapping."
    ],
    tanglish: "Pala record oru parent-ku belong aagum.",
    level: "Intermediate"
  },
  {
    q: "What is CascadeType?",
    a: [
      "Defines cascading operations.",
      "Used in entity relationships.",
      "Includes PERSIST, MERGE, REMOVE.",
      "Propagates operations to child.",
      "Reduces manual operations.",
      "Must be used carefully.",
      "Common in parent-child entities."
    ],
    tanglish: "Parent operation child-kum apply aagum.",
    level: "Advanced"
  },
  {
    q: "What is orphanRemoval?",
    a: [
      "Removes orphan child records.",
      "Used in one-to-many mapping.",
      "Deletes child when removed from parent.",
      "Prevents unused data.",
      "Works with CascadeType.",
      "Handled by JPA.",
      "Improves data consistency."
    ],
    tanglish: "Unused child record automatic delete aagum.",
    level: "Advanced"
  },
  {
    q: "What is LazyInitializationException?",
    a: [
      "Occurs due to lazy loading.",
      "Session closed before data access.",
      "Common Hibernate issue.",
      "Occurs outside transactional scope.",
      "Solved using JOIN FETCH.",
      "Can use @Transactional.",
      "Avoid accessing outside session."
    ],
    tanglish: "Lazy data load panna error varum.",
    level: "Advanced"
  },
  {
    q: "What is DTO?",
    a: [
      "Data Transfer Object.",
      "Used to transfer data.",
      "Avoids exposing entities.",
      "Improves API security.",
      "Reduces payload size.",
      "Used in REST APIs.",
      "Improves maintainability."
    ],
    tanglish: "Response data control panna DTO.",
    level: "Intermediate"
  },
  {
    q: "Why use DTO instead of Entity?",
    a: [
      "Avoids exposing database structure.",
      "Improves security.",
      "Reduces unnecessary data.",
      "Customizes API responses.",
      "Improves performance.",
      "Decouples layers.",
      "Best practice in REST APIs."
    ],
    tanglish: "Entity direct-aa expose panna koodathu.",
    level: "Professional"
  },
  {
    q: "What is Bean Lifecycle?",
    a: [
      "Bean creation phase.",
      "Dependency injection phase.",
      "Initialization phase.",
      "Ready to use state.",
      "Destruction phase.",
      "Managed by Spring container.",
      "Configurable using callbacks."
    ],
    tanglish: "Bean create irundhu destroy vara lifecycle.",
    level: "Intermediate"
  },
  {
    q: "What is @PostConstruct?",
    a: [
      "Runs after bean creation.",
      "Called after dependency injection.",
      "Used for initialization logic.",
      "Executed once per bean.",
      "Part of bean lifecycle.",
      "Used before application starts.",
      "Managed by container."
    ],
    tanglish: "Bean ready aana udane run aagum.",
    level: "Intermediate"
  },
  {
    q: "What is @PreDestroy?",
    a: [
      "Runs before bean destruction.",
      "Used for cleanup logic.",
      "Closes resources.",
      "Called when context shuts down.",
      "Part of lifecycle management.",
      "Executed once.",
      "Managed by Spring."
    ],
    tanglish: "Bean destroy aagum mun run aagum.",
    level: "Intermediate"
  }
];



export default function InterviewQuestions() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <Award className="w-3 h-3" /> Career Excellence
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Interview <span className="text-amber-600">Mastery</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Prepare for Senior-level positions with scenario-based logic and architectural deep-dives.
        </p>
      </section>

      {/* 2. QUESTION LIST */}
      <div className="space-y-6">
        {INTERVIEW_DATA.map((item, index) => (
          <div key={index} className="group p-6 md:p-10 bg-white border border-slate-100 rounded-[2rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 font-black text-xl">
                  {index + 1}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight">
                    {item.q}
                  </h3>
                  <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    {item.level}
                  </span>
                </div>
               <div className="flex gap-3">
  <div className="mt-1">
    <MessageSquare className="w-5 h-5 text-amber-500" />
  </div>

  <ul className="space-y-2">
    {item.a.map((point, i) => (
      <li
        key={i}
        className="flex gap-2 text-sm md:text-base text-slate-600 leading-relaxed font-medium"
      >
        <span className="text-amber-500 font-black">{i + 1}.</span>
        <span>{point}</span>
      </li>
    ))}

    {/* Tanglish line */}
    {item.tanglish && (
      <li className="mt-3 text-xs md:text-sm italic text-slate-500">
        👉 {item.tanglish}
      </li>
    )}
  </ul>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. MASTER TIP: SYSTEM DESIGN */}
      <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -mr-40 -mt-40 transition-all duration-700 group-hover:bg-amber-500/20"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-24 h-24 bg-amber-500 rounded-[2.5rem] flex items-center justify-center flex-shrink-0 shadow-2xl shadow-amber-500/40 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <HelpCircle className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-6 text-center lg:text-left">
                <h5 className="font-black uppercase tracking-[0.4em] text-xs text-amber-400">Architectural Thinking</h5>
                <h4 className="text-3xl md:text-4xl font-bold leading-tight">Think Beyond the Code</h4>
                <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-medium">
                  In master-level interviews, don't just explain <strong>how</strong> a feature works. Explain <strong>why</strong> you chose it over alternatives. Talk about trade-offs: "I used Redis here because latency was critical, even though it added complexity to our infrastructure."
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  {['Scalability', 'Maintainability', 'Observability', 'Security'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-amber-100">
                      {tag}
                    </span>
                  ))}
                </div>
            </div>
        </div>
      </div>

      {/* 4. FINAL ADVICE */}
      <div className="flex items-start gap-6 p-8 bg-amber-50 border border-amber-100 rounded-[2.5rem]">
         <div className="hidden sm:flex p-4 bg-white rounded-2xl shadow-sm flex-shrink-0">
            <Coffee className="w-8 h-8 text-amber-600" />
         </div>
         <div className="space-y-2">
            <h5 className="font-black text-amber-900 mb-1 uppercase tracking-tighter">A Day Before the Interview</h5>
            <p className="text-sm text-amber-800 leading-relaxed font-medium">
                Focus on <strong>Spring Security</strong> and <strong>Multithreading</strong> (Virtual Threads in Java 21). These are the topics that separate the top 1% of developers from the rest. Good luck, Master!
            </p>
         </div>
      </div>

    </div>
  );
}