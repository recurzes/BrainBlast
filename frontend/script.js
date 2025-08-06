//DOM elements
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestions = [
    {
        question: "What does IP stand for in networking?",
        answers: [
            {text: "Internet Provider", correct: false},
            {text: "Internal Protocol", correct: false},
            {text: "Internet Protocol", correct: true},
            {text: "Interconnected Path", correct: false},
        ],
    },

    {
        question: "Which device connects multiple networks together?",
        answers: [
            {text: "Switch", correct: false},
            {text: "Router", correct: true},
            {text: "Hub", correct: false},
            {text: "Bridge", correct: false},
        ],
    },

    {
        question: "What layer of the OSI model does IP operate at?",
        answers: [
            {text: "Transport", correct: false},
            {text: "Network", correct: true},
            {text: "Data Link", correct: false},
            {text: "Physical", correct: false},
        ],
    },

    {
        question: "Which of the following is a private IP address?",
        answers: [
            {text: "192.168.1.1", correct: true},
            {text: "8.8.8.8", correct: false},
            {text: "172.32.0.1", correct: false},
            {text: "10.255.255.255", correct: false},
        ],
    },

    {
        question: "What protocol is used to assign IP addresses automatically?",
        answers: [
            {text: "DNS", correct: false},
            {text: "FTP", correct: false},
            {text: "DHCP", correct: true},
            {text: "HTTP", correct: false},
        ],
    },

    {
        question: "Which port number is used by HTTP?",
        answers: [
            {text: "21", correct: false},
            {text: "80", correct: true},
            {text: "23", correct: false},
            {text: "110", correct: false},
        ],
    },

    {
        question: "A MAC address is used at which layer of the OSI model?",
        answers: [
            {text: "Physical", correct: false},
            {text: "Network", correct: false},
            {text: "Data Link", correct: true},
            {text: "Transport", correct: false},
        ],
    },

  {
        question: "What does DNS stand for?",
        answers: [
            {text: "Dynamic Network Service", correct: false},
            {text: "Domain Name System", correct: true},
            {text: "Digital Naming Server", correct: false},
            {text: "Direct Name Setup", correct: false},
        ],
    },
{
        question: "What is the default subnet mask for a Class C IP address?",
        answers: [
            {text: "255.0.0.0", correct: false},
            {text: "255.255.0.0", correct: false},
            {text: "255.255.255.0", correct: true},
            {text: "255.255.255.255", correct: false},
        ],
    },
{
        question: "Which of the following is a transport layer protocol?",
        answers: [
            {text: "TCP", correct: true},
            {text: "IP", correct: false},
            {text: "ARP", correct: false},
            {text: "ICMP", correct: false},
        ],
    },
{
        question: "What type of cable is used for long-distance and high-speed data transmission?",
        answers: [
            {text: "Coaxial", correct: false},
            {text: "Twisted Pair", correct: false},
            {text: "Fiber Optic", correct: true},
            {text: "HDMI", correct: false},
        ],
    },
{
        question: "Which tool is used to test connectivity between two devices?",
        answers: [
            {text: "ipconfig", correct: false},
            {text: "ping", correct: true},
            {text: "tracert", correct: false},
            {text: "nslookup", correct: false},
        ],
    },
{
        question: "Which command is used to display network configurations on Windows?",
        answers: [
            {text: "ipconfig", correct: true},
            {text: "netstat", correct: false},
            {text: "ifconfig", correct: false},
            {text: "route", correct: false},
        ],
    },
{
        question: "The OSI model has how many layers?",
        answers: [
            {text: "4", correct: false},
            {text: "5", correct: false},
            {text: "8", correct: false},
            {text: "7", correct: true},
        ],
    },
{
        question: "What is the main function of the ARP protocol?",
        answers: [
            {text: "Send emails", correct: false},
            {text: "Resolve MAC address from IP", correct: true},
            {text: "Encrypt data", correct: false},
            {text: "Assign IP address", correct: false},
        ],
    },
{
        question: "What is the full form of LAN?",
        answers: [
            {text: "Limited Area Network", correct: false},
            {text: "Large Area Network", correct: false},
            {text: "Local Area Network", correct: true},
            {text: "Logical Area Network", correct: false},
        ],
    },
{
        question: "Which device works at Layer 2 of the OSI model?",
        answers: [
            {text: "Hub", correct: false},
            {text: "Switch", correct: true},
            {text: "Router", correct: false},
            {text: "Gateway", correct: false},
        ],
    },
{
        question: "Which layer of the OSI model ensures reliable data delivery?",
        answers: [
            {text: "Physical", correct: false},
            {text: "Data Link", correct: false},
            {text: "Transport", correct: true},
            {text: "Session", correct: false},
        ],
    },
{
        question: "What is the primary purpose of NAT?",
        answers: [
            {text: "Encrypt data", correct: false},
            {text: "Translate private IPs to public", correct: true},
            {text: "Store DNS records", correct: false},
            {text: "Block unwanted traffic", correct: false},
        ],
    },
{
        question: "FTP is mainly used for what purpose?",
        answers: [
            {text: "Browsing websites", correct: false},
            {text: "Sending emails", correct: false},
            {text: "Transferring files", correct: true},
            {text: "Streaming videos", correct: false},
        ],
    },
{
        question: "What does the 'ping' command check?",
        answers: [
            {text: "Domain name registration", correct: false},
            {text: "Connectivity and latency", correct: true},
            {text: "IP address assignment", correct: false},
            {text: "Password security", correct: false},
        ],
    },
{
        question: "Which one is a Layer 1 device?",
        answers: [
            {text: "Switch", correct: false},
            {text: "Router", correct: false},
            {text: "Repeater", correct: true},
            {text: "Bridge", correct: false},
        ],
    },
{
        question: "Which of the following is NOT a valid IP address?",
        answers: [
            {text: "192.168.0.1", correct: false},
            {text: "10.0.0.256", correct: true},
            {text: "172.16.254.1", correct: false},
            {text: "8.8.8.8", correct: false},
        ],
    },
{
        question: "Which protocol translates domain names into IP addresses?",
        answers: [
            {text: "DHCP", correct: false},
            {text: "FTP", correct: false},
            {text: "DNS", correct: true},
            {text: "SMTP", correct: false},
        ],
    },
{
        question: "Which port is used by HTTPS?",
        answers: [
            {text: "80", correct: false},
            {text: "23", correct: false},
            {text: "443", correct: true},
            {text: "53", correct: false},
        ],
    },
{
        question: "What does the acronym TCP stand for?",
        answers: [
            {text: "Transfer Control Protocol", correct: false},
            {text: "Transmission Control Protocol", correct: true},
            {text: "Transport Connection Protocol", correct: false},
            {text: "Trusted Communication Protocol", correct: false},
        ],
    },
{
        question: "Which protocol is used to send emails?",
        answers: [
            {text: "SMTP", correct: true},
            {text: "HTTP", correct: false},
            {text: "POP3", correct: false},
            {text: "DHCP", correct: false},
        ],
    },
{
        question: "What does the subnet mask 255.255.255.0 indicate?",
        answers: [
            {text: "/16 network", correct: false},
            {text: "/8 network", correct: false},
            {text: "/24 network", correct: true},
            {text: "/32 network", correct: false},
        ],
    },
{
        question: "Which layer handles encryption and decryption?",
        answers: [
            {text: "Transport", correct: false},
            {text: "Presentation", correct: true},
            {text: "Session", correct: false},
            {text: "Application", correct: false},
        ],
    },
{
        question: "What type of IP address is 127.0.0.1?",
        answers: [
            {text: "Public IP", correct: false},
            {text: "Multicast IP", correct: false},
            {text: "Loopback IP", correct: true},
            {text: "Broadcast", correct: false},
        ],
    },
{
        question: "What is a default gateway?",
        answers: [
            {text: "A backup router", correct: false},
            {text: "A network switch", correct: false},
            {text: "A device that routes traffic to other networks", correct: true},
            {text: "A firewall rule", correct: false},
        ],
    },
{
        question: "Which protocol is used by web browsers to load web pages?",
        answers: [
            {text: "HTTP", correct: true},
            {text: "FTP", correct: false},
            {text: "DHCP", correct: false},
            {text: "TCP", correct: false},
        ],
    },
{
        question: "Which device reduces network collisions?",
        answers: [
            {text: "Hub", correct: false},
            {text: "Switch", correct: true},
            {text: "Repeater", correct: false},
            {text: "Modem", correct: false},
        ],
    },
{
        question: "Which layer of the OSI model handles error detection and correction?",
        answers: [
            {text: "Network", correct: false},
            {text: "Data Link", correct: true},
            {text: "Session", correct: false},
            {text: "Application", correct: false},
        ],
    },
{
        question: "A VPN is used for what purpose?",
        answers: [
            {text: "Speed up internet", correct: false},
            {text: "Connect to a printer", correct: false},
            {text: "Secure remote connection", correct: true},
            {text: "Configure DNS", correct: false},
        ],
    },
{
        question: "Which protocol is connectionless?",
        answers: [
            {text: "TCP", correct: false},
            {text: "ICMP", correct: false},
            {text: "UDP", correct: true},
            {text: "SMTP", correct: false},
        ],
    },
{
        question: "Which address is used to broadcast to all devices in a subnet?",
        answers: [
            {text: "255.255.255.255", correct: true},
            {text: "0.0.0.0", correct: false},
            {text: "192.168.0.1", correct: false},
            {text: "127.0.0.1", correct: false},
        ],
    },
{
        question: "Which protocol is used for secure file transfer?",
        answers: [
            {text: "FTP", correct: false},
            {text: "TFTP", correct: false},
            {text: "SFTP", correct: true},
            {text: "POP3", correct: false},
        ],
    },
{
        question: "What is the main purpose of the OSI model?",
        answers: [
            {text: "Assign IPs", correct: false},
            {text: "Encrypt data", correct: false},
            {text: "Standardize network communication", correct: true},
            {text: "Control access", correct: false},
        ],
    },
{
        question: "Which is not a class of IP address?",
        answers: [
            {text: "Class A", correct: false},
            {text: "Class B", correct: false},
            {text: "Class F", correct: true},
            {text: "Class C", correct: false},
        ],
    },
{
        question: "What is the maximum number of hosts in a /24 subnet?",
        answers: [
            {text: "254", correct: true},
            {text: "256", correct: false},
            {text: "255", correct: false},
            {text: "253", correct: false},
        ],
    },
{
        question: "What is a hostname?",
        answers: [
            {text: "MAC address", correct: false},
            {text: "Computer name on a network", correct: true},
            {text: "Router IP", correct: false},
            {text: "DNS server", correct: false},
        ],
    },
{
        question: "What does ICMP help with?",
        answers: [
            {text: "Domain registration", correct: false},
            {text: "Network diagnostics", correct: true},
            {text: "Assigning MAC address", correct: false},
            {text: "Streaming media", correct: false},
        ],
    },
{
        question: "What is a port number used for?",
        answers: [
            {text: "Identifying a computer", correct: false},
            {text: "Identifying a service or application", correct: true},
            {text: "Providing MAC addresses", correct: false},
            {text: "Assigning subnet masks", correct: false},
        ],
    },
{
        question: "Which command shows open ports and active connections?",
        answers: [
            {text: "ping", correct: false},
            {text: "ipconfig", correct: false},
            {text: "netsat", correct: true},
            {text: "nslookup", correct: false},
        ],
    },
{
        question: "The IP address 169.254.x.x is assigned when?",
        answers: [
            {text: "A device gets an IP from DHCP", correct: false},
            {text: "The device is offline", correct: false},
            {text: "The device fails to get DHCP", correct: true},
            {text: "The router is in sleep mode", correct: false},
        ],
    },
{
        question: "Which protocol is used to browse secured websites?",
        answers: [
            {text: "HTTP", correct: false},
            {text: "DNS", correct: false},
            {text: "HTTPS", correct: true},
            {text: "FTP", correct: false},
        ],
    },
{
        question: "What tool helps track the path of packets to a host?",
        answers: [
            {text: "ping", correct: false},
            {text: "netstat", correct: false},
            {text: "tracert", correct: true},
            {text: "nslookup", correct: false},
        ],
    },
{
        question: "A switch uses what to forward data?",
        answers: [
            {text: "IP Address", correct: false},
            {text: "Mac Address", correct: true},
            {text: "Port Number", correct: false},
            {text: "Hostname", correct: false},
        ],
    },
{
        question: "What is the first step in troubleshooting network connectivity?",
        answers: [
            {text: "Restart the router", correct: false},
            {text: "Replace the cable", correct: false},
            {text: "Check IP configuration", correct: true},
            {text: "Reinstall the OS", correct: false},
        ],
    },

  
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
startBtn.addEventListener('click', () => {
    // Hide start screen
    startScreen.classList.remove('active');
    startScreen.style.display = 'none';

    // Show quiz screen
    quizScreen.classList.add('active');
    quizScreen.style.display = 'block';
});

function startQuiz() {
    console.log("Quiz Started");
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answers-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
};  