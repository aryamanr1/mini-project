const questionElement = document.getElementById('question');
const answerOptionsElement = document.getElementById('answer-options');
const scoreElement = document.getElementById('score');

const quizData = [
    // ... (your quiz data here)
    {
        question: 'Who was the first Emperor of the Maurya Empire?',
        options: ['Ashoka', 'Chandragupta Maurya', 'Bindusara', 'Akbar'],
        answer: 'Chandragupta Maurya'
    },
    {
        question: 'The Indus Valley Civilization was primarily centered around which modern-day country?',
        options: ['India', 'Pakistan', 'Bangladesh', 'Nepal'],
        answer: 'Pakistan'
    },
    {
        question: 'Who is known as the "Father of the Indian Constitution"?',
        options: ['Jawaharlal Nehru', 'B.R. Ambedkar', 'Mahatma Gandhi', 'Sardar Patel'],
        answer: 'B.R. Ambedkar'
    },
    {
        question: 'The Indian Rebellion of 1857 is also known as:',
        options: ['The Sepoy Mutiny', 'The Great Revolt', 'The Indian Uprising', 'The Freedom Struggle'],
        answer: 'The Sepoy Mutiny'
    },
    {
        question: 'Which event marked the official beginning of the Indian independence movement?',
        options: ['The Salt March', 'The Quit India Movement', 'The Partition of Bengal', 'The First War of Independence'],
        answer: 'The Partition of Bengal'
    },
    {
        question: 'The Taj Mahal was built by Emperor Shah Jahan in memory of:',
        options: ['His wife Mumtaz Mahal', 'His daughter Jahanara', 'His mother Nur Jahan', 'His sister Roshanara'],
        answer: 'His wife Mumtaz Mahal'
    },
    {
        question: 'Who led the Dandi March (Salt March) as a part of the civil disobedience movement?',
        options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel', 'Subhas Chandra Bose'],
        answer: 'Mahatma Gandhi'
    },
    {
        question: 'The Battle of Plassey, which laid the foundation for British rule in India, was fought in the year:',
        options: ['1757', '1857', '1947', '1764'],
        answer: '1757'
    },
    {
        question: 'The Indian National Congress was founded in the year:',
        options: ['1857', '1885', '1905', '1947'],
        answer: '1885'
    },
    {
        question: 'Who was the first woman Prime Minister of India?',
        options: ['Sarojini Naidu', 'Indira Gandhi', 'Mother Teresa', 'Rani Lakshmibai'],
        answer: 'Indira Gandhi'
    },

        {
            question: 'Which river is known as the "Ganges" in India?',
            options: ['Yamuna', 'Brahmaputra', 'Indus', 'Ganga'],
            answer: 'Ganga'
        },
        {
            question: 'Which mountain range forms the northern boundary of India?',
            options: ['Western Ghats', 'Eastern Ghats', 'Himalayas', 'Aravalli Range'],
            answer: 'Himalayas'
        },
        {
            question: 'The city of Mumbai is located along which coastline of India?',
            options: ['Eastern Coast', 'Western Coast', 'Northern Coast', 'Southern Coast'],
            answer: 'Western Coast'
        },
        {
            question: 'Which desert is located in the northwestern part of India?',
            options: ['Thar Desert', 'Sahara Desert', 'Rann of Kutch', 'Gobi Desert'],
            answer: 'Thar Desert'
        },
        {
            question: 'Which state in India is known as the "Land of Five Rivers"?',
            options: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Rajasthan'],
            answer: 'Punjab'
        },
        {
            question: 'Which is the largest freshwater lake in India?',
            options: ['Chilika Lake', 'Dal Lake', 'Wular Lake', 'Vembanad Lake'],
            answer: 'Wular Lake'
        },
        {
            question: 'Which is the southernmost point of the Indian mainland?',
            options: ['Kanyakumari', 'Goa', 'Cape Comorin', 'Rameswaram'],
            answer: 'Kanyakumari'
        },
        {
            question: 'Which river flows through the Sundarbans mangrove forest in India?',
            options: ['Yamuna', 'Ganges', 'Brahmaputra', 'Godavari'],
            answer: 'Ganges'
        },
        {
            question: 'Which Indian state is known as the "Land of Seven Sisters"?',
            options: ['Meghalaya', 'Assam', 'Nagaland', 'Arunachal Pradesh'],
            answer: 'Arunachal Pradesh'
        },
            
];

let remainingQuestions = [...quizData];
let score = 0;

function initializeQuiz() {
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    loadRandomQuestion();
}

function loadRandomQuestion() {
    if (remainingQuestions.length === 0) {
        displayFinalScore();
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const currentQuestion = remainingQuestions[randomIndex];
    questionElement.textContent = currentQuestion.question;

    answerOptionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => checkAnswer(button, currentQuestion.answer));
        answerOptionsElement.appendChild(button);
    });

    remainingQuestions.splice(randomIndex, 1);
}

function checkAnswer(selectedButton, correctAnswer) {
    if (selectedButton.textContent === correctAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        displayMessage('Correct!', 'green');
    } else {
        displayMessage('Wrong! Quiz has ended.', 'red');
        answerOptionsElement.innerHTML = '';
        remainingQuestions = []; // Clear remaining questions to end the quiz
    }
    setTimeout(loadRandomQuestion, 1500); // Load next random question after a delay
}

function displayMessage(message, color) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.color = color;
    answerOptionsElement.appendChild(messageElement);
}

function displayFinalScore() {
    questionElement.textContent = 'Quiz Completed!';
    answerOptionsElement.innerHTML = '';
    const finalScoreMessage = document.createElement('p');
    finalScoreMessage.textContent = `Your final score is: ${score}`;
    finalScoreMessage.style.fontSize = '20px';
    finalScoreMessage.style.fontWeight = 'bold';
    answerOptionsElement.appendChild(finalScoreMessage);
}


initializeQuiz();
