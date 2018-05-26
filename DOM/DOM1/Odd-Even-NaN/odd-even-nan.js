function oddOrEven() {
    var numberInput = window.prompt("Write something");
    var num = Number(numberInput);

    if (isNaN(num)) {
        window.alert("that is not a number");

    } else if (num % 2 === 0) {
        window.alert("that number is even");

    } else {
        window.alert("that number is odd");
    }
}

oddOrEven();
// need to add something filter random characters other than numbers