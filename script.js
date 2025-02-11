// Conversation flows for each event, each with 10 steps
const conversationFlows = {
  "Treaty of Pressburg": [
    {
      id: 0,
      event: "In the aftermath of Austerlitz, what was Napoleon's key demand from Austria in the Treaty of Pressburg?",
      options: {
        "1": "A token monetary payment",
        "2": "Territorial concessions",
        "3": "A binding military alliance"
      },
      correct: "2",
      prompt: "Correct! Austria was forced to cede significant territories."
    },
    {
      id: 1,
      event: "Which region did Austria notably lose as a result of the treaty?",
      options: {
        "1": "Northern Italy",
        "2": "Central Bohemia (remained intact)",
        "3": "The French Rhineland (not Austrian territory)"
      },
      correct: "1",
      prompt: "Right! Northern Italy became a key acquisition for Napoleon."
    },
    {
      id: 2,
      event: "How did the treaty affect the future of the Holy Roman Empire?",
      options: {
        "1": "It restored the empire's glory",
        "2": "It hastened its dissolution",
        "3": "It maintained the status quo"
      },
      correct: "2",
      prompt: "Exactly! The treaty was one of the events that precipitated its end."
    },
    {
      id: 3,
      event: "Which of these was a long-term consequence of the treaty?",
      options: {
        "1": "A revival of medieval feudalism",
        "2": "The rise of modern nation-states",
        "3": "Central Europe becoming isolated from Europe"
      },
      correct: "2",
      prompt: "Correct! Modern nation-states emerged in its wake."
    },
    {
      id: 4,
      event: "Napoleon's terms were intended to weaken which power?",
      options: {
        "1": "Britain (not targeted in this treaty)",
        "2": "Austria",
        "3": "Russia (not the focus here)"
      },
      correct: "2",
      prompt: "Right! Austria's influence was significantly reduced."
    },
    {
      id: 5,
      event: "What economic measure was imposed on Austria by the treaty?",
      options: {
        "1": "Heavy war indemnities",
        "2": "Minor trade restrictions",
        "3": "No economic obligations at all"
      },
      correct: "1",
      prompt: "Indeed! Austria had to pay substantial indemnities."
    },
    {
      id: 6,
      event: "Which military outcome directly led to the treaty?",
      options: {
        "1": "A decisive naval battle (which never occurred)",
        "2": "The Battle of Austerlitz",
        "3": "A lengthy siege that never took place"
      },
      correct: "2",
      prompt: "Absolutely! Austerlitz was the decisive battle."
    },
    {
      id: 7,
      event: "How did Napoleon view the Treaty of Pressburg?",
      options: {
        "1": "Just a short-term fix",
        "2": "A stepping stone for further expansion",
        "3": "A conclusive end to conflict"
      },
      correct: "2",
      prompt: "Correct! He saw it as a platform for more conquests."
    },
    {
      id: 8,
      event: "What did the treaty’s terms signal for the old imperial order?",
      options: {
        "1": "A dramatic revival of the old order",
        "2": "An immediate and total collapse of the old order",
        "3": "A gradual transformation of the imperial system"
      },
      correct: "3",
      prompt: "Right! It marked a gradual shift away from the old order."
    },
    {
      id: 9,
      event: "Overall, what was the treaty’s most lasting impact?",
      options: {
        "1": "Reinforcing outdated monarchic systems",
        "2": "Undermining the old imperial structure",
        "3": "Creating an evenly balanced power system across Europe"
      },
      correct: "2",
      prompt: "Excellent! It played a key role in undermining the old regime."
    }
  ],
  "Confederation of Rhine": [
    {
      id: 0,
      event: "What was Napoleon’s primary aim in creating the Confederation of the Rhine?",
      options: {
        "1": "To revive the outdated Holy Roman Empire",
        "2": "To consolidate French influence in German states",
        "3": "To spread radical republicanism"
      },
      correct: "2",
      prompt: "Correct! It was designed to extend French control over German territories."
    },
    {
      id: 1,
      event: "How was the Confederation of the Rhine structured?",
      options: {
        "1": "A mere loose association of self-governing states",
        "2": "A centralized federation under French oversight",
        "3": "An alliance of equals with no central authority"
      },
      correct: "2",
      prompt: "Right! It was a centralized structure that reduced state independence."
    },
    {
      id: 2,
      event: "What happened to the sovereignty of member states?",
      options: {
        "1": "They were granted complete independence",
        "2": "Their sovereignty was significantly curtailed",
        "3": "Their national independence stayed exactly the same"
      },
      correct: "2",
      prompt: "Exactly! Their independence was significantly reduced."
    },
    {
      id: 3,
      event: "Which political force did the Confederation help suppress?",
      options: {
        "1": "Nationalism",
        "2": "Radical liberalism",
        "3": "The French"
      },
      correct: "1",
      prompt: "Correct! It helped to dampen rising nationalist sentiments."
    },
    {
      id: 4,
      event: "What strategic benefit did the Confederation offer Napoleon?",
      options: {
        "1": "A strategic buffer zone against Prussia",
        "2": "Closer relations with Austria (which did not occur)",
        "3": "A robust alliance with Britain (highly unlikely)"
      },
      correct: "1",
      prompt: "Right! It created a buffer zone that enhanced French security."
    },
    {
      id: 5,
      event: "The Confederation symbolized a break from which old order?",
      options: {
        "1": "The feudal traditions of the HRE",
        "2": "Contemporary democratic principles",
        "3": "Imperial colonial domination"
      },
      correct: "1",
      prompt: "Exactly! It marked the end of centuries of feudalism."
    },
    {
      id: 6,
      event: "How were member states expected to contribute militarily?",
      options: {
        "1": "By keeping entirely separate military forces",
        "2": "By integrating into a unified force",
        "3": "They were allowed to opt out of conscription"
      },
      correct: "2",
      prompt: "Correct! They had to provide troops for a unified military structure."
    },
    {
      id: 7,
      event: "What long-term impact did the Confederation have on German politics?",
      options: {
        "1": "It directly set the stage for German unification",
        "2": "It reinforced the fragmented imperial structure",
        "3": "It cut France off from European diplomacy"
      },
      correct: "1",
      prompt: "Right! It set the stage for later unification movements."
    },
    {
      id: 8,
      event: "Which strategy best describes Napoleon’s approach with the Confederation?",
      options: {
        "1": "Divide and rule",
        "2": "A total merger of the states with France",
        "3": "Allowing complete independence to each state"
      },
      correct: "1",
      prompt: "Absolutely! 'Divide and rule' was central to his policy."
    },
    {
      id: 9,
      event: "How is the Confederation of the Rhine viewed historically?",
      options: {
        "1": "A short-lived and ineffective experiment",
        "2": "A cornerstone for future unification",
        "3": "An episode with no historical significance"
      },
      correct: "2",
      prompt: "Excellent! It is recognized as a key precursor to modern unity."
    }
  ],
  "Napoleonic Reforms": [
    {
      id: 0,
      event: "What was the main aim of the Napoleonic Reforms in the former HRE territories?",
      options: {
        "1": "To restore outdated feudal privileges",
        "2": "To modernize and rationalize administration",
        "3": "To enforce a single religion across the territories"
      },
      correct: "2",
      prompt: "Correct! The reforms sought to modernize state structures."
    },
    {
      id: 1,
      event: "Which legal framework was introduced as a part of these reforms?",
      options: {
        "1": "The Napoleonic Code",
        "2": "The ancient Code of Justinian",
        "3": "A medieval chivalric code"
      },
      correct: "1",
      prompt: "Right! The Napoleonic Code redefined the legal landscape."
    },
    {
      id: 2,
      event: "How did these reforms affect social mobility?",
      options: {
        "1": "They further entrenched hereditary aristocracy",
        "2": "They promoted meritocracy",
        "3": "They completely erased class differences"
      },
      correct: "2",
      prompt: "Exactly! Merit became more important than birthright."
    },
    {
      id: 3,
      event: "Which administrative change was most central to the reforms?",
      options: {
        "1": "Spreading power among numerous local authorities",
        "2": "Creating a centralized bureaucracy",
        "3": "Restoring feudal local lordship"
      },
      correct: "2",
      prompt: "Correct! A centralized bureaucracy was key to the reforms."
    },
    {
      id: 4,
      event: "What economic measure was standardized under the reforms?",
      options: {
        "1": "An outdated barter system",
        "2": "Uniform tax collection",
        "3": "Old feudal dues"
      },
      correct: "2",
      prompt: "Right! Uniform tax systems helped stabilize the economy."
    },
    {
      id: 5,
      event: "How did education change as a result of these reforms?",
      options: {
        "1": "Exclusively reserved for the elite",
        "2": "State-sponsored education was promoted",
        "3": "No efforts were made to improve education"
      },
      correct: "2",
      prompt: "Exactly! The reforms encouraged broader access to education."
    },
    {
      id: 6,
      event: "What social effect did the reforms have on career advancement?",
      options: {
        "1": "They further restricted upward mobility",
        "2": "They fostered merit-based advancement",
        "3": "They established an unchangeable class hierarchy"
      },
      correct: "2",
      prompt: "Correct! Advancement was increasingly based on merit."
    },
    {
      id: 7,
      event: "How did the reforms impact local governance?",
      options: {
        "1": "By standardizing administrative practices",
        "2": "By completely disbanding local councils",
        "3": "By restoring noble privileges in local government"
      },
      correct: "1",
      prompt: "Right! Standardization was a central goal."
    },
    {
      id: 8,
      event: "What long-term institutional change resulted from the reforms?",
      options: {
        "1": "The creation of modern state institutions",
        "2": "A return to feudal institutions",
        "3": "Severe economic isolation from Europe"
      },
      correct: "1",
      prompt: "Absolutely! Modern state institutions emerged from these reforms."
    },
    {
      id: 9,
      event: "Overall, how are the Napoleonic Reforms viewed in European history?",
      options: {
        "1": "Merely superficial adjustments",
        "2": "Groundbreaking changes",
        "3": "Backward steps that set Europe back"
      },
      correct: "2",
      prompt: "Excellent! They are seen as pivotal in modernizing Europe."
    }
  ],
  "Congress of Vienna": [
    {
      id: 0,
      event: "What was the primary goal of the Congress of Vienna after Napoleon’s defeat?",
      options: {
        "1": "To impose draconian penalties on France",
        "2": "To restore a balance of power in Europe",
        "3": "To spread revolutionary fervor across Europe"
      },
      correct: "2",
      prompt: "Correct! Restoring balance was the key objective."
    },
    {
      id: 1,
      event: "Which major power was a dominant force at the Congress?",
      options: {
        "1": "The defeated France (sidelined)",
        "2": "Russia",
        "3": "A minor power like Spain"
      },
      correct: "2",
      prompt: "Right! Russia played a leading role in the negotiations."
    },
    {
      id: 2,
      event: "How did the Congress view the defunct Holy Roman Empire?",
      options: {
        "1": "They attempted to resurrect the old empire",
        "2": "They accepted its dissolution",
        "3": "They completely dismissed its historical significance"
      },
      correct: "2",
      prompt: "Exactly! Its end was accepted as a new beginning."
    },
    {
      id: 3,
      event: "What principle guided the redrawing of borders at the Congress?",
      options: {
        "1": "Restoration of legitimate monarchies",
        "2": "National self-determination (which was not a priority)",
        "3": "The balance of power"
      },
      correct: "3",
      prompt: "Correct! Ensuring a balance of power was paramount."
    },
    {
      id: 4,
      event: "Which treaty emerged from the Congress's decisions?",
      options: {
        "1": "A Treaty of Paris",
        "2": "Treaty of Vienna",
        "3": "An informal agreement with no formal treaty"
      },
      correct: "2",
      prompt: "Right! The Treaty of Vienna formalized many decisions."
    },
    {
      id: 5,
      event: "How did the Congress approach Napoleon’s revolutionary changes?",
      options: {
        "1": "They completely dismissed Napoleon’s reforms",
        "2": "They selectively adopted some reforms",
        "3": "They embraced every change without exception"
      },
      correct: "2",
      prompt: "Exactly! They integrated certain reforms while restoring conservative order."
    },
    {
      id: 6,
      event: "What long-term effect did the Congress have on Europe?",
      options: {
        "1": "A century of relative peace",
        "2": "An era of unending wars",
        "3": "The sudden collapse of all monarchies"
      },
      correct: "1",
      prompt: "Correct! The Concert of Europe helped maintain peace for decades."
    },
    {
      id: 7,
      event: "Which mood best characterized the deliberations at the Congress?",
      options: {
        "1": "Fervent revolutionary zeal",
        "2": "Conservative restoration",
        "3": "Complete apathy"
      },
      correct: "2",
      prompt: "Right! A conservative, restorative spirit prevailed."
    },
    {
      id: 8,
      event: "How were territorial disputes resolved at the Congress?",
      options: {
        "1": "By one power imposing its will",
        "2": "By mediating compromises",
        "3": "They were entirely ignored"
      },
      correct: "2",
      prompt: "Absolutely! Compromise was the key to resolving disputes."
    },
    {
      id: 9,
      event: "Overall, what legacy is the Congress of Vienna remembered for?",
      options: {
        "1": "Laying the foundations of modern diplomacy",
        "2": "A temporary and ineffective arrangement",
        "3": "An insignificant event with no consequences"
      },
      correct: "1",
      prompt: "Excellent! Its legacy endures in modern European diplomacy."
    }
  ],
  "German Unification": [
    {
      id: 0,
      event: "Which event linked Napoleon’s influence directly to the later unification of Germany?",
      options: {
        "1": "The disbandment of the Holy Roman Empire",
        "2": "The establishment of the Confederation of Rhine",
        "3": "The decisions of the Congress of Vienna"
      },
      correct: "2",
      prompt: "Correct! The Confederation of Rhine set the stage for unification."
    },
    {
      id: 1,
      event: "How did Napoleon’s policies inadvertently foster German nationalism?",
      options: {
        "1": "By uniting disparate states through administrative reforms",
        "2": "By actively discouraging German cultural identity",
        "3": "By promoting disunity among the states"
      },
      correct: "1",
      prompt: "Right! His reforms brought the German states closer together."
    },
    {
      id: 2,
      event: "What role did the Napoleonic Code play in the process of unification?",
      options: {
        "1": "It had no impact whatsoever",
        "2": "It provided a common legal framework",
        "3": "It significantly obstructed political development"
      },
      correct: "2",
      prompt: "Exactly! A shared legal code helped bind the states together."
    },
    {
      id: 3,
      event: "Which state emerged as the leader in the movement towards unification?",
      options: {
        "1": "Austria (a traditional rival to unification)",
        "2": "Prussia",
        "3": "Bavaria (a less influential contender)"
      },
      correct: "2",
      prompt: "Correct! Prussia led the unification efforts."
    },
    {
      id: 4,
      event: "How did military reforms influenced by Napoleon affect German unification?",
      options: {
        "1": "They significantly diminished local armies' effectiveness",
        "2": "They modernized the armies, making them more effective",
        "3": "They had no noticeable effect"
      },
      correct: "2",
      prompt: "Right! Modernized armies played a crucial role."
    },
    {
      id: 5,
      event: "Which conflict catalyzed the final steps toward unification?",
      options: {
        "1": "The Austro-Prussian War",
        "2": "The Franco-Prussian War (which followed later)",
        "3": "World War I (an unrelated conflict)"
      },
      correct: "1",
      prompt: "Exactly! The Austro-Prussian War was a key catalyst."
    },
    {
      id: 6,
      event: "What cultural effect did Napoleon’s influence have on the German states?",
      options: {
        "1": "A forced abandonment of the German language",
        "2": "A revival of German literature and philosophy",
        "3": "A wholesale adoption of French cultural practices"
      },
      correct: "2",
      prompt: "Correct! A cultural revival helped spark national pride."
    },
    {
      id: 7,
      event: "How did administrative changes introduced by Napoleon impact later unification?",
      options: {
        "1": "They made administrative systems more convoluted",
        "2": "They laid the foundation for modern administration",
        "3": "They were entirely scrapped and ignored"
      },
      correct: "2",
      prompt: "Right! Modern administrative practices emerged from his reforms."
    },
    {
      id: 8,
      event: "In economic terms, what legacy did Napoleon leave that aided unification?",
      options: {
        "1": "Disjointed and inconsistent trade policies",
        "2": "Harmonized economic practices",
        "3": "Complete economic isolation from neighboring states"
      },
      correct: "2",
      prompt: "Absolutely! Economic harmonization fostered closer ties among the states."
    },
    {
      id: 9,
      event: "Overall, what is considered Napoleon’s most enduring contribution to German Unification?",
      options: {
        "1": "A common legal and administrative framework",
        "2": "His military conquests (which did not directly contribute)",
        "3": "His backing of outdated monarchical traditions"
      },
      correct: "1",
      prompt: "Excellent! His reforms provided the essential foundation for a unified Germany."
    }
  ]
};


// Global variables to track conversation state
let selectedEvent = "";
let conversationStage = 0;

// Utility: Append a bot message to the chat window with a typing transition
function addBotMessage(text, callback) {
  const chatWindow = document.getElementById("chat-window");
  const messageElem = document.createElement("div");
  messageElem.className = "bot-message";
  chatWindow.appendChild(messageElem);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  let index = 0;
  function typeChar() {
    if (index < text.length) {
      messageElem.textContent += text.charAt(index);
      index++;
      setTimeout(typeChar, 5); // Adjusted speed: 10ms per character for 5x faster typing
    } else {
      if (callback) callback();
    }
  }
  typeChar();
}

// Utility: Append a user message to the chat window (immediate display)
function addUserMessage(text) {
  const chatWindow = document.getElementById("chat-window");
  const messageElem = document.createElement("div");
  messageElem.className = "user-message";
  messageElem.textContent = text;
  chatWindow.appendChild(messageElem);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Utility: Clear the chat window
function clearChatWindow() {
  document.getElementById("chat-window").innerHTML = "";
}

// Start the adventure: prompt the user to choose an event
function startNapoleonAdventure() {
  clearChatWindow();
  selectedEvent = "";
  conversationStage = 0;
  addBotMessage("Welcome to Napoleon's HRE Adventure!");
  addBotMessage('Choose an event to explore by typing the corresponding number:');
  addBotMessage("1: Treaty of Pressburg\n2: Confederation of Rhine\n3: Napoleonic Reforms\n4: Congress of Vienna\n5: German Unification");
  addBotMessage('Do you want to reset the conversation? Just type "Reset".');
}

// Present the current step for the selected event
function presentCurrentStep() {
  if (selectedEvent === "") return; // No event selected yet
  const flow = conversationFlows[selectedEvent];
  if (conversationStage < flow.length) {
    const currentStep = flow[conversationStage];
    let message = `Step ${conversationStage + 1}: ${currentStep.event}\n`;
    for (const [key, option] of Object.entries(currentStep.options)) {
      message += `${key}: ${option}\n`;
    }
    addBotMessage(message);
  } else {
    addBotMessage("The adventure for this event has concluded. Thank you for participating!");
  }
}

// Process user input from the chat
function processNapoleonInput(input) {
  // If the user types "reset", restart the conversation
  if (input.trim().toLowerCase() === "reset") {
    addBotMessage("Resetting conversation...");
    setTimeout(() => {
      startNapoleonAdventure();
    }, 1000);
    return;
  }

  // If no event is selected, interpret the input as the event choice
  if (selectedEvent === "") {
    const eventMap = {
      "1": "Treaty of Pressburg",
      "2": "Confederation of Rhine",
      "3": "Napoleonic Reforms",
      "4": "Congress of Vienna",
      "5": "German Unification"
    };
    if (eventMap.hasOwnProperty(input)) {
      selectedEvent = eventMap[input];
      addBotMessage(`You have selected: ${selectedEvent}. Let's begin!`);
      setTimeout(() => {
        presentCurrentStep();
      }, 1000);
    } else {
      addBotMessage("Please choose a valid option: 1, 2, 3, 4, or 5.");
    }
    return;
  }

  // Process the input for the current step of the chosen event
  const flow = conversationFlows[selectedEvent];
  if (conversationStage < flow.length) {
    const currentStep = flow[conversationStage];
    if (!currentStep.options.hasOwnProperty(input)) {
      addBotMessage("Please choose a valid option (e.g., type 1, 2, or 3).");
      return;
    }
    if (input === currentStep.correct) {
      addBotMessage(currentStep.prompt);
      conversationStage++;
      setTimeout(() => {
        presentCurrentStep();
      }, 1000);
    } else {
      addBotMessage("Incorrect answer. Please try again.");
      setTimeout(() => {
        presentCurrentStep();
      }, 1000);
    }
  } else {
    addBotMessage("The adventure has concluded. Thank you for participating!");
  }
}

// Initialize the conversation on window load and set up the input listener
window.onload = function () {
  startNapoleonAdventure();
  const inputField = document.getElementById("chat-input");
  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userInput = inputField.value.trim();
      if (userInput !== "") {
        addUserMessage(userInput);
        inputField.value = "";
        processNapoleonInput(userInput);
      }
    }
  });
};
