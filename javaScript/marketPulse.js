$(document).ready(function() {

     // To intially hide the crypto market table
     $('#crypto').hide();
     
     // To listen for when the markets button is clicked
     $('#markets').click(function() {
          $('#majorMarkets').slideToggle("slow", function() {
               $('#crypto').slideToggle("slow");
          });
     });
     
     // To update bitcoin
     let bitcoin = document.querySelector('#bitcoin');
     let bitcoinNum = 60000;
     function bitcoinCrypto() {
          if(Math.random() > .5) {
               bitcoinNum = ((Math.floor(Math.random () * 1000) + 100) + bitcoinNum); 
          } else {
               bitcoinNum = (bitcoinNum - (Math.floor(Math.random () * 1000) + 100));
          }
          return bitcoinNum
     }
     
     // To update ether
     let ether = document.querySelector('#ether');
     let etherNum = 5000 ;
     function etherCrypto() {
          if(Math.random() > .5) {
               etherNum = ((Math.floor(Math.random () * 100) + 25) + etherNum); 
          } else { 
               etherNum = (etherNum - (Math.floor(Math.random () * 100) + 25));
          }
          return etherNum
     }
     
     // To update litecoin
     let litecoin = document.querySelector('#litecoin');
     let litecoinNum = 300 ;
     function litecoinCrypto() {
          if(Math.random() > .5) {
               litecoinNum = ((Math.floor(Math.random () * 10) + 1) + litecoinNum); 
          } else { 
               litecoinNum = (litecoinNum - (Math.floor(Math.random () * 10) + 1));
          }
          return litecoinNum
     }

     // To update xrp
     let xrp = document.querySelector('#xrp');
     let xrpNum = 1.0797 ;
     function xrpCrypto() {
          if(Math.random() > .5) {
               xrpNum = ((Math.floor(Math.random () * .3) + .111) + xrpNum); 
          } else { 
               xrpNum = (xrpNum - (Math.floor(Math.random () * .3) + .111));
          }
          return xrpNum
     }
     
     // To update Dow Jones
     let Dow = document.querySelector('#DJIA');     
     let dowNum = 34026;
     function dowIndex() {
          if (Math.random() >.5) {
               dowNum= ((Math.floor(Math.random () * 20) + 1) + dowNum);
          } else {
               dowNum= (dowNum - (Math.floor(Math.random () * 20) + 1));
          }
          return dowNum
     }
     
     // To update S&P500
     let SP500 = document.querySelector('#SP');     
     let spNum = 4370;
     function spIndex() {
          if (Math.random() >.5) {
               spNum= ((Math.floor(Math.random () * 15) + 1) + spNum);
          } else {
               spNum= ( spNum - (Math.floor(Math.random () * 15) + 1));
          }
          return spNum;
     }
     
     // To update NASDAQ
     let NASQAD = document.querySelector('#NAS');     
     let nasNum = 14807;
     function nasIndex() {
          if (Math.random() >.5) {
               nasNum= ((Math.floor(Math.random () * 15) + 1) + nasNum);
          } else {
               nasNum= ( nasNum - (Math.floor(Math.random () * 15) + 1));
          }
          return nasNum
     }
     
     // To update Russell 
     let Russell = document.querySelector('#R2000');
     let russellNum = 2193;
     function russell2000() {
          if (Math.random() >.5) {
               russellNum= ((Math.floor(Math.random () * 15) + 1) + russellNum);
          } else {
               russellNum= ( russellNum - (Math.floor(Math.random () * 15) + 1));
          }
          return russellNum
     }
     
     // To call priceActionColor() every second
     setInterval(()=> {
          priceActionColor(dowIndex());
          priceActionColor(spIndex());
          priceActionColor(nasIndex());
          priceActionColor(russell2000());
          priceActionColor(bitcoinCrypto());
          priceActionColor(etherCrypto());
          priceActionColor(litecoinCrypto());
          priceActionColor(xrpCrypto());
     }, 1000)
     
     // To make the numbers green if the security is up or red if it is down 
     function priceActionColor (index) {
          switch (index) {
               case dowNum:
               if(dowNum > 34026){
                    $('#DJIA').css('color', 'lightGreen');
                    Dow.textContent =`${dowNum}`;
               } else {
                    $('#DJIA').css('color', 'red');
                    Dow.textContent =`${dowNum}`;
               }
               break;
               case spNum:
               if(spNum > 4370){
                    $('#SP').css('color', 'lightGreen');
                    SP500.textContent =`${spNum}` ;
               } else {
                    $('#SP').css('color', 'red');
                    SP500.textContent =`${spNum}` ;
               }
               break;
               case nasNum:
               if(nasNum > 14807) {
                    $('#NAS').css('color', 'lightGreen');
                    NASQAD.textContent =`${nasNum}`;
               } else {
                    $('#NAS').css('color', 'red');
                    NASQAD.textContent =`${nasNum}`;
               }
               break;
               case russellNum:
               if(russellNum > 2193) {
                    $('#R2000').css('color', 'lightGreen');
                    Russell.textContent =`${russellNum}`;
               } else {
                    $('#R2000').css('color', 'red');
                    Russell.textContent =`${russellNum}`;
               }
               break;
               case bitcoinNum:
               if(bitcoinNum > 60000) {
                    $('#bitcoin').css('color', 'lightGreen');
                    bitcoin.textContent =`${bitcoinNum}`;
               } else { 
                    $('#bitcoin').css('color', 'red');
                    bitcoin.textContent =`${bitcoinNum}`;
               }
               break;
               case etherNum:
               if(etherNum > 5000) {
                    $('#ether').css('color', 'lightGreen');
                    ether.textContent =`${etherNum}`;
               } else { 
                    $('#ether').css('color', 'red');
                    ether.textContent =`${etherNum}`;
               }
               break;
               case litecoinNum:
               if(litecoinNum > 182) {
                    $('#litecoin').css('color', 'lightGreen');
                    litecoin.textContent =`${litecoinNum}`;
               } else { 
                    $('#ether').css('color', 'red');
                    litecoin.textContent =`${litecoinNum}`;
               }
               break;
               case xrpNum:
               if(xrpNum > 1.0796) {
                    $('#xrp').css('color', 'lightGreen');
                    xrp.textContent =`${xrpNum.toFixed(3)}`;
               } else { 
                    $('#xrp').css('color', 'red');
                    xrp.textContent =`${xrpNum.toFixed(3)}`;
               }
               break;
          }
     
          //// WORKS, BUT I NEED TO ADD FUNCTIONALITY TO CLEAR THE MESSAGE 
     //      function stockAlert(security,input1, input2){
     //                if(security === 'Dow Jones' && dowNum >= input1 && dowNum <= input2) {
     //                     // console.log( ` Alert! ${security} is your Buy Zone`)
     //                }
     //           }
     //           stockAlert('Dow Jones', 34050, 34055)
     }
     
});
