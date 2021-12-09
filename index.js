

window.onload = function() {
    createFields()

   
   
    //let randomNumber = 8
   
    
}








const createFields = function() {

    // Find the parent for the days (= fields container)
    let fieldsContainerNode = document.getElementById("fields-container")
  
    let fieldsOnMainBoard = 76

    // Within a loop, we create as many fields as we need
    for (let fieldNumber = 1; fieldNumber <= fieldsOnMainBoard; fieldNumber++) {

        // We create a new DIV element...
        let newFieldNode = document.createElement("div") // <div></div>
        newFieldNode.innerText = fieldNumber// <div>1</div>
        newFieldNode.classList.add("field") // <div class="field">1</div>                                     
        fieldsContainerNode.appendChild(newFieldNode)
    }
}


/* const arr = []

for (i = 1; i <= 76; i++) {
    arr.push(i);
} */


const generateRandomNumber = function () {
    const randomNumber = Math.floor(Math.random() * 77);
    
   


    let randomNumberNode = document.getElementById("random-number-container")
    randomNumberNode.textContent = randomNumber

    /* for (i = 0; i < arr.length; i++) {
        if (arr[i] === randomNumber) {
           
            console.log(arr.length)
            console.log(arr[i])
            arr.splice(i,1)
            console.log(arr)
            console.log(arr.length)
        }
    } */

    let fieldsNode = document.getElementsByClassName('field')

    for (i = 0; i < fieldsNode.length; i++) {
        if (randomNumber.toString() === fieldsNode[i].innerText) {
            fieldsNode[i].classList.add("matched")            
        }
    }

    
}





