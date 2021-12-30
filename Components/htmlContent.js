import { C1, R1 } from "../main.js"

export const Html = {
    staticToken: false,
    htmlContent: `
    <div class = "title">
        <h1>Data Curve smoother</h1>
        <h2>Electronic style</h2>
    </div>
    <section>
        <div class = "graph"></div>
        <div class = "left-section">
            <div class = "controls">
                <div class = "controls-knobs"></div>
                <div class = "schema">
                    <div class = "dynamic"></div>
                    <img class ='circuit' src ='./assets/circuit.png' alt "Electronic circuit">
                </div>
            
            </div>
        <p>adjust capacitor & resistor value to smooth the noisy signal</p>
        </div>
    </section>`,
    
    draw() {
        if (!this.staticToken) {//first draw for static html
            this.staticToken = true
            const root = document.querySelector('.root')
            let newElement = document.createElement('main')
            newElement.innerHTML = this.htmlContent
            root.appendChild(newElement)
           
            
        }
        let dynamic = document.querySelector('.dynamic')
        dynamic.replaceChildren()
        let dynamicHtml = `
            <p>${R1?.ohm}ohm </p>
            <p>${C1?.capacity}µf </p>
            `
        dynamic.insertAdjacentHTML('beforeend', dynamicHtml)
    },
    
    
    
}