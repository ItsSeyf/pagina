function hola(){
 a=10;
 b=20;
 result=a+b;
 console.log(result);
};

hola();

function redirect1(){
    window.location.href="./pagina2.html"
};

function datos(){
nombre= document.getElementById('name').value;
iden=document.getElementById('Identificacion').value;
alert(nombre+iden)
};

function menu(){
window.location.href="https://tacobell.cr/Category?c=-2"
};
function principal(){
    window.location.href="./Index.html"
};
function local(i){
switch(i){
    case 1:
        window.location.href="https://www.google.com/maps?q=9.93445,-84.07985"
        break;
        case 2:
            window.location.href="https://www.waze.com/es-419/live-map/directions?q=Taco+Bell+Banco+Central&navigate=yes&to=ll.9.93445%2C-84.0820387"
            break;
            case 3:
                window.location.href="https://www.google.com/maps/place/Taco+Bell/@9.9339305,-84.0865001,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa0e3aba67a91ed:0x43176056f62fcf1e!8m2!3d9.9339252!4d-84.0843114?hl=es"
                break;
                case 4:
                    window.location.href="https://www.waze.com/es-419/live-map/directions?q=Taco+Bell+Merced&navigate=yes"
                    break;
                    case 5:
                        window.location.href="https://www.google.com/maps/place/Taco+Bell/@9.9396921,-84.1234454,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa0fb5ff7ea5339:0xc727169cdff58a3c!8m2!3d9.9396849!4d-84.1212574?hl=es"
                        break;
                        case 6:
                                    window.location.href="https://www.waze.com/es-419/live-map/directions?q=Taco+Bell+Rohrmoser&navigate=yes"
                                    break;
}
};
function rest(){
    window.location.href="https://tacobell.cr/Store";
};