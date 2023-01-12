let input = ""

let calc_screen = document.getElementById('screen-text')


function write_key(key){
    input += key
    calc_screen.innerHTML = input
}

function clear_screen(){
    input = ""
    calc_screen.innerHTML = "0"
}

function calculate(){
    output = eval(input)
    input = ""
    calc_screen.innerHTML = output
}