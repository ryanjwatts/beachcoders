

$().ready(function () {
    console.log('hello, jquery is working');
})

$('button.foo').on('click', function () {
    $('#root').html('<b>button got clicked yo</b>');
}) 

$('div.foo').hover(
    function () {
        $('#root').html('<b>click that button already!!</b>');
    },
    function () {
        $('#root').html('<b>what you gonna do?</b>');
    }
)

