import { format2dArray } from "./utilityFunctions.js"

export const Resitors = {
    ohm: 100,
    node1: 0,
    node2: 0,
    intensity: 0,
    tension: 0,

    actions() {
        this.intensity = (this.node1 - this.node2) / this.ohm
        this.tension = this.node1 - this.node2
        this.node2 = this.node1
    },
    links(node1, node2) {
        if (node1) this.node1 = node1
        if (node2) this.node2 = node2
    }
}

export const Capacitors = {
    signalData: [],
    capacity: 0.001,
    oldPositions: 0,
    node1: 0,
    node2: 0,
    tension: 0,

    actions(intensity) {
        this.node1 = this.oldPositions + (((1/this.capacity )*((this.node1-this.oldPositions)*Math.abs(intensity*10)))/100000)
        this.tension = this.node1 - this.node2
        this.oldPositions = this.node1
    },
    links(node1, node2) {
        if (node1) this.node1 = node1
        if (node2) this.node2 = node2
    },
    trace(node) {
        let trace
        if (node === 1) trace = this.node1
        if (node === 2) trace = this.node2
        this.signalData.push(500-trace)
        if (this.signalData.length > 500) this.signalData.shift()
    },
    draw() {// draw signal svg
        const formatedData = format2dArray(this.signalData)
        let graph = document.querySelector('.signals')
        const newHtml = `<polyline points ="${formatedData}" style ="fill:none;stroke:#f66600;stroke-width:3" />`
        graph.insertAdjacentHTML('beforeend', newHtml)
    }
}
