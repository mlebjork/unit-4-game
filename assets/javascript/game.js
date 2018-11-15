var losses = 0;
var wins = 0;
var computerNumber = makeRandCompNumber()
var userTotal = 0;

function makeRandCompNumber () {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

var crystal=[
    {name: "blue",
        img:"assets/images/crystal-blue.jpg", 
          score: 0  
        },
    {name: "red",
        img:"assets/images/Crystal-red.jpeg",
            score: 0
        }, 
     {name:"purple",
        img:"assets/images/Crystal-purple.jpg",
            score: 0
        },
    {name: "green",
        img:"assets/images/Crystal-green.jpeg",
            score: 0
    }                  
]
crystal.forEach(element => {
    // console.log(element);
    var rand = Math.floor(Math.random() * 12) + 1;
    $('#crystals').append(`<img class="crystal" src="${element.img}" data-points="${rand}">`)
});


$("#computer-number").html(computerNumber)
function resetCrystals(){
    var resetCrystals = $(".crystal").get()
    // console.log(resetCrystals);
    
    resetCrystals.forEach(function(element){
        var rand = Math.floor(Math.random() * 12) + 1;
        // console.log(element);

        element.setAttribute("data-points", rand)
    })
}
$(".crystal").on("click", function() {
    console.log(this);
    console.log(userTotal);
    console.log(computerNumber);
    
    var crystalValue = parseInt($(this).attr("data-points"));
    userTotal = userTotal + crystalValue;
    if(userTotal < computerNumber) {
        $("#total").html(userTotal)
    } else if(userTotal === computerNumber){
        wins++
        $("#wins").html(wins)
        computerNumber = makeRandCompNumber()
        $("#computer-number").html(computerNumber)
        $("#total").html(0)
        userTotal = 0
        resetCrystals()

        // alert("You won!")
    } else {
        losses++
        $("#losses").html(losses)
        computerNumber = makeRandCompNumber()
        $("#computer-number").html(computerNumber)
        $("#total").html(0)
        userTotal = 0
        resetCrystals()
        // alert("You lost!")
    }
})

