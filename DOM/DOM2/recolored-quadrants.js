function colorQuads() {
    var quadrant = '#' + prompt(`Select quadrant`)
    var color = prompt("Now choose a color")
    var element = document.querySelector(quadrant)
    
    if (!element) {
        window.alert("no element found")
    } else {
        element.style.backgroundColor = color        
    }

    setTimeout(function(){
        var option = prompt("Would you like to add another color?")
        if (option.toLowerCase() === "yes") {
            colorQuads()
        } 
    }, 1000)
}

colorQuads();