$(document).ready(function(){

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });
 
    // Posts
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor mauris. Phasellus consectetur, orci eget posuere tincidunt, leo dolor ultricies ex, non congue arcu nibh quis justo. Duis maximus finibus risus vitae sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla metus sem, suscipit eu placerat a, malesuada quis nunc. Praesent eget consequat augue, ut dignissim diam. Curabitur efficitur pharetra quam, vitae semper dolor suscipit non. Aenean non maximus quam. Vivamus nec faucibus sapien. Quisque in fringilla dui, nec lobortis lorem. Praesent est diam, luctus eu lorem imperdiet, suscipit lacinia dui.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor mauris. Phasellus consectetur, orci eget posuere tincidunt, leo dolor ultricies ex, non congue arcu nibh quis justo. Duis maximus finibus risus vitae sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla metus sem, suscipit eu placerat a, malesuada quis nunc. Praesent eget consequat augue, ut dignissim diam. Curabitur efficitur pharetra quam, vitae semper dolor suscipit non. Aenean non maximus quam. Vivamus nec faucibus sapien. Quisque in fringilla dui, nec lobortis lorem. Praesent est diam, luctus eu lorem imperdiet, suscipit lacinia dui.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor mauris. Phasellus consectetur, orci eget posuere tincidunt, leo dolor ultricies ex, non congue arcu nibh quis justo. Duis maximus finibus risus vitae sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla metus sem, suscipit eu placerat a, malesuada quis nunc. Praesent eget consequat augue, ut dignissim diam. Curabitur efficitur pharetra quam, vitae semper dolor suscipit non. Aenean non maximus quam. Vivamus nec faucibus sapien. Quisque in fringilla dui, nec lobortis lorem. Praesent est diam, luctus eu lorem imperdiet, suscipit lacinia dui.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor mauris. Phasellus consectetur, orci eget posuere tincidunt, leo dolor ultricies ex, non congue arcu nibh quis justo. Duis maximus finibus risus vitae sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla metus sem, suscipit eu placerat a, malesuada quis nunc. Praesent eget consequat augue, ut dignissim diam. Curabitur efficitur pharetra quam, vitae semper dolor suscipit non. Aenean non maximus quam. Vivamus nec faucibus sapien. Quisque in fringilla dui, nec lobortis lorem. Praesent est diam, luctus eu lorem imperdiet, suscipit lacinia dui.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor mauris. Phasellus consectetur, orci eget posuere tincidunt, leo dolor ultricies ex, non congue arcu nibh quis justo. Duis maximus finibus risus vitae sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla metus sem, suscipit eu placerat a, malesuada quis nunc. Praesent eget consequat augue, ut dignissim diam. Curabitur efficitur pharetra quam, vitae semper dolor suscipit non. Aenean non maximus quam. Vivamus nec faucibus sapien. Quisque in fringilla dui, nec lobortis lorem. Praesent est diam, luctus eu lorem imperdiet, suscipit lacinia dui.'
        },
        {
            title: 'Prueba de titulo 6',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor mauris. Phasellus consectetur, orci eget posuere tincidunt, leo dolor ultricies ex, non congue arcu nibh quis justo. Duis maximus finibus risus vitae sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla metus sem, suscipit eu placerat a, malesuada quis nunc. Praesent eget consequat augue, ut dignissim diam. Curabitur efficitur pharetra quam, vitae semper dolor suscipit non. Aenean non maximus quam. Vivamus nec faucibus sapien. Quisque in fringilla dui, nec lobortis lorem. Praesent est diam, luctus eu lorem imperdiet, suscipit lacinia dui.'
        }
    ];

    posts.forEach((item, index) => {
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

    // Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function() {
        theme.attr("href", "css/green.css");
    });
    
    $("#to-red").click(function() {
        theme.attr("href", "css/red.css");
    })

    $("#to-blue").click(function() {
        theme.attr("href", "css/blue.css");
    })

});