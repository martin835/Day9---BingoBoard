

window.onload = function() {
    createFields()
        
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


const arr = []

    for (i = 1; i <= 76; i++) {
        arr.push(i)
    }
    

 
const generateRandomNumber = function () {
    let randomNumber = Math.floor(Math.random() * (arr.length+1));
    randomNumber = arr[(randomNumber-1)]
    console.log(randomNumber)
    let randomNumberNode = document.getElementById("random-number-container")
    randomNumberNode.textContent = randomNumber

    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === randomNumber) {
           
           
            arr.splice(i,1)[0]
           
        }
    }

    let fieldsNode = document.getElementsByClassName('field')
   
    //IF ONLY ONE FIELD SHOULD BE SELECTED UNCOMMENT THIS: 

   /*  let fieldsMatched = document.getElementsByClassName('matched') 
    if(fieldsMatched[0] !== undefined) {
        fieldsMatched[0].classList.remove('matched')
    }
 */
    for (i = 0; i < fieldsNode.length; i++) {
        if (randomNumber.toString() === fieldsNode[i].innerText) {
            fieldsNode[i].classList.add("matched")            
        }
    }

   
}





