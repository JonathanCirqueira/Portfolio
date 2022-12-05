
window.sr = ScrollReveal({reset:true});

sr.reveal('.titulo', {duration:2000});

sr.reveal('.caixa1', {
    rotate:{ x: 0, y: 80, z: 0},
    duration:2000});

    sr.reveal('.sobre-mim', {duration:3000});

    let header = document.getElementById('header');
    let linkHeader = document.getElementById("link-header");
    let inicio = document.getElementById('inicio');
    let showSidebar= false;

    function toggleSidebar()
    {
        showSidebar =!  showSidebar;

        if(showSidebar){
            linkHeader.style.marginLeft= '0vw';
            linkHeader.style.animationName= 'showSidebar';
            inicio.style.filter ='blur(2px)';
            
        }
        else{
            linkHeader.style.marginLeft= '-100vw';
            linkHeader.style.animationName= '';
            inicio.style.filter ='';
         
        }
    };

    function closeSidebar()
    {
        if (showSidebar)
        {
            toggleSidebar();
        }
    };
    window.addEventListener('resize',function (event){
        if (window.innerWidth > 700 && showSidebar)
        {
            toggleSidebar();
        }
    })

    


    VanillaTilt.init(document.querySelectorAll(".caixa-projetos"), {
		max: 25,
		speed: 400
	});

    const linkCabeçalho = document.querySelectorAll('.cabeçalho a[href^="#"]');

    linkCabeçalho.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
    })

    function scrollToIdOnClick(event){
        event.preventDefault();
        const element= event.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id) .offsetTop;
       

        window.scroll({
            top: to,
            behavior:"smooth"
        
        })

    };



    
    