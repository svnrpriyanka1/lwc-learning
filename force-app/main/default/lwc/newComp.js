/*
function greet(name) {
    alert("Hello " + name);
}
*/
/*
*******************************************************************************
//forEach - 1st Method
//====================
const numArray = [10,20,30,40,50,60];
numArray.forEach(function(item,index,numArray)
{
    console.log('This is currentItem ' + item);
    console.log(`This is current index ${index}`);
    console.log(`This is current Array ${numArray}`);
    console.log(`=======================================`);

})
*******************************************************************************
*/

/*
*******************************************************************************
//forEach - 2nd Method
//====================
const numArray = [10,20,30,40,50,60];
numArray.forEach(callbackFunc);

function callbackFunc(item,index,numArray)
{
    console.log('This is currentItem ' + item);
    console.log(`This is current index ${index}`);
    console.log(`This is current Array ${numArray}`);
    console.log(`=======================================`);

}
*******************************************************************************
*/

/*
*******************************************************************************
//forEach - callback function is used as arrow
//============================================
const numArray = [10,20,30,40,50,60];
//numArray.forEach(arrowFuncVar(i,ind,numArray));


const arrowFuncVar = (item,index,numArray) =>
{
    console.log('This is currentItem ' + item);
    console.log(`This is current index ${index}`);
    console.log(`This is Array ${numArray}`);
    console.log(`=======================================`);
};

numArray.forEach(arrowFuncVar);
*******************************************************************************
*/


const newArr = [11, 20, 30, 40, 50, 60];

//Every
const everyMethodArr = newArr.every((currentElement, index, newArr) => currentElement > 10);
console.log(everyMethodArr);
//new changes added. not yet pulled from github
/*check commits from different user
dcfgvhbjknm
sd*/
