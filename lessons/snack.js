var current_age = 10;
var maximum_age = 20;
var amount_snack_day = 2;
//add var days_per_year = 365; this would not be consider a magic number
var yearly_snack = amount_snack_day * 365; // the 365 is a magic number
var lifeinyears = maximum_age - current_age;

var total = yearly_snack * lifeinyears;

console.log(total);
