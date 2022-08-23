$(document).ready(function() {
    
    // Varibles
    let answerDiv = document.querySelector('#printAnswers');
    let counter = 15
    let correct = 0;
    let correctAnswer;
    let correctAnswerDiv = document.querySelector('#correctAnswer');
    let correctCount = document.querySelector('#correctCount');
    let getBankData;
    let getCorrectAnswer;
    let $heading = $('h1');
    let incorrect = 0;
    let incorrectCount = document.querySelector('#incorrectCount');
    let number = 0;
    let questionDiv = document.querySelector('#printQuestions');
    let randomQuestion;
    let results = document.querySelector('#printResults');
    let seconds;
    let showCorrectAnswer;
    let timeRemaining = document.querySelector('#time');
    let yourAnswer;
    let yourScore = document.querySelector('#yourScore');
    
    ///// ATTENTION !!!! jQuery method to update HTML
    // To position content in their respective div element.
    $('#printResults').css('margin', ' 75px auto');
    $('#correctAnswer').css('margin', ' -75px auto');
    
    ///// ATTENTION !!!! jQuery method to update HTML
    // To hide these elements
    $('#correctCountDiv').hide();
    $('#incorrectCountDiv').hide();
    $('#yes').hide();
    $('#no').hide();
    $('#next').hide();
    $('h2').hide();
    $('.green-box').hide();
    $('#viewAnswers').hide();
    
    let questionBank  = []; // To contain data from object instances.
    
    ///// ATTENTION !!!!  Constructor function 
    function MarketQuiz() {
        
        ///// ATTENTION !!!! Object method
        this.data = function(bankData) {
            questionBank.push(bankData); // privileged member since it can access the private variable questionBank.
        };
    }
    
    // Object instances created from constructor function.
    let dowJones = new MarketQuiz();
    dowJones.data ({questionText:'How many stock are in the Dow Jones Industry Average?' ,answers: ['10' ,'30', '100', '200'], correctAnswer: 1});
    
    let openingBell = new MarketQuiz();
    openingBell.data({questionText:'What time is the opening bell at the New York Stock Exchange?' ,answers: ['6am' ,'8:30am', '9:30am', '9am'], correctAnswer: 2});
    
    let closingBell = new MarketQuiz();
    closingBell.data({questionText:'What time is the closing bell at the New York Stock Exchange?' ,answers: ['noon' ,'1:00pm', '3:00pm', '4:00pm'], correctAnswer: 3});
    
    let shares = new MarketQuiz();
    shares.data({questionText:'How many shares of stock is a round lot?' ,answers: ['10' ,'20', '60', '100'], correctAnswer: 3});
    
    let position = new MarketQuiz();
    position.data({questionText:'If you purchase shares of stock what is your position?' ,answers: ['long' ,'long-term', 'short', 'short-term'], correctAnswer: 0});
    
    let ceo = new MarketQuiz();
    ceo.data({questionText:'Which index is considered the benchmark for stock market performance ?' ,answers: ['Dow Jones' ,'Nasdaq', 'S&P 500', 'Russell 2000'], correctAnswer: 2});
    
    // To get a random object from array of objects
    function getOuestionData() {
        randomQuestion = (Math.floor(Math.random() * questionBank.length - 1) +1);
        getBankData = questionBank[randomQuestion];
        getCorrectAnswer = questionBank[randomQuestion].correctAnswer;
        return getBankData;
    }
    
    // To update the DOM w/ a random question. 
    function print(object) {

        ///// ATTENTION !!!! To update HTML w/ javaScript
         questionDiv.textContent = (` ${object['questionText']}`); 
        // To wrap each answer in a button.
        for (let i = 0; i < object['answers'].length; i++){
            number++;
            $('#printAnswers').append(`<button class= "btnAnswer answer${number-1}">  ${object['answers'][i]} </button>`); 
        } 
        // To grab the correct answer which is a number
        correctAnswer = `${object['correctAnswer']}`
        
        // To grab the correct answer from the array of answers in the object. 
        showCorrectAnswer = `${object['answers'][correctAnswer]}`
        
        // To reset number to 0 after a set of question has been answered or time has run out.
        // Number dynamically changes the class on the button elements.
        number > 3 ? number = 0 : number = number;
    }

    // To set the font color for incorrectCount and correctCount
    incorrectCount.style.color = 'red';
    correctCount.style.color = 'lightgreen';
    
    // To update what is written to the screen.
    function updateScreen() {
        if (counter > 5){
            timeRemaining.style.color = 'white' ; 
            questionBank.length === 6 ? 
            ///// ATTENTION !!!! jQuery method chains 
            $heading.text('Question #1').css('color','#1cac43') : questionBank.length === 5 ?
            $heading.text('Question #2').css('color','#1cac43') : questionBank.length === 4 ?
            $heading.text('Question #3').css('color','#1cac43') : questionBank.length === 3 ?
            $heading.text('Question #4').css('color','#1cac43') : questionBank.length === 2 ?
            $heading.text('Question #5').css('color','#1cac43') : questionBank.length === 1 ?
            $heading.text('Question #6').css('color','#1cac43') :
            $heading.text('Stock Market Quiz')
        }else if (counter === 4) {
            $heading.text('Hurry!').css('color','yellow');
        } else if (counter === 3) {
            timeRemaining.style.color = 'red';
        } else if (counter < 0) {
            results.textContent = '';
            clearInterval(seconds);
            $heading.text('Time!').css('color','red')
            seconds = setInterval(countdown, 1000);
        } 
        // To increment the incorrect by if counter is 0.
        counter < 0 ? incorrectCount.textContent = incorrect++ +1 : incorrect;
        
        // To remove questionBank index if counter is 0. 
        counter < 0 ? questionBank.splice(randomQuestion,1) : counter;
        
        // To show correct answer when time runs out.
        if(counter < 0){
            results.textContent = `The Answer is: ${showCorrectAnswer}`;
            answerDiv.textContent='';
            clearInterval(seconds);
            results.style.color=' white';
            $('#next').show();
        }
        
        // function call
        getScore();
    }
    
    // Run this function at the end of each interval.
    function countdown() { 
        
        // Display the countdown and then decrement the counter.
        timeRemaining.textContent = counter--;
        
        // function call
        updateScreen();
    }
    
    // To check questionBank.length and update the screen by hiding the the appropriate elements and showing the yes and no buttons. 
    function retakeQuiz() {
        if(questionBank.length === 0) {
            ///// ATTENTION !!!! jQuery method chain and methods to update HTML 
            $heading.text('Retake Quiz').css('color','#1cac43');
            $('#printAnswers').hide();
            $('#correctAnswer').hide();
            $('h2').hide();
            $('button').hide();
            $('#printQuestions').show();
            $('#printResults').show();
            $('#yes').show();
            $('#no').show();
        }
        return questionBank.length;
    }

    // To get score and update the screen.
    function getScore() {
        questionBank.length === 0 ? timeRemaining.textContent = '': questionBank;
        if(questionBank.length === 0 && incorrect === 0) {
            $('#yourScore').css('margin','auto');
            setTimeout(function() {
                yourScore.textContent = `Your Score: ${((correct/6) * 100).toPrecision(3)}%`;
            },1000)
            questionDiv.textContent = '';
            setTimeout(function() {
                results.textContent = '';
            },1000);
        } else if(questionBank.length === 0) {
            $('#yourScore').css('margin', 'auto');
            setTimeout(function() {
                yourScore.textContent = `Your Score: ${((correct/6) * 100).toPrecision(3)}%`;
            },2000)
            questionDiv.textContent = '';
            setTimeout(function() {
                results.textContent = '';
            },1000);
        }
        questionBank.length === 0 ?  clearInterval(seconds) : questionBank;
        retakeQuiz();  // function call
        return yourScore;
    }
    
    // EventListener that listens for the yes or no button to be clicked.
    document.body.addEventListener('click', (e) => {
        if (e.target.id === 'yes') {
            window.location.reload(true);       // reload when "yes" is clicked
        } else if (e.target.id === 'no' &&  yourScore.textContent === `Your Score: ${100}%`) {
            $('#container').hide();
            // display when "no" is clicked
            $heading.text('Great Job!').css('margin', ' 300px auto'); 
            setTimeout(function() {
                window.location.reload(true);       
            },3000);
            } else if (e.target.id === 'no' &&  yourScore.textContent <= `Your Score: ${67.5}%`) {
                $('#container').hide();
                // display when "no" is clicked
                $heading.text('Take more time to study!').css('margin', ' 300px auto'); 
                setTimeout(function() {
                    window.location.reload(true);       
                },3000);
            } else if (e.target.id === 'no' && yourScore.textContent === `Your Score: ${83.3}%`) {
                $('#container').hide();
                // display when "no" is clicked
                $heading.text('There is room for improvement!').css('margin', ' 300px auto'); 
                setTimeout(function() {
                    window.location.reload(true);       
                },3000);
        } else if (e.target.id === 'next') {
            // when next question button is clicked
            questionDiv.textContent = '';
            answerDiv.textContent = '';
            results.textContent = '';
            print(getOuestionData());
            seconds = setInterval(countdown, 1000);
            counter = 15;
            $('#next').hide();
        }
    });

    // Click event for the ready button.
    $('#ready').click(function() {
        $heading.text('  STOCK MARKET QUIZ');
        print(getOuestionData());               // function call when clicked 
        seconds = setInterval(countdown, 1000);
        $('#ready').hide();
        $('#correctCountDiv').show();
        $('#incorrectCountDiv').show();
        $('#tickerDiv').hide();
        $('#randomEvents').hide();
        $('h2').show();
        $('.green-box').show();
        $('.quizInstructionsDiv').hide();
    });
    
    // EventListener for the answer buttons
    $('#printAnswers').click(function(e) {
        $('#printAnswers').hide();
        $('#printQuestions').hide();
        retakeQuiz();
        questionBank.splice(randomQuestion,1 ); // To remove questionBank data
        setTimeout(function() {
            counter = 15                         // To reset 
            getScore();
        },1000);

        // To grab the last index of a button element's className and store it in a variable called yourAnswer. Which will be used to compare to getCorrectAnswer.
        yourAnswer = e.target.className[e.target.className.length-1];
        
        if(getCorrectAnswer == yourAnswer){
            correct++;
            correctCount.textContent = correct;
            results.textContent = 'Correct';
            setTimeout(function() {
                results.textContent = '';
            },1000);       
            results.style.color=' lightgreen';
            answerDiv.textContent = '';
            print(getOuestionData());
        } else {
            incorrect++;
            incorrectCount.textContent = incorrect;
            results.textContent = 'Incorrect';
            correctAnswerDiv.textContent = `The Answer is: ${showCorrectAnswer}`;
            setTimeout(function() {
                results.textContent = '';
                correctAnswerDiv.textContent= '';
            },1000);
            results.style.color='red';
            answerDiv.textContent = '';
            print(getOuestionData());
        }
        setTimeout(function() {
            $('#printAnswers').show();
            $('#printQuestions').show();
        },1000);
    });
});

    
    



