interface Point {
    x: number,
    y: number
}

function tsDemo(data: Point) {
    console.log('1sss23')
    return Math.sqrt(data.x ** 2 + data.y ** 2)
}
tsDemo({x: 1, y: 2})

let num = 1

const obj = {
    name: 'llhe',
    age: 12
}