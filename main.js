$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault(); 
        const tarefaNova = $('#tarefa-nova').val();
        $(`<li> ${tarefaNova} </li>`).appendTo('ul')
    })

    $('ul').on('click','li', function() {
        $(this).toggleClass('risco');
    });
})