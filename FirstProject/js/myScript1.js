
$(document).ready(function(){

 let options1 = {threshold: [0.5]};
    let observer1 = new IntersectionObserver(onEntry1, options1);
    let elements1 = $('.cont li');
    elements1.each((i, el) =>{
        observer1.observe(el);
    }); 
    
 let options2 = {threshold: [0.2]};
    let observer2 = new IntersectionObserver(onEntry2, options2);
    let elements2 = $('.stat li');
    elements2.each((i, el) =>{
        observer2.observe(el);
    });
    
 let options3 = {threshold: [0.2]};
    let observer3 = new IntersectionObserver(onEntry3, options3);
    let elements3 = $('.li li');
    elements3.each((i, el) =>{
        observer3.observe(el);
    });
    
 let options4 = {threshold: [0.5]};
    let observer4 = new IntersectionObserver(onEntry4, options4);
    let elements4 = $('.area');
    elements4.each((i, el) =>{
        observer4.observe(el);
    }); 
    
 let options5 = {threshold: [0.5]};
    let observer5 = new IntersectionObserver(onEntry5, options5);
    let elements5 = $('.SN a');
    elements5.each((i, el) =>{
        observer5.observe(el);
    }); 
    
 let options6 = {threshold: [0.4]};
    let observer6 = new IntersectionObserver(onEntry6, options6);
    let elements6 = $('.contacts');
    elements6.each((i, el) =>{
        observer6.observe(el);
    }); 
    
 let options7 = {threshold: [0.6]};
    let observer7 = new IntersectionObserver(onEntry7, options7);
    let elements7 = $('.reviews');
    elements7.each((i, el) =>{
        observer7.observe(el);
    }); 
    
 let options8 = {threshold: [0.7]};
    let observer8 = new IntersectionObserver(onEntry8, options8);
    let elements8 = $('.here');
    elements8.each((i, el) =>{
        observer8.observe(el);
    }); 
    
 let options9 = {threshold: [0.3]};
    let observer9 = new IntersectionObserver(onEntry9, options9);
    let elements9 = $('.cases');
    elements9.each((i, el) =>{
        observer9.observe(el);
    }); 
    
    $("#inputTel").mask("+7(999) 999-9999");
    
    $('form').submit(function(event){
        if ($('#inputTel').val() == "" || $('#inputEmail3').val() == ""){
            event.preventDefault
            alert('Введите телефон')
        }
    })
    
    new WOW().init();
    
    $('form').submit(function(event1){
        event1.preventDefault();
        
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            alert("Успешно отправлено!");
            $("form").trigger("reset");
        });
        return false;
    })
    
});

function onEntry1(entry1){
    entry1.forEach(change1 => {
        if (change1.isIntersecting){
            change1.target.classList.add('cont-show')
        }
    });
}

function onEntry2(entry2){
    entry2.forEach(change2 => {
        if (change2.isIntersecting){
            change2.target.classList.add('stat-show')
        }
    });
}

function onEntry3(entry3){
    entry3.forEach(change3 => {
        if (change3.isIntersecting){
            change3.target.classList.add('li-show')
        }
    });
}

function onEntry4(entry4){
    entry4.forEach(change4 => {
        if (change4.isIntersecting){
            change4.target.classList.add('area-show')
        }
    });
}

function onEntry5(entry5){
    entry5.forEach(change5 => {
        if (change5.isIntersecting){
            change5.target.classList.add('SN-show')
        }
    });
}

function onEntry6(entry6){
    entry6.forEach(change6 => {
        if (change6.isIntersecting){
            change6.target.classList.add('contacts-show')
        }
    });
}

function onEntry7(entry7){
    entry7.forEach(change7 => {
        if (change7.isIntersecting){
            change7.target.classList.add('reviews-show')
        }
    });
}

function onEntry8(entry8){
    entry8.forEach(change8 => {
        if (change8.isIntersecting){
            change8.target.classList.add('here-show')
        }
    });
}

function onEntry9(entry9){
    entry9.forEach(change9 => {
        if (change9.isIntersecting){
            change9.target.classList.add('cases-show')
        }
    });
}

//недокод на собеседование: идея в том, что мы создаём функцию с переменными и ТД в них, 
//затем цикл чтобы эти самые даные передавать в функцию столько раз сколько надо, основы ООП)) 
function options() {
    var option = {threshold: [0.5]};
    var observer = new IntersectionObserver(onEntry1, options1);
    var element = $('.cont li');
    element.each((i, el) =>{
        observer.observe(el);
    }); 
}

let options1 = {threshold: [0.5]};
    let observer1 = new IntersectionObserver(onEntry1, options1);
    let elements1 = $('.cont li');
    elements1.each((i, el) =>{
        observer1.observe(el);
    }); 
    
 let options2 = {threshold: [0.2]};
    let observer2 = new IntersectionObserver(onEntry2, options2);
    let elements2 = $('.stat li');
    elements2.each((i, el) =>{
        observer2.observe(el);
    });

option().observer.foreach();{

}














