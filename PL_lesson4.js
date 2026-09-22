window.quizRegistry = window.quizRegistry || {};
window.quizRegistry ['PL4'] ={
    title : "PL Lesson 4 Reviewer",
    data: [
  {
    "sec": "Unit Architecture",
    "q": "What is the two-part architectural model structure of Unit 4?",
    "ans": "The Dual-Pillar Model",
    "alt": [
      "Dual-Pillar Model"
    ]
  },
  {
    "sec": "Unit Architecture",
    "q": "Which part of Unit 4 focuses on Compile-Time Guarantees and how languages classify and verify data before code execution?",
    "ans": "Part 1: Type Systems & Expressiveness",
    "alt": [
      "Type Systems & Expressiveness",
      "Type Systems and Expressiveness"
    ]
  },
  {
    "sec": "Unit Architecture",
    "q": "Which part of Unit 4 focuses on Runtime Integrity and managing allocation lifecycles to prevent low-level exploits?",
    "ans": "Part 2: Memory Management & Safety",
    "alt": [
      "Memory Management & Safety",
      "Memory Management and Safety"
    ]
  },
  {
    "sec": "Type Foundations",
    "q": "In which typing model are types bound to variables and validated during compilation?",
    "ans": "Static Typing",
    "alt": [
      "Static"
    ]
  },
  {
    "sec": "Type Foundations",
    "q": "In which typing model are types bound to runtime values as unconstrained containers checked on every execution step?",
    "ans": "Dynamic Typing",
    "alt": [
      "Dynamic"
    ]
  },
  {
    "sec": "Type Foundations",
    "q": "Which typing classification disallows implicit type coercions between incompatible representations and triggers an immediate error?",
    "ans": "Strong Typing",
    "alt": [
      "Strong"
    ]
  },
  {
    "sec": "Type Foundations",
    "q": "Which typing classification permits implicit memory reinterpretation or arbitrary coercion like C pointer casts?",
    "ans": "Weak Typing",
    "alt": [
      "Weak"
    ]
  },
  {
    "sec": "Type Soundness",
    "q": "Who stated the famous 1978 type system slogan: 'Well-typed programs cannot go wrong'?",
    "ans": "Robin Milner",
    "alt": []
  },
  {
    "sec": "Type Soundness",
    "q": "Which fundamental computer science theorem establishes that no static analyzer can decide all semantic properties for every program?",
    "ans": "Rice's Theorem",
    "alt": [
      "Rice theorem"
    ]
  },
  {
    "sec": "Type Soundness",
    "q": "Because type checkers are conservative due to completeness trade-offs, what behavior do sound type checkers exhibit when encountering questionable code?",
    "ans": "Safe Rejection",
    "alt": [
      "Safe rejection"
    ]
  },
  {
    "sec": "Type Soundness",
    "q": "Which isomorphism states that types are logical propositions, and programs are mathematical proofs that those propositions are true?",
    "ans": "The Curry-Howard Isomorphism",
    "alt": [
      "Curry-Howard Isomorphism",
      "Curry-Howard"
    ]
  },
  {
    "sec": "Type Inference",
    "q": "What ability allows a compiler or interpreter to automatically figure out the data type of an expression without explicit user annotations?",
    "ans": "Type Inference",
    "alt": []
  },
  {
    "sec": "Type Inference",
    "q": "In type inference, what step treats unknown types as blank placeholders or variables by scanning the AST?",
    "ans": "Constraint Generation",
    "alt": [
      "Constraint setup"
    ]
  },
  {
    "sec": "Type Inference",
    "q": "What equation-solving process solves generated constraint equations to assign the final correct type before code runs?",
    "ans": "Unification",
    "alt": []
  },
  {
    "sec": "Algorithm W",
    "q": "What is the standard formal algorithm name associated with Hindley-Milner type inference?",
    "ans": "Algorithm W",
    "alt": []
  },
  {
    "sec": "Algorithm W",
    "q": "In Step 1 of Algorithm W, what unbound variables (like alpha, beta, gamma) are assigned to all AST terms?",
    "ans": "Fresh Variables",
    "alt": [
      "Type variables"
    ]
  },
  {
    "sec": "Algorithm W",
    "q": "Which specific algorithm is used during the Unification step of Hindley-Milner type inference to solve equality equations?",
    "ans": "Robinson's algorithm",
    "alt": [
      "Robinson algorithm"
    ]
  },
  {
    "sec": "Algorithm W",
    "q": "What abbreviation MGU stands for the target solution solved by Robinson's unification algorithm?",
    "ans": "Most General Unifier",
    "alt": [
      "MGU"
    ]
  },
  {
    "sec": "Algorithm W",
    "q": "Which step in Algorithm W rejects circular recursive types to prevent compiler infinite loops?",
    "ans": "Occurs Check",
    "alt": [
      "Occurs check"
    ]
  },
  {
    "sec": "Polymorphism",
    "q": "Which form of polymorphism allows code to be written universally without knowing the specific type in advance?",
    "ans": "Parametric Polymorphism",
    "alt": [
      "Parametric"
    ]
  },
  {
    "sec": "Polymorphism",
    "q": "Which form of polymorphism defines explicit, distinct behaviors for different types under the same function name?",
    "ans": "Ad-hoc Polymorphism",
    "alt": [
      "Ad-hoc"
    ]
  },
  {
    "sec": "Polymorphism",
    "q": "What are two alternative terms commonly used to refer to Parametric Polymorphism?",
    "ans": "Generics, Templates",
    "alt": [
      "Generics",
      "Templates"
    ]
  },
  {
    "sec": "Polymorphism",
    "q": "What are two alternative terms commonly used to refer to Ad-hoc Polymorphism?",
    "ans": "Function overloading, Typeclasses",
    "alt": [
      "Function overloading",
      "Typeclasses"
    ]
  },
  {
    "sec": "Polymorphism",
    "q": "In Parametric Polymorphism, how does a universal function treat incoming data types?",
    "ans": "Opaque box",
    "alt": [
      "An opaque box"
    ]
  },
  {
    "sec": "Generics Strategies",
    "q": "Which compilation strategy generates distinct machine code for every concrete type used (e.g., C++ Templates, Rust)?",
    "ans": "Monomorphization",
    "alt": []
  },
  {
    "sec": "Generics Strategies",
    "q": "Which compilation strategy erases generic types into a universal base pointer like Object or void* (e.g., Java, TypeScript)?",
    "ans": "Type Erasure",
    "alt": []
  },
  {
    "sec": "Generics Strategies",
    "q": "What runtime performance drawback is caused by Type Erasure due to pointer dereferencing and heap allocations?",
    "ans": "Boxing/unboxing overhead",
    "alt": [
      "Pointer dereferencing and heap boxing/unboxing overhead"
    ]
  },
  {
    "sec": "Generics Strategies",
    "q": "What executable binary size drawback is associated with Monomorphization?",
    "ans": "Code Bloat",
    "alt": [
      "Code bloat"
    ]
  },
  {
    "sec": "Generics Strategies",
    "q": "How does the compile-time cost of Monomorphization compare to Type Erasure?",
    "ans": "Higher",
    "alt": [
      "Higher compile-time cost"
    ]
  },
  {
    "sec": "Type Equivalences",
    "q": "In which typing equivalence model (used by Java, C++) is type compatibility determined strictly by explicit name and inheritance hierarchy?",
    "ans": "Nominal Typing",
    "alt": [
      "Nominal"
    ]
  },
  {
    "sec": "Type Equivalences",
    "q": "In which typing equivalence model (used by TypeScript, Go) is type compatibility determined purely by shape and member signatures?",
    "ans": "Structural Typing",
    "alt": [
      "Structural"
    ]
  },
  {
    "sec": "Type Equivalences",
    "q": "What language feature in Rust and Haskell decouples data structures from behavior by implementing external behavioral contracts?",
    "ans": "Traits / Typeclasses",
    "alt": [
      "Traits",
      "Typeclasses"
    ]
  },
  {
    "sec": "Algebraic Data Types",
    "q": "What category of Algebraic Data Types represents an AND relationship where a value contains field A AND field B simultaneously?",
    "ans": "Product Types",
    "alt": [
      "Product Type"
    ]
  },
  {
    "sec": "Algebraic Data Types",
    "q": "What category of Algebraic Data Types represents an OR relationship where a value is variant A OR variant B, never both?",
    "ans": "Sum Types",
    "alt": [
      "Sum Type"
    ]
  },
  {
    "sec": "Algebraic Data Types",
    "q": "What is the cardinality formula for a Product Type composed of set A and set B?",
    "ans": "A times B",
    "alt": [
      "A * B",
      "A x B"
    ]
  },
  {
    "sec": "Algebraic Data Types",
    "q": "What is the cardinality formula for a Sum Type composed of set A and set B?",
    "ans": "A + B",
    "alt": []
  },
  {
    "sec": "Algebraic Data Types",
    "q": "How are Sum Types (tagged unions) stored in memory layout?",
    "ans": "Discriminator integer tag followed by a shared data payload union",
    "alt": [
      "Discriminator integer tag",
      "Tagged union"
    ]
  },
  {
    "sec": "Algebraic Data Types",
    "q": "Name three common data representations that act as Product Types.",
    "ans": "Structs, Classes, and Tuples",
    "alt": [
      "Structs, Classes, Tuples",
      "Tuples, structs, records"
    ]
  },
  {
    "sec": "Algebraic Data Types",
    "q": "Name three language implementations that represent Sum Types.",
    "ans": "Rust enums, Haskell data declarations, or TypeScript tagged unions",
    "alt": [
      "Tagged Unions & Enums with Data",
      "Rust enums",
      "Haskell data declarations"
    ]
  },
  {
    "sec": "Memory Exploits",
    "q": "What broad category of memory violations involves accessing memory outside the legal logical bounds of an allocated buffer?",
    "ans": "Spatial Memory Violations",
    "alt": [
      "Spatial Memory Violations / Exploits",
      "Spatial"
    ]
  },
  {
    "sec": "Memory Exploits",
    "q": "What broad category of memory violations involves accessing memory at an invalid point in time relative to its lifecycle?",
    "ans": "Temporal Memory Violations",
    "alt": [
      "Temporal Memory Violations / Exploits",
      "Temporal"
    ]
  },
  {
    "sec": "Spatial Violations",
    "q": "Which spatial memory exploit occurs when writing past array boundaries, corrupting adjacent stack variables or return pointers?",
    "ans": "Buffer Overflow",
    "alt": []
  },
  {
    "sec": "Spatial Violations",
    "q": "Which spatial error results from indexing past terminal array elements due to loop boundary miscalculations?",
    "ans": "Off-By-One Errors",
    "alt": [
      "Off-By-One"
    ]
  },
  {
    "sec": "Temporal Violations",
    "q": "Which temporal exploit occurs when dereferencing a pointer after target memory has already been deallocated?",
    "ans": "Use-After-Free",
    "alt": [
      "UAF"
    ]
  },
  {
    "sec": "Temporal Violations",
    "q": "Which temporal violation corrupts allocator free-list pointers by releasing the same heap chunk twice?",
    "ans": "Double Free",
    "alt": []
  },
  {
    "sec": "Temporal Violations",
    "q": "What pointers are created when retaining references to expired stack frames or released heap blocks?",
    "ans": "Dangling Pointers",
    "alt": [
      "Dangling pointers"
    ]
  },
  {
    "sec": "Reference Counting",
    "q": "What mechanism inside an object header tracks active incoming pointers in reference counting runtimes?",
    "ans": "Integer counter",
    "alt": [
      "Reference counter"
    ]
  },
  {
    "sec": "Reference Counting",
    "q": "What major flaw occurs in reference counting when two objects reference each other, keeping counters >= 1 forever?",
    "ans": "The Retain Cycle Flaw",
    "alt": [
      "Retain Cycle",
      "Cyclic Reference Hazards"
    ]
  },
  {
    "sec": "Reference Counting",
    "q": "What reference type is used to manually break reference cycle leaks?",
    "ans": "Weak References",
    "alt": [
      "Weak reference"
    ]
  },
  {
    "sec": "Reference Counting",
    "q": "What multithreaded CPU instructions introduce concurrency overhead for reference count updates?",
    "ans": "LOCK XADD",
    "alt": [
      "Atomic CPU instructions (LOCK XADD)"
    ]
  },
  {
    "sec": "Tracing GC",
    "q": "What are the three core phases of the Mark-and-Sweep garbage collection strategy?",
    "ans": "Mark Phase, Sweep Phase, Compact Phase",
    "alt": [
      "Mark, Sweep, Compact"
    ]
  },
  {
    "sec": "Tracing GC",
    "q": "From what starting points does the Mark Phase trace the object graph?",
    "ans": "Root pointers",
    "alt": [
      "Stack frames, CPU registers, globals"
    ]
  },
  {
    "sec": "Tracing GC",
    "q": "Which memory observation states that most allocated objects die shortly after creation?",
    "ans": "The Generational Hypothesis",
    "alt": [
      "Generational Hypothesis"
    ]
  },
  {
    "sec": "Tracing GC",
    "q": "In generational garbage collection, what heap area collects short-lived objects with fast copying collectors?",
    "ans": "Young Generation",
    "alt": [
      "Eden"
    ]
  },
  {
    "sec": "Tracing GC",
    "q": "In generational garbage collection, where are long-lived surviving objects promoted?",
    "ans": "Old Generation",
    "alt": [
      "Tenured"
    ]
  },
  {
    "sec": "Tracing GC",
    "q": "What unpredictable runtime pause effect is induced by Tracing Garbage Collection?",
    "ans": "Stop-The-World pauses",
    "alt": [
      "STW pauses",
      "Stop-The-World"
    ]
  },
  {
    "sec": "Rust Safety Model",
    "q": "According to Rust Rule 1, how many owner variables does every value in memory have at any given time?",
    "ans": "Exactly one owner variable",
    "alt": [
      "1",
      "One",
      "Exactly one"
    ]
  },
  {
    "sec": "Rust Safety Model",
    "q": "According to Rust Rule 2, what semantics transfer ownership upon variable assignment or passing, invalidating the original variable?",
    "ans": "Move Semantics",
    "alt": [
      "Move"
    ]
  },
  {
    "sec": "Rust Safety Model",
    "q": "According to the Rust Borrow Invariant, if you have a mutable reference (&mut T), how many concurrent immutable references (&T) are allowed?",
    "ans": "Zero",
    "alt": [
      "0",
      "None"
    ]
  },
  {
    "sec": "Rust Safety Model",
    "q": "What static compiler proofs notation ('a) guarantees references never outlive the underlying memory they borrow?",
    "ans": "Lifetimes",
    "alt": [
      "Lifetimes ('a)"
    ]
  },
  {
    "sec": "Safety Model Comparison",
    "q": "In the safety model comparison table, which model provides native data race protection enforced by Send / Sync?",
    "ans": "Ownership (Rust)",
    "alt": [
      "Rust",
      "Ownership"
    ]
  },
  {
    "sec": "General Course Info",
    "q": "What course code and unit number is designated for this Type Systems, Memory Management & Safety Models lecture?",
    "ans": "CSP 107 Unit 4",
    "alt": [
      "CSP 107: PROGRAMMING LANGUAGES Unit 4",
      "CSP 107"
    ]
  }
]
}