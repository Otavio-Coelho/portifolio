
function c(){
    let projetos = [
        {titulo: 'Projeto 1', descricao: 'Descrição breve do primeiro projeto', link:'#'},
        {titulo: 'Projeto 2', descricao: 'Descrição breve do segundo projeto', link:'#'},
        {titulo: 'Projeto 3', descricao: 'Descrição breve do terceiro projeto', link:'#'}
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