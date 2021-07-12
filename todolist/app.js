
$(function(){  
    var counter = 0; 
    let buttonEnter = $('#enter');
    let userInput = $('#userInput');
    let ul = $('ul');
    let meatboy = $('#bloodtrail');
    let cloud = $('#congrats');
    let localStorage= window.localStorage;
    function inputLength() {
        return !!userInput.val();
    }

    function createTodo() {
        let li = $("<li>");
        li.append(document.createTextNode(userInput.val()));
        li.attr('id', counter);
        ul.append(li);
        localStorage.setItem(counter,userInput.val());     
        userInput.val('');
        counter++;

        let deleteButton = $("<button>");
        deleteButton.append(document.createTextNode('X'));
        li.append(deleteButton);
        deleteButton.click(deleteTodoItem);

        li.click(() => {
            li.toggleClass('done');
        });
        
        function deleteTodoItem() {
            li.toggleClass('deleted');  
            li.animate({
                'margin-left':'-1500px',
                'margin-right':'1500px',
            },{duration:3000,queue:true}).fadeOut(500); 
            meatboy.show();
            cloud.show();
            setTimeout(()=>meatboy.fadeOut(1000),2500);
            setTimeout(()=>cloud.fadeOut(1000),2500);                       
        } 
    }

    function changeListAfterKeypress(event){
        if (inputLength() && event.which == 13) {
            createTodo();
        }
    }
    buttonEnter.click(function(){
        if(inputLength()) {
            createTodo();   
        }        
    });

    userInput.keypress(changeListAfterKeypress);
})
$(window).unload(function(){
    localStorage.clear();
});