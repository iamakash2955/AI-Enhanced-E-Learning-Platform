// Speech Recognition
const startRecognition = document.getElementById('start-recognition');
const content = document.getElementById('content');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  content.textContent = transcript;
};

startRecognition.addEventListener('click', () => {
  recognition.start();
});

// Text-to-Speech
const startSpeech = document.getElementById('start-speech');

startSpeech.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(content.textContent);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
});

// Course Recommendations
const recommendCourses = document.getElementById('recommend-courses');
const recommendations = document.getElementById('recommendations');

const courses = [
  { id: 1, title: "AI for Beginners", category: "AI" },
  { id: 2, title: "Advanced Machine Learning", category: "AI" },
  { id: 3, title: "Introduction to HTML", category: "Web Development" },
  { id: 4, title: "CSS for Beginners", category: "Web Development" },
];

recommendCourses.addEventListener('click', () => {
  const userPreferences = ["AI", "Web Development"];
  const recommendedCourses = courses.filter(course => userPreferences.includes(course.category));
  recommendations.innerHTML = `<h2>Recommended Courses</h2><ul>${recommendedCourses.map(course => `<li>${course.title}</li>`).join('')}</ul>`;
});

// Content Summarization
const summarizeContent = document.getElementById('summarize-content');
const summary = document.getElementById('summary');

summarizeContent.addEventListener('click', () => {
  const sentences = content.textContent.split('. ');
  const summaryText = sentences.slice(0, 2).join('. ') + '.';
  summary.textContent = summaryText;
});

// Adaptive Learning Pathways
const adaptPath = document.getElementById('adapt-path');
const learningPath = document.getElementById('learning-path');

adaptPath.addEventListener('click', () => {
  const performance = Math.random(); // Simulating performance metric
  let path;
  if (performance > 0.7) {
    path = 'Advanced Learning Path';
  } else {
    path = 'Basic Learning Path';
  }
  learningPath.innerHTML = `<h2>${path}</h2>`;
});
