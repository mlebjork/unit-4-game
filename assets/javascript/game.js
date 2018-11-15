var losses = 0;
var wins = 0;
var computerNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var userTotal = 0;

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

$("#computer-number").html(computerNumber)
crystal.forEach(element => {
    console.log(element);
    var rand = Math.floor(Math.random() * 12) + 1;
    $('#crystals').append(`<img src="${element.img}" data-points="${rand}">`)
});

$("img").click()