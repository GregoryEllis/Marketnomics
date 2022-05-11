$(document).ready(function() {
    
    // To hide the instructions
    $('#instructMsg').hide();
    
    // To listen for the warning button and the instruction to be clicked
    document.body.addEventListener('click', (e) => {
        if(e.target.className === 'instructBtn') {
            $('#instructMsg').toggle();
        }
    });
    
    let risk;
    let riskOutput = document.querySelector('#riskOutput');
    
    // To get and display portfolio risk
    function riskAssessment(stocks, bonds, bitcoins) {
        if(bitcoins >= 40) {
            risk = 'Highly Aggressive';
        } else if(bonds >= 95 ) {
            risk = 'Highly Conservative';
        } else if(bitcoins < 40 && bitcoins >= 25 && bonds > 0 && bonds <= 50 && stocks > 0 && stocks <=50 || stocks >= 75) {
            risk = 'Aggressive';
        } else if(bitcoins >= 5 && bitcoins < 25 && bonds > 25 && bonds <= 90 && stocks <= 5 || stocks >= 25 && stocks <= 50 && bonds >= 25 && bonds < 50) {
            risk = 'Semi Aggressive';
        }else if(bitcoins < 5 && bonds >= 50 || stocks > 25 && stocks <= 50 && bonds >= 50) {
            risk = 'Conservative';
        }
        return riskOutput.textContent =`${risk}`;
    }
    
    ///// ATTENTION !!!! Canvas code starts here
    // To display pie chart.
    let canvas = document.querySelector('#canvas');
    let cx = canvas.getContext("2d");
    
    // To store default values for the pie chart
    let results = [
        { percent: 33.5, color: "green"},
        { percent: 33, color: "yellow"},
        { percent: 33.5, color: "yellowgreen"}
    ]
    
    // To update the pie chart values
    function getResults(arr) {
        for(let i = 0; i < arr.length; i++){
            results[i].percent = arr[i].percent = arr[i];
        }
    }
    
    // To get the sum of pie chart values
    let total = results.reduce(function(sum, choice) {
        return sum + choice.percent;
    }, 0);
    
    // To start the pie slice from the top.
    let currentSlice = -0.5 * Math.PI;
    
    // To position pie chart within canvas
    let centerX = 300, centerY = 150; 
    let pieSlice;
    
    function getSlice() {
        for (let result of results) {
            
            // To get angle of pieSlice
            pieSlice = (result.percent / total) * 2 * Math.PI;
            
            // Start a new path
            cx.beginPath();
            
            // To draw an Arc
            cx.arc(centerX, centerY, 125,
                currentSlice, currentSlice + pieSlice);
                currentSlice += pieSlice;
                cx.lineTo(centerX, centerY);
                cx.fillStyle = result.color;
                cx.fill();
            }
        }
        getSlice()
        
        // variables
        let stocks;
        let bonds;
        let bitcoins;
        let pie; 
        
        let bitcoinPercent = document.querySelector('#bitcoinPrecent');
        let bondPercent = document.querySelector('#bondPrecent');
        let stockPercent = document.querySelector('#stockPrecent');
        
        // To initially set default values to the screen.
        stockPercent.textContent = '33.5%';
        bondPercent.textContent = '33%';
        bitcoinPercent.textContent = '33.5%';
        riskOutput.textContent = 'Aggressive';
        
        // To set up warning message.
        let warningModal = new bootstrap.Modal(document.getElementById('warningModal'), {
            keyboard: false
        });
        
        // Click event
        $('#submitBtn').click(function(e) {
            e.preventDefault();
            
            // Gather user input
            stocks = $('#stockField').val();
            bonds = $('#bondField').val();
            bitcoins = $('#bitcoinField').val();
            
            // To display the stock, bond, and bitcoin precentage to the screen.
            bondPercent.textContent = `${bonds}%`;
            stockPercent.textContent = `${stocks}%`;
            bitcoinPercent.textContent = `${bitcoins}%`;
            
            // To store user info in a variable as a number
            stocks = results[0].percent = Number(stocks);
            bonds = results[1].percent = Number(bonds);
            bitcoins = results[2].percent = Number(bitcoins);
            
            // To store user info in an array
            pie = [stocks, bonds, bitcoins];
            
            let total = stocks + bonds + bitcoins;
            
            // To check the fields proper inputs and to give the a warning to the user. Which will be printed to screen.
            if (stocks > 100 && bonds == '' && bitcoins == '' || bonds > 100 && stocks == '' && bitcoins == '' || bitcoins > 100 && stocks == '' && bonds == '') {
                $('#msg').text('Stocks, Bonds, and Bitcoins must equal 100%').css({'font-size': '20px'});
                warningModal.show();
                stockPercent.textContent = '33.5%';
                bondPercent.textContent = '33%';
                bitcoinPercent.textContent = '33.5%';
                // To clear input fields
                $('#stockField').val('');
                $('#bondField').val('');
                $('#bitcoinField').val('');
                return;
            } else if (stocks == '' && bonds == '' && bitcoins == '') {
                $('#msg').text('Please fill in fields that apply').css({'font-size': '20px'});
                warningModal.show();
                stockPercent.textContent = '33.5%';
                bondPercent.textContent = '33%';
                bitcoinPercent.textContent = '33.5%';
                return;
            }  else if (total !== 100) {
                $('#msg').text('Stocks, Bonds, and Bitcoins must equal 100%').css({'font-size': '20px'});
                warningModal.show();
                stockPercent.textContent = '33.5%';
                bondPercent.textContent = '33%';
                bitcoinPercent.textContent = '33.5%';
                $('#stockField').val('');
                $('#bondField').val('');
                $('#bitcoinField').val('');
                return;
            }

            riskAssessment(stocks,bonds,bitcoins);
            getResults(pie)
            getSlice()
            
            // To clear input fields
            $('#stockField').val('');
            $('#bondField').val('');
            $('#bitcoinField').val('');
        });
        
    });
    
    