function Rectangle(x, y) {
    this.x = x;
    this.y = y;

    function getArea() {
        let area = x * y;
        return area
    }

    function getParimeter() {
        let parimeter = (x + y) * 2
        return parimeter;
    }
}

function creatRectangle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let rectangle = new Rectangle(400, 400);
    ctx.beginPath();
    ctx.rect(rectangle.x, rectangle.y, 150, 100);
    ctx.stroke();
}

creatRectangle();