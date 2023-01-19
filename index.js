var counter = 0;
function addplayer(){
const firstname = document.getElementById("fname").value;
const lastname = document.getElementById("lname").value;
const country = document.getElementById("country").value;
const score = document.getElementById("score").value;

const container = document.getElementById("container");
const innerContainer = document.getElementById("innerContainer");

if(firstname=="" || lastname == ""|| country =="" || score ==""){
    innerContainer.innerHTML ="";
    innerContainer.innerHTML = "<p>All Fields are Required</p>"
}
else {

    innerContainer.innerHTML ="";
    container.innerHTML += `
        <table>
        <tr id="tr${counter}">
        <td id="nameRow">${firstname + " " + lastname}</td>
         <td id="countryRow">${country}</td>
        <td id="scoreRow${counter}">${score}</td>
        <td> <button class="buttondel" onclick="deleteRow(${counter})" id="del${counter}"><i class="fa fa-trash" aria-hidden="true" style="color:red;"></i></button> </td>
        <td> <button class="buttonplus" onclick="plusFive(${counter})" id="plusFive${counter}" >+5</button></td>
        <td> <button class="buttonminus"  onclick ="minusFive(${counter})" id="minusFive${counter}" >-5</button></td>
        </tr>
        </table>
        `
   counter =counter + 1;
}

}
function deleteRow(counter){

    const delRow = document.getElementById(`tr${counter}`);
    delRow.remove();
    
}

function plusFive(counter){
        const score = document.getElementById(`scoreRow${counter}`);
    
        score.innerHTML = parseInt(score.innerHTML) + 5;
}

function minusFive(counter){
    const score = document.getElementById(`scoreRow${counter}`);

    score.innerHTML = parseInt(score.innerHTML) - 5;
}