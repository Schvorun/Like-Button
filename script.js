let likeCount1 = document.querySelector('#nLikes1')
let likeCount2 = document.querySelector('#nLikes2')
let likeCount3 = document.querySelector('#nLikes3')
let count1 = null
let count2 = null
let count3 = null


function likebutton1() {
    count1++;
    likeCount1.innerText = count1 +" Like(s)"
    console.log(count)
}

function likebutton2() {
    count2++;
    likeCount2.innerText = count2 +" Like(s)"
    console.log(count)
}

function likebutton3() {
    count3++;
    likeCount3.innerText = count3 +" Like(s)"
    console.log(count)
}