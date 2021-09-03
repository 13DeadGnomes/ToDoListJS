window.onload = function() {



document.querySelector('.newTask').addEventListener('click', function (){

  let inputTask = document.querySelector('.inputTask');
  let mainBlock = document.querySelector('.main__block_body');

  if (inputTask.value != '') {
    const task = {
      body: document.createElement('div'),
      inputText: document.createElement('p'),
      timeCreate: document.createElement('p'),
      acceptBtn: document.createElement('button'),
      deleteBtn: document.createElement('button')
    }

    mainBlock.appendChild(task.body).classList.add('bodyTask');
    task.body.appendChild(task.inputText).classList.add('textTask');
    task.body.appendChild(task.timeCreate).classList.add('time');
    task.body.appendChild(task.acceptBtn).classList.add('acceptTask', 'btn');
    task.body.appendChild(task.deleteBtn).classList.add('deleteTask', 'btn');
    task.inputText.innerText = inputTask.value;
    task.acceptBtn.innerText = 'Выполнено';
    task.acceptBtn.addEventListener('click', function () {
      this.parentElement.style = 'background-color: #aedcae';
      this.disabled = 'disabled';
    });
    task.deleteBtn.innerText = 'Х';
    task.deleteBtn.addEventListener('click', function () {
      this.parentElement.remove();
    });
    inputTask.value = '';

  } else {
    alert('Введите таск!');
  }
 });

};
