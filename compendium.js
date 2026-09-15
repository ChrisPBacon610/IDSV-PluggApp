window.COMPENDIUM = [
{
 id:'history', num:'0', title:'History & core terminology',
 src:'Lecture 0 · Brookshear ch. 0',
 pages:"Ch. 0 &middot; pp. 17–38",
 refs:[["0.1 The Role of Algorithms", "18"], ["0.2 The History of Computing", "20"], ["0.3 An Outline of Our Study", "25"]],
 blocks:[
  {t:'p', v:'Short chapter, cheap marks. The exam asks "who did what" and the three-way distinction between algorithm, program and software. Learn the names.'},
  {t:'defs', v:[
    ['Algorithm','An ordered set of unambiguous, executable steps that defines a <em>terminating</em> process. Recipes, directions and sheet music are everyday algorithms.'],
    ['Program','An executable representation of an algorithm — an algorithm coded so a computer can execute it.'],
    ['Software','The programs used to operate a computer.'],
    ['Hardware','The machinery the programs run on.']
  ]},
  {t:'h', v:'The people'},
  {t:'table', head:['Person','What they did'], rows:[
    ['Blaise Pascal','First gear-based machine that performed <strong>addition</strong>.'],
    ['Wilhelm Leibniz','Gear machine performing all four arithmetic operations.'],
    ['Joseph Marie Jacquard','First use of <strong>punched cards</strong> (1801) — stored weaving patterns for looms.'],
    ['Charles Babbage','Designed the <strong>Analytical Engine</strong>, the first programmable computing machine.'],
    ['Ada Byron (Lovelace)','Wrote programs for the Analytical Engine — the world&rsquo;s first programmer.'],
    ['Kurt Gödel','Incompleteness theorem: in any theory containing ordinary arithmetic there are statements whose truth cannot be settled algorithmically.'],
    ['Alan Turing','The <strong>Turing machine</strong> — the mathematical model of a computer used to study the power of algorithmic processing.'],
    ['Alonzo Church','Co-name of the <strong>Church–Turing thesis</strong>: Turing-computable = computable.'],
    ['John von Neumann','The <strong>von Neumann architecture</strong> — CPU fetches instructions from memory over a central bus.'],
    ['Tim Berners-Lee','Proposed linking documents across the Internet — the World Wide Web (CERN, 1991).']
  ]},
  {t:'h', v:'The machines, in order'},
  {t:'defs', v:[
    ['Abacus','Beads; state stored in bead positions; a human executes the algorithm.'],
    ['Gear machines','State stored in gear positions (Pascal, Leibniz, Babbage).'],
    ['Relay machines','1940 Stibitz at Bell Labs; 1944 Mark I (Aiken + IBM, Harvard).'],
    ['Vacuum-tube machines','Atanasoff–Berry (1930–41); Colossus (UK, code-breaking); ENIAC (Mauchly &amp; Eckert, Penn).'],
    ['Personal computers','Apple/Commodore home computers; IBM PC 1981, running Microsoft software, became the standard.'],
    ['Internet','ARPANET (US DoD, 1960s) → WWW (Berners-Lee, 1991) → search engines 1994–1998 → iPhone 2007.']
  ]},
  {t:'h', v:'The Euclidean algorithm (the worked example from lecture 0)'},
  {t:'steps', title:'Greatest common divisor of two positive integers', v:[
    'Assign M the larger of the two integers.',
    'Assign N the smaller of the two integers.',
    'Divide M by N; call the remainder R.',
    'If R is 0, return the value of N.',
    'Assign M the value of N.',
    'Assign N the value of R.',
    'Go back to step 3.'
  ]},
  {t:'note', v:'Worked: 15 &amp; 40 → M=40,N=15,R=10 → M=15,N=10,R=5 → M=10,N=5,R=0 → return <strong>5</strong>.'}
 ]
},

{
 id:'storage', num:'1', title:'Data storage',
 src:'Lecture 1 + Binary/Decimal handout · Brookshear ch. 1',
 pages:"Ch. 1 &middot; pp. 39–110",
 refs:[["1.1 Bits and Their Storage", "40"], ["1.2 Main Memory", "48"], ["1.3 Mass Storage", "51"], ["1.4 Representing Information as Bit Patterns", "57"], ["1.5 The Binary System", "65"], ["1.6 Storing Integers", "70"], ["1.7 Storing Fractions", "77"], ["1.10 Communication Errors", "97"]],
 blocks:[
  {t:'p', v:'This is <strong>by far</strong> the biggest block in the question bank — about a quarter of all questions, and nearly all of them are calculations you either can do or cannot. Hexadecimal, two&rsquo;s complement, logical operators and colour depth alone are ~90 questions. Drill these until they are automatic; they are free marks.'},

  {t:'h', v:'Bits, bytes and Boolean operations'},
  {t:'defs', v:[
    ['Bit','Short for <em>binary digit</em>. Two values, 0 and 1. Easy to store because only two distinct physical states are needed (e.g. low/high voltage).'],
    ['Byte','A group of <strong>8 bits</strong>. Typical size of a main-memory cell.'],
    ['Boolean value','A truth value: 0 = false, 1 = true. <strong>One bit</strong> is enough to represent it.'],
    ['Gate','A device (small electronic circuit) that computes a Boolean operation. Gates are the building blocks computers are made from.']
  ]},
  {t:'table', head:['x','y','x AND y','x OR y','x XOR y','NOT x'], rows:[
    ['0','0','0','0','0','1'],
    ['0','1','0','1','1','1'],
    ['1','0','0','1','1','0'],
    ['1','1','1','1','0','0']
  ]},
  {t:'trap', v:'AND = 1 only when <em>both</em> are 1. OR = 1 when <em>at least one</em> is 1. XOR = 1 when <em>exactly one</em> is 1. Work bit by bit, column by column — do not try to do it in your head in one go. Write the two patterns one above the other on the exam paper.'},

  {t:'h', v:'Hexadecimal'},
  {t:'p', v:'Base 16. Each hex digit is exactly <strong>4 bits</strong>, so a two-digit hex number is exactly one byte. Learn this table cold — roughly 36 exam questions depend on nothing else.'},
  {t:'table', head:['Hex','Bits','Dec','Hex','Bits','Dec'], rows:[
    ['0','0000','0','8','1000','8'],
    ['1','0001','1','9','1001','9'],
    ['2','0010','2','A','1010','10'],
    ['3','0011','3','B','1011','11'],
    ['4','0100','4','C','1100','12'],
    ['5','0101','5','D','1101','13'],
    ['6','0110','6','E','1110','14'],
    ['7','0111','7','F','1111','15']
  ]},
  {t:'steps', title:'Hex → bit pattern', v:[
    'Translate each hex digit separately into its 4 bits.',
    'Concatenate. Example: B3 → B = 1011, 3 = 0011 → <code>1011 0011</code>.'
  ]},
  {t:'steps', title:'Hex → decimal (two digits)', v:[
    'value = first digit × 16 + second digit.',
    'Example: A2 = 10×16 + 2 = <strong>162</strong>. 5C = 5×16 + 12 = <strong>92</strong>. 3F = 3×16 + 15 = <strong>63</strong>.'
  ]},
  {t:'steps', title:'Bit pattern → hex', v:[
    'Split the pattern into groups of 4 bits, from the right.',
    'Translate each group. Example: 10101101 → 1010 = A, 1101 = D → <strong>AD</strong>.'
  ]},

  {t:'h', v:'Unsigned binary ↔ decimal'},
  {t:'p', v:'Position quantities for 8 bits: <code>128 64 32 16 8 4 2 1</code>. Sum the positions where the bit is 1.'},
  {t:'note', v:'1010 1010 = 128+32+8+2 = <strong>170</strong>. &nbsp; 1011 1011 = 128+32+16+8+2+1 = <strong>187</strong>.'},
  {t:'steps', title:'Decimal → binary (the subtraction method from the handout)', v:[
    'Start at 128. Is the number ≥ 128? If yes write 1 and subtract 128; if no write 0.',
    'Repeat for 64, 32, 16, 8, 4, 2, 1 with whatever is left.',
    'Example 150: ≥128 → 1 (rest 22); 22&lt;64 → 0; 22&lt;32 → 0; 22≥16 → 1 (rest 6); 6&lt;8 → 0; 6≥4 → 1 (rest 2); 2≥2 → 1 (rest 0); 0&lt;1 → 0. Answer <code>10010110</code>.'
  ]},

  {t:'h', v:"Two's complement"},
  {t:'p', v:'The standard way of storing <strong>signed</strong> integers. With 8 bits the leftmost position is worth <strong>−128</strong> instead of +128; the other positions keep their normal values. A leading 1 therefore always means the number is negative.'},
  {t:'note', v:'1001 0110 as unsigned = 128+16+4+2 = 150. The <em>same</em> pattern in two&rsquo;s complement = −128+16+4+2 = <strong>−106</strong>.'},
  {t:'fig', img:"fig01", w:440, h:200, alt:"The same eight bits read two ways: only the leftmost position changes value, from +128 to minus 128", cap:"The bit pattern never changes — only what the leftmost position is worth. That single swap is the whole of two&rsquo;s complement.", ref:"Book: Figure 1.13 and 1.19"},
  {t:'steps', title:'Negative decimal → two&rsquo;s complement (handout method)', v:[
    'The number is negative, so the first bit is 1 — and you have "used" −128. Add 128 to the number; that remainder is what the other 7 bits must sum to.',
    'Fill the remaining positions 64, 32, 16, 8, 4, 2, 1 by the same ≥/&lt; test as above.',
    'Example −106: first bit 1, rest = −106+128 = 22 → 0010110 → <code>1001 0110</code>.'
  ]},
  {t:'steps', title:'The fast trick (invert and add one)', v:[
    'Write the positive number in binary.',
    'Flip every bit.',
    'Add 1.',
    'Example −5: 5 = 0000 0101 → flip 1111 1010 → +1 → <code>1111 1011</code>.'
  ]},
  {t:'table', head:['Bits','Unsigned','Signed magnitude',"Two's complement",'Excess-8'], rows:[
    ['0000','0','+0','0','−8'],['0011','3','3','3','−5'],['0111','7','7','7','−1'],
    ['1000','8','−0','−8','0'],['1010','10','−2','−6','2'],['1011','11','−3','−5','3'],
    ['1101','13','−5','−3','5'],['1111','15','−7','−1','7']
  ]},
  {t:'note', v:'Memorise the small 8-bit cases that keep coming back: −1 = <code>1111 1111</code>, −2 = <code>1111 1110</code>, −3 = <code>1111 1101</code>, −4 = <code>1111 1100</code>, −5 = <code>1111 1011</code>, −6 = <code>1111 1010</code>, 127 = <code>0111 1111</code>, −127 = <code>1000 0001</code>.'},
  {t:'trap', v:'"Which of these patterns is <em>largest</em>/<em>smallest</em>?" — first look at the leading bit. Every pattern starting with 0 is positive and beats every pattern starting with 1. Among the negatives, the one <em>closest to 1000 0000</em> is the smallest.'},
  {t:'defs', v:[
    ['Overflow','The number is too large (or too small) to be stored in the available number of bits. Adding two positives in two&rsquo;s complement and getting a negative is the classic symptom: 0111 1111 (127) + 0000 0011 (3) = 1000 0010 = −126.'],
    ['Truncation','Precision is lost — decimal places dropped — because only a limited number of bits is available.']
  ]},

  {t:'h', v:'Representing text'},
  {t:'defs', v:[
    ['Character encoding','A mapping from bit patterns to characters and back. You cannot interpret a bit pattern as a character without knowing which encoding is used.'],
    ['ASCII','7-bit: 128 characters. 8-bit ASCII: 256 characters, not standardised.'],
    ['ISO-Latin-1 / -2','256 characters including West / Central European characters.'],
    ['Unicode','Can represent all characters in all languages. <strong>UTF-8</strong> uses 8 or more bits per character.']
  ]},

  {t:'h', v:'Representing images'},
  {t:'defs', v:[
    ['Pixel','Picture element — one dot of the image.'],
    ['Resolution','Number of pixels, width × height.'],
    ['Colour depth (bit depth)','The number of <strong>bits per pixel</strong> used to encode the colour.'],
    ['RGB','Red, green, blue. 24-bit RGB = 8 bits per channel = two hex digits per channel, e.g. <code>6A36B3</code>.']
  ]},
  {t:'steps', title:'The colour-depth arithmetic the exam keeps asking', v:[
    'n bits represent 2<sup>n</sup> different colours.',
    '<strong>Twice</strong> as many colours = <strong>one more bit</strong>. Half as many = one bit less. (12 bits → 13 bits doubles it; 12 → 11 halves it.)',
    'To represent k different colours, take the smallest n with 2<sup>n</sup> ≥ k. 9, 12 and 15 colours all need <strong>4 bits</strong> (16 values); 24 colours needs <strong>5 bits</strong> (32 values).',
    'A hex RGB code with 6 hex digits = 6 × 4 = <strong>24 bits</strong> per pixel.'
  ]},
  {t:'note', v:'Mixing maximum channels: yellow = red + green = <code>FFFF00</code>; magenta = red + blue = <code>FF00FF</code>; cyan = green + blue = <code>00FFFF</code>; pure green = <code>00FF00</code>.'},
  {t:'steps', title:'Uncompressed image size', v:[
    'bytes = (colour depth in bits ÷ 8) × number of pixels.',
    'Example: CC3300 is 24 bits = 3 bytes per pixel; a 6-megapixel bitmap = 3 × 6 000 000 = 18 000 000 bytes = <strong>18 MB</strong>.'
  ]},

  {t:'h', v:'Representing sound'},
  {t:'defs', v:[
    ['Sample rate (sampling frequency)','The number of samples — readings of the sound wave — taken per unit of time. CD: 44 100 samples per second.'],
    ['Sample depth','The number of <strong>bits per sample</strong>. CD: 16 bits per channel (32 bits per sample in stereo).']
  ]},
  {t:'steps', title:'Uncompressed audio size', v:[
    'bits = sample rate × sample depth × channels × seconds.',
    'Divide by 8 for bytes, by 8000 for kB.',
    'CD-quality stereo, 3 minutes: 44100 × 16 × 2 × 180 ÷ 8000 = <strong>31 752 kB</strong>.'
  ]},
  {t:'note', v:'A hex notation of one sound sample tells you the sample depth directly: <code>6A38</code> is 4 hex digits = <strong>16 bits</strong>.'},

  {t:'h', v:'Main memory and mass storage'},
  {t:'defs', v:[
    ['Main memory (RAM)','Circuits each storing one bit, organised in <strong>memory cells</strong> of typically 8 bits. Random access memory.'],
    ['Address','A number (from 0) assigned to each memory cell. Addresses identify cells uniquely and imply an order. They are implicit — not themselves stored.'],
    ['Most/least significant bit','The leftmost / rightmost bit of a cell.'],
    ['Mass storage','Magnetic disks (HDD), optical discs (CD/DVD/Blu-ray), flash memory (SSD, SD cards). Advantages over main memory: less volatile, cheaper, larger capacity.']
  ]},

  {t:'h', v:'Representing fractions'},
  {t:'p', v:'Positions to the right of the radix point are 1/2, 1/4, 1/8, 1/16 … So <code>100.0101</code> = 4 + 1/4 + 1/16 = 69/16 = 4.3125.'},
  {t:'p', v:'Floating-point storage: a <strong>sign bit</strong>, an <strong>exponent</strong> in excess notation, and a <strong>mantissa</strong>. In the 8-bit example from the lecture, 10.1011 (2.6875) is normalised to 1.01011 × 2<sup>1</sup>, giving sign 0, exponent 100 (excess-3), mantissa 0101 — the leading 1 is omitted because it is always 1, and the last bit is lost: that loss is <em>truncation</em>.'},

  {t:'h', v:'Four errors in the answer sheet'},
  {t:'trap', v:'Every arithmetic answer in the frågor-och-svar file was recomputed. Four of them are wrong — drill them with the correct answer, and the drill flags each one when you reach it.<br><br>• <code>1010 0011 OR 0010 0110</code> → the sheet says 1000 0101; it is <strong>1010 0111</strong>.<br>• <code>110011 XOR 101001</code> → the sheet says 0011 0010; it is <strong>011010</strong>.<br>• Bit pattern <code>10010101</code> in hex → the sheet says D5; it is <strong>95</strong> (D5 is 1101 0101).<br>• Hex <code>5E</code> in decimal → the sheet gives the bit pattern 0101 1110; the decimal value is <strong>94</strong>.'}
 ]
},

{
 id:'machine', num:'2', title:'Data manipulation & machine language',
 src:'Lecture 2 + Maskinspråk · Brookshear ch. 2 + Appendix C',
 pages:"Ch. 2 &middot; pp. 111–162",
 refs:[["2.1 Computer Architecture", "112"], ["2.2 Machine Language", "115"], ["2.3 Program Execution", "122"], ["2.4 Arithmetic/Logic Instructions", "130"], ["2.7 Other Architectures (RISC / CISC)", "151"], ["Appendix C — the Vole machine language", "675"]],
 blocks:[
  {t:'p', v:'The exam tends to ask either a definition (what is in the program counter?) or a trace: "what value does R0 / the PC hold after n machine cycles?" The trace questions are done by hand with the Vole table below — they are mechanical once you know the op-codes.'},

  {t:'h', v:'Architecture'},
  {t:'defs', v:[
    ['Stored program concept','Storing a computer&rsquo;s program in its main memory (von Neumann).'],
    ['CPU — three parts','<strong>Arithmetic/logic unit</strong>, <strong>control unit</strong>, and <strong>registers</strong>.'],
    ['General-purpose registers','Small, fast storage inside the CPU for the data being worked on.'],
    ['Program counter (PC)','Holds the <strong>memory address of the next instruction</strong> to be executed.'],
    ['Instruction register (IR)','Holds the <strong>instruction currently being executed</strong>.'],
    ['Bus','The central connection over which the CPU fetches instructions and data from memory.']
  ]},
  {t:'defs', v:[
    ['RISC','Reduced instruction set computer: <strong>few, simple, fast</strong> instructions (e.g. ARM in phones).'],
    ['CISC','Complex instruction set computer: <strong>many, powerful, convenient</strong> instructions (e.g. Intel in laptops).']
  ]},

  {t:'h', v:'Machine language'},
  {t:'defs', v:[
    ['Machine instruction','An instruction encoded as a bit pattern recognised by the CPU.'],
    ['Machine language','The <strong>set of all machine instructions</strong> recognised by a given CPU.'],
    ['Op-code / operand','An instruction splits into an op-code field (which operation) and an operand field (details — which register, which address).']
  ]},
  {t:'table', head:['Instruction category','What it does','Vole op-codes'], rows:[
    ['Data transfer','Moves data from one location to another (LOAD, STORE, MOVE).','1, 2, 3, 4'],
    ['Arithmetic/logic','Tells the control unit to request an activity in the ALU (ADD, AND, OR, XOR, ROTATE).','5, 6, 7, 8, 9, A'],
    ['Control','Directs the computation rather than manipulating data (JUMP, HALT).','B, C']
  ]},
  {t:'defs', v:[
    ['Test-and-set','A special machine instruction that both tests and sets a flag in one non-interruptible instruction — needed to coordinate processes&rsquo; access to shared resources (also called compare-and-swap).']
  ]},

  {t:'h', v:'The Vole machine language (Appendix C)'},
  {t:'p', v:'16 registers (0x0–0xF), one byte each. 256 memory cells, addresses 0x00–0xFF. Every instruction is <strong>two bytes</strong>: 4 bits of op-code + 12 bits of operand. R, S, T are register numbers; X, Y are hex digits of an address or value.'},
  {t:'fig', img:"fig02", w:440, h:190, alt:"A Vole instruction split into a four-bit op-code and a twelve-bit operand", cap:"Every Vole instruction splits the same way: one hex digit of op-code, three of operand. How the operand is read depends entirely on the op-code.", ref:"Book: Figure 2.5 and 2.6"},
  {t:'table', head:['Op','Operand','Meaning'], rows:[
    ['1','RXY','LOAD register R with the contents of the memory cell at address XY.'],
    ['2','RXY','LOAD register R with the <em>value</em> XY (immediate).'],
    ['3','RXY','STORE the contents of register R into the memory cell at address XY.'],
    ['4','0RS','MOVE the contents of register R to register S.'],
    ['5','RST','ADD registers S and T as <strong>two&rsquo;s complement</strong>; result in R.'],
    ['6','RST','ADD registers S and T as <strong>floating point</strong>; result in R.'],
    ['7','RST','OR registers S and T; result in R.'],
    ['8','RST','AND registers S and T; result in R.'],
    ['9','RST','XOR registers S and T; result in R.'],
    ['A','R0X','ROTATE register R one bit right, X times (circular).'],
    ['B','RXY','JUMP to address XY <em>if</em> register R equals register 0; otherwise continue.'],
    ['C','000','HALT.']
  ]},
  {t:'h', v:'The machine cycle'},
  {t:'steps', title:'Three steps, in this order', v:[
    '<strong>Fetch</strong> — read the instruction at the address in the PC into the IR, and <em>increment the PC by 2</em> (instructions are two bytes).',
    '<strong>Decode</strong> — break the operand field apart according to the op-code.',
    '<strong>Execute</strong> — perform the operation.'
  ]},
  {t:'fig', img:"fig03", w:470, h:128, alt:"The three steps of a machine cycle: fetch, decode, execute, then back to fetch", cap:"The PC advances during <em>fetch</em>, which is why it already points past the current instruction while that instruction executes.", ref:"Book: Figure 2.8"},
  {t:'trap', v:'The PC is incremented during <em>fetch</em>, before the instruction executes. That is why "what is the PC after 3 cycles?" starting from 00 is <strong>06</strong>, not 04. A JUMP overwrites the PC during execute.'},
  {t:'h', v:'Worked trace (the lecture example)'},
  {t:'p', v:'Program at A0; data at 6B = 03, 6C = 04, 6E = 07. Registers all 00, PC = A0.'},
  {t:'table', head:['Cycle','IR','Decoded','After execute'], rows:[
    ['1','126B','LOAD R2 from address 6B','R2 = 03, PC = A2'],
    ['2','136C','LOAD R3 from address 6C','R3 = 04, PC = A4'],
    ['3','5023','ADD R2 + R3 → R0','R0 = 07, PC = A6'],
    ['4','306D','STORE R0 at address 6D','cell 6D = 07, PC = A8'],
    ['5','116E','LOAD R1 from address 6E','R1 = 07, PC = AA'],
    ['6','B16F','JUMP to 6F if R1 = R0','they are equal → PC = 6F']
  ]}
 ]
},

{
 id:'os', num:'3', title:'Operating systems',
 src:'Lecture 3 · Brookshear ch. 3',
 pages:"Ch. 3 &middot; pp. 163–196",
 refs:[["3.1 The History of Operating Systems", "164"], ["3.2 Operating System Architecture", "169"], ["3.3 Coordinating the Machine’s Activities", "177"], ["3.4 Handling Competition Among Processes", "180"], ["3.5 Security", "186"]],
 blocks:[
  {t:'p', v:'Heavily definition-based. The four functions, the kernel components and the processing modes are asked over and over in slightly different wording.'},

  {t:'h', v:'The four functions of an operating system'},
  {t:'steps', title:'Learn these as a list — they are asked verbatim', v:[
    'Oversee the operation of the computer.',
    'Store and retrieve files.',
    'Schedule programs for execution.',
    'Coordinate the execution of programs.'
  ]},
  {t:'note', v:'One-line version: <strong>to manage the resources of a computer</strong>.'},

  {t:'h', v:'Software classification'},
  {t:'defs', v:[
    ['Two main categories','<strong>Application</strong> software (performs a specific task for a user) and <strong>system</strong> software (provides infrastructure for applications).'],
    ['System software','Splits into <em>utility</em> software and the <em>operating system</em>.'],
    ['Operating system — two components','<strong>User interface</strong> and <strong>kernel</strong>.'],
    ['User interface','Text based (shell) or graphical (GUI, with a window manager). Those are the two main types.']
  ]},

   {t:'fig', img:"fig04", w:500, h:266, alt:"Software splits into application and system; system into utility and operating system; the operating system into user interface and kernel", cap:"Where the exam&rsquo;s vocabulary lives. The control unit is <em>not</em> on this tree — it belongs to the CPU.", ref:"Book: Figure 3.3"},
 {t:'h', v:'Kernel components — know which does what'},
  {t:'table', head:['Component','Responsibility'], rows:[
    ['File manager','Handles data stored as named separate groups (files) on mass storage.'],
    ['Device drivers','Communicate with the peripheral hardware.'],
    ['Memory manager','Allocates and deallocates <strong>main memory</strong> to processes; does paging / virtual memory.'],
    ['Scheduler','Keeps track of all processes by maintaining the <strong>process table</strong>.'],
    ['Dispatcher','Allocates <strong>time slices</strong> to the processes in the process table.']
  ]},
  {t:'trap', v:'Scheduler = the <em>list</em> (process table). Dispatcher = the <em>clock</em> (time slices). The control unit is part of the CPU, <strong>not</strong> part of the operating system.'},
  {t:'defs', v:[
    ['File','A named separate group of data.'],
    ['Directory (folder)','A named collection of files and subdirectories.'],
    ['Paging','Rotating programs and data back and forth between main memory and mass storage.'],
    ['Virtual memory','The computer works as if it had more main memory than it physically has, using paging. Advantage: you can run programs bigger than physical RAM. Disadvantage: slower, because mass storage is slower.']
  ]},

  {t:'h', v:'Booting'},
  {t:'defs', v:[
    ['Boot strapping (booting)','The start-up process of a computer: the operating system is loaded into main memory and starts executing. Needed because main memory is empty at power-on, so the processor has no instructions to follow.'],
    ['Boot loader','A program stored in <strong>ROM</strong> (non-volatile) that the CPU runs at power-on. It transfers the operating system from mass storage into main memory and then hands over control (a JUMP instruction).']
  ]},

  {t:'h', v:'Processes and processing modes'},
  {t:'defs', v:[
    ['Program vs process','A program is a collection of instructions executable by a computer (an executable algorithm). A <strong>process</strong> is the <em>activity</em> of executing those instructions.'],
    ['Process state','The value of the program counter, the values of the general-purpose registers, and the data in the associated parts of main memory.'],
    ['Job','A program to be executed together with its inputs and outputs.'],
    ['Batch processing','Execution of a batch of jobs <strong>without any interaction</strong> with a user.'],
    ['Interactive processing','Execution that <strong>supports interaction</strong> with the user during execution.'],
    ['Real-time processing','Execution of tasks in accordance with <strong>deadlines in the external real world</strong>.'],
    ['Multiprogramming','Several programs executed "at the same time" on a processor.'],
    ['Time-sharing','One computer serves <strong>multiple users</strong> "at the same time", by time slices.'],
    ['Multitasking','Several programs executed "at the same time" by a <strong>single user</strong>.'],
    ['Process switch (context switch)','The procedure of changing from one process to another. At the end of a time slice the CPU receives an <em>interrupt</em> and runs the interrupt handler.'],
    ['Spooling','Holding data for output at a later, more convenient time (the printer queue).']
  ]},

  {t:'h', v:'Competition between processes'},
  {t:'defs', v:[
    ['Critical region','A group of instructions that only one process at a time may execute.'],
    ['Mutual exclusion','The requirement that only one process at a time executes a critical region.'],
    ['Semaphore','A <strong>flag</strong> controlling a critical region so as to obtain mutual exclusion.'],
    ['Test-and-set','A machine instruction that tests and sets a flag in one uninterruptible step — what makes a semaphore actually work.']
  ]},
  {t:'defs', v:[
    ['Deadlock','Processes block each other from continuing.'],
  ]},
  {t:'steps', title:'Three conditions required for deadlock (all must hold)', v:[
    'Competition for <strong>non-sharable</strong> resources.',
    'Resources are requested on a <strong>partial</strong> basis (a process holds some and asks for more).',
    'Allocated resources <strong>cannot be forcibly retrieved</strong>.'
  ]},

  {t:'h', v:'Security'},
  {t:'defs', v:[
    ['Attacks from outside','Insecure login; <strong>sniffing software</strong> — records activities and reports them to potential intruders.'],
    ['Auditing software','Records and analyses activities in order to <strong>detect</strong> destructive behaviour. Same technique as sniffing, opposite purpose.'],
    ['Attacks from within','Unruly processes. Countered with <strong>privileged mode</strong> and <strong>privileged instructions</strong>: certain machine instructions may only be executed by processes running in privileged mode, which should only be operating-system processes.']
  ]}
 ]
},

{
 id:'net', num:'4', title:'Networking & the Internet',
 src:'Lecture 4 · Brookshear ch. 4',
 pages:"Ch. 4 &middot; pp. 197–258",
 refs:[["4.1 Network Fundamentals", "198"], ["4.2 The Internet", "208"], ["4.3 The World Wide Web", "220"], ["4.4 Internet Protocols", "229"], ["4.6 Cybersecurity", "241"], ["12.6 Public-Key Cryptography", "660"]],
 blocks:[
  {t:'p', v:'The second-largest block. Devices (hub/switch/router), the four layers, which protocol sits in which layer, and public-key encryption are the reliable question generators.'},

  {t:'h', v:'Scope and topology'},
  {t:'defs', v:[
    ['LAN','Local area network — one location.'],
    ['WAN','Wide area network — several locations, possibly worldwide.'],
    ['PAN / MAN','Personal (headset, mouse) / metropolitan.'],
    ['Bus topology','All machines connected to one common communication line — the bus. Example: Ethernet.'],
    ['Star topology','All machines connected to one central machine, the <strong>access point</strong>. Example: WiFi.']
  ]},

  {t:'h', v:'Network devices — the classic compare question'},
  {t:'table', head:['Device','What it connects','Traffic behaviour'], rows:[
    ['Hub','Machines into a network (bus topology).','Sends <strong>all</strong> traffic to <strong>all</strong> connected devices.'],
    ['Access point','Machines into a network (star topology).','Central point of a wireless network.'],
    ['Switch','Several buses or machines into a network — "a smart hub".','Sends traffic <strong>only</strong> between the ports that need to communicate.'],
    ['Router','Several <em>networks</em> into an internet (network of networks).','Forwards between networks using a <strong>forwarding table</strong> keyed on destination address.']
  ]},

   {t:'fig', img:"fig05", w:470, h:180, alt:"A hub forwards to every port, a switch only to the port that needs it, and a router joins separate networks", cap:"The difference is what each device does with traffic it was not asked for.", ref:"Book: Figure 4.1, 4.4 and 4.5"},
 {t:'h', v:'Communication models'},
  {t:'defs', v:[
    ['Client/server','Clients request services; servers provide them. One of the two inter-process communication models.'],
    ['Peer-to-peer (P2P)','Peers both provide and consume service from each other. The other model.'],
    ['Distributed system','A system consisting of software units that execute on <strong>several different computers</strong>.'],
    ['Cloud computing','Huge pools of shared computers allocated for use by clients as needed.']
  ]},

  {t:'h', v:'Internet addressing'},
  {t:'defs', v:[
    ['IP address','A unique numerical address identifying a computer on the Internet.'],
    ['ICANN','Internet Corporation for Assigned Names and Numbers — assigns IP addresses to ISPs and oversees domains.'],
    ['IPv4','<strong>32-bit</strong> addresses, dotted decimal, e.g. 10.200.46.5.'],
    ['IPv6','<strong>128-bit</strong> addresses, 8 groups of 4 hex digits. 2<sup>128</sup> ÷ 2<sup>32</sup> = <strong>2<sup>96</sup></strong> times as many addresses.'],
    ['Domain','A mnemonic name for an address, e.g. dsv.su.se. Easier for humans to remember, and the IP address can change while the name stays.'],
    ['DNS','Domain Name System — converts domain names into IP addresses. A <strong>DNS lookup</strong> is the act of doing that translation; a <strong>DNS server</strong> (name server) performs it.'],
    ['ISP','Internet Service Provider — maintains the Internet; end systems (hosts) connect through one.']
  ]},

  {t:'h', v:'The World Wide Web'},
  {t:'defs', v:[
    ['Hypertext','Documents linked by hyperlinks.'],
    ['HTML','Hypertext Markup Language — the language used to create/describe web pages.'],
    ['Browser (web client)','Presents documents and other material to the user.'],
    ['Web server','Provides access to web resources such as web pages.'],
    ['URL / URI','Uniform Resource Locator / Identifier — <strong>uniquely identifies</strong> a web resource.'],
    ['HTTP','The protocol used by the World Wide Web application to transfer documents and other resources.']
  ]},

  {t:'h', v:'The four Internet software layers'},
  {t:'table', head:['Layer','Job','Protocols'], rows:[
    ['Application','Constructs messages with addresses.','HTTP, FTP, SMTP, SSH'],
    ['Transport','Chops messages into packets (and reassembles them).','TCP, UDP'],
    ['Network','Handles routing through the Internet.','IPv4, IPv6'],
    ['Link','Handles the actual transmission of packets.','—']
  ]},
  {t:'fig', img:"fig06", w:470, h:252, alt:"A message travels down the sender's four layers, across the routers, and back up the receiver's four layers", cap:"The message goes down the layers at the sender and up them again at the receiver. Routers only ever reach as high as the network layer.", ref:"Book: Figure 4.13 and 4.14"},
  {t:'trap', v:'Every "which layer does X belong to?" question is answered from this table. TCP and UDP are <strong>transport</strong>; IPv4/IPv6 are <strong>network</strong>; anything that names a user-facing service (mail, files, web, remote login) is <strong>application</strong>.'},
  {t:'table', head:['Protocol','Layer','Carries / does'], rows:[
    ['TCP','Transport','Reliable — but slower. Use when correctness matters.'],
    ['UDP','Transport','Efficient/faster — but less reliable. Use when speed matters.'],
    ['IPv4 / IPv6','Network','Routing.'],
    ['HTTP','Application','Web resources: HTML documents, images, sound.'],
    ['HTTPS','Application','HTTP over SSL — the traffic is <strong>encrypted</strong> (public-key encryption); plain HTTP is not.'],
    ['FTP','Application','File transfer.'],
    ['SMTP','Application','Electronic mail.'],
    ['SSH','Application','Remote computer access.']
  ]},

  {t:'h', v:'Security'},
  {t:'defs', v:[
    ['Malware','Viruses, worms, Trojan horses, spyware, phishing software.'],
    ['Other attacks','Denial of service (DoS), spam.'],
    ['Firewall','A system that inspects, filters and blocks incoming and outgoing network traffic.'],
    ['Proxy server','A software unit acting as an intermediary between client and server, shielding the client from adverse actions of the server.'],
    ['Other protection','Antivirus software, spam filters.']
  ]},

  {t:'h', v:'Public-key encryption — get the direction right'},
  {t:'p', v:'Two keys per person: a <strong>public</strong> key everyone may have, and a <strong>private</strong> key only the owner has. The great advantage over symmetric encryption is that <strong>no key has to be exchanged in advance</strong>.'},
  {t:'table', head:['Goal','Encrypt with','Decrypt with','Why'], rows:[
    ['Only B can read it (confidentiality)','B&rsquo;s <strong>public</strong> key','B&rsquo;s private key','Only B holds the private key.'],
    ['Only A can have sent it (digital signature)','A&rsquo;s <strong>private</strong> key','A&rsquo;s public key','Only A holds the private key.'],
    ['Both at once','A&rsquo;s private, then B&rsquo;s public','B&rsquo;s private, then A&rsquo;s public','Safe sender and safe receiver.']
  ]},
   {t:'fig', img:"fig07", w:470, h:180, alt:"Encrypting with the recipient's public key gives confidentiality; encrypting with your own private key gives a signature", cap:"Which key you encrypt with decides which property you get. Encrypting with the <em>recipient&rsquo;s public</em> key protects the message; encrypting with your <em>own private</em> key proves who sent it.", ref:"Book: Figure 4.16"},
 {t:'defs', v:[
    ['Certificate','A package of a name/identity together with a public key, certifying that you are who you claim to be.'],
    ['Certificate authority','An organisation that issues certificates and guarantees their authenticity.'],
    ['Are all certificates equally trustworthy?','No — trust in a certificate is trust in its issuer. A certificate from a recognised authority is worth much more than a self-issued one, exactly as a state-issued passport is worth more than a home-made one.']
  ]}
 ]
},

{
 id:'algo', num:'5', title:'Algorithms',
 src:'Lecture 5 · Brookshear ch. 5',
 pages:"Ch. 5 &middot; pp. 259–318",
 refs:[["5.1 The Concept of an Algorithm", "260"], ["5.2 Algorithm Representation", "263"], ["5.3 Algorithm Discovery", "272"], ["5.4 Iterative Structures", "279"], ["5.5 Recursive Structures", "290"], ["5.6 Efficiency and Correctness", "299"]],
 blocks:[
  {t:'h', v:'What an algorithm is'},
  {t:'defs', v:[
    ['Formal definition','An algorithm is an <strong>ordered set of unambiguous, executable steps that defines a terminating process</strong>. Quote this wording.'],
    ['Algorithm vs program','A program is an algorithm coded in a programming language — coded so that a computer can execute it.'],
    ['Deterministic vs non-deterministic','A deterministic algorithm always gives the same answer for the same input. A non-deterministic one can give different answers. Non-deterministic algorithms <strong>do not meet the definition</strong>, because the next step is not uniquely determined by the current state.']
  ]},

  {t:'h', v:'Representing algorithms'},
  {t:'defs', v:[
    ['Primitives','A well-defined set of building blocks from which algorithm representations are constructed.'],
    ['Programming language','A collection of primitives plus rules for how they may be combined.'],
    ['Pseudo code','A notational system for expressing algorithms, <strong>less formal</strong> than real programming-language code. Strict syntax does not matter because pseudo code is read by people, not computers.'],
    ['Flow charts','Rectangles and diamonds are executable steps (diamonds being conditions), arrows are sequence and loops. That is enough to express <em>any</em> algorithm — so yes, every algorithm can be drawn as a flow chart.']
  ]},
  {t:'note', v:'"Is a programming language suitable for describing algorithms?" — Yes, because its primitives and combination rules are well defined. (The counter-argument the book accepts: no, because it forces you to specify many irrelevant details.)'},

  {t:'h', v:'Discovering algorithms'},
  {t:'defs', v:[
    ['Top-down (stepwise refinement)','Start at a high level of abstraction and work downwards, dividing the problem into smaller sub-problems.'],
    ['Bottom-up','Solve pieces of the problem first and build up.'],
    ['Other tactics','Work the problem backwards; solve an easier related problem.']
  ]},

  {t:'h', v:'Control structures'},
  {t:'defs', v:[
    ['Sequence','A succession of instructions executed in order.'],
    ['Selection','Different instructions executed depending on the state of the program (if/else).'],
    ['Iteration','The same instruction or sequence executed several times (loops).'],
    ['Loop control — three parts','<strong>Initialize</strong> (establish an initial state), <strong>test</strong> (continue only while the condition holds), <strong>modify</strong> (change the state towards termination).'],
    ['Pre-test loop','<code>while (condition): body</code> — the body may run <strong>0</strong> times.'],
    ['Post-test loop','<code>repeat: body until (condition)</code> — the body runs <strong>at least once</strong>.']
  ]},

  {t:'h', v:'Recursion vs iteration'},
  {t:'defs', v:[
    ['Recursion','Repetition achieved by a procedure/subroutine calling itself; multiple activations exist at once, all but one waiting. Each recursive call needs <strong>additional memory</strong>.'],
    ['Iteration','Repetition by looping. Each turn requires <strong>no additional memory</strong>.'],
    ['The two ways','Repetition in an algorithm is achieved either by <strong>iteration</strong> or by <strong>recursion</strong>. That is the whole answer.']
  ]},

  {t:'h', v:'Searching'},
  {t:'steps', title:'Sequential search', v:[
    'If the list is empty, return failure.',
    'Take the first entry E.',
    'If E equals the target, return success.',
    'If there are no more entries, return failure.',
    'Take the next entry as E and go back to step 3.'
  ]},
  {t:'steps', title:'Binary search — requires sorted data', v:[
    'If the list is empty, return failure.',
    'Take the <strong>middle</strong> entry E.',
    'If E equals the target, return success.',
    'If E is greater than the target, search the portion <em>before</em> E.',
    'If E is less than the target, search the portion <em>after</em> E.'
  ]},
  {t:'table', head:['','Sequential','Binary'], rows:[
    ['Requires sorted data?','No','<strong>Yes</strong>'],
    ['Efficiency','Θ(n) — grows linearly','Θ(log n) — grows logarithmically'],
    ['Preferred when','Very short lists, or unsorted data','Sorted data of any real size']
  ]},

  {t:'h', v:'Efficiency'},
  {t:'defs', v:[
    ['Measured as','The number of instructions executed. Best / worst / average case analysis.'],
    ['Why classes matter','To compare the effectiveness of different algorithms, and to judge whether an algorithm is usable on large amounts of data.'],
    ['Known classes','Insertion sort Θ(n²); sequential search Θ(n); binary search Θ(log n).']
  ]},
  {t:'note', v:'Order from most to least efficient: <strong>constant → logarithmic → linear → n log n → polynomial (n², n⁴, n¹⁰) → exponential (2ⁿ)</strong>. Every ordering question on the exam is this one line.'},

   {t:'fig', img:"fig08", w:440, h:214, alt:"Logarithmic growth flattens out, linear growth is a straight line, and quadratic growth climbs steeply", cap:"Why the class matters more than the constant: at large n the shape of the curve decides whether the algorithm is usable at all.", ref:"Book: Figure 5.19 and 5.20"},
 {t:'h', v:'Correctness'},
  {t:'defs', v:[
    ['Two verification methods','<strong>Static verification</strong> (code analysis, e.g. formal proof of correctness) and <strong>testing</strong>.'],
    ['In practice','Testing is by far the most common method.']
  ]}
 ]
},

{
 id:'prog', num:'6', title:'Programming languages',
 src:'Lecture 6 · Brookshear ch. 6',
 pages:"Ch. 6 &middot; pp. 319–388",
 refs:[["6.1 Historical Perspective", "320"], ["6.2 Traditional Programming Concepts", "331"], ["6.3 Procedural Units", "346"], ["6.4 Language Implementation", "354"], ["6.5 Object-Oriented Programming", "364"], ["6.6 Programming Concurrent Activities", "371"], ["6.7 Declarative Programming", "374"]],
 blocks:[
  {t:'h', v:'Generations'},
  {t:'table', head:['Generation','Characteristics','Translator'], rows:[
    ['First','Machine languages — bit patterns.','—'],
    ['Second','Assembly: mnemonic names for op-codes and memory locations. <strong>One-to-one</strong> correspondence with machine instructions; inherently <strong>machine-dependent</strong>.','<strong>Assembler</strong> — converts assembly code to machine code.'],
    ['Third','High-level primitives, <strong>machine independent</strong> (mostly). Each primitive corresponds to a <strong>sequence</strong> of machine instructions. Fortran, Cobol.','<strong>Compiler</strong>']
  ]},
  {t:'note', v:'Assembly example: <code>156C</code> ↔ <code>LD R5, Price</code>; <code>5056</code> ↔ <code>ADDI R0, R5, R6</code>; <code>C000</code> ↔ <code>HLT</code>.'},

  {t:'h', v:'Paradigms'},
  {t:'table', head:['Paradigm','Basic building block'], rows:[
    ['Imperative','<strong>Procedures</strong>'],
    ['Functional','<strong>Functions</strong>'],
    ['Object-oriented','<strong>Objects</strong>'],
    ['Declarative (e.g. logic programming)','<strong>Logical formulas (predicates)</strong>']
  ]},
  {t:'defs', v:[
    ['Declarative programming','You describe <strong>what</strong> should be done, not <strong>how</strong>. SQL belongs here.'],
    ['Logic programming','Program = logical formulas (rules and facts); no distinction between code and data; a built-in deduction engine using the derivation technique <strong>resolution</strong>; it answers whether a fact is a logical consequence of the program.']
  ]},

  {t:'h', v:'Data types, variables, literals, constants'},
  {t:'defs', v:[
    ['Four common primitive types','<strong>Integer</strong>, <strong>float</strong> (real), <strong>character</strong>, <strong>Boolean</strong>.'],
    ['Why the type matters','The data type tells the program <strong>how to interpret the bit pattern</strong> stored in the variable. The same bits mean different things under different types.'],
    ['Variable','A named location in primary memory that can store a value of a specified type.'],
    ['Literal','An explicit value of a certain type, e.g. <code>3.14</code>, <code>&rsquo;A&rsquo;</code>.'],
    ['Constant','A <strong>named literal</strong>, e.g. <code>const PI = 3.14</code>.'],
    ['Abstract data type','A data type that contains <strong>both data and the operations</strong> that manipulate it.'],
    ['Aggregate type (struct / record)','A block of data whose elements may be of <strong>different</strong> types; the elements are called fields and are accessed <strong>by name</strong>. Unlike an abstract data type it contains <em>no</em> operations.']
  ]},
  {t:'table', head:['Storing a struct…','Advantage','Disadvantage'], rows:[
    ['In one contiguous block','Faster, direct access to each part.','Parts are all the same size — space is wasted and large data may not fit.'],
    ['As separate locations with pointers','Each part gets exactly the space it needs.','Slower — you must follow a pointer instead of reading directly.']
  ]},

  {t:'h', v:'Program control'},
  {t:'defs', v:[
    ['Three control structures','<strong>Sequence</strong>, <strong>selection</strong>, <strong>repetition (iteration)</strong>. Every algorithm can be implemented with these plus assignment.'],
    ['Assignment','The basic operation: <code>variable_name = expression</code>.']
  ]},

  {t:'h', v:'Procedural units'},
  {t:'defs', v:[
    ['Names','Subprogram, subroutine, procedure, function, method, predicate — all the same idea.'],
    ['Purpose','To simplify program development through <strong>abstraction</strong>.'],
    ['Passed by value','The parameter is passed as a <strong>copy</strong>, stored in a local variable in the subroutine. Changes do not affect the caller.'],
    ['Passed by reference','The parameter is passed as a <strong>reference to where it is stored</strong>, so changes are made to the original variable.']
  ]},

  {t:'h', v:'Translation'},
  {t:'defs', v:[
    ['Three units of a translator','<strong>Lexical analyser</strong> → <strong>parser</strong> → <strong>code generator</strong>. In that order.'],
    ['Compiler','Translates source code into executable machine code, ahead of execution.'],
    ['Interpreter','Interprets the source code <em>during</em> execution and executes the instructions as it goes.'],
    ['Source code vs object code','Source code is what the programmer writes; object code is the translation of it that can be run on a computer.']
  ]},
   {t:'fig', img:"fig09", w:480, h:110, alt:"Source code passes through the lexical analyser, the parser and the code generator to become object code", cap:"The three units of a translator, in the order they run. A compiler does all of this before execution; an interpreter does it as it goes.", ref:"Book: Figure 6.13"},
 {t:'table', head:['Error type','Detected by','Seriousness'], rows:[
    ['Syntax error','The compiler, before running.','<strong>Least</strong> serious — you are told immediately.'],
    ['Runtime error','The machine, during execution.','Middle — it crashes, but visibly.'],
    ['Logic error','Nothing. The program runs and gives wrong answers.','<strong>Most</strong> serious — no error message is produced.']
  ]},
  {t:'note', v:'So: a syntactically correct program does <strong>not</strong> always produce correct results — it can still contain logic errors.'},

  {t:'h', v:'Object-oriented programming'},
  {t:'defs', v:[
    ['Class','The <strong>template</strong> from which objects are constructed; describes both variables and methods.'],
    ['Object','An active program unit containing both data and code; an <strong>instance</strong> of a class.'],
    ['The three features','<strong>Inheritance</strong>, <strong>encapsulation</strong>, <strong>polymorphism</strong>.'],
    ['Inheritance','Lets one class take on the characteristics of another class without declaring them explicitly again.']
  ]},

  {t:'h', v:'Concurrent programming'},
  {t:'defs', v:[
    ['Concurrent processing','Simultaneous execution of multiple processes.'],
    ['Parallel processing','Genuinely parallel execution — requires multiple CPU cores.'],
    ['Thread','A concurrent/parallel <strong>execution path within the same program/process</strong> — a light-weight process inside a process.'],
    ['Concurrent programming','Programming several parallel execution paths (threads) in the same program.']
  ]}
 ]
},

{
 id:'se', num:'7', title:'Software engineering',
 src:'Lecture 7 · Brookshear ch. 7 (Scrum is lecture-only)',
 pages:"Ch. 7 &middot; pp. 389–436",
 refs:[["7.1 The Software Engineering Discipline", "390"], ["7.2 The Software Life Cycle", "393"], ["7.3 Software Engineering Methodologies", "398"], ["7.4 Modularity", "401"], ["7.5 Tools of the Trade", "410"], ["7.6 Quality Assurance", "419"], ["Scrum — lecture only, not in the book", "—"]],
 blocks:[
  {t:'trap', v:'Scrum is <strong>not in the textbook</strong> — it comes only from the lecture, and there are ~15 questions on it. Do not skip it.'},

  {t:'h', v:'The discipline'},
  {t:'defs', v:[
    ['CASE','<strong>Computer Aided Software Engineering</strong> — tools for planning, management, documentation, prototyping and simulation, interface design, programming.'],
    ['IDE','<strong>Integrated Development Environment</strong>.'],
    ['Prototyping','Developing and evaluating a prototype — an unfinished version of what is to be built.']
  ]},

  {t:'h', v:'The life cycle'},
  {t:'steps', title:'The four traditional development phases', v:[
    'Requirements/needs analysis',
    'Design',
    'Implementation',
    'Testing / evaluation'
  ]},
  {t:'defs', v:[
    ['Waterfall model','The phases run strictly in sequence, each finished before the next begins.'],
    ['Incremental model','Extending the system repeatedly.'],
    ['Iterative model','Refining the system repeatedly.'],
    ['RUP','Rational Unified Process.']
  ]},

  {t:'h', v:'Agile'},
  {t:'p', v:'The Agile Manifesto values the <strong>left</strong> side of each pair:'},
  {t:'table', head:['Valued','Over'], rows:[
    ['Individuals and interactions','Processes and tools'],
    ['Working software','Comprehensive documentation'],
    ['Customer collaboration','Contract negotiation'],
    ['Responding to change','Following a plan']
  ]},
  {t:'steps', title:'Three things that characterise agile models', v:[
    'Incremental and iterative.',
    'Short feedback loops.',
    'Exploratory with respect to requirements.'
  ]},

  {t:'h', v:'Scrum'},
  {t:'table', head:['Role','Responsibility'], rows:[
    ['Product owner','Maintains and <strong>prioritises</strong> the product backlog — decides what is built next.'],
    ['Scrum master','Ensures the Scrum framework is followed. Not a traditional project manager.'],
    ['Development team','<strong>3–9</strong> people who do the work.']
  ]},
  {t:'table', head:['Event','What happens'], rows:[
    ['Sprint','An iteration of <strong>2–4 weeks</strong> that must result in something deliverable.'],
    ['Sprint planning','Planning the upcoming sprint.'],
    ['Daily scrum (stand-up)','Short daily meeting. Each member answers: <strong>What did you do yesterday? What will you do today? Are there any impediments?</strong>'],
    ['Sprint review','At the end of the sprint: the completed work is presented and evaluated <strong>against the sprint goals</strong>.'],
    ['Sprint retrospective','At the end of the sprint: what went well, what can be improved — improving the <strong>process itself</strong>.']
  ]},
  {t:'trap', v:'Review = the <em>product</em>. Retrospective = the <em>process</em>. This distinction is asked directly.'},

  {t:'h', v:'Modularity'},
  {t:'defs', v:[
    ['Module','A manageable unit of software that handles only part of the work the whole software does.'],
    ['Purpose of modules','To simplify development: each module is manageable and can be developed independently of the others.'],
    ['Module forms','Procedures (imperative), functions (functional), objects (object-oriented), components (component architecture).'],
    ['Coupling','The linkage <strong>between</strong> modules. Should be <strong>low/minimised</strong>. Types: control coupling, data coupling.'],
    ['Cohesion','The internal binding <strong>within</strong> a module — how focused it is. Should be <strong>high/maximised</strong>. Types: logical, functional.'],
    ['Information hiding','Restricting information to a module. Should be achieved.']
  ]},
  {t:'note', v:'The three desirable properties in one line: <strong>high cohesion, low coupling, information hiding</strong>.'},
  {t:'defs', v:[
    ['Component architecture','Building software by combining ready-made components instead of developing your own. Also called component-based software engineering.']
  ]},

  {t:'h', v:'Diagrams and patterns'},
  {t:'table', head:['Diagram','Purpose'], rows:[
    ['Structure chart','Shows the modular structure of the system.'],
    ['Dataflow diagram','Shows how data moves through the system.'],
    ['Use case diagram (UML)','Describes the proposed system <strong>from the user&rsquo;s point of view</strong>.'],
    ['Class diagram (UML)','Describes the structure of classes and the <strong>relationships between</strong> them.'],
    ['Entity-relationship diagram','Describes entities and the relationships between them.']
  ]},
  {t:'defs', v:[
    ['Design pattern','A "template" / general pre-developed solution for a <strong>recurring</strong> problem. Examples: adapter pattern (adapts an interface), decorator pattern (extends an interface).'],
    ['Why patterns help','They speed up development, make programs more robust because the solutions are well-proven, and give developers a shared vocabulary for discussing solutions.']
  ]},
  {t:'table', head:['Relationship','Example'], rows:[
    ['One-to-one','Husband–wife: each man is husband to one wife and vice versa.'],
    ['One-to-many','Mother–child: a child has one biological mother, a woman may have many children.'],
    ['Many-to-many','Brother–sister: a boy can have several sisters and a girl several brothers.']
  ]},

  {t:'h', v:'Testing'},
  {t:'table', head:['','Glass-box (white-box)','Black-box'], rows:[
    ['Tester knows the internal structure?','<strong>Yes</strong> — and uses it when designing tests.','<strong>No</strong> — tests from the user&rsquo;s point of view.'],
    ['Techniques','Pareto principle (focus where the problems seem to be); basis path testing (every instruction executed at least once).','Boundary value analysis; beta testing (external users).']
  ]}
 ]
},

{
 id:'abstraction', num:'8', title:'Data abstraction & data structures',
 src:'Brookshear ch. 8 (no separate lecture deck)',
 pages:"Ch. 8 &middot; pp. 437–484",
 refs:[["8.1 Basic Data Structures", "438"], ["8.2 Related Concepts", "443"], ["8.3 Implementing Data Structures", "446"], ["8.5 Customized Data Types", "466"], ["8.6 Classes and Objects", "470"]],
 blocks:[
  {t:'p', v:'No lecture slides for this chapter, but ~26 questions — mostly "what characterises X?". Answer with the defining property, not an example.'},

  {t:'h', v:'The basic structures'},
  {t:'table', head:['Structure','Defining property','Access'], rows:[
    ['Array','All elements are of the <strong>same</strong> data type (and size).','By <strong>index</strong>.'],
    ['Aggregate type / struct / record','Elements may be of <strong>different</strong> data types and sizes.','By <strong>name</strong> (fields).'],
    ['List','A sequence of elements.','Sequentially, or by pointer.'],
    ['Stack','Add and remove at the <strong>same</strong> end.','<strong>LIFO</strong> — last in, first out.'],
    ['Queue','Add at one end, remove at the other.','<strong>FIFO</strong> — first in, first out.'],
    ['Tree','Hierarchical; nodes with children.','From the root downwards.']
  ]},
   {t:'fig', img:"fig10", w:470, h:192, alt:"A stack adds and removes at the same end; a queue adds at one end and removes at the other", cap:"Both are lists. The only difference is which end you are allowed to touch.", ref:"Book: Figure 8.1"},
 {t:'note', v:'"The four basic data structures in addition to arrays" = <strong>lists, stacks, queues and trees</strong>.'},

   {t:'fig', img:"fig11", w:450, h:190, alt:"A contiguous block must shift every later element on insert; a linked list only changes two pointers", cap:"The same list, stored two ways. This picture is the whole answer to &ldquo;which is better for a dynamic list?&rdquo;", ref:"Book: Figure 8.10 and 8.11"},
 {t:'h', v:'Static vs dynamic'},
  {t:'defs', v:[
    ['Static data structure','The <strong>form and size</strong> of the structure cannot change over time — although the <em>content</em> may change.'],
    ['Dynamic data structure','The form and size of the structure <strong>can</strong> change over time.'],
    ['Can a list be either?','Yes — both. Statically as an array; dynamically as elements joined by pointers. The same answer applies to a queue and a stack.'],
    ['Which storage for which list?','<strong>Static</strong> lists: a contiguous block — good read performance, little memory overhead. <strong>Dynamic</strong> lists: a linked list — inserting and removing only requires changing a few pointers, instead of moving large amounts of data.'],
    ['Can an array implement a queue?','Yes — as a <strong>circular queue</strong>, with a pointer to the head and a pointer to the tail.']
  ]},

  {t:'h', v:'Trees'},
  {t:'defs', v:[
    ['Binary tree','A tree in which each node has <strong>at most two</strong> children.'],
    ['Binary search tree (sorted binary tree)','A binary tree in which, for every node, <strong>all values in the left subtree are smaller</strong> and <strong>all values in the right subtree are larger</strong> than the node&rsquo;s value.'],
    ['Root node','The node that has <strong>no parent</strong>.'],
    ['Terminal/leaf node','A node with no children.']
  ]},

  {t:'h', v:'Pointers and abstract types'},
  {t:'defs', v:[
    ['Pointer','A variable that contains a <strong>memory address</strong> — the address of what it points to — instead of data.'],
    ['Abstract data structure / type','Describes a data type <strong>and its operations</strong>: both what is stored and what can be done with it.'],
    ['Difference from struct/record','A struct is a collection of data of possibly different types, with <strong>no operations attached</strong>.']
  ]}
 ]
},

{
 id:'db', num:'9', title:'Database systems',
 src:'Brookshear ch. 9 (no separate lecture deck)',
 pages:"Ch. 9 &middot; pp. 485–532",
 refs:[["9.1 Database Fundamentals", "486"], ["9.2 The Relational Model", "492"], ["9.3 Object-Oriented Databases", "503"], ["9.4 Maintaining Database Integrity", "506"], ["9.6 Data Mining", "519"]],
 blocks:[
  {t:'h', v:'Core vocabulary'},
  {t:'defs', v:[
    ['Database','An <strong>organised collection of data</strong>, managed by a DBMS.'],
    ['DBMS','Database Management System — software that handles the creation, updating, searching and administration of databases, and answers queries put to them.'],
    ['Database schema','A <strong>description of the structure</strong> of the database — for a relational database, its tables and columns.'],
    ['Database model','A <strong>conceptual view</strong> of the database.'],
    ['SQL','Structured Query Language — the dominant query language for retrieving and manipulating data in relational databases. It is a <strong>declarative</strong> language.'],
    ['Data warehouse','A collection of <strong>static</strong> data from one or more sources, intended for analysis.']
  ]},

  {t:'h', v:'The relational model'},
  {t:'table', head:['In the model','Is represented in a table by'], rows:[
    ['Relation','The <strong>table</strong> itself'],
    ['Attribute','A <strong>column</strong>'],
    ['Instance (tuple/row)','A <strong>row</strong>']
  ]},
  {t:'defs', v:[
    ['The three relational operations','<strong>SELECT</strong>, <strong>PROJECT</strong>, <strong>JOIN</strong> — with these you build new tables that are subsets and/or combinations of existing tables.'],
    ['Object-oriented database','Differs from a relational one in that each entity is stored as an <strong>object that can contain methods</strong>, and the DBMS maintains <strong>links/references between objects</strong>.']
  ]},

  {t:'h', v:'Transactions'},
  {t:'defs', v:[
    ['Transaction','A sequence of database operations packaged together, which must <strong>all succeed or all fail</strong>.'],
    ['Commit','The transaction succeeded and has been approved by the database manager.'],
    ['Rollback','A problem occurred, so the database manager <strong>restores the database to the state it had before</strong> the transaction.'],
    ['The two ways a transaction ends','Commit or rollback.'],
    ['What transactions protect against','The classic example: money withdrawn from one account but never deposited in the other, because of an interruption or error.']
  ]},

  {t:'h', v:'Data mining'},
  {t:'defs', v:[
    ['Data mining','Discovering <strong>patterns</strong> in collections of data.'],
    ['Class description','Discovering properties of members within classes that are <em>already identified</em>.'],
    ['Cluster analysis','Discovering classes by <strong>grouping objects</strong> into a number of separate groups.'],
    ['Association analysis','Finding links between groups — the technique behind Amazon&rsquo;s recommendations.'],
    ['Outlier analysis','Identifying entries that do not fit the established patterns.'],
    ['Sequential pattern analysis','Identifying <strong>patterns of behaviour over time</strong> — trends in stock markets, climate conditions.']
  ]}
 ]
},

{
 id:'gfx', num:'10', title:'Computer graphics',
 src:'Brookshear ch. 10 (no separate lecture deck)',
 pages:"Ch. 10 &middot; pp. 533–574",
 refs:[["10.2 Overview of 3D Graphics", "537"], ["10.3 Modeling", "539"], ["10.4 Rendering", "549"], ["10.5 Dealing with Global Lighting", "561"], ["10.6 Animation", "564"]],
 blocks:[
  {t:'h', v:'The 3D graphics pipeline'},
  {t:'steps', title:'Three steps — know the middle one', v:[
    '<strong>3D modelling</strong> — building the scene.',
    '<strong>Rendering</strong> — determining how the 3D model appears when projected onto the <strong>projection plane</strong>.',
    '<strong>Display</strong> — showing the resulting image.'
  ]},
  {t:'note', v:'Asked as "the process consists of two main steps, which?" → <strong>modelling and rendering</strong>. And "what is the flat surface called?" → the <strong>projection plane</strong>.'},

   {t:'fig', img:"fig12", w:470, h:168, alt:"A three-dimensional model is projected onto a flat projection plane during rendering, then displayed", cap:"Rendering is the middle step: working out how the three-dimensional model looks once projected onto the flat projection plane.", ref:"Book: Figure 10.2"},
 {t:'h', v:'Modelling'},
  {t:'defs', v:[
    ['Polygonal mesh','A collection of planar patches (usually triangles) approximating an object&rsquo;s shape.'],
    ['Three ways of producing a mesh','<strong>Mathematical equations</strong>; <strong>Bezier curves and surfaces</strong>; <strong>procedural models</strong> (programs that construct the shape automatically — clouds, mountains, fire).'],
    ['Texture mapping','Applying an image to a surface to simulate detail without modelling it, e.g. a photo of a brick wall on a simple rectangle.'],
    ['Surface characteristics','Colour, smoothness, shininess — a mesh alone carries no appearance.']
  ]},

  {t:'h', v:'Lighting'},
  {t:'table', head:['Kind of light','Behaviour'], rows:[
    ['Specular','Reflected <strong>without splitting up</strong>. Appears as a bright highlight, keeps the colour of the <em>light source</em>, visible mainly on smooth shiny surfaces.'],
    ['Diffuse','<strong>Scattered</strong> in many directions by surface unevenness. Visible from a wide range of directions; takes colour from the <em>reflecting surface</em>.'],
    ['Ambient (background)','Stray light present throughout the image, distributed evenly over all objects. <strong>No definite source</strong>.']
  ]},
  {t:'table', head:['Lighting model','Accounts for light between objects?','Trade-off'], rows:[
    ['Local','<strong>No</strong>','Simpler and much less computation.'],
    ['Global','<strong>Yes</strong> (e.g. by <strong>ray tracing</strong>)','More realistic result, far more computation.']
  ]},

  {t:'h', v:'Animation'},
  {t:'steps', title:'The three steps of an animation project', v:[
    '<strong>Storyboard</strong> — the outline of the sequence.',
    '<strong>Key frames</strong> — frames capturing the scene at specific points in time.',
    '<strong>In-betweening</strong> — producing the frames that fill the gaps between key frames.'
  ]},
  {t:'defs', v:[
    ['Frame','One still image in the sequence.'],
    ['Dynamics','Applying the <strong>laws of physics</strong> (forces) to determine object positions — e.g. where the pool balls end up after a stroke.'],
    ['Kinematics','Describing motion in terms of the <strong>structure</strong> of the moving object (joints, limbs).'],
    ['The two useful branches of mechanics','<strong>Dynamics and kinematics</strong>.']
  ]}
 ]
},

{
 id:'ai', num:'11', title:'Artificial intelligence',
 src:'Lecture 11 · Brookshear ch. 11',
 pages:"Ch. 11 &middot; pp. 575–628",
 refs:[["11.1 Intelligence and Machines", "576"], ["11.2 Perception", "581"], ["11.3 Reasoning", "588"], ["11.4 Additional Areas of Research", "600"], ["11.5 Artificial Neural Networks", "607"], ["11.6 Robotics", "612"]],
 blocks:[
  {t:'h', v:'Intelligence and machines'},
  {t:'defs', v:[
    ['Intelligent agent','An <strong>autonomous, goal-directed entity which observes using sensors and acts upon an environment using actuators</strong>. Learn this sentence word for word — it is asked repeatedly.'],
    ['Turing test','A human interrogator communicates with a test subject by text messages and tries to decide whether the subject is a human or a machine.'],
    ['Weak AI','Machines can be programmed to <strong>exhibit intelligent behaviour</strong>.'],
    ['Strong AI','Machines can be programmed to <strong>possess intelligence and consciousness</strong>.']
  ]},

  {t:'h', v:'Perception'},
  {t:'defs', v:[
    ['Image processing','Identifying characteristics of an image — edge enhancement, region finding.'],
    ['Image analysis','Understanding what those characteristics represent in the real world.']
  ]},
  {t:'table', head:['Language analysis','What it identifies','Example'], rows:[
    ['Syntactic analysis','The grammatical role of each word (parsing).','Which word is the subject?'],
    ['Semantic analysis','The information content of a sentence.','"Mary gave John a card" = "John got a card from Mary".'],
    ['Contextual analysis','Meaning that depends on context.','"The bat fell to the ground" — animal or baseball bat?']
  ]},
  {t:'defs', v:[
    ['Information retrieval','Methods for identifying <strong>documents</strong> dealing with a particular query or topic.'],
    ['Information extraction','Methods for extracting <strong>specific information</strong> useful for an application — a phone number, a surname.']
  ]},

  {t:'h', v:'Reasoning and search'},
  {t:'defs', v:[
    ['Production system','1) a collection of <strong>states</strong> (with a start state and goal state(s)); 2) a collection of <strong>productions</strong> (rules/moves between states, possibly with preconditions); 3) a <strong>control system</strong> that decides which production to apply next.'],
    ['State graph','Describes how you can move between <strong>all possible states</strong>.'],
    ['Search tree','Describes the <strong>possible search paths</strong> through a state graph towards a goal state. Its root is the initial state; a solution is a path from the root to a goal node.'],
    ['Heuristic','A "rule of thumb" for making decisions. Needed because the search trees of all interesting problems are so large that exploring them completely is impossible.'],
    ['A good heuristic','1) is a reasonable estimate of proximity to the goal, and 2) is easy to compute.']
  ]},

  {t:'h', v:'Learning'},
  {t:'table', head:['Type','How it works'], rows:[
    ['Learning by imitation','The computer records the steps performed by a person.'],
    ['Supervised learning','A <strong>person identifies the correct response</strong> for a number of examples, and the agent generalises from those examples.'],
    ['Learning by reinforcement','The agent is given a <strong>general rule</strong> to judge for itself whether it has succeeded or failed.'],
    ['Unsupervised learning','No training data — the system must analyse the input and find patterns itself.']
  ]},
  {t:'trap', v:'"Is reinforcement learning a type of supervised learning?" — <strong>No.</strong> It is unsupervised: the system judges its own success against a given general rule, rather than being told the right answer.'},

  {t:'h', v:'Artificial neural networks'},
  {t:'defs', v:[
    ['Artificial neuron','Each input is multiplied by a <strong>weight</strong>; if the sum of the weighted inputs exceeds a <strong>threshold</strong>, the output is 1, otherwise 0.'],
    ['How a network learns','By <strong>adjusting the weights</strong> associated with the neurons, based on example data.'],
    ['The three layer types','<strong>Input layer</strong>, <strong>hidden layer</strong>, <strong>output layer</strong>.']
  ]},
   {t:'fig', img:"fig13", w:420, h:220, alt:"A neural network of an input layer, a hidden layer and an output layer; learning adjusts the connection weights", cap:"The three layer types, and what actually changes when the network learns.", ref:"Book: Figure 11.17 and 11.18"},
 {t:'defs', v:[
    ['Robotics','The study of physical autonomous agents that behave intelligently. Today&rsquo;s robots succeed only on specific tasks.']
  ]}
 ]
},

{
 id:'theory', num:'12', title:'Theory of computation',
 src:'Lecture 12 · Brookshear ch. 12',
 pages:"Ch. 12 &middot; pp. 629–669",
 refs:[["12.1 Functions and Their Computation", "630"], ["12.2 Turing Machines", "633"], ["12.4 A Noncomputable Function", "643"], ["12.5 Complexity of Problems", "648"]],
 blocks:[
  {t:'h', v:'Functions and computability'},
  {t:'defs', v:[
    ['Function','Each possible input value maps to a single output value.'],
    ['Computable function','Can be computed <strong>by some algorithm</strong>.'],
    ['Non-computable function','Cannot be computed by any algorithm. The standard example is the <strong>halting problem</strong>.']
  ]},

  {t:'h', v:'Turing machines'},
  {t:'defs', v:[
    ['Turing machine','A <strong>mathematical model of a computer</strong> — the simplest possible one. Its purpose is to study which problems can be solved by a computer, i.e. the power of algorithmic processing.'],
    ['Components','A <strong>control unit</strong> (state and actions), an <strong>infinite tape</strong>, and a <strong>read/write head</strong>.'],
    ['One step','Input: the current state and the value at the current tape position. Action: write a value, move the head one step left or right, and change state (possibly to the same state).'],
    ['Church–Turing thesis','The functions computable by a Turing machine are exactly the computable functions. Named after Turing and <strong>Alonzo Church</strong>.']
  ]},

   {t:'fig', img:"fig14", w:440, h:194, alt:"A Turing machine is a control unit with a state, a read and write head, and an infinite tape", cap:"The simplest possible model of a computer: a state, a head, and a tape that never runs out.", ref:"Book: Figure 12.2"},
 {t:'h', v:'The halting problem'},
  {t:'defs', v:[
    ['Self-terminating','A program is self-terminating if its execution terminates when started with <em>itself</em> as input.'],
    ['The halting problem','Given the encoded version of any program, return 1 if it is self-terminating and 0 if not. Put more loosely: can you determine, in finite time, whether an arbitrary program terminates for arbitrary input?'],
    ['Why it matters','It is <strong>unsolvable</strong> — which proves that there are problems that cannot be solved by any algorithm or program at all.']
  ]},
  {t:'steps', title:'The contradiction, in outline', v:[
    'Assume a program P that, given program E, outputs X = 1 if E is self-terminating and X = 0 otherwise.',
    'Build P&prime; = P followed by <code>while (X != 0)</code>.',
    'If P&prime; is self-terminating, P outputs 1, so the loop never ends — so P&prime; is <em>not</em> self-terminating.',
    'If P&prime; is not self-terminating, P outputs 0, so the loop ends immediately — so P&prime; <em>is</em> self-terminating.',
    'Both branches contradict. Therefore P cannot exist.'
  ]},

  {t:'h', v:'Complexity of problems'},
  {t:'defs', v:[
    ['Polynomial problem','There exists an algorithmic solution within complexity class O(n<sup>x</sup>) for <strong>some</strong> x.'],
    ['Non-polynomial problem','There is no algorithmic solution within O(n<sup>x</sup>) for any x. Exponential growth O(2<sup>n</sup>) is non-polynomial.'],
    ['Practical meaning','Polynomial problems are practically <em>and</em> theoretically solvable. Non-polynomial problems are theoretically solvable but practically unsolvable.'],
    ['Non-deterministic algorithm','An "algorithm" whose steps are not uniquely and completely determined by the process state.'],
    ['NP problem','A problem with a non-deterministic algorithmic solution within O(n<sup>x</sup>) for some x. Classic example: the <strong>travelling salesman problem</strong>.'],
    ['P vs NP','All problems in P are also in NP. Whether every problem in NP is also in P is an <strong>open question</strong> — nobody has shown either P &lt; NP or P = NP.']
  ]}
 ]
},

{
 id:'genai', num:'+', title:'Generative AI (guest lecture)',
 src:'idsv-genai-handout · 2 questions on the 2025gC exam',
 pages:"Not in the book",
 refs:[["idsv-genai-handout — the whole deck", "—"]],
 blocks:[
  {t:'trap', v:'Do not skip this. The frågor-och-svar sheet contains <strong>no</strong> questions from this lecture, but the tag-2025gC exam had <strong>two</strong> — one on the three image-generation methods, one on attention versus multi-headed attention. That is 2 marks out of 29 resting entirely on this handout. The drill now carries a Generative AI pool built from it.'},

  {t:'h', v:'How a language model works'},
  {t:'defs', v:[
    ['Next-token prediction','The model does not retrieve a stored answer. It computes a <strong>probability distribution over possible next tokens</strong> and picks one; the chosen token is appended and the process repeats.'],
    ['Token','A piece of text — sometimes a whole word, sometimes part of one. Roughly 100 tokens per 75 English words. Because the model works on tokens, not characters, it is bad at counting letters in a word.'],
    ['Embedding','Each token id is looked up in a table and becomes a long list of numbers — think of it as a position, where similar words end up near each other. Directions carry meaning: king − man + woman ≈ queen.'],
    ['Attention','Lets each token look at every other token in the sentence and rewrite its own numbers to fit that context. Same token, different neighbours, different numbers.'],
    ['Transformer','Attention stacked in many layers, with feed-forward blocks; finally one score per possible next token.'],
    ['Softmax and temperature','Softmax turns scores into probabilities. Temperature divides the scores first: <strong>low</strong> temperature sharpens the distribution (use for code), <strong>high</strong> flattens it (use where variation is wanted).'],
    ['Self-supervised learning','Training hides the next token, lets the model guess, compares with the real token and adjusts the weights slightly. The text supplies its own answer key.']
  ]},

  {t:'h', v:'Limits and workarounds'},
  {t:'defs', v:[
    ['Context window','Only the prompt, the conversation and supplied documents can be used directly. More text is not automatically better context.'],
    ['RAG','Retrieval-augmented generation: relevant material is retrieved <em>first</em> and put in the prompt. Web search is one form. GraphRAG instead follows recorded relationships between things.'],
    ['Few-shot / zero-shot','Show the task with examples / just describe it. Nothing about the model changes.'],
    ['LoRA','Freeze the model, train a small set of added parameters.'],
    ['Fine-tuning','Continue training the model itself on your own data. Most expensive of the three.'],
    ['MCP','Model Context Protocol — a formal contract describing what operations a live system exposes and how to call them.']
  ]},

  {t:'h', v:'Images and sound'},
  {t:'table', head:['Approach','Idea','Output'], rows:[
    ['VAE','Compress into latent codes, then reconstruct.','Smooth, often blurry.'],
    ['GAN','Generator vs discriminator, competing.','Sharp when training is stable.'],
    ['Diffusion','Start from noise; each step estimates a slightly less noisy image.','High and consistent quality.']
  ]},
  {t:'defs', v:[
    ['Latent space','The process runs on a compressed version of the image rather than on individual pixels.'],
    ['Spectrogram','A picture of sound — columns are moments, rows are frequencies, colour is strength. This lets image models generate sound.']
  ]},

  {t:'h', v:'Reasoning and ethics'},
  {t:'table', head:['Inference','What it does','Example'], rows:[
    ['Deduction','Applies a rule you already have.','"Metals expand when heated; this is metal, so it expands."'],
    ['Induction','Finds the rule from many examples.','"Every swan I have seen is white, so swans are white."'],
    ['Abduction','Invents an explanation for something surprising — the only one that produces something new.','"The grass is wet. Perhaps it rained."']
  ]},
  {t:'p', v:'Ethical headings from the lecture: <strong>ownership</strong> (training data and output status), <strong>consent</strong> (deepfakes, training against creators&rsquo; wishes), <strong>correctness</strong> (hallucination, bias), <strong>privacy</strong> (who sees your text, how long it is kept), <strong>environment</strong> (electricity and CO₂ at data-centre scale).'}
 ]
}
];
