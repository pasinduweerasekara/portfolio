class TypingObject {
    curPhraseIndex = 0 

    constructor(element, phrases,loop = true, typingSpeed = 100, pause = 1000, deletingSpeed = 50) {
        this.element = element // Assign the DOM element to be typed into
        this.phrases = phrases // Assign the array of phrases to be typed
        this.loop = loop
        this.curPhraseIndex = 0
        this.typingSpeed = typingSpeed
        this.pause = pause
        this.deletingSpeed = deletingSpeed
    }

    sleep(milliSeconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, milliSeconds) // A helper function to pause execution for a specified time
        })
    }

    typeAndDelete = async () => { // An async function to type and delete text
        let repeat = true
        while (repeat){ // Loop indefinitely
            let curPhrase = this.phrases[this.curPhraseIndex]
            for (let i = 0; i < curPhrase.length; i++) { // Loop through each character in the phrase
                this.element.innerText = curPhrase.substring(0, i + 1) // Update element with typed characters
                await this.sleep(this.typingSpeed) // Pause for typing speed duration
            }
            await this.sleep(this.pause) // Pause for pause duration after typing

            for (let i = curPhrase.length; i > 0; i--) { // Loop to delete characters
                this.element.innerText = curPhrase.substring(0, i) 
                if (i <= 1) { // If all characters are deleted
                    this.element.innerText = "\u00A0"
                    continue
                }
                await this.sleep(this.deletingSpeed)
            }

            if (this.curPhraseIndex == this.phrases.length - 1) { 
                if(!this.loop){ //if loop property is false braking the loop
                    break
                }
                this.curPhraseIndex = 0 
            } else {
                this.curPhraseIndex++
            }

        }
    }
}

// Create instances of TypingObject with different configurations
const typingElement1 = new TypingObject(element = document.getElementById("type"), phrases = ["Pasindu Weerasekara,", "an undergraduate of University of Kelaniya,","someone who love to Code,","a dog lover 🐶"],loop=true,typingSpeed=100,pause=1000,deletingSpeed=20)

// Start the typing and deleting animation for each element
typingElement1.typeAndDelete()