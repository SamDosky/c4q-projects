document.addEventListener("DOMContentLoaded", () => {
    let ctx = document.querySelector("#canvas").getContext("2d");
    const colors = ['red', 'green', 'purple', 'yellow', 'orange', 'brown']

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    function drawRect(x, y, width, height) {
        if (x >= 600) {
            return;
        } else {
            ctx.fillStyle = getRandomColor();
            ctx.fillRect(x, y, width, height)

            drawRect(x + width + 1, y + height + 1, width, height)
        }
    }
    
    
        
   
    setInterval(function() {
        for (var i = 0; i < 1000; i++) {
            drawRect(10, 10, 50, 50);
            ctx.rotate(10*Math.PI/180);
        }
    }, 1000)

});





//====================== "mine version"

    // ctx.fillStyle = 'green'
    // ctx.fillRect(0,0,500,500)
    // ctx.fillStyle = 'rgb(200, 0, 0)'
    // ctx.fillRect(10, 10, 50, 50);

    // ctx.fillStyle = 'rgb(0, 0, 200, 0.5)'
    // ctx.fillRect(30, 30, 50, 50)



//========================instructor's 
    // ctx.fillStyle = "violet";
    // ctx.fillRect(0,0,500,500); // rectangle - 0 on the x axis, 0 on the y axis

    // let gradient = ctx.createLinearGradient(0,0,500,500);
    // gradient.addColorStop(0, "violet");
    // gradient.addColorStop(1, "blue");
    // ctx.fillStyle = gradient;
    // ctx.fillRect(0,0,500,500);

    // ctx.beginPath();
    // ctx.rect(50,50,400,400);
    // ctx.strokeStyle = "purple";
    // ctx.lineWidth = 5;
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.ellipse(300, 300, 70, 75, 45 * Math.PI/180, 0, 2 * Math.PI);
    // ctx.strokeStyle = "black";
    // ctx.stroke();