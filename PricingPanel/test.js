let input = prompt('入力 new,list ,delete,quit');
const todos = ['水やり', '掃除'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('********************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('********************');
    } else if (input === 'new') {
        const newTodo = prompt('なんか新しいのいれてんかー');
        todos.push(newTodo);
        console.log(`${newTodo} を追加したでー`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('削除する番号おしえてけろ'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted}を削除した。`);
        } else {
            console.log('不正な値だねぇ');
        }
    }

    input = prompt('他に入力することはあるかい？  new,list ,delete,quit');
}

console.log('処理を終了するでー');


// ここに関数を定義してください
function retunrDay(intVal) {
    switch (intVal) {
        case 1:
            // code
            return "Monday"
            break;
        case 2:
            // coden
            return "TuesDay"
            break;
        case 3:
            // code
            return "Wednesday"
            break;
        case 4:
            // code
            return "Thursday"
            break;
        case 5:
            // code
            return "Friday"
            break;
        case 6:
            // code
            return "Saturday"
            break;
        case 7:
            // code
            return "Sunday"
            break;

        default:
        // code
    }
}