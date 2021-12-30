export const cleanGraph = () => {
    const graph = document.querySelector('.graph')
    graph.replaceChildren()
}

export const format2dArray = (signalData) => {
    const array2d = [] //generate 2d array and format it for svg draw
    for (let i = 0; i < signalData.length; i++) {
        array2d.push([i, signalData[i]])
    }
    return array2d.join(' ')
}