window.onload = function () {
    var body = document.querySelector('body');

    var div = document.createElement('div');
    div.setAttribute('class', 'wrapper');
    body.appendChild(div);

    var form = document.createElement('form');
    div.appendChild(form);
    form.setAttribute('class', 'form');

    var textarea = document.createElement('textarea');
    form.appendChild(textarea);
    textarea.setAttribute('class', 'textarea');
    textarea.setAttribute('id', 'textarea');
    textarea.setAttribute('rows', '10');

    var div_inner = document.createElement('div');
    div.appendChild(div_inner);
    div_inner.setAttribute('class', 'div_inner');

    let arr_firstLine = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'];

    function creatElem(elem) {
        button = document.createElement('button');
        div_inner.appendChild(button);
        button.setAttribute("class", 'button' + elem);
        button.setAttribute("id", 'button');
        button.setAttribute("value", elem);
        button.setAttribute("type", 'button');
        
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            insert(event.target.getAttribute('value'));
        })
        button.innerHTML = elem;
    }


    function lounchCreatElem(someARR) {
        for (var i = 0; i < someARR.length; i++) {
            creatElem(someARR[i]);
        }
    }
    lounchCreatElem(arr_firstLine);
    let arr_secondLine = ['\tTab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'];
    let arr_therdLine = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '/', '\nEnter'];
    let arr_fourthLine = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr;', 'Shift'];
    let arr_fifthLine = ['Ctrl', 'Win', 'Alt', 'space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
    lounchCreatElem(arr_secondLine);
    lounchCreatElem(arr_therdLine);
    lounchCreatElem(arr_fourthLine);
    lounchCreatElem(arr_fifthLine);

    window.insert = function (symbol) {
        document.getElementById('textarea').value += symbol;
    }

    document.addEventListener('keydown', function (event) {
        event.stopPropagation();
        insert(event.key);
        console.log('alt', event.altKey);
        console.log('shift', event.shiftKey);
    });
    
}