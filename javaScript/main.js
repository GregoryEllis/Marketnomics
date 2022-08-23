$(document).ready(function() {
     
     // To store stock market info
     let NYSE = [
          { name:"GeneralElectric", ticker: "(GE) " ,price: 13, vol: `${(Math.random() * 0.006).toFixed(5)}` },
          { name:"ExxonMobil" ,ticker: "(XOM) " ,price: 64, vol: `${(Math.random() * 0.009).toFixed(5)}` },
          { name:"Procter&Gamble" ,ticker: "(PG) " ,price: 240, vol: `${(Math.random() * 0.011).toFixed(5)}` },
          { name:"UnitedTechnologies" ,ticker: "(UTX) " ,price: 225, vol: `${(Math.random() * 0.009).toFixed(5)}` },
          { name:"3M" ,ticker: "(MMM) " ,price: 175, vol: `${(Math.random() * 0.009).toFixed(5)}` },
          { name:"IBM" ,ticker: "(IBM) " ,price: 145, vol: `${(Math.random() * 0.009).toFixed(5)}` },
          { name:"Merck" ,ticker: "(MRK) " ,price: 77, vol: `${(Math.random() * 0.008).toFixed(5)}` },
          { name:"AmericanExpress" ,ticker: "(AXP) " ,price: 160, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"McDonald\'s" ,ticker: "(MCD) " ,price: 260, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"Boeing" ,ticker: "(BA) " ,price: 220, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Coca-Cola" ,ticker: "(KO) " ,price: 165, vol: `${(Math.random() * 0.008).toFixed(5)}` },
          { name:"Caterpillar" ,ticker: "(CAT) " ,price: 220, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"WaltDisney" ,ticker: "(DIS) " ,price: 185, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"JPMorganChase" ,ticker: "(JPM) " ,price: 300, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"Johnson&Johnson" ,ticker: "(JNJ) " ,price: 161, vol: `${(Math.random() * 0.008).toFixed(5)}` },
          { name: "Wal-Mart",ticker: "(WMT) " ,price: 138, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"HomeDepot" ,ticker: "(HD) " ,price: 310, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"Intel" ,ticker: "(INTC) " ,price: 56, vol: `${(Math.random() * 0.009).toFixed(5)}` },
          { name:"Microsoft" ,ticker: "(MSFT) " ,price: 266, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"Pfizer" ,ticker: "(PFE) " ,price: 39, vol: `${(Math.random() * 0.006).toFixed(5)}` },
          { name:"Verizon" ,ticker: "(VZ) " ,price: 185, vol: `${(Math.random() * 0.009).toFixed(5)}` },
          { name:"Chevron" ,ticker: "(CVX) " ,price: 100, vol: `${(Math.random() * 0.008).toFixed(5)}` },
          { name:"CiscoSystems" ,ticker: "(CSCO) " ,price: 70, vol: `${(Math.random() * 0.007).toFixed(5)}` },
          { name:"Travelers" ,ticker: "(TRV)" ,price: 97, vol: `${(Math.random() * 0.008).toFixed(5)}` },
          { name:"UnitedHealthGroup" ,ticker: "(UNH)" ,price: 102, vol: `${(Math.random() * 0.008).toFixed(5)}` },
          { name:"Goldman Sachs" ,ticker: "(GS)" ,price: 367, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"Nike" ,ticker: "(NKE)" ,price: 154, vol: `${(Math.random() * 0.009).toFixed(5)}` },
          { name:"Verizon" ,ticker: "(V)" ,price: 200, vol: `${(Math.random() * 0.010).toFixed(5)}` },
          { name:"Apple" ,ticker: "(AAPL)" ,price: 133, vol: `${(Math.random() * 0.009).toFixed(5)}` },
          { name:"DuPont" ,ticker: "(DWDP)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Abbott Laboratories" ,ticker: "(ABT)" ,price: 105, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"AbbVie" ,ticker: "(ABBV)" ,price: 59.08, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Abiomed" ,ticker: "(ABMD)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Accenture" ,ticker: "(ACN)" ,price: 39.78, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Activision Blizzard" ,ticker: "(ATVI)" ,price: 253, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Adobe" ,ticker: "(ADBE)" ,price: 74, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Advanced Micro Devices" ,ticker: "(AMD)" ,price: 190, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Advance Auto Parts" ,ticker: "(AAP)" ,price: 249.10, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"AES Corp" ,ticker: "(AES)" ,price: 50, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Aflac" ,ticker: "(AFL)" ,price: 134, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Agilent Technologies" ,ticker: "(A)" ,price: 210, vol: `${(Math.random() * 0.0009).toFixed(5)}` },
          { name:"Air Products & Chemical" ,ticker: "(APD)" ,price: 75, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Akamai Technologies" ,ticker: "(AKAM)" ,price: 21, vol: `${(Math.random() * 0.0008).toFixed(5)}` },
          { name:"Alaska Air Group" ,ticker: "(ALK)" ,price: 37, vol: `${(Math.random() * 0.0012).toFixed(5)}` },
          { name:"Albemarle Corporation" ,ticker: "(ALB)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Alexandria Real Estate Equities" ,ticker: "(ARE)" ,price: 110, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Align Technology" ,ticker: "(ALGN)" ,price: 69, vol: `${(Math.random() * 0.0013).toFixed(5)}` },
          { name:"Allegion" ,ticker: "(ALLE)" ,price: 58, vol: `${(Math.random() * 0.0012).toFixed(5)}` },
          { name:"Alliant Energy" ,ticker: "(LNT)" ,price: 33, vol: `${(Math.random() * 0.0007).toFixed(5)}` },
          { name:"Allstate Corp" ,ticker: "(ALL)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Alphabet (Class A)" ,ticker: "(GOOGL)" ,price: 2455, vol: `${(Math.random() * 0.0017).toFixed(5)}` },
          { name:"Alphabet (Class C)" ,ticker: "(GOOG)" ,price: 274, vol: `${(Math.random() * 0.0012).toFixed(5)}` },
          { name:"Altria Group" ,ticker: "(MO)" ,price: 88, vol: `${(Math.random() * 0.0020).toFixed(5)}` },
          { name:"Amazon" ,ticker: "(AMZN)" ,price: 3405, vol: `${(Math.random() * 0.0008).toFixed(5)}` },
          { name:"Amcor" ,ticker: "(AMCR)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Ameren Corp" ,ticker: "(AEE)" ,price: 29, vol: `${(Math.random() * 0.0005).toFixed(5)}` },
          { name:"American Airlines Group" ,ticker: "(AAL)" ,price: 19, vol: `${(Math.random() * 0.0005).toFixed(5)}` },
          { name:"American Electric Power" ,ticker: "(AEP)" ,price: 210, vol: `${(Math.random() * 0.0009).toFixed(5)}` },
          { name:"American Express" ,ticker: "(AXP)" ,price: 254, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"American international Group" ,ticker: "(AIG)" ,price: 222, vol: `${(Math.random() * 0.0013).toFixed(5)}` },
          { name:"American Tower" ,ticker: "(AMT)" ,price: 17, vol: `${(Math.random() * 0.0004).toFixed(5)}` },
          { name:"American Water Works" ,ticker: "(AWK)" ,price: 111, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Amerprise Financial" ,ticker: "(AMP)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"AmerisourceBergen" ,ticker: "(ABC)" ,price: 366, vol: `${(Math.random() * 0.0015).toFixed(5)}` },
          { name:"Ametek" ,ticker: "(AME)" ,price: 89, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Amgen" ,ticker: "(AMGN)" ,price: 147, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Amphenol Corp" ,ticker: "(APH)" ,price: 388, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Analog Devices" ,ticker: "(ADI)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Ansys" ,ticker: "(ANSS)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Anthem" ,ticker: "(ANTM)" ,price: 354, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Aon" ,ticker: "(AON)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"A.O. Smith" ,ticker: "(AOS)" ,price: 46, vol: `${(Math.random() * 0.0007).toFixed(5)}` },
          { name:"APA Corporation" ,ticker: "(APA)" ,price: 17, vol: `${(Math.random() * 0.0004).toFixed(5)}` },
          { name:"Applied Materials" ,ticker: "(AMAT)" ,price: 215, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Aptiv" ,ticker: "(APTV)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"ADM" ,ticker: "(ADM)" ,price: 210, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Arista Networks" ,ticker: "(ANET)" ,price: 210, vol: `${(Math.random() * 0.0013).toFixed(5)}` },
          { name:"Arthur J. Gallgher & Co." ,ticker: "(AJG)" ,price: 36, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Assurant" ,ticker: "(AIZ)" ,price: 109, vol: `${(Math.random() * 0.0008).toFixed(5)}` },
          { name:"AT&T" ,ticker: "(T)" ,price: 73, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Atmos Energy" ,ticker: "(ATO)" ,price: 210, vol: `${(Math.random() * 0.0013).toFixed(5)}` },
          { name:"Autodesk" ,ticker: "(ADSK)" ,price: 366, vol: `${(Math.random() * 0.0014).toFixed(5)}` },
          { name:"Automatic Data Processing" ,ticker: "(ADP)" ,price: 330, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"AutoZone" ,ticker: "(AZO)" ,price: 405, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"AvalonBay Communities" ,ticker: "(AVB)" ,price: 210, vol: `${(Math.random() * 0.0004).toFixed(5)}` },
          { name:"Avery Dennison" ,ticker: "(AVY)" ,price: 56, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Baker Hughes" ,ticker: "(BKR)" ,price: 290, vol: `${(Math.random() * 0.0013).toFixed(5)}` },
          { name:"Ball Corp" ,ticker: "(BLL)" ,price: 97, vol: `${(Math.random() * 0.0012).toFixed(5)}` },
          { name:"Bank of America" ,ticker: "(BAC)" ,price: 156, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Bath & Body Works" ,ticker: "(BBWI)" ,price: 145, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Baxter International" ,ticker: "(BAX)" ,price: 48, vol: `${(Math.random() * 0.0012).toFixed(5)}` },
          { name:"Becton Dickinson" ,ticker: "(BDX)" ,price: 267, vol: `${(Math.random() * 0.0014).toFixed(5)}` },
          { name:"Bershire Hathaway" ,ticker: "(BRK.B)" ,price: 258, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Best Buy" ,ticker: "(BBY)" ,price: 168, vol: `${(Math.random() * 0.0015).toFixed(5)}` },
          { name:"Bio-Rad Labortories" ,ticker: "(BIO)" ,price: 345, vol: `${(Math.random() * 0.0014).toFixed(5)}` },
          { name:"Bio-Techne" ,ticker: "(TECH)" ,price: 222, vol: `${(Math.random() * 0.0014).toFixed(5)}` },
          { name:"Biogen" ,ticker: "(BIIB)" ,price: 340, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"BlackRock" ,ticker: "(BLK)" ,price: 534, vol: `${(Math.random() * 0.0016).toFixed(5)}` },
          { name:"BNY Mellon" ,ticker: "(BK)" ,price: 145, vol: `${(Math.random() * 0.0014).toFixed(5)}` },
          { name:"Booking Holdings" ,ticker: "(BKNG)" ,price: 389, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"BorgWarner" ,ticker: "(BWA)" ,price: 63, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Boston Properties" ,ticker: "(BXP)" ,price: 210, vol: `${(Math.random() * 0.0007).toFixed(5)}` },
          { name:"Boston Scientific" ,ticker: "(BSX)" ,price: 119, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Bristol Myers Squibb " ,ticker: "(BMY)" ,price: 145, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Broadcom" ,ticker: "(AVGO)" ,price: 145, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Broadridge Financial Solutions" ,ticker: "(BR)" ,price: 145, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Brown-Forman" ,ticker: "(BF.B)" ,price: 37, vol: `${(Math.random() * 0.0007).toFixed(5)}` },
          { name:"C.H Robinson" ,ticker: "(CHRW)" ,price: 145, vol: `${(Math.random() * 0.0008).toFixed(5)}` },
          { name:"Cabot Oil & Gas" ,ticker: "(COG)" ,price: 98, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Cadence Design Systems" ,ticker: "(CDNS)" ,price: 145, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Caesars Entertainment" ,ticker: "(CZR)" ,price: 222, vol: `${(Math.random() * 0.0012).toFixed(5)}` },
          { name:"Campbell Soup" ,ticker: "(CPB)" ,price: 100, vol: `${(Math.random() * 0.0007).toFixed(5)}` },
          { name:"Capital One" ,ticker: "(COF)" ,price: 167, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Cardinal Health" ,ticker: "(CAH)" ,price: 155, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"CarMax" ,ticker: "(KMX)" ,price: 246, vol: `${(Math.random() * 0.0012).toFixed(5)}` },
          { name:"Carnival Coporation" ,ticker: "(CCL)" ,price: 269, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Carrier Global" ,ticker: "(CARR)" ,price: 350, vol: `${(Math.random() * 0.0014).toFixed(5)}` },
          { name:"Catalent" ,ticker: "(CTLT)" ,price: 443, vol: `${(Math.random() * 0.0016).toFixed(5)}` },
          { name:"Cboe Global Markets" ,ticker: "(CBOE)" ,price: 387, vol: `${(Math.random() * 0.0012).toFixed(5)}` },
          { name:"CBRE" ,ticker: "(CBRE)" ,price: 59, vol: `${(Math.random() * 0.0004).toFixed(5)}` },
          { name:"CDW" ,ticker: "(CDW)" ,price: 134, vol: `${(Math.random() * 0.0009).toFixed(5)}` },
          { name:"Celanese" ,ticker: "(CE)" ,price: 333, vol: `${(Math.random() * 0.0013).toFixed(5)}` },
          { name:"Centene Corporation" ,ticker: "(CNC)" ,price: 178, vol: `${(Math.random() * 0.0008).toFixed(5)}` },
          { name:"CenterPoint Energy" ,ticker: "(CNP)" ,price: 155, vol: `${(Math.random() * 0.0009).toFixed(5)}` },
          { name:"Cerner" ,ticker: "(CERN)" ,price: 203, vol: `${(Math.random() * 0.0013).toFixed(5)}` },
          { name:"CF Industries" ,ticker: "(CF)" ,price: 390, vol: `${(Math.random() * 0.0014).toFixed(5)}` },
          { name:"Charles River Laboratories" ,ticker: "(CRL)" ,price: 120, vol: `${(Math.random() * 0.0009).toFixed(5)}` },
          { name:"Charles Schwab" ,ticker: "(SCHW)" ,price: 194, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Charter Communications" ,ticker: "(CHTR)" ,price: 155, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Chipotle" ,ticker: "(CMG)" ,price: 1230, vol: `${(Math.random() * 0.0018).toFixed(5)}` },
          { name:"Chubb" ,ticker: "(CB)" ,price: 287, vol: `${(Math.random() * 0.0009).toFixed(5)}` },
          { name:"Church & Dwight" ,ticker: "(CHD)" ,price: 258, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Cigna" ,ticker: "(CI)" ,price: 378, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Cincinnati Financial" ,ticker: "(CINF)" ,price: 78, vol: `${(Math.random() * 0.0007).toFixed(5)}` },
          { name:"Cintas" ,ticker: "(CTAS)" ,price: 111, vol: `${(Math.random() * 0.0004).toFixed(5)}` },
          { name:"Citigroup" ,ticker: "(C)" ,price: 345, vol: `${(Math.random() * 0.0011).toFixed(5)}` },
          { name:"Citizens" ,ticker: "(CFG)" ,price: 133, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Citrix Systems" ,ticker: "(CTXS)" ,price: 134, vol: `${(Math.random() * 0.0014).toFixed(5)}` },
          { name:"Clorox" ,ticker: "(CLX)" ,price: 368, vol: `${(Math.random() * 0.0009).toFixed(5)}` },
          { name:"CME Group" ,ticker: "(CME)" ,price: 133, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
          { name:"Chevron" ,ticker: "(CVX)" ,price: 133, vol: `${(Math.random() * 0.0010).toFixed(5)}` },
     ];
     
     ///// ATTENTION !!!! Array methods
     // To get stock market info
     let name = NYSE.map(item => item.name);
     let tickerSymbol = NYSE.map(item => item.ticker);
     let stockPrice = NYSE.map(item => item.price);
     let volatility = NYSE.map(item => item.vol);
     let stockData = [];
     
     ///// ATTENTION !!!! for loop, if...else statemnt and array method
     // To update stock prices
     function upDatePrice (n,t,s,v) {
          for (let i = 0; i <= NYSE.length ; i++) {
               let randomStock = Math.floor(Math.random() * NYSE.length)
               if (Math.random() > .5) {
                    stockData.push(`${n[randomStock]} ${t[randomStock]} ${Number((s[randomStock] + (s[randomStock] * v[randomStock])).toFixed(2))}`);
               } else {
                    stockData.push(`${n[randomStock]} ${t[randomStock]} ${Number((s[randomStock] - (s[randomStock] * v[randomStock])).toFixed(2))}`);
               }
          }
          return infiniteLoop(stockData.join(" "));
     }
     
     function infiniteLoop(x) {
          if (x)
          return (x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x );
     }
     
     // To randomly get econcomicReports as news
     let counter = 0;
     function getEvent() {
          let economicReports = ["Industrial SPDR (XLI) down 3% for the year","SPDR Consumer Staples up 1.5% for the qtr.","Consumer Staples down 0.5% for the qtr.","SPDR Consumer Discr (XLY) up 10% for the year","SPDR S&P Oil & Gas (XOP) down 2% for the month","The Russell 2000 is down 6% for the week","Volatility Index (VIX) spikes to 35","Treasuries move lower amid global uncertainty"," Dollar Index set to rise over FED policy","WTI Crude down 2% for the week" ,"Consumer Price Index (CPI) is up 3%","Consumer Price Index (CPI) is up 3%","Producer Price Index (PPI) up 2% for the qtr increasing inflation concerns ","Producer Price Index (PPI) down 3% for the qtr","Employment Cost Index (PMI) up 0.9%","Gross Domestic Product (GDP) up 1.5% YoY", "The president allegedly had an affair with his secretary", "hurricane Mary headed for the Gulf", "COVID-19 cases are surging", "Build Back Better bill shot down in the house", "Food supply chains are under massive pressure", "The FED set to start stimulating the economy", "Trump to run for presidency again in 2024"]
          let random = (Math.floor(Math.random() * economicReports.length - 1) +1);
          let randomEvents = economicReports[random];
          return randomEvents;
     }
     
     // To clear randomEvents div
     function clearNews() {
          if(counter > 1 ){
               ///// ATTENTION !!!! jQuery method to update HTML
               $('#randomEvents').removeClass( '.breakingNews' );
               $('#randomEvents').removeClass( '.empty' );
               counter = 0;
          }
     }
     
     // To get breaking news to appear to the screen randomly.
     function breakingNews() {
          let inComingInfo =  Math.floor(Math.random() * 10);
          if(inComingInfo > 5){
               ///// ATTENTION !!!! jQuery methods to update HTML
               $('#randomEvents').addClass('breakingNews');
               $('.breakingNews').html(`BreakingNews: ${getEvent()}`);
               counter++;
               clearNews();
          } else if (inComingInfo < 5){
               ///// ATTENTION !!!! jQuery method chain
               $('#randomEvents').removeClass( 'breakingNews' ).text('');
               clearNews(); 
          }
     }
     
     // Variables to info to get the ticker tape to move
     let count =1;
     let offset =1;
     let step =.1;
     
     let theNYSE = upDatePrice(name,tickerSymbol, stockPrice, volatility);
     
     ///// ATTENTION !!!!  JavaScript to update HTML
     // To print stock info
     document.getElementById('ticker').textContent= `${theNYSE} `;
     
     // To get stock info the scroll.
     function scroll() {
          
          offset=-count;
          
          ///// ATTENTION !!!! JavaScript to update HTML
          document.getElementById('ticker').style.position='relative'
          
          document.getElementById('ticker').style.left=offset.toString()+'em';
          
          count = count + step;
     }
     
     setInterval(()=> {
          scroll();
     },10);
     
     setInterval(()=> {
          breakingNews();
     }, 10000);
});