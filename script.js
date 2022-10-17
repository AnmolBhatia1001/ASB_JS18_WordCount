const appDiv = document.getElementById("app");


(     
    function (){
        // inputComponent
        {
            const inputContainer = document.createElement("div");
            const inputElement = document.createElement("input");
            const converBtn = document.createElement("button");

            inputContainer.setAttribute("id", "inputContainer");

            inputElement.setAttribute("id", "userInput", );
            inputElement.setAttribute("type", "text");
            inputElement.setAttribute("placeholder", "Type or paste your text here ...");

            converBtn.setAttribute("id", "convertBtn");
            converBtn.setAttribute("onclick", "convertFn()");
            converBtn.innerHTML = "Convert"

            inputContainer.append(inputElement)
            inputContainer.append(converBtn)
            appDiv.append(inputContainer)
        }

        // outputComponent
        {
            const outputContainer = document.createElement("div");
            const numOfWordDiv = document.createElement("div");
            const numOfCharDiv = document.createElement("div");
            const headingNOWD = document.createElement("div");
            const qtyNOWD = document.createElement("div");
            const headingNOCD =  document.createElement("div");
            const qtyNOCD = document.createElement("div");
        
            outputContainer.setAttribute("id", "outputContainer")
            numOfWordDiv.setAttribute("class", "outpuxDivStyle")
            numOfCharDiv.setAttribute("class", "outpuxDivStyle")
        
            headingNOWD.innerHTML = "WORDS"
            qtyNOWD.innerHTML = 0;
            numOfWordDiv.append(headingNOWD)
            numOfWordDiv.append(qtyNOWD)
        
            headingNOCD.innerHTML = "CHARACTERS"
            qtyNOCD.innerHTML = 0;
            numOfCharDiv.append(headingNOCD)
            numOfCharDiv.append(qtyNOCD)
        
            outputContainer.append(numOfWordDiv)
            outputContainer.append(numOfCharDiv)
        
            appDiv.append(outputContainer)
        }
    }
)()

function convertFn(){
    console.log("working");
}


