const taskText = document.getElementById('taskText')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList');

function addBtnHandler() {
    const text = taskText.value.trim(); 
    if (text === '') return;
    
    const li = document.createElement('li'); 
    li.textContent = text;

    li.innerHTML = "<input type='checkbox' id='checkbtn'><span class='taskTitle' >" + text + "</span><span class='xbtn' style='font-size: x-large; cursor: pointer;'>&times;</span>";

    const checkbox = li.getElementsByTagName('input').item(0); 
    checkbox.addEventListener('click', checkbtnHandler);
    
    const xButton = li.querySelector('.xbtn');
    xButton.addEventListener('click', xButtonHandler); 
     

    taskList.appendChild(li); 

    taskText.value = '';
        
}

taskText.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === 'Enter') {
        e.preventDefault(); 
        // prevents from page reloading like with a form sumission 
        addBtnHandler(); 
        // addBtn.click() also works
    }
});

addBtn.addEventListener('click', addBtnHandler)


function checkbtnHandler(e) {
    const checkbox = e.target;
    const taskTitle = checkbox.nextElementSibling; 

    if (checkbox.checked) {
        taskTitle.style.textDecoration = 'line-through';
        taskTitle.style.textDecorationThickness = '0.3rem';
    } 
    
    else {
        taskTitle.style.textDecoration = 'none';
    }
}

function xButtonHandler(e) { 
    const xButton = e.target;          
    const li = xButton.parentElement;   
    const taskList = li.parentElement;        

    taskList.removeChild(li);
}









    //   ꧁꧂꧁꧂꧁꧂
    //   𒆙𒆙𒅌𒆙𒆙𒅌
    // ก็็็็็็็็็็็็็็็็็็็𒅒𒈔𒅒𒇫𒄆ก็็็็็็็็็็็็็็็็็็็𒅒𒈔𒅒𒇫𒄆
    //         --••--••
    //  ̼͙̈́͆̈́ͯ̒̆̀̓ͧ͠𒀱𒅌̼͙̈́͆̈́ͯ̒̆̀̓ͧ͠𒀱𒅌̼͙̈́͆̈́ͯ̒̆̀̓ͧ͠𒀱


