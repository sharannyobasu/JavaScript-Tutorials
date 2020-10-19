var budgetcontroller = (function()
{
var x=23;
var add1 = function(a)
{
    return x + a;
}
return {
    publicTest: function(b)
    {
        return(add1(b))
    }

}

})();


var UIController = (function()
{

})();

var controller = (function(budgetctrl, uictrl)
{
document.querySelector('.add__btn').addEventListener('click', function()
{
    console.log('Button clicked !!!')
});
document.querySelector('.add__type').addEventListener('click', function()
{
    console.log('2Button clicked !!!')
});
})(budgetcontroller, UIController);   