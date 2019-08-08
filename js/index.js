
// Players array containing an object in each item of the array for each player. Only the relevant data based on the visual design was used for simplification.
var players = [

    {	
        name:"Toby Alderweireld",
        position: "Defender",
        appearances: 80,
        goals: 5, 
        assists: 2,
        fwd_pass:1533,
        backward_pass:308,
        mins_played:6953,
        losses:20,
        wins:48,
        draws:2
    },
    
    {
    
        name:"Yaya Touré",
        position: "Defender",
        appearances: 232,
        goals: 65, 
        assists: 35,
        fwd_pass:4491,
        backward_pass:1995,
        mins_played:18919,
        losses:49,
        wins:149,
        draws:35
    
    },
      
      {
    
        name:"Wayne Rooney",
        position: "Striker",
        appearances: 461,
        goals: 201, 
        assists: 84,
        fwd_pass:1795,
        backward_pass:1928,
        mins_played:27056,
        losses:91,
        wins:280,
        draws:90
    
    },
      
        {
    
        name:"Per Mertesacker",
        position: "Central",
        appearances: 187,
        goals: 8, 
        assists: 0,
        fwd_pass:4257,
        backward_pass:535,
        mins_played:16531,
        losses:45,
        wins:117,
        draws:41
        
    },
      
       {
    
        name:"Riyad Mahrez",
        position: "Winger ",
        appearances: 71,
        goals: 22, 
        assists: 14,
        fwd_pass:687,
        backward_pass:323,
        mins_played:5368,
        losses:23,
        wins:35,
        draws:21
    
    }
    
    ];
    
    // reuseable function to calculate each players passes per minute 
    function CalPassesPerMinute(playerInstance) // holds on argument of the current player item in the "players" array 
    {
      
      //Takes current players passes and adds them. Then that total is divded by total minutes player has played.
    
    var sum =  (playerInstance.backward_pass + playerInstance.fwd_pass) / playerInstance.mins_played; // formula for calcuating passes per minute
    sum2 = sum.toFixed(2); // fixing the integer length of the double to three integers
    
    return sum2 // returning the new result 
      
    }
    
    //// reuseable function to calculate each players goals per match
    function CalGoalsPerMatch(playerInstance)
    {
      // Takes current players goals and divides them by the total of all losses, wins and draws, which represents matches played
    
    var sum = playerInstance.goals / (playerInstance.losses + playerInstance.wins + playerInstance.draws);
    
    sum2 = sum.toFixed(2); // fixing the integer length of the double to three integers
    
    return sum2 // returning the new result 
      
    }
    
    // reusable function to that displays data for all sections 
    function changeData(arg) // takes an arguments of the player array instance to access the data in that players object 
    {
        document.getElementById("name").innerHTML = arg.name;
        document.getElementById("position").innerHTML = arg.position;
        document.getElementById("appearances").innerHTML = arg.appearances;
        document.getElementById("goals").innerHTML = arg.goals;
        document.getElementById("assists").innerHTML = arg.assists;
        document.getElementById("goalsPerMatch").innerHTML = CalGoalsPerMatch(arg); // takes the same type of player instance arugment for reusable purposes
        document.getElementById("passesPerMinute").innerHTML = CalPassesPerMinute(arg);  // takes the same type of player instance arugment for reusable purposes
    }
     
    // For the element with an ID of "myList", onchange use the annonymous function and check conditions. 
    document.getElementById("myList").onchange = function() {
     
      // If the "myList" element's currently selected object (option) has a value that matches the conditional logic then run the condition 
      //Ternary conditions were used for concise code. 
        if (this.value === "Toby")      changeData(players[0]), 
          //Change class attribute for images depening on condition
        document.getElementById("Container").setAttribute("class", "TobyBG"), 
        document.getElementById("badgeElement").setAttribute("class", "TobyBadge ");
      
        if (this.value === "Yaya")      changeData(players[1]), 
        document.getElementById("Container").setAttribute("class", "YayaBG"),
        document.getElementById("badgeElement").setAttribute("class", "YayaBadge ") ;
      
        if (this.value === "Wayne")   changeData(players[2]), 
        document.getElementById("Container").setAttribute("class", "WayneBG"),
        document.getElementById("badgeElement").setAttribute("class", "WayneBadge ") ;
      
        if (this.value === "Per")       changeData(players[3]),
        document.getElementById("Container").setAttribute("class", "PerBG"),
        document.getElementById("badgeElement").setAttribute("class", "PerBadge ");
      
        if (this.value === "Riyad")     changeData(players[4]), 
        document.getElementById("Container").setAttribute("class", "RiyadBG"),
        document.getElementById("badgeElement").setAttribute("class", "RiyadBadge ");
         
    };
    
    