document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const searchInput = document.getElementById("search-query");
    const dropdown = document.getElementById("dropdown-results");
    const responseBox = document.getElementById("response-box");

    // Check stored theme preference & apply settings
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark"); // Fix: Modify <html>
        toggleButton.textContent = "🌙";
    } else {
        document.documentElement.classList.remove("dark");
        toggleButton.textContent = "🌞";
    }

    // Toggle function
    toggleButton.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark"); // Fix: Modify <html>

        if (document.documentElement.classList.contains("dark")) {
            this.textContent = "🌙"; // Moon emoji for dark mode
            localStorage.setItem("theme", "dark");
        } else {
            this.textContent = "🌞"; // Sun emoji for light mode
            localStorage.setItem("theme", "light");
        }
    });
  // JSON Data Stored Directly in JS
  const scienceTechData = [
  {
    "id": 1,
    "title": "Quantum Computing Basics",
    "keywords": ["quantum", "computing", "basics"],
    "response": "Quantum computing uses qubits to perform calculations beyond classical computers."
  },
  {
    "id": 2,
    "title": "Artificial Intelligence Overview",
    "keywords": ["ai", "artificial intelligence", "overview"],
    "response": "Artificial intelligence simulates human reasoning to automate and enhance complex tasks."
  },
  {
    "id": 3,
    "title": "Machine Learning Essentials",
    "keywords": ["machine learning", "ml", "essentials"],
    "response": "Machine learning teaches computers to learn from data without explicit programming."
  },
  {
    "id": 4,
    "title": "Deep Learning Innovations",
    "keywords": ["deep learning", "neural networks", "innovations"],
    "response": "Deep learning uses multilayered neural networks to solve complex problems and enable breakthroughs."
  },
  {
    "id": 5,
    "title": "Blockchain Technology Explained",
    "keywords": ["blockchain", "distributed ledger", "technology"],
    "response": "Blockchain is a decentralized digital ledger that records transactions across many computers."
  },
  {
    "id": 6,
    "title": "Virtual Reality Trends",
    "keywords": ["virtual reality", "vr", "trends"],
    "response": "Virtual reality creates a simulated environment that can mimic or differ from the real world."
  },
  {
    "id": 7,
    "title": "Augmented Reality Uses",
    "keywords": ["augmented reality", "ar", "applications"],
    "response": "Augmented reality overlays digital content onto the real world to enhance user experience."
  },
  {
    "id": 8,
    "title": "Internet of Things (IoT) Developments",
    "keywords": ["iot", "internet of things", "developments"],
    "response": "IoT involves interconnected devices that exchange data to create smarter environments."
  },
  {
    "id": 9,
    "title": "5G Technology",
    "keywords": ["5g", "wireless", "technology"],
    "response": "5G is the next-generation wireless network technology that improves speed, latency, and connectivity."
  },
  {
    "id": 10,
    "title": "Cybersecurity Fundamentals",
    "keywords": ["cybersecurity", "security", "fundamentals"],
    "response": "Cybersecurity involves protecting systems, networks, and data from digital attacks."
  },
  {
    "id": 11,
    "title": "Cloud Computing Benefits",
    "keywords": ["cloud computing", "cloud", "benefits"],
    "response": "Cloud computing provides on-demand access to computing resources and scalable infrastructure."
  },
  {
    "id": 12,
    "title": "Edge Computing Advantages",
    "keywords": ["edge computing", "advantages", "distributed"],
    "response": "Edge computing processes data closer to its source, reducing latency and conserving bandwidth."
  },
  {
    "id": 13,
    "title": "Big Data Analytics",
    "keywords": ["big data", "analytics", "data analysis"],
    "response": "Big data analytics extracts useful insights from extremely large data sets using advanced methods."
  },
  {
    "id": 14,
    "title": "Data Science Methods",
    "keywords": ["data science", "methods", "analytics"],
    "response": "Data science uses statistical techniques and algorithms to analyze and interpret complex data."
  },
  {
    "id": 15,
    "title": "Robotics in Industry",
    "keywords": ["robotics", "industry", "automation"],
    "response": "Robotics automates manufacturing and other processes to enhance efficiency in industry."
  },
  {
    "id": 16,
    "title": "Nanotechnology Applications",
    "keywords": ["nanotechnology", "applications", "nano"],
    "response": "Nanotechnology manipulates matter at the molecular scale for innovative solutions in various fields."
  },
  {
    "id": 17,
    "title": "Bioinformatics and Genomics",
    "keywords": ["bioinformatics", "genomics", "biology"],
    "response": "Bioinformatics applies computational methods to analyze biological data, particularly genomic sequences."
  },
  {
    "id": 18,
    "title": "3D Printing Innovations",
    "keywords": ["3d printing", "additive manufacturing", "innovations"],
    "response": "3D printing creates physical objects layer by layer from digital designs, revolutionizing manufacturing."
  },
  {
    "id": 19,
    "title": "Renewable Energy Technologies",
    "keywords": ["renewable energy", "solar", "wind", "technologies"],
    "response": "Renewable energy technologies harness natural resources like sunshine and wind to produce power sustainably."
  },
  {
    "id": 20,
    "title": "Electric Vehicles",
    "keywords": ["electric vehicles", "ev", "transportation"],
    "response": "Electric vehicles run on electricity rather than fossil fuels, promoting cleaner transportation."
  },
  {
    "id": 21,
    "title": "Smart Cities Initiatives",
    "keywords": ["smart cities", "urban", "initiatives"],
    "response": "Smart cities use digital communication technology to enhance performance and wellbeing in urban environments."
  },
  {
    "id": 22,
    "title": "Automation and the Future of Work",
    "keywords": ["automation", "future of work", "robotics"],
    "response": "Automation transforms the workforce by replacing repetitive tasks with intelligent machines."
  },
  {
    "id": 23,
    "title": "Space Exploration Missions",
    "keywords": ["space exploration", "missions", "NASA", "space"],
    "response": "Space exploration missions expand our understanding of the universe through satellite and crewed operations."
  },
  {
    "id": 24,
    "title": "Astrophysics Discoveries",
    "keywords": ["astrophysics", "discoveries", "space"],
    "response": "Astrophysics investigates the properties and evolution of the universe, yielding extraordinary discoveries."
  },
  {
    "id": 25,
    "title": "Genetic Engineering",
    "keywords": ["genetic engineering", "genetics", "biotechnology"],
    "response": "Genetic engineering modifies organisms' DNA to achieve desirable traits for medicine, agriculture, and research."
  },
  {
    "id": 26,
    "title": "Medical Technology Advances",
    "keywords": ["medical technology", "healthtech", "advances"],
    "response": "Advances in medical technology improve patient care, diagnostics, and treatment outcomes."
  },
  {
    "id": 27,
    "title": "Wearable Technology",
    "keywords": ["wearable technology", "wearables", "gadgets"],
    "response": "Wearable technology integrates electronics into clothing and accessories to track health and activity."
  },
  {
    "id": 28,
    "title": "Internet Security Challenges",
    "keywords": ["internet security", "cyber threats", "security challenges"],
    "response": "Internet security challenges include data breaches, phishing scams, and malware attacks requiring robust defenses."
  },
  {
    "id": 29,
    "title": "Virtual Assistants",
    "keywords": ["virtual assistants", "ai", "voice assistants"],
    "response": "Virtual assistants like Siri and Alexa use voice recognition to help users with daily tasks and information."
  },
  {
    "id": 30,
    "title": "Natural Language Processing",
    "keywords": ["nlp", "natural language processing", "language"],
    "response": "NLP enables machines to understand, interpret, and generate human language through artificial intelligence."
  },
  {
    "id": 31,
    "title": "Voice Recognition Systems",
    "keywords": ["voice recognition", "speech", "ai"],
    "response": "Voice recognition systems convert spoken words into text, powering applications like virtual assistants."
  },
  {
    "id": 32,
    "title": "Facial Recognition Technology",
    "keywords": ["facial recognition", "biometrics", "security"],
    "response": "Facial recognition technology identifies or verifies individuals by analyzing facial features."
  },
  {
    "id": 33,
    "title": "Drone Technology",
    "keywords": ["drone", "unmanned aerial vehicle", "technology"],
    "response": "Drone technology enables remote-controlled or autonomous flight for photography, delivery, and surveillance."
  },
  {
    "id": 34,
    "title": "Robotic Process Automation",
    "keywords": ["rpa", "robotic process automation", "automation"],
    "response": "Robotic process automation automates repetitive tasks, reducing errors and increasing efficiency in business operations."
  },
  {
    "id": 35,
    "title": "Predictive Analytics",
    "keywords": ["predictive analytics", "data", "forecasting"],
    "response": "Predictive analytics uses historical data to forecast future outcomes and trends."
  },
  {
    "id": 36,
    "title": "Data Visualization Tools",
    "keywords": ["data visualization", "tools", "analytics"],
    "response": "Data visualization tools transform raw data into visual insights for easier interpretation and decision-making."
  },
  {
    "id": 37,
    "title": "High-Performance Computing",
    "keywords": ["high-performance computing", "hpc", "supercomputers"],
    "response": "High-performance computing involves aggregating computing power to solve advanced problems quickly."
  },
  {
    "id": 38,
    "title": "Electric Grid Modernization",
    "keywords": ["electric grid", "modernization", "smart grid"],
    "response": "Modernizing the electric grid improves efficiency, reliability, and integration of renewable energy sources."
  },
  {
    "id": 39,
    "title": "Smart Home Devices",
    "keywords": ["smart home", "automation", "iot"],
    "response": "Smart home devices automate functions like lighting, heating, and security, making homes more efficient."
  },
  {
    "id": 40,
    "title": "Autonomous Vehicles",
    "keywords": ["autonomous vehicles", "self-driving", "transportation"],
    "response": "Autonomous vehicles use sensors and AI to navigate and operate without human intervention."
  },
  {
    "id": 41,
    "title": "Augmented Analytics",
    "keywords": ["augmented analytics", "ai", "data"],
    "response": "Augmented analytics enhances data analytics with machine learning and natural language processing."
  },
  {
    "id": 42,
    "title": "5G Applications",
    "keywords": ["5g", "applications", "wireless"],
    "response": "5G applications will revolutionize fields like IoT, autonomous vehicles, and real-time communication."
  },
  {
    "id": 43,
    "title": "Digital Transformation",
    "keywords": ["digital transformation", "technology", "innovation"],
    "response": "Digital transformation leverages technology to fundamentally change how organizations operate and deliver value."
  },
  {
    "id": 44,
    "title": "Quantum Cryptography",
    "keywords": ["quantum cryptography", "security", "encryption"],
    "response": "Quantum cryptography uses the principles of quantum mechanics to create unbreakable encryption."
  },
  {
    "id": 45,
    "title": "Photonic Computing",
    "keywords": ["photonic computing", "light", "computing"],
    "response": "Photonic computing uses photons instead of electrons to process data at high speed."
  },
  {
    "id": 46,
    "title": "Mixed Reality",
    "keywords": ["mixed reality", "mr", "augmented reality", "virtual reality"],
    "response": "Mixed reality blends real and virtual worlds to produce new environments where physical and digital objects interact."
  },
  {
    "id": 47,
    "title": "Satellite Communications",
    "keywords": ["satellite", "communications", "space"],
    "response": "Satellite communications provide data transmission through orbiting satellites, enabling global connectivity."
  },
  {
    "id": 48,
    "title": "Exoplanet Discoveries",
    "keywords": ["exoplanet", "astronomy", "space"],
    "response": "Exoplanet discoveries expand our knowledge of planets beyond our solar system, fueling the search for life."
  },
  {
    "id": 49,
    "title": "Climate Change Modeling",
    "keywords": ["climate change", "modeling", "environment"],
    "response": "Climate change modeling uses data and simulations to predict future environmental conditions and impacts."
  },
  {
    "id": 50,
    "title": "Biohacking Trends",
    "keywords": ["biohacking", "trends", "biology"],
    "response": "Biohacking trends explore unconventional ways to enhance human performance through biology and technology."
  },
  {
    "id": 51,
    "title": "Cognitive Computing",
    "keywords": ["cognitive computing", "ai", "intelligence"],
    "response": "Cognitive computing mimics human thought processes in a computerized model to solve complex problems."
  },
  {
    "id": 52,
    "title": "IoT Security",
    "keywords": ["iot security", "internet of things", "security"],
    "response": "IoT security focuses on protecting interconnected devices from vulnerabilities and cyber attacks."
  },
  {
    "id": 53,
    "title": "Quantum Sensors",
    "keywords": ["quantum sensors", "sensors", "quantum"],
    "response": "Quantum sensors exploit quantum mechanics to measure physical quantities with ultra-high precision."
  },
  {
    "id": 54,
    "title": "Brain-Computer Interfaces",
    "keywords": ["brain-computer interface", "bci", "neural"],
    "response": "Brain-computer interfaces translate brain signals into commands, enabling direct interaction with devices."
  },
  {
    "id": 55,
    "title": "Precision Medicine",
    "keywords": ["precision medicine", "healthcare", "genomics"],
    "response": "Precision medicine tailors treatment to individual patients based on genetic, environmental, and lifestyle factors."
  },
  {
    "id": 56,
    "title": "Renewable Energy Storage",
    "keywords": ["energy storage", "renewables", "batteries"],
    "response": "Renewable energy storage systems, including advanced batteries, stabilize power supply from variable sources."
  },
  {
    "id": 57,
    "title": "Wind Energy Innovations",
    "keywords": ["wind energy", "innovation", "renewable"],
    "response": "Innovations in wind energy improve turbine efficiency and enable harnessing of lower wind speeds."
  },
  {
    "id": 58,
    "title": "Solar Power Technology",
    "keywords": ["solar power", "technology", "renewable"],
    "response": "Solar power technology captures sunlight and converts it into electrical energy using photovoltaic cells."
  },
  {
    "id": 59,
    "title": "Hydrogen Fuel Cells",
    "keywords": ["hydrogen", "fuel cell", "energy"],
    "response": "Hydrogen fuel cells generate electricity through an electrochemical process with water as the only byproduct."
  },
  {
    "id": 60,
    "title": "Smart Agriculture",
    "keywords": ["smart agriculture", "agritech", "farming"],
    "response": "Smart agriculture integrates IoT, AI, and data analytics to optimize farming methods and crop yields."
  },
  {
    "id": 61,
    "title": "Biotechnology Advances",
    "keywords": ["biotechnology", "advances", "genetics"],
    "response": "Biotechnology advances involve using living systems and organisms to develop products and technologies."
  },
  {
    "id": 62,
    "title": "Augmented Decision Making",
    "keywords": ["augmented decision making", "ai", "data"],
    "response": "Augmented decision making incorporates AI to help improve human decisions based on data insights."
  },
  {
    "id": 63,
    "title": "AI in Healthcare",
    "keywords": ["ai in healthcare", "medical ai", "healthtech"],
    "response": "AI in healthcare is transforming diagnostics, treatment planning, and personalized medicine."
  },
  {
    "id": 64,
    "title": "AI in Finance",
    "keywords": ["ai in finance", "financial technology", "fintech"],
    "response": "AI in finance is used for fraud detection, risk assessment, and algorithmic trading, among other applications."
  },
  {
    "id": 65,
    "title": "AI Ethics",
    "keywords": ["ai ethics", "ethics", "artificial intelligence"],
    "response": "AI ethics examines the moral implications and responsibilities of creating and deploying artificial intelligence systems."
  },
  {
    "id": 66,
    "title": "Deepfakes and Detection",
    "keywords": ["deepfakes", "detection", "video"],
    "response": "Deepfakes use AI to create realistic video forgeries, prompting the need for robust detection techniques."
  },
  {
    "id": 67,
    "title": "Automation in Manufacturing",
    "keywords": ["automation", "manufacturing", "industry"],
    "response": "Automation in manufacturing increases efficiency by replacing manual tasks with robotic systems."
  },
  {
    "id": 68,
    "title": "Robotics in Surgery",
    "keywords": ["robotics", "surgery", "medical"],
    "response": "Robotic surgery enhances precision and control, reducing recovery time and improving surgical outcomes."
  },
  {
    "id": 69,
    "title": "Genomic Data Analysis",
    "keywords": ["genomic analysis", "genomics", "data"],
    "response": "Genomic data analysis applies computational methods to decipher genetic information for biomedical research."
  },
  {
    "id": 70,
    "title": "Cellular Agriculture",
    "keywords": ["cellular agriculture", "agritech", "biotech"],
    "response": "Cellular agriculture uses cell culture techniques to produce agricultural products like meat without traditional farming."
  },
  {
    "id": 71,
    "title": "Synthetic Biology",
    "keywords": ["synthetic biology", "genetics", "biotech"],
    "response": "Synthetic biology combines engineering principles with biology to create new biological systems or capabilities."
  },
  {
    "id": 72,
    "title": "Marine Technology",
    "keywords": ["marine technology", "ocean", "submarines"],
    "response": "Marine technology encompasses innovations in underwater exploration, robotics, and oceanographic data collection."
  },
  {
    "id": 73,
    "title": "Space Satellites",
    "keywords": ["satellites", "space", "communications"],
    "response": "Space satellites support communication, weather forecasting, navigation, and Earth observation."
  },
  {
    "id": 74,
    "title": "Interplanetary Travel",
    "keywords": ["interplanetary", "space travel", "exploration"],
    "response": "Interplanetary travel explores methods and technologies required to journey between planets in our solar system."
  },
  {
    "id": 75,
    "title": "Smart Wearables",
    "keywords": ["smart wearables", "technology", "gadgets"],
    "response": "Smart wearables integrate computing into clothing or accessories to track health and improve connectivity."
  },
  {
    "id": 76,
    "title": "Tech Startups Trends",
    "keywords": ["tech startups", "trends", "innovation"],
    "response": "Tech startups drive innovation by developing disruptive technologies and business models."
  },
  {
    "id": 77,
    "title": "Digital Twins",
    "keywords": ["digital twins", "simulation", "modeling"],
    "response": "Digital twins create virtual replicas of physical systems to monitor and optimize performance in real time."
  },
  {
    "id": 78,
    "title": "Virtual Labs",
    "keywords": ["virtual labs", "education", "simulation"],
    "response": "Virtual labs allow students and researchers to perform experiments remotely using interactive simulations."
  },
  {
    "id": 79,
    "title": "Remote Sensing Technology",
    "keywords": ["remote sensing", "satellite", "technology"],
    "response": "Remote sensing gathers data about Earth's surface using sensors on satellites or aircraft."
  },
  {
    "id": 80,
    "title": "Bioelectronics",
    "keywords": ["bioelectronics", "medical", "technology"],
    "response": "Bioelectronics combines biology and electronics to develop devices that interact with biological systems."
  },
  {
    "id": 81,
    "title": "Smart Textiles",
    "keywords": ["smart textiles", "wearables", "fabric"],
    "response": "Smart textiles integrate electronic components into fabrics for innovative applications in fashion and health."
  },
  {
    "id": 82,
    "title": "Graphene Applications",
    "keywords": ["graphene", "nanomaterials", "applications"],
    "response": "Graphene, a single layer of carbon atoms, holds promise for applications in electronics, energy storage, and more."
  },
  {
    "id": 83,
    "title": "Biometrics",
    "keywords": ["biometrics", "security", "authentication"],
    "response": "Biometrics use unique biological traits like fingerprints or iris patterns for secure identification."
  },
  {
    "id": 84,
    "title": "Technology in Education",
    "keywords": ["education", "technology", "edtech"],
    "response": "Technology in education leverages digital tools to improve learning outcomes and accessibility."
  },
  {
    "id": 85,
    "title": "Cyber-Physical Systems",
    "keywords": ["cyber-physical", "systems", "automation"],
    "response": "Cyber-physical systems integrate computing, networking, and physical processes in applications like smart grids and manufacturing."
  },
  {
    "id": 86,
    "title": "IoT in Healthcare",
    "keywords": ["iot", "healthcare", "medical devices"],
    "response": "IoT in healthcare connects devices and sensors to improve patient monitoring and treatment efficiency."
  },
  {
    "id": 87,
    "title": "AI for Social Good",
    "keywords": ["ai", "social good", "technology"],
    "response": "AI for social good uses data and algorithms to address social and environmental challenges."
  },
  {
    "id": 88,
    "title": "Robotics Process Automation",
    "keywords": ["rpa", "robotics", "automation"],
    "response": "Robotics Process Automation streamlines business processes by automating routine, repetitive tasks."
  },
  {
    "id": 89,
    "title": "End-to-End Encryption",
    "keywords": ["encryption", "security", "privacy"],
    "response": "End-to-end encryption ensures that data is only visible to the sender and recipient, maintaining secure communication."
  },
  {
    "id": 90,
    "title": "Tech Innovations in Retail",
    "keywords": ["retail", "technology", "innovation"],
    "response": "Tech innovations in retail include contactless payments, personalized shopping experiences, and smart inventory management."
  },
  {
    "id": 91,
    "title": "Personalized Medicine",
    "keywords": ["personalized medicine", "healthcare", "genomics"],
    "response": "Personalized medicine customizes healthcare based on an individual’s genetic makeup, lifestyle, and environment."
  },
  {
    "id": 92,
    "title": "AI-Driven Robotics",
    "keywords": ["ai", "robotics", "automation"],
    "response": "AI-driven robotics combines artificial intelligence and robotic systems to perform complex tasks with minimal human intervention."
  },
  {
    "id": 93,
    "title": "Wearable Medical Devices",
    "keywords": ["wearable", "medical", "healthtech"],
    "response": "Wearable medical devices monitor vital signs and provide continuous health data for improved patient care."
  },
  {
    "id": 94,
    "title": "Smart Contracts",
    "keywords": ["smart contracts", "blockchain", "automation"],
    "response": "Smart contracts are self-executing contracts with the terms of the agreement directly written into code on the blockchain."
  },
  {
    "id": 95,
    "title": "Machine Vision",
    "keywords": ["machine vision", "computer vision", "imaging"],
    "response": "Machine vision enables computers to process and interpret visual data, crucial for quality control and autonomous systems."
  },
  {
    "id": 96,
    "title": "AI in Cybersecurity",
    "keywords": ["ai", "cybersecurity", "threat detection"],
    "response": "AI in cybersecurity uses machine learning algorithms to detect and respond to threats in real time."
  },
  {
    "id": 97,
    "title": "Digital Health Records",
    "keywords": ["digital health", "electronic records", "healthcare"],
    "response": "Digital health records streamline the storage and retrieval of patient information, improving the efficiency of healthcare delivery."
  },
  {
    "id": 98,
    "title": "Quantum Machine Learning",
    "keywords": ["quantum", "machine learning", "quantum ml"],
    "response": "Quantum machine learning leverages quantum computing to potentially accelerate complex learning algorithms and data analysis."
  },
  {
    "id": 99,
    "title": "AI-Powered Chatbots",
    "keywords": ["chatbots", "ai", "conversational agents"],
    "response": "AI-powered chatbots use natural language processing to engage users in meaningful conversation and provide assistance."
  },
  {
    "id": 100,
    "title": "Futuristic Technologies Overview",
    "keywords": ["future", "technologies", "innovation"],
    "response": "Futuristic technologies encompass emerging innovations across various sectors that promise to transform everyday life."
  }
]
 searchInput.addEventListener('input', () => {
        dropdown.innerHTML = "";
        const query = searchInput.value.toLowerCase();

        if (query.length === 0) {
            dropdown.style.display = "none";
            return;
        }

        const filteredResults = scienceTechData.filter(entry =>
            entry.keywords.some(keyword => keyword.includes(query))
        );

        dropdown.style.display = filteredResults.length > 0 ? "block" : "none";

        filteredResults.forEach(entry => {
            const option = document.createElement('div');
            option.classList.add('dropdown-item');
            option.textContent = entry.title;
            option.addEventListener('click', () => {
                searchInput.value = entry.title;
                dropdown.innerHTML = "";
                dropdown.style.display = "none";
                showResponse(entry.response);
            });
            dropdown.appendChild(option);
        });
    });

    function showResponse(responseText) {
        responseBox.innerHTML = `<p>${responseText}</p>`;
        responseBox.style.display = "block"; // Fix: Ensure visibility
    }
});    
