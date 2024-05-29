function deleteBtn(button) {
    const row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
}


const image = document.getElementById('changeImage')

const imgUrl1 = 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg'

const imgUrl2 = 'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww'


image.onmouseover = function () {
    image.src = imgUrl1
}


image.onmouseout = function () {
    image.src = imgUrl2
}

var counter = 0

function updateCount() {
    document.getElementById('counter').textContent = counter
}

function valDecrease() {
    counter--
    updateCount()
}
function valIncrease() {
    counter++
    updateCount()
}