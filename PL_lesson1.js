window.quizRegistry = window.quizRegistry || {};
window.quizRegistry['PL1'] ={
    title: "PL lesson 1 Reviewer",
    data: [
  {
    "sec": "Execution Models & Types",
    "q": "What term is defined as the set of rules that determines how a computer program runs, how code translates into action, how memory is used, and how tasks happen?",
    "ans": "Execution Model",
    "alt": ["execution model"]
  },
  {
    "sec": "Execution Models & Types",
    "q": "According to the notes, most integrated virtual machines follow what three-step translation path shown in brackets?",
    "ans": "jav -> bin -> exe",
    "alt": ["jav -> bin -> exe", "jav to bin to exe"]
  },
  {
    "sec": "Execution Models & Types",
    "q": "Where is the final executable (exe) output displayed according to the note?",
    "ans": "console",
    "alt": ["on console", "on the console"]
  },
  {
    "sec": "Execution Models & Types",
    "q": "Which type of execution model executes tasks one after another in a linear, top-down approach where one task must finish before another starts?",
    "ans": "Sequence",
    "alt": ["sequence", "Sequence model"]
  },
  {
    "sec": "Execution Models & Types",
    "q": "Which execution model handles multiple tasks in a single thread with progress made over overlapping time periods?",
    "ans": "Concurrent",
    "alt": ["concurrent", "Concurrency"]
  },
  {
    "sec": "Execution Models & Types",
    "q": "What mechanism does a concurrent system use to rapidly switch between tasks and create the illusion of simultaneous execution?",
    "ans": "event loop/context switching",
    "alt": ["event loop", "context switching", "event loop or context switching"]
  },
  {
    "sec": "Execution Models & Types",
    "q": "Which execution model uses multiple CPU threads or cores to run separate processes simultaneously for a single workload?",
    "ans": "Parallel",
    "alt": ["parallel", "Parallelism"]
  },
  {
    "sec": "Execution Models & Types",
    "q": "Video rendering, machine learning, and data crunching are primary use cases of which execution model?",
    "ans": "Parallel",
    "alt": ["parallel", "Parallelism"]
  },
  {
    "sec": "Execution Models & Types",
    "q": "Handling network requests, database queries, and UI responsiveness are typical use cases of which execution model?",
    "ans": "Concurrent",
    "alt": ["concurrent", "Concurrency"]
  },
  {
    "sec": "Components of Execution Model",
    "q": "What component of the execution model is the software layer that manages system memory, garbage collection, and code translation while the program runs?",
    "ans": "Runtime System",
    "alt": ["runtime system"]
  },
  {
    "sec": "Components of Execution Model",
    "q": "Which component of an execution model combines static and dynamic rules to dictate the sequence in which code runs?",
    "ans": "Order of Operations",
    "alt": ["order of operations"]
  },
  {
    "sec": "Components of Execution Model",
    "q": "In the Order of Operations, what type of program flow has no fixed step because of conditions, loops, and functions?",
    "ans": "Dynamic",
    "alt": ["dynamic"]
  },
  {
    "sec": "Components of Execution Model",
    "q": "In the Order of Operations, what type of reading follows a designated top-down order?",
    "ans": "Static",
    "alt": ["static"]
  },
  {
    "sec": "Components of Execution Model",
    "q": "Which component tracks the current status and operations of the system that change over time?",
    "ans": "State Management",
    "alt": ["state management"]
  },
  {
    "sec": "Key Concepts & Runtime Notes",
    "q": "What two mechanisms are listed under the key concept of Parallelism?",
    "ans": "Multithreading & Multiprocessing",
    "alt": ["multithreading and multiprocessing", "multithreading", "multiprocessing"]
  },
  {
    "sec": "Key Concepts & Runtime Notes",
    "q": "What mechanism is paired with Concurrency under the key concepts list?",
    "ans": "Event loop",
    "alt": ["event loop"]
  },
  {
    "sec": "Key Concepts & Runtime Notes",
    "q": "What does the abbreviation JVM stand for?",
    "ans": "Java Virtual Machine",
    "alt": ["java virtual machine"]
  },
  {
    "sec": "Key Concepts & Runtime Notes",
    "q": "Which vendor or software company is required for JVM Hotspot according to the notes?",
    "ans": "oracle",
    "alt": ["Oracle"]
  },
  {
    "sec": "Key Concepts & Runtime Notes",
    "q": "What does the abbreviation GIL stand for in runtime management?",
    "ans": "Global Interpreter Lock",
    "alt": ["global interpreter lock"]
  },
  {
    "sec": "Core Execution Strategies",
    "q": "What execution strategy compiles code directly to machine code prior to execution, producing standalone native binaries?",
    "ans": "Ahead of Time",
    "alt": ["Ahead of Time (AoT)", "AOT", "AoT"]
  },
  {
    "sec": "Core Execution Strategies",
    "q": "How many runtime VM dependencies do standalone native binaries produced by AoT have?",
    "ans": "zero",
    "alt": ["0", "zero runtime VM dependencies"]
  },
  {
    "sec": "Core Execution Strategies",
    "q": "What execution strategy compiles source code into platform-independent intermediate bytecode run in a managed runtime environment?",
    "ans": "Virtual Machines",
    "alt": ["virtual machines", "VM", "VMs"]
  },
  {
    "sec": "Core Execution Strategies",
    "q": "What cross-platform development principle is abbreviated as WORA?",
    "ans": "write once, run anywhere",
    "alt": ["Write Once, Run Anywhere", "Write once run anywhere"]
  },
  {
    "sec": "Core Execution Strategies",
    "q": "What execution strategy monitors runtime dynamically, compiling frequently executed hotspots directly into native assembly?",
    "ans": "Just in Time",
    "alt": ["Just in Time (JIT)", "JIT"]
  },
  {
    "sec": "Core Execution Strategies",
    "q": "What performance acceleration multiplier is associated with JIT in the notes?",
    "ans": "10x",
    "alt": ["10x performance execution", "10x execution speed"]
  },
  {
    "sec": "Core Execution Strategies",
    "q": "What JavaScript engine used in Node.js and Chrome is cited under Dynamic Hotspot Optimization?",
    "ans": "V8",
    "alt": ["V8 engine", "V8 Engine"]
  },
  {
    "sec": "Core Execution Strategies",
    "q": "In dynamic hotspot optimization, what component identifies hot paths at runtime?",
    "ans": "runtime profilers",
    "alt": ["runtime profiler", "profiler", "profilers"]
  },
  {
    "sec": "V8 Engine Pipeline",
    "q": "In the V8 Engine Pipeline, what stage converts JavaScript source code into an AST and analyzes variable scopes?",
    "ans": "Parser Stage",
    "alt": ["Parser", "parser stage"]
  },
  {
    "sec": "V8 Engine Pipeline",
    "q": "What does the abbreviation AST stand for?",
    "ans": "Abstract Syntax Tree",
    "alt": ["abstract syntax tree"]
  },
  {
    "sec": "V8 Engine Pipeline",
    "q": "What is the name of the interpreter in the V8 engine that generates and executes compact bytecode?",
    "ans": "Ignition Interpreter",
    "alt": ["Ignition", "ignition interpreter"]
  },
  {
    "sec": "V8 Engine Pipeline",
    "q": "Which component of the V8 pipeline collects type feedback and function execution counts during runtime?",
    "ans": "Feedback Vector Profiling",
    "alt": ["feedback vector profiling", "Feedback Vector"]
  },
  {
    "sec": "V8 Engine Pipeline",
    "q": "What is the name of the optimizing JIT compiler in the V8 engine?",
    "ans": "TurboFan JIT Compiler",
    "alt": ["TurboFan", "turbofan", "TurboFan compiler"]
  },
  {
    "sec": "V8 Engine Pipeline",
    "q": "Name two optimization techniques used by the TurboFan JIT compiler to optimize bytecode into machine assembly.",
    "ans": "speculate-type inlining and dead code elimination",
    "alt": ["speculate-type inlining, dead code elimination", "dead code elimination and speculate-type inlining"]
  },
  {
    "sec": "AOT vs. JIT Comparison",
    "q": "When does compilation occur in Ahead-of-Time (AOT) compilation?",
    "ans": "Before deployment (Compile time)",
    "alt": ["before deployment", "Compile time", "compile time"]
  },
  {
    "sec": "AOT vs. JIT Comparison",
    "q": "When does compilation take place in Just-in-Time (JIT) compilation?",
    "ans": "During application runtime",
    "alt": ["during application runtime", "at runtime", "runtime"]
  },
  {
    "sec": "AOT vs. JIT Comparison",
    "q": "What is the startup speed of an AOT-compiled binary?",
    "ans": "Instant native binary execution",
    "alt": ["instant", "instant native binary execution"]
  },
  {
    "sec": "AOT vs. JIT Comparison",
    "q": "What startup latency issue does JIT experience while collecting profile data?",
    "ans": "Warm-up latency during profiling",
    "alt": ["warm-up latency", "warmup latency"]
  },
  {
    "sec": "AOT vs. JIT Comparison",
    "q": "Why is the memory footprint of AOT classified as minimal?",
    "ans": "No embedded compiler/VM",
    "alt": ["no embedded compiler/VM", "minimal"]
  },
  {
    "sec": "AOT vs. JIT Comparison",
    "q": "Why is the memory footprint higher in JIT execution?",
    "ans": "Includes compiler & JIT cache",
    "alt": ["includes compiler and JIT cache", "compiler & JIT cache"]
  },
  {
    "sec": "AOT vs. JIT Comparison",
    "q": "What is the optimization target of Ahead-of-Time compilation?",
    "ans": "Static target architecture",
    "alt": ["static target architecture"]
  },
  {
    "sec": "AOT vs. JIT Comparison",
    "q": "What kind of optimizations does JIT target during runtime?",
    "ans": "Dynamic profile-guided optimizations",
    "alt": ["dynamic profile-guided optimizations"]
  },
  {
    "sec": "Runtime Execution Lifecycle",
    "q": "What happens during the first stage of the Runtime Execution Lifecycle?",
    "ans": "source string is lexed into tokens and built into AST",
    "alt": ["parsing", "lexed into tokens and built into AST"]
  },
  {
    "sec": "Runtime Execution Lifecycle",
    "q": "What occurs during the final (fourth) stage of the Runtime Execution Lifecycle?",
    "ans": "hot functions are compiled directly to native CPU assembly for peak speed",
    "alt": ["Native JIT", "hot functions are compiled directly to native CPU assembly"]
  },
  {
    "sec": "Source Code Translation Strategies",
    "q": "Which translation strategy converts all code into a native binary file prior to runtime execution?",
    "ans": "Compiled Strategy",
    "alt": ["compiled strategy", "compiled"]
  },
  {
    "sec": "Source Code Translation Strategies",
    "q": "Which translation strategy evaluates and translates source code line-by-line dynamically during program runtime?",
    "ans": "Interpreted Strategy",
    "alt": ["interpreted strategy", "interpreted"]
  },
  {
    "sec": "The Compilation Pipeline",
    "q": "What is the first phase of the compilation pipeline that converts a character stream into meaningful language tokens?",
    "ans": "Lexical Analysis",
    "alt": ["lexical analysis"]
  },
  {
    "sec": "The Compilation Pipeline",
    "q": "Which compiler phase constructs an AST using formal grammar rules to analyze the structural layout of statements?",
    "ans": "Syntax Analysis",
    "alt": ["syntax analysis", "Syntax Parsing"]
  },
  {
    "sec": "The Compilation Pipeline",
    "q": "Which compilation phase performs type checking, identifier resolution, and scope binding?",
    "ans": "Semantic Analysis",
    "alt": ["semantic analysis", "Semantic Pass"]
  },
  {
    "sec": "The Compilation Pipeline",
    "q": "What special note is highlighted in the compilation pipeline diagram that must not be forgotten?",
    "ans": "Code Optimization",
    "alt": ["code optimization", "Do not forget the Code Optimization!"]
  },
  {
    "sec": "The Compilation Pipeline",
    "q": "What data structure or helper is connected across the compilation pipeline stages alongside Error Handling?",
    "ans": "Symbol Table",
    "alt": ["symbol table"]
  }
]
}