let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let list = document.querySelector(".list");
let delbtn = document.querySelector('.btn-dell');
let btnDel = document.createElement('button')

read()
btn.addEventListener("click", ()=>{
    if (input1.value === "" || input2.value === "") {
        alert('ПУСТО');
        return;
    } else {
        let obj ={
            name: input1.value,
            LastName: input2.value
        }
        let data = JSON.parse(localStorage.getItem('person')) || [];
        data.push(obj);
        localStorage.setItem('person', JSON.stringify(data));
        input1.value=''
        input2.value=''
        read()
        delbtn()
    }

})


function read() {
    let newData = JSON.parse(localStorage.getItem('person')) || [];
    list.innerHTML='';
       newData.forEach((el) => {
    let infoDiv = document.createElement('div');
    let infoText = document.createElement('div')
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    p1.innerText = el.name;
    p2.innerText = el.LastName;
    btnDel.innerText = 'Удалить';
    infoText.classList.add("infoText")
    infoText.append(p1);
    infoText.append(p2);
    infoText.append(btnDel);
    infoDiv.append(infoText);
    list.append(infoDiv);
}); 
}

btnDel.addEventListener("click", ()=>{
    let data = JSON.parse(localStorage.getItem('person')) || [];    
    data.splice(0,1);
    localStorage.setItem('person', JSON.stringify(data));
    read()

} );          
