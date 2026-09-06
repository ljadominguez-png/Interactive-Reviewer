window.quizRegistry = window.quizRegistry || {};
window.quizRegistry['PL'] ={
    title: "PL lesson 3 Reviewer",
    data:[
    {
    "sec": "Process Address Space",
    "q": "Which component manages the isolated Virtual Address Space of a process alongside OS Page Tables?",
    "ans": "CPU MMU",
    "alt": [
      "MMU",
      "Memory Management Unit"
    ]
  },
  {
    "sec": "Process Address Space",
    "q": "What segment of the process address space stores machine code instructions?",
    "ans": "Text Segment",
    "alt": [
      "Text"
    ]
  },
  {
    "sec": "Process Address Space",
    "q": "Which memory segment contains initialized global variables?",
    "ans": "Data Segment",
    "alt": [
      "Data"
    ]
  },
  {
    "sec": "Process Address Space",
    "q": "Which memory segment contains uninitialized global variables?",
    "ans": "BSS Segment",
    "alt": [
      "BSS"
    ]
  },
  {
    "sec": "Process Address Space",
    "q": "In a process address space layout, which segment grows upwards toward higher memory addresses?",
    "ans": "Heap Segment",
    "alt": [
      "Heap"
    ]
  },
  {
    "sec": "Process Address Space",
    "q": "In a process address space layout, which segment grows downwards toward lower memory addresses?",
    "ans": "Stack Segment",
    "alt": [
      "Stack"
    ]
  },
  {
    "sec": "Process Address Space",
    "q": "What standard hexadecimal memory address is represented at the top (High Memory) of the process address space diagram?",
    "ans": "0xFFFFFFFF",
    "alt": []
  },
  {
    "sec": "Process Address Space",
    "q": "What standard hexadecimal memory address is represented at the bottom (Low Memory) of the process address space diagram?",
    "ans": "0x00000000",
    "alt": []
  },
  {
    "sec": "Process Address Space",
    "q": "Which two memory allocations in the address space are determined prior to execution as static allocations?",
    "ans": "Code & Data Segments",
    "alt": [
      "Code and Data Segments",
      "Text and Data Segments"
    ]
  },
  {
    "sec": "Stack Mechanics",
    "q": "What is another term used to refer to a dedicated contiguous block of stack memory created automatically upon function invocation?",
    "ans": "Activation Record",
    "alt": [
      "Stack Frame"
    ]
  },
  {
    "sec": "Stack Mechanics",
    "q": "Which saved pointer inside an activation record holds the base address anchoring local variable offsets within the frame?",
    "ans": "Frame Pointer",
    "alt": [
      "RBP",
      "EBP",
      "RBP/EBP"
    ]
  },
  {
    "sec": "Stack Mechanics",
    "q": "Which saved pointer or hardware instruction pointer is saved in a stack frame to resume caller execution upon completion?",
    "ans": "Return Address",
    "alt": [
      "RIP",
      "EIP",
      "RIP/EIP"
    ]
  },
  {
    "sec": "Stack Mechanics",
    "q": "What assembly instruction subtracts bytes from the Stack Pointer to allocate memory on the stack?",
    "ans": "sub rsp, N",
    "alt": [
      "sub rsp"
    ]
  },
  {
    "sec": "Stack Mechanics",
    "q": "What assembly instruction adds bytes to the Stack Pointer to deallocate memory upon function return?",
    "ans": "add rsp, N",
    "alt": [
      "add rsp"
    ]
  },
  {
    "sec": "Stack Mechanics",
    "q": "Which data discipline or order does stack memory follow, preventing memory fragmentation completely?",
    "ans": "Last-In, First-Out",
    "alt": [
      "LIFO"
    ]
  },
  {
    "sec": "Stack Mechanics",
    "q": "What is the typical thread stack limit size mentioned for stack allocations?",
    "ans": "1-8 MB",
    "alt": [
      "1 to 8 MB",
      "1-8MB"
    ]
  },
  {
    "sec": "Heap Mechanics",
    "q": "What type of data structures utilize heap memory allocations?",
    "ans": "Dynamic Lifetimes",
    "alt": [
      "Dynamic data structures"
    ]
  },
  {
    "sec": "Heap Mechanics",
    "q": "Which two functions are explicitly used for manual heap memory allocation and deallocation in the C language?",
    "ans": "malloc()/free()",
    "alt": [
      "malloc and free",
      "malloc/free"
    ]
  },
  {
    "sec": "Heap Mechanics",
    "q": "Which operators are used for dynamic memory management in C++?",
    "ans": "new/delete",
    "alt": [
      "new and delete"
    ]
  },
  {
    "sec": "Heap Mechanics",
    "q": "What risk occurs on the heap when repeated allocations and frees create holes over prolonged runtimes?",
    "ans": "External Fragmentation",
    "alt": [
      "Fragmentation",
      "Fragmentation Risk"
    ]
  },
  {
    "sec": "Stack vs Heap Comparison",
    "q": "What is the allocation speed characteristic of stack memory compared to heap memory?",
    "ans": "Instant",
    "alt": [
      "Instant (Single SP pointer bump)",
      "Single SP pointer bump"
    ]
  },
  {
    "sec": "Stack vs Heap Comparison",
    "q": "What causes the allocation speed of heap memory to be slow?",
    "ans": "Free-list search & syscalls",
    "alt": [
      "Free-list search and syscalls"
    ]
  },
  {
    "sec": "Stack vs Heap Comparison",
    "q": "What is the scope lifetime of variables allocated on the stack?",
    "ans": "Strictly Lexical / Local Scope",
    "alt": [
      "Strictly Lexical",
      "Local Scope",
      "Lexical Scope"
    ]
  },
  {
    "sec": "Stack vs Heap Comparison",
    "q": "What bound limits the size of heap memory?",
    "ans": "Physical RAM + Swap",
    "alt": [
      "Bound by physical RAM + Swap"
    ]
  },
  {
    "sec": "Stack vs Heap Comparison",
    "q": "Why does stack memory achieve maximum cache locality performance?",
    "ans": "Hot in CPU L1/L2 cache",
    "alt": [
      "It is hot in CPU L1/L2 cache"
    ]
  },
  {
    "sec": "Pointer Arithmetic",
    "q": "If an integer pointer `int* ptr` at address `0x1000` is incremented by 1 (`ptr = ptr + 1`), what address does it evaluate to assuming `sizeof(int) = 4`?",
    "ans": "0x1004",
    "alt": []
  },
  {
    "sec": "Pointer Arithmetic",
    "q": "If a double pointer `double* d_ptr` at address `0x1000` is incremented by 1 (`d_ptr = d_ptr + 1`), what address does it evaluate to assuming `sizeof(double) = 8`?",
    "ans": "0x1008",
    "alt": []
  },
  {
    "sec": "Pointer Arithmetic",
    "q": "What abstract structure represents RAM in low-level pointer addressing?",
    "ans": "Flat Byte Array",
    "alt": [
      "A Flat Byte Array"
    ]
  },
  {
    "sec": "Pointer Arithmetic",
    "q": "What operator scales pointer arithmetic automatically by the element type size?",
    "ans": "sizeof(T)",
    "alt": [
      "sizeof"
    ]
  },
  {
    "sec": "Pointer Arithmetic",
    "q": "What operation (`*ptr`) directs the CPU to read or write N raw bytes from a target hex address?",
    "ans": "Dereferencing",
    "alt": [
      "Dereference"
    ]
  },
  {
    "sec": "Struct Alignment",
    "q": "How many bytes are wasted due to padding in the unoptimized `BadLayout` struct example?",
    "ans": "10 bytes",
    "alt": [
      "10"
    ]
  },
  {
    "sec": "Struct Alignment",
    "q": "What is the total byte size of the `OptimizedLayout` struct after proper field ordering?",
    "ans": "16 bytes",
    "alt": [
      "16"
    ]
  },
  {
    "sec": "Struct Alignment",
    "q": "According to the hardware alignment rule, primitive N-byte data types should reside at memory addresses divisible by what value?",
    "ans": "N",
    "alt": []
  },
  {
    "sec": "Struct Alignment",
    "q": "What do compilers insert between struct fields to enforce hardware memory alignment?",
    "ans": "Padding bytes",
    "alt": [
      "Padding",
      "Invisible padding bytes"
    ]
  },
  {
    "sec": "Struct Alignment",
    "q": "What engineering rule should be applied when ordering struct fields to minimize padding waste?",
    "ans": "Order struct fields from largest to smallest",
    "alt": [
      "Largest to smallest"
    ]
  },
  {
    "sec": "Cache Locality",
    "q": "How many bytes form a standard CPU Cache Line fetched into L1/L2 cache?",
    "ans": "64-byte",
    "alt": [
      "64 bytes",
      "64"
    ]
  },
  {
    "sec": "Cache Locality",
    "q": "Which type of memory access principle is utilized when sequentially accessing elements in a contiguous matrix array?",
    "ans": "Spatial Locality",
    "alt": [
      "Spatial"
    ]
  },
  {
    "sec": "Cache Locality",
    "q": "How much faster can contiguous sequential memory access run compared to pointer-chasing jumpy structures?",
    "ans": "Up to 10x slower!",
    "alt": [
      "Up to 10x faster",
      "10x faster",
      "10x"
    ]
  },
  {
    "sec": "Cache Locality",
    "q": "What causes matrix iteration using column-major ordering (`matrix[i][j]` inside an outer `j` loop) to be cache-hostile?",
    "ans": "Stride-N jumps",
    "alt": [
      "Continuous cache misses",
      "Stride-N jumps - Continuous cache misses"
    ]
  },
  {
    "sec": "Memory Bugs",
    "q": "Which low-level memory bug is caused by unbounded recursion or massive local array allocations exhausting the stack space?",
    "ans": "Stack Overflow",
    "alt": []
  },
  {
    "sec": "Memory Bugs",
    "q": "Which security vulnerability occurs when writing past array bounds, corrupting adjacent stack variables or return addresses?",
    "ans": "Buffer Overflow",
    "alt": []
  },
  {
    "sec": "Memory Bugs",
    "q": "What bug occurs when dereferencing a pointer that points to heap memory that has already been deallocated?",
    "ans": "Use-After-Free",
    "alt": []
  },
  {
    "sec": "Memory Bugs",
    "q": "What memory condition happens when dynamic memory allocated on the heap is never deallocated with `free()`?",
    "ans": "Memory Leak",
    "alt": []
  },
  {
    "sec": "Profiling & Diagnostics",
    "q": "Which instrumentation tool sub-tool is used to catch memory leaks, invalid heap accesses, and uninitialized reads?",
    "ans": "Valgrind (Memcheck)",
    "alt": [
      "Valgrind",
      "Memcheck"
    ]
  },
  {
    "sec": "Profiling & Diagnostics",
    "q": "What tool does GDB stand for?",
    "ans": "GNU Debugger",
    "alt": []
  },
  {
    "sec": "Profiling & Diagnostics",
    "q": "Which GDB command allows inspecting stack frame registers such as rsp and rbp?",
    "ans": "info registers rsp rbp",
    "alt": [
      "info registers"
    ]
  },
  {
    "sec": "Profiling & Diagnostics",
    "q": "Which GDB command format string is used to inspect raw hex memory words?",
    "ans": "x/16xb",
    "alt": [
      "x/16xb"
    ]
  },
  {
    "sec": "Profiling & Diagnostics",
    "q": "What fast compiler pass option flag is passed to enable AddressSanitizer (`ASan`)?",
    "ans": "-fsanitize=address",
    "alt": [
      "-fsanitize=address"
    ]
  },
  {
    "sec": "Profiling & Diagnostics",
    "q": "Which compiler feature detects buffer overflows and dangling pointers during runtime execution?",
    "ans": "AddressSanitizer",
    "alt": [
      "ASan"
    ]
  },
  {
    "sec": "General Information",
    "q": "Which course code and title is this runtime environment and memory layout lecture unit created for?",
    "ans": "CSP 107: PROGRAMMING LANGUAGES",
    "alt": [
      "CSP 107",
      "CSP 107 Programming Languages"
    ]
  }
    ]
}
