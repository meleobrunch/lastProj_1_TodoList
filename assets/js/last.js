
function addTodoList(){
    let ti =document.getElementById("title");
    let con = document.getElementById("content");   
    
    /*console.log(ti.value);*/


    let newElement = document.createElement("div");
    newElement.classList.add("record_element");

    let below_input = document.createElement("input");
    below_input.type="checkbox";
    below_input.classList.add("ch");


    let below_label = document.createElement("label");
    below_label.textContent=ti.value;

    newElement.appendChild(below_input);
    newElement.appendChild(below_label);

    let re = document.getElementById("record");
    re.appendChild(newElement);

    ti.value="";
    con.value="";


}


function removeTodoList(){
    document.querySelectorAll(".record_element").forEach(ele => {
        const checkbox = ele.querySelector('.ch');
        if(checkbox && checkbox.checked){ /*이거 중요하다*/
            ele.remove();
        }
    });
}

let submit_1 = document.getElementById("submit");

submit_1.addEventListener('click',addTodoList);

let remove = document.getElementById("remove");

remove.addEventListener('click',removeTodoList);
