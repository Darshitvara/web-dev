
// document.getElementById("shuffleButton").onclick = function(){
//     let  cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
//     cards.push(...cards)
//     cards.push(...cards)
    
//     let lengthOfCards = cards.length
//     let random_index = 0
//     let current_index = lengthOfCards
//     let temp = 0
//     let idname = ""

//     while(current_index != 0){
//         random_index = Math.floor(Math.random()*lengthOfCards)
//         current_index-=1

//         temp = cards[current_index]
//         cards[current_index] = cards[random_index]
//         cards[random_index] = temp
//     }
//     // console.log(lengthOfCards)
//     for(let i = 0;i<6;i+=1){
//         idname= 'card' + i
//         document.getElementById(idname).innerHTML = cards[i]
//     }
// }
// document.getElementById("resetButton").onclick = function(){
//     let idname = ''
//     for(let i= 0;i<6;i+=1){
//         idname = "card" + i
//         document.getElementById(idname).innerHTML = "?"
//     }
// }



document.getElementById("shuffleButton").onclick = function(){
    let  cards = ['*A','*2','*3','*4','*5','*6','*7','*8','*9','*10','*J','*Q','*K','#A','#2','#3','#4','#5','#6','#7','#8','#9','#10','#J','#Q','#K','@A','@2','@3','@4','@5','@6','@7','@8','@9','@10','@J','@Q','@K','$A','$2','$3','$4','$5','$6','$7','$8','$9','$10','$J','$Q','$K']
  
    
    let lengthOfCards = cards.length
    let random_index = 0
    let current_index = lengthOfCards
    let temp = 0
    let idname = ""

    while(current_index != 0){
        random_index = Math.floor(Math.random()*lengthOfCards)
        current_index-=1

        temp = cards[current_index]
        cards[current_index] = cards[random_index]
        cards[random_index] = temp
    }
    // console.log(lengthOfCards)
    for(let i = 0;i<6;i+=1){
        // console.log(cards[i].substring(0,1))
        idname= 'card' + i
        if(cards[i].substring(0,1) == '$'){
            document.getElementById(idname).style.backgroundColor = "white"
            document.getElementById(idname).style.color = "black"
        }
        else if(cards[i].substring(0,1) == '#'){
            document.getElementById(idname).style.backgroundColor = "black"
            document.getElementById(idname).style.color = "white"
        }
        else if(cards[i].substring(0,1) == '@'){
            document.getElementById(idname).style.backgroundColor = "#444"
            document.getElementById(idname).style.color = "white"
        }
        else{
            document.getElementById(idname).style.backgroundColor = "#FF8C00"
            document.getElementById(idname).style.color = "black"
        }
        document.getElementById(idname).innerHTML = cards[i].substring(1)
    }
}
document.getElementById("resetButton").onclick = function(){
    let idname = ''
    for(let i= 0;i<6;i+=1){
        idname = "card" + i
        document.getElementById(idname).innerHTML = "?"
        document.getElementById(idname).style.backgroundColor = "black"
        document.getElementById(idname).style.color = "white"
    }
}