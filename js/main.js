$(document).ready(function(){

    //Local Storage Tema Guardado
    var theme = $("#theme");

    if(typeof localStorage['color'] == 'string'){          
        theme.attr("href", "css/"+localStorage['color']+".css");
    }        
    

    //Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: 'true',
            slideWidth: 1200,
            pager: false
        });
    }

    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + ' de '+  moment().format("MMMM")+ ' del '+  moment().format("YYYY"),
                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de '+  moment().format("MMMM")+ ' del '+  moment().format("YYYY"),
                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de '+  moment().format("MMMM")+ ' del '+  moment().format("YYYY"),
                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de '+  moment().format("MMMM")+ ' del '+  moment().format("YYYY"),
                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + ' de '+  moment().format("MMMM")+ ' del '+  moment().format("YYYY"),
                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            },
            
        ];
        console.log(posts);

        posts.forEach((item, index) =>{
            var post = `
                <article class="post"> 
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;

            $("#posts").append(post);
        });
    }

    //Selector de tema   
    $("#to-green").click(function(){ 
        localStorage.setItem("color", "green");        
        theme.attr("href", "css/green.css");
    });
   
    $("#to-red").click(function(){
        localStorage.setItem("color", "red");        
        theme.attr("href", "css/red.css");
    });
   
    $("#to-blue").click(function(){
        localStorage.setItem("color", "blue");        
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba de la web
    $('.subir').click(function(){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 400);

        return false;
    });

    //Login falso
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();

        localStorage.setItem("form_name", form_name);       
        location.reload(); 

    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $('#about p');

        about_parrafo.html("<strong id='welcome'>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $('#login').hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
            var reloj = moment().format('h:mm:ss');         
            $('#reloj').html(reloj);
            
        },1000);
    }

    //Validación
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTopOnError: true,
        });
    }
});