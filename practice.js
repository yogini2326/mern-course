// Sample dataset: List of course topics with completion status
const topics = [
  { name: 'HTML & CSS', hours: 5, completed: true },
  { name: 'Git & GitHub', hours: 3, completed: true },
  { name: 'Node.js Basics', hours: 4, completed: true },
  { name: 'ES6+ JavaScript', hours: 6, completed: false },
  { name: 'React Fundamentals', hours: 10, completed: false }
];

// 1. FILTER: Find only completed topics using an arrow function
const completedTopics = topics.filter(topic => topic.completed);
console.log('--- Completed Topics ---');
console.log(completedTopics);

// 2. MAP: Create an array of summary string sentences
const topicSummaries = topics.map(topic => 
  `${topic.name} takes ${topic.hours} hours.`
);
console.log('\n--- Topic Summaries ---');
console.log(topicSummaries);

// 3. REDUCE: Calculate the total hours required for all topics
const totalHours = topics.reduce((sum, topic) => sum + topic.hours, 0);
console.log('\n--- Total Study Time ---');
console.log(`Total required time: ${totalHours} hours`);