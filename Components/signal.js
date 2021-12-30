import { cleanGraph, format2dArray } from "./utilityFunctions.js"

export const Signal = {
    /*variables and constants*/
    signalData: [],
    signalPosition: 250,
    speed: 0,
    maxSpeed: 8,
    directionStep: 5,
    directionPosition: 0,
    maxDirectionStep: 3,
    direction: 1,
    /*object function */
    trace() { // determine new position and add to signalData
        this.directionPosition++
        if (this.directionStep < this.directionPosition) {
            this.directionPosition = 0
            this.directionStep = Math.random() * this.maxDirectionStep
            let bufferValue = Math.random()
            if (bufferValue < 0.5) {
                this.direction = this.direction * -1
            }
        }
        if (this.signalPosition > 470) this.direction = -1 // graph range scope
        if (this.signalPosition < 30) this.direction = 1 // graph range scope
        this.speed = Math.random() * this.maxSpeed * this.direction
        this.signalPosition += this.speed
        this.signalData.push(500-this.signalPosition)
        if (this.signalData.length > 500) this.signalData.shift()
    },
    draw() {// draw signal svg
        cleanGraph()
        const formatedData = format2dArray(this.signalData)
        let newElement = document.createElement('div')
        const newHtml = `<svg class = "signals" height = "500" width = "500">
        <polyline points ="${formatedData}" style ="fill:none;stroke:#00f6c0;stroke-width:3" />
        </svg>`
        newElement.innerHTML = newHtml
        document.querySelector('.graph').appendChild(newElement)
    }
}

