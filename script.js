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
            inputElement.setAttribute("class", "p-4 text-2xl w-[600px] rounded-2xl text-black");

            // converBtn.setAttribute("id", "convertBtn");
            inputElement.setAttribute("oninput", "convertFn()");
            // converBtn.innerHTML = "Convert"

            inputContainer.append(inputElement)
            // inputContainer.append(converBtn)
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
            outputContainer.setAttribute("class", "mt-6 flex gap-16")
            numOfWordDiv.setAttribute("class", "outpuxDivStyle")
            numOfWordDiv.setAttribute("class", "flex flex-col ")
            numOfCharDiv.setAttribute("class", "outpuxDivStyle")
        
            headingNOWD.innerHTML = "WORDS"
            headingNOWD.setAttribute("class", "text-4xl text-center")
            qtyNOWD.innerHTML = 0;
            qtyNOWD.setAttribute("id", "wordQty")
            qtyNOWD.setAttribute("class", "mt-2 text-4xl text-center")

            numOfWordDiv.append(headingNOWD)
            numOfWordDiv.append(qtyNOWD)
        
            headingNOCD.innerHTML = "CHARACTERS"
            headingNOCD.setAttribute("class", "text-4xl text-center")
            qtyNOCD.innerHTML = 0;
            qtyNOCD.setAttribute("id", "charQty")
            qtyNOCD.setAttribute("class", "mt-2 text-4xl text-center")

            numOfCharDiv.append(headingNOCD)
            numOfCharDiv.append(qtyNOCD)
        
            outputContainer.append(numOfWordDiv)
            outputContainer.append(numOfCharDiv)
        
            appDiv.append(outputContainer)
        }
    }
)()

function convertFn(){
    const userInput = document.getElementById("userInput").value;
    const wordQty = document.getElementById("wordQty");
    const charQty = document.getElementById("charQty");

    let wordCount = userInput.trim().split(" ").length;
    let charCount = userInput.trim().length;

    wordQty.innerHTML = wordCount
    charQty.innerHTML = charCount
}