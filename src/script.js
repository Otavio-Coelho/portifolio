function c(){
    let projetos = [
        {titulo: 'Flor', descricao: 'Um projeto feito no p5.JS que desenha uma flor apenas com JavaScript', link:'https://editor.p5js.org/joojoj872/full/JsiTdY1ic'},
        {titulo: 'Contador de clicks', descricao: 'Um projeto feito no p5.JS que conta os clicks na tela', link:'https://editor.p5js.org/joojoj872/full/WmleJWN7v'},
        {titulo: 'Relogio', descricao: 'Um projeto feito no p5.JS que mostra na tela uma imagem dependendo do horario do dispositivo', link:'https://editor.p5js.org/joojoj872/full/TYc32luA8'}
    ];

    let projectGrid = document.querySelector('.project-grid');
    projectGrid.innerHTML = '';
    projetos.forEach( function (projetos){
        var card = document.createElement('a');
        card.className = 'project-card';
        card.href = projetos.link;
        card.innerHTML = '<h3>'+projetos.titulo+'</h3><p>'+projetos.descricao+'</p>';
        projectGrid.appendChild(card);
    });

}


document.addEventListener('DOMContentLoaded', c);