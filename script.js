// Conversation flows for each event, each with 10 steps
const conversationFlows = {
  "Treaty of Pressburg": [
    {
      id: 0,
      event: "In the aftermath of Austerlitz, what was Napoleon's key demand from Austria in the Treaty of Pressburg?",
      options: { "1": "A large war indemnity", "2": "Territorial concessions", "3": "A military alliance" },
      correct: "2",
      prompt: "Correct! Austria was forced to cede significant territories."
    },
    {
      id: 1,
      event: "Which region did Austria notably lose as a result of the treaty?",
      options: { "1": "Northern Italy", "2": "Bohemia", "3": "The Rhineland" },
      correct: "1",
      prompt: "Right! Northern Italy became a key acquisition for Napoleon."
    },
    {
      id: 2,
      event: "How did the treaty affect the future of the Holy Roman Empire?",
      options: { "1": "It strengthened the empire", "2": "It hastened its dissolution", "3": "It had no impact" },
      correct: "2",
      prompt: "Exactly! The treaty was one of the events that precipitated its end."
    },
    {
      id: 3,
      event: "Which of these was a long-term consequence of the treaty?",
      options: { "1": "The resurgence of feudalism", "2": "The rise of modern nation-states", "3": "The isolation of Central Europe" },
      correct: "2",
      prompt: "Correct! Modern nation-states emerged in its wake."
    },
    {
      id: 4,
      event: "Napoleon's terms were intended to weaken which power?",
      options: { "1": "Britain", "2": "Austria", "3": "Russia" },
      correct: "2",
      prompt: "Right! Austria's influence was significantly reduced."
    },
    {
      id: 5,
      event: "What economic measure was imposed on Austria by the treaty?",
      options: { "1": "Heavy war indemnities", "2": "Trade embargoes", "3": "No economic measures" },
      correct: "1",
      prompt: "Indeed! Austria had to pay substantial indemnities."
    },
    {
      id: 6,
      event: "Which military outcome directly led to the treaty?",
      options: { "1": "A naval victory", "2": "The Battle of Austerlitz", "3": "A prolonged siege" },
      correct: "2",
      prompt: "Absolutely! Austerlitz was the decisive battle."
    },
    {
      id: 7,
      event: "How did Napoleon view the Treaty of Pressburg?",
      options: { "1": "A temporary solution", "2": "A stepping stone for further expansion", "3": "A final peace accord" },
      correct: "2",
      prompt: "Correct! He saw it as a platform for more conquests."
    },
    {
      id: 8,
      event: "What did the treaty’s terms signal for the old imperial order?",
      options: { "1": "Its revival", "2": "Its complete eradication", "3": "A gradual transformation" },
      correct: "3",
      prompt: "Right! It marked a gradual shift away from the old order."
    },
    {
      id: 9,
      event: "Overall, what was the treaty’s most lasting impact?",
      options: { "1": "Strengthening traditional monarchies", "2": "Undermining the old imperial structure", "3": "Establishing a balanced European power system" },
      correct: "2",
      prompt: "Excellent! It played a key role in undermining the old regime."
    }
  ],
  "Confederation of Rhine": [
    {
      id: 0,
      event: "What was Napoleon’s primary aim in creating the Confederation of the Rhine?",
      options: { "1": "To restore the Holy Roman Empire", "2": "To consolidate French influence in German states", "3": "To promote republican ideals" },
      correct: "2",
      prompt: "Correct! It was designed to extend French control over German territories."
    },
    {
      id: 1,
      event: "How was the Confederation of the Rhine structured?",
      options: { "1": "A loose alliance of independent states", "2": "A centralized federation under French oversight", "3": "A confederation of equal partners" },
      correct: "2",
      prompt: "Right! It was a centralized structure that reduced state independence."
    },
    {
      id: 2,
      event: "What happened to the sovereignty of member states?",
      options: { "1": "They gained full autonomy", "2": "Their sovereignty was curtailed", "3": "It remained unchanged" },
      correct: "2",
      prompt: "Exactly! Their independence was significantly reduced."
    },
    {
      id: 3,
      event: "Which political force did the Confederation help suppress?",
      options: { "1": "Nationalism", "2": "Liberalism", "3": "Feudalism" },
      correct: "1",
      prompt: "Correct! It helped to dampen rising nationalist sentiments."
    },
    {
      id: 4,
      event: "What strategic benefit did the Confederation offer Napoleon?",
      options: { "1": "A buffer zone against Prussia", "2": "Stronger ties with Austria", "3": "An alliance with Britain" },
      correct: "1",
      prompt: "Right! It created a buffer zone that enhanced French security."
    },
    {
      id: 5,
      event: "The Confederation symbolized a break from which old order?",
      options: { "1": "The feudal traditions of the HRE", "2": "Modern democratic institutions", "3": "Colonial rule" },
      correct: "1",
      prompt: "Exactly! It marked the end of centuries of feudalism."
    },
    {
      id: 6,
      event: "How were member states expected to contribute militarily?",
      options: { "1": "By maintaining independent armies", "2": "By integrating into a unified force", "3": "They were exempted from military service" },
      correct: "2",
      prompt: "Correct! They had to provide troops for a unified military structure."
    },
    {
      id: 7,
      event: "What long-term impact did the Confederation have on German politics?",
      options: { "1": "It directly led to German unification", "2": "It strengthened the old imperial order", "3": "It isolated France from European affairs" },
      correct: "1",
      prompt: "Right! It set the stage for later unification movements."
    },
    {
      id: 8,
      event: "Which strategy best describes Napoleon’s approach with the Confederation?",
      options: { "1": "Divide and rule", "2": "Full integration", "3": "Complete autonomy for states" },
      correct: "1",
      prompt: "Absolutely! 'Divide and rule' was central to his policy."
    },
    {
      id: 9,
      event: "How is the Confederation of the Rhine viewed historically?",
      options: { "1": "As a fleeting experiment", "2": "As a cornerstone for future unity", "3": "As an insignificant episode" },
      correct: "2",
      prompt: "Excellent! It is recognized as a key precursor to modern unity."
    }
  ],
  "Napoleonic Reforms": [
    {
      id: 0,
      event: "What was the main aim of the Napoleonic Reforms in the former HRE territories?",
      options: { "1": "To reinstate feudal privileges", "2": "To modernize and rationalize administration", "3": "To promote religious uniformity" },
      correct: "2",
      prompt: "Correct! The reforms sought to modernize state structures."
    },
    {
      id: 1,
      event: "Which legal framework was introduced as a part of these reforms?",
      options: { "1": "The Napoleonic Code", "2": "The Code of Justinian", "3": "The Code of Chivalry" },
      correct: "1",
      prompt: "Right! The Napoleonic Code redefined the legal landscape."
    },
    {
      id: 2,
      event: "How did these reforms affect social mobility?",
      options: { "1": "They reinforced aristocratic privileges", "2": "They promoted meritocracy", "3": "They eliminated social distinctions" },
      correct: "2",
      prompt: "Exactly! Merit became more important than birthright."
    },
    {
      id: 3,
      event: "Which administrative change was most central to the reforms?",
      options: { "1": "Decentralizing power", "2": "Creating a centralized bureaucracy", "3": "Returning power to local lords" },
      correct: "2",
      prompt: "Correct! A centralized bureaucracy was key to the reforms."
    },
    {
      id: 4,
      event: "What economic measure was standardized under the reforms?",
      options: { "1": "Local barter systems", "2": "Uniform tax collection", "3": "Feudal levies" },
      correct: "2",
      prompt: "Right! Uniform tax systems helped stabilize the economy."
    },
    {
      id: 5,
      event: "How did education change as a result of these reforms?",
      options: { "1": "It was limited to the aristocracy", "2": "State-sponsored education was promoted", "3": "Education was largely ignored" },
      correct: "2",
      prompt: "Exactly! The reforms encouraged broader access to education."
    },
    {
      id: 6,
      event: "What social effect did the reforms have on career advancement?",
      options: { "1": "They diminished social mobility", "2": "They fostered merit-based advancement", "3": "They created a rigid caste system" },
      correct: "2",
      prompt: "Correct! Advancement was increasingly based on merit."
    },
    {
      id: 7,
      event: "How did the reforms impact local governance?",
      options: { "1": "By standardizing administrative practices", "2": "By abolishing local councils", "3": "By returning power to the nobility" },
      correct: "1",
      prompt: "Right! Standardization was a central goal."
    },
    {
      id: 8,
      event: "What long-term institutional change resulted from the reforms?",
      options: { "1": "The creation of modern state institutions", "2": "The restoration of feudal rights", "3": "Economic isolation" },
      correct: "1",
      prompt: "Absolutely! Modern state institutions emerged from these reforms."
    },
    {
      id: 9,
      event: "Overall, how are the Napoleonic Reforms viewed in European history?",
      options: { "1": "As minor tweaks", "2": "As groundbreaking changes", "3": "As regressive measures" },
      correct: "2",
      prompt: "Excellent! They are seen as pivotal in modernizing Europe."
    }
  ],
  "Congress of Vienna": [
    {
      id: 0,
      event: "What was the primary goal of the Congress of Vienna after Napoleon’s defeat?",
      options: { "1": "To punish France harshly", "2": "To restore a balance of power in Europe", "3": "To promote revolutionary ideals" },
      correct: "2",
      prompt: "Correct! Restoring balance was the key objective."
    },
    {
      id: 1,
      event: "Which major power was a dominant force at the Congress?",
      options: { "1": "France", "2": "Russia", "3": "Spain" },
      correct: "2",
      prompt: "Right! Russia played a leading role in the negotiations."
    },
    {
      id: 2,
      event: "How did the Congress view the defunct Holy Roman Empire?",
      options: { "1": "They sought to revive it", "2": "They accepted its dissolution", "3": "They ignored its legacy" },
      correct: "2",
      prompt: "Exactly! Its end was accepted as a new beginning."
    },
    {
      id: 3,
      event: "What principle guided the redrawing of borders at the Congress?",
      options: { "1": "Legitimacy", "2": "National self-determination", "3": "The balance of power" },
      correct: "3",
      prompt: "Correct! Ensuring a balance of power was paramount."
    },
    {
      id: 4,
      event: "Which treaty emerged from the Congress's decisions?",
      options: { "1": "Treaty of Paris", "2": "Treaty of Vienna", "3": "No formal treaty was signed" },
      correct: "2",
      prompt: "Right! The Treaty of Vienna formalized many decisions."
    },
    {
      id: 5,
      event: "How did the Congress approach Napoleon’s revolutionary changes?",
      options: { "1": "They rejected all of them", "2": "They selectively adopted some", "3": "They embraced them fully" },
      correct: "2",
      prompt: "Exactly! They integrated certain reforms while restoring conservative order."
    },
    {
      id: 6,
      event: "What long-term effect did the Congress have on Europe?",
      options: { "1": "A century of relative peace", "2": "Constant warfare", "3": "The immediate collapse of monarchies" },
      correct: "1",
      prompt: "Correct! The Concert of Europe helped maintain peace for decades."
    },
    {
      id: 7,
      event: "Which mood best characterized the deliberations at the Congress?",
      options: { "1": "Revolutionary enthusiasm", "2": "Conservative restoration", "3": "Indifference" },
      correct: "2",
      prompt: "Right! A conservative, restorative spirit prevailed."
    },
    {
      id: 8,
      event: "How were territorial disputes resolved at the Congress?",
      options: { "1": "Through unilateral decisions", "2": "By mediating compromises", "3": "They were left unresolved" },
      correct: "2",
      prompt: "Absolutely! Compromise was the key to resolving disputes."
    },
    {
      id: 9,
      event: "Overall, what legacy is the Congress of Vienna remembered for?",
      options: { "1": "Laying the foundations of modern diplomacy", "2": "Being a short-lived agreement", "3": "Having no lasting impact" },
      correct: "1",
      prompt: "Excellent! Its legacy endures in modern European diplomacy."
    }
  ],
  "German Unification": [
    {
      id: 0,
      event: "Which event linked Napoleon’s influence directly to the later unification of Germany?",
      options: { "1": "The dissolution of the HRE", "2": "The establishment of the Confederation of Rhine", "3": "The Congress of Vienna" },
      correct: "2",
      prompt: "Correct! The Confederation of Rhine set the stage for unification."
    },
    {
      id: 1,
      event: "How did Napoleon’s policies inadvertently foster German nationalism?",
      options: { "1": "By uniting disparate states", "2": "By suppressing German culture", "3": "By encouraging regional isolation" },
      correct: "1",
      prompt: "Right! His reforms brought the German states closer together."
    },
    {
      id: 2,
      event: "What role did the Napoleonic Code play in the process of unification?",
      options: { "1": "It was largely irrelevant", "2": "It provided a common legal framework", "3": "It hindered political progress" },
      correct: "2",
      prompt: "Exactly! A shared legal code helped bind the states together."
    },
    {
      id: 3,
      event: "Which state emerged as the leader in the movement towards unification?",
      options: { "1": "Austria", "2": "Prussia", "3": "Bavaria" },
      correct: "2",
      prompt: "Correct! Prussia led the unification efforts."
    },
    {
      id: 4,
      event: "How did military reforms influenced by Napoleon affect German unification?",
      options: { "1": "They weakened local forces", "2": "They modernized the armies", "3": "They were largely ignored" },
      correct: "2",
      prompt: "Right! Modernized armies played a crucial role."
    },
    {
      id: 5,
      event: "Which conflict catalyzed the final steps toward unification?",
      options: { "1": "The Austro-Prussian War", "2": "The Franco-Prussian War", "3": "World War I" },
      correct: "1",
      prompt: "Exactly! The Austro-Prussian War was a key catalyst."
    },
    {
      id: 6,
      event: "What cultural effect did Napoleon’s influence have on the German states?",
      options: { "1": "Suppression of the German language", "2": "A revival of German literature and philosophy", "3": "An adoption of French customs" },
      correct: "2",
      prompt: "Correct! A cultural revival helped spark national pride."
    },
    {
      id: 7,
      event: "How did administrative changes introduced by Napoleon impact later unification?",
      options: { "1": "They complicated governance", "2": "They laid the foundation for modern administration", "3": "They were completely rejected" },
      correct: "2",
      prompt: "Right! Modern administrative practices emerged from his reforms."
    },
    {
      id: 8,
      event: "In economic terms, what legacy did Napoleon leave that aided unification?",
      options: { "1": "Fragmented trade policies", "2": "Harmonized economic practices", "3": "Severe economic isolation" },
      correct: "2",
      prompt: "Absolutely! Economic harmonization fostered closer ties among the states."
    },
    {
      id: 9,
      event: "Overall, what is considered Napoleon’s most enduring contribution to German Unification?",
      options: { "1": "A common legal and administrative framework", "2": "His prowess as a military conqueror", "3": "His support for traditional monarchies" },
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
