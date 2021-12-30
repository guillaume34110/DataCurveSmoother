import { Capacitors, Resitors } from "./Components/electronic.js"
import { Html } from "./Components/htmlContent.js"
import { CapacitorsKnobs, Knobs, ResistorsKnobs } from "./Components/knob.js"
import { Signal } from "./Components/signal.js"

let start = false
export let page
export let mainSignal
export let R1
export let C1
let capacitorKnob
let resistorKnob

const startSoft =  () => {
    start = true
    
    page = Object.create(Html) //create a new object
    mainSignal = Object.create(Signal)
    R1 = Object.create(Resitors)
    C1 = Object.create(Capacitors)
    capacitorKnob  = Object.create(Knobs)
    capacitorKnob = Object.assign(capacitorKnob,CapacitorsKnobs) // extend new object 
    capacitorKnob.id = 1
    capacitorKnob.component = C1
    resistorKnob  = Object.create(Knobs)
    resistorKnob = Object.assign(resistorKnob,ResistorsKnobs)
    resistorKnob.id = 2
    resistorKnob.component = R1
    console.log(resistorKnob)
    mainLoop()
}
window.addEventListener('load', startSoft)

const mainLoop = async () => {
    if (start === true) {
        
        page.draw()
        resistorKnob.draw()
        capacitorKnob.draw()
        mainSignal.trace()
        mainSignal.draw()

        R1.links(mainSignal.signalPosition, C1.node1)
        R1.actions()
        C1.links(R1.node2, 0)
        C1.actions(R1.intensity)
        C1.trace(1)
        C1.draw()
        
        
        setTimeout(mainLoop, 100);
    }
}





