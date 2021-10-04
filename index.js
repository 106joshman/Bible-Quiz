function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
        showScores()
    }
    else {
        // show questions
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        // show possible answers
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
};


function showScores() {
    var gameOverHTML = "<h3>Result</h3>";
    gameOverHTML += "<h4 id='score'> Your scores: " + quiz.score + "</h4>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// questions here
var questions = [
    new Question("How many books are there in the Bible?", [27, 39, 66,75], 66),
    new Question("Which is the last of the gospels?", ["Mark", "Matthew", "John", "Luke"], "John"),
    new Question("Which of these is a book of prophecy?", ["Joshua", "Nehemiah", "Ezra", "Nahum"], "Nahum"),
    new Question("Who wrote the book of Acts?", ["Luke", "Paul", "John", "James"], "Luke"),
    new Question("How many Psalms are there in the Bible?", [119, 134, 150, 175], 150),
    new Question("Which prophet tried to escape from preaching God's word in Nineveh?", ["Haggai", "Micah", "Jonah", "Nahum"], "Jonah"),
    new Question("Which of these books is part of the Pentateuch?", ["Exodus", "Joshua", "Daniel", "judges"], "Exodus"),
    new Question("in which book would you find the record of Balaam and his donkey?", ["1 Chronicles", "Ecclesiastes", "Ruth", "Numbers"], "Numbers"),
    new Question("Which gospel was written by a tax collector?", ["Zechariah", "Matthew", "Esther", "All"], "Matthew"),
    new Question("In which book can we find Nebuchadnezzar's image?", ["Romans", "Jeremiah", "Daniel", "Jeremiah"], "Daniel"),
    new Question("What book is the shortest book in the old Testament?", ["Obadiah", "Amos", "Jude", "Micah"], "Obadiah"),
    new Question("What is the longest book(Chapters & verses) in the New Testament?", ["Acts", "Hebrews", "Matthew", "Revelation"], "Acts"),
    new Question("In which book would we find Haman, the son of Hammedatha?", ["Ezra", "Jeremiah", "Esther", "Romans"], "Esther"),
    new Question("Which book of the Bible begins the book of the generation of Jesus christ, the son of David, the son of Abraham?", ["Matthew", "Mark", "Luke", "John"], "Matthew"),
    new Question("Who did Paul write to concerning his slave Onesimus?", ["A King", "Titus", "A Priest", "Philemon"], "Philemon"),
    new Question("Which book comes after Job?", ["Esther", "Psalms", "Daniel", "Ezekiel"], "Psalms"),
    new Question("Noah sent out a raven from the ark?", ["Maybe", "True", "Most likely", "False"], "True"),
    new Question("The son of Zebedee were Peter and Andrew", ["False", "I don\'t Know", "True", "Not sure"], "False"),
    new Question("The Holy spirit looked like a dove when the disciples received it?", ["True", "Maybe", "Most likely", "All"], "True"),
    new Question("Did PAul circumcise Timothy?", ["Yes", "No", "Not sure", "Maybe"], "Yes"),
    new Question("Paul was educated at the feet of Gamaliel?", ["True", "At Damascus", "In Rome", "False"], "True"),
    new Question("Solomon wrote 2000 songs in his life time?", ["True", "False", "Skeptical", "Maybe"], "False"),
    new Question("Who were the first disciples called to follow Jesus?", ["Peter & Andrew", "Judah", "Barthlomew", "John"], "Peter & Andrew"),
    new Question("Which prophet recognized Jesus as the Messiah when he was presented at the Temple as a baby?", ["Zechariah", "Jeremiah", "Simeon", "Elijah"], "Simeon"),
    new Question("paul was ship wrecked on what island?", ["Patmos", "Samos", "Malta", "Samothrace"], "Malta"),
    new Question("What tribe is Paul from?", ["Yoruba", "Hebrew", "Benjamin", "Roman"], "Benjamin"),
    new Question("Who was the first christian matyr?", ["Barnabas", "Stephen", "Silas", "Jesus"], "Stephen"),
    new Question("According to Paul in 1 Corinthians, which is the greatest of the imperishable qualities?", ["Joy", "Happiness", "Love", "Wickedness"], "Love"),
    new Question("Who murdered John the Baptist?", ["Pharaoh", "Herod Antipas", "Pilate", "Portiphar"], "Herod Antipas"),
    new Question("For the wages of sin is Death and the gift of God is eternal ----, where is this written?", ["Life, Romans", "Life, John", "Love, Colossians", "All"], "Life, Romans")
];

var quiz = new Quiz(questions);

// display quiz
populate();