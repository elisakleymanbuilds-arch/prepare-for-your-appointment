const STORAGE_KEY_NOTES = "pya_notes";
const STORAGE_KEY_QUESTIONS = "pya_questions";

const questionForm = document.getElementById("questionForm");
const userSituation = document.getElementById("userSituation");
const userConcern = document.getElementById("userConcern");
const questionsList = document.getElementById("questionsList");
const emptyStateQuestions = document.getElementById("emptyStateQuestions");
const validationAlert = document.getElementById("validationAlert");
const doctorNotes = document.getElementById("doctorNotes");
const saveNotesBtn = document.getElementById("saveNotesBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const saveStatus = document.getElementById("saveStatus");

function showValidationAlert(message) {
  validationAlert.textContent = message;
  validationAlert.style.display = "block";
}

function hideValidationAlert() {
  validationAlert.textContent = "";
  validationAlert.style.display = "none";
}

function generateQuestions() {
  return [
    "What do these results mean, and what should I understand from them?",
    "Is there anything else I should ask about or have checked?",
    "What should I do next after this appointment?",
    "When should I follow up with you or have another appointment?"
  ];
}

function displayQuestions(questions) {
  questionsList.innerHTML = "";

  questions.forEach(function(question, index) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "question-" + index;

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = question;
    label.style.fontWeight = "normal";
    label.style.margin = "0";

    li.appendChild(checkbox);
    li.appendChild(label);
    questionsList.appendChild(li);
  });

  emptyStateQuestions.style.display = "none";
  questionsList.style.display = "block";
}

questionForm.addEventListener("submit", function(event) {
  event.preventDefault();

  hideValidationAlert();

  const situation = userSituation.value.trim();
  const concern = userConcern.value.trim();

  if (!situation || !concern) {
    showValidationAlert(
      "Please complete both fields before preparing your questions."
    );
    return;
  }

  const questions = generateQuestions();

  localStorage.setItem(STORAGE_KEY_QUESTIONS, JSON.stringify(questions));

  displayQuestions(questions);
});

saveNotesBtn.addEventListener("click", function() {
  const notes = doctorNotes.value.trim();

  localStorage.setItem(STORAGE_KEY_NOTES, notes);

  saveStatus.textContent = "Saved to your browser!";
  saveStatus.style.display = "inline";

  setTimeout(function() {
    saveStatus.style.display = "none";
  }, 2500);
});

clearAllBtn.addEventListener("click", function() {
  localStorage.removeItem(STORAGE_KEY_NOTES);
  localStorage.removeItem(STORAGE_KEY_QUESTIONS);

  userSituation.value = "";
  userConcern.value = "";
  doctorNotes.value = "";

  questionsList.innerHTML = "";
  questionsList.style.display = "none";
  emptyStateQuestions.style.display = "block";

  hideValidationAlert();
  saveStatus.style.display = "none";
});

window.addEventListener("DOMContentLoaded", function() {
  const savedNotes = localStorage.getItem(STORAGE_KEY_NOTES);
  const savedQuestions = localStorage.getItem(STORAGE_KEY_QUESTIONS);

  if (savedNotes) {
    doctorNotes.value = savedNotes;
  }

  if (savedQuestions) {
    try {
      const questions = JSON.parse(savedQuestions);
      displayQuestions(questions);
    } catch (error) {
      console.error("Could not load saved questions.", error);
    }
  }
});
