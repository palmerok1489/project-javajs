
// console.log(num);
// num++;
// }


// do{
//     console.log(num);
//     num++;
// }
// while(num < 55 );

// for(let i=1; i<8;i++){
//     console.log(i);
//     num++;
// }
// for(let i= 1;i< 10; i++ ){
//     if(i===6){
//         break;
//     }
//     console.log(i);
// }

// for(let i=0;i<3;i++){
//     console.log(i);
//     for(let j = 0;j<3; j++){
//         console.log(j);
//     }
// }

// let result = '';
// const lenght = 7;
// for(let i=1; i<lenght; i++){
//     for(let j=0; j<i; j++){
//         result+='*';
//     }
//     result+='\n';
// }
// console.log(result);

let iner = 10; 
    decr = 10;
    iner++;
    decr--;
    console.log(iner);
    console.log(decr);


    let iner = 10;
    let decr = 10;
    console.log(++iner);
    console.log(--decr);


console.log(5%2);

console.log(2*4=='8');

const isChecked = true;
        isClose = true; 
console.log(isChecked && isClose);

const isCheked = true;
      isClose = false;
console.log(isCheked || isClose);


if(4==9){
    console.log('Ok');
} else{
    console.log('Error');
}

const num = 50;
if(num< 49){
    console.log('Error');
} else if (num > 100){
    console.log('Много');
} else{
    console.log('Ok');
}



const num = 50;
switch(num){
    case 49:
        console.log('неверно');
        break;
        case 100:
            console.log('наверно');
            break;
            case 50:
                console.log('в точку');
                break;
                default:
                    console.log('не в этот раз');
                    break;
}



const hamburger = true;
const fries = true;
if(hamburger && fries){
console.log('я сыт');
}
console.log(hamburger && fries);


const hamburger = true;
const fries = false;
const cola = true;
if(hamburger && fries || cola){
console.log('не доволен');
}
console.log( hamburger && fries && cola);



const hamburger = true;
const cola = false;
const fries = false;
if(hamburger || cola || fries){
    console.log('бугурт');
}
console.log(hamburger || fries || cola);



const hamburger = true;
const cola = false;
const fries = false;
if(hamburger || cola || fries){
    console.log('поджог');
}
console.log(hamburger || cola || fries);





const hamburger = 3;
const fries =1;
const cola = 0;
if(hamburger === 3 && cola ===1 && fries){
    console.log('все сыты');
}else {
console.log('мы заходим');
    }
