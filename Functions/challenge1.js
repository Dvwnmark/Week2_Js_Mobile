const poll = {
  question: 'What is your favorite programming language?',
  options: ['JavaScript', 'Python', 'Rust', 'C++'],
  answers: [0, 0, 0, 0],

  // Method to register a new answer
  registerNewAnswer() {
    const input = prompt(
      `${this.question}\n${this.options
        .map((option, index) => `${index}: ${option}`)
        .join('\n')}\n(Write option number)`
    );

    const answer = parseInt(input);

    if (!isNaN(answer) && answer >= 0 && answer < this.options.length) {
      this.answers[answer]++;
      this.displayResults();
    } else {
      alert('Invalid input. Please enter a valid option number.');
    }
  },

  // Method to display poll results
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus: Display results for test data
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: testData1 }); // Display as array
poll.displayResults.call({ answers: testData1 }, 'string'); // Display as string

poll.displayResults.call({ answers: testData2 }); // Display as array
poll.displayResults.call({ answers: testData2 }, 'string'); // Display as string
