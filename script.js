document.addEventListener('DOMContentLoaded', () => {
    const book = document.querySelector('.book');
    const cover = document.querySelector('.cover');
    const listaMagias = document.getElementById('lista-magias');
    const buscaInput = document.getElementById('busca');
    let magias = []; // Array para armazenar todas as magias

    // Adiciona a classe 'open' para abrir o livro após um pequeno atraso
    cover.addEventListener('click', () => {
        book.classList.add('open');
    });

    // Função para buscar a escola de magia nas tags
    const encontrarEscola = (tags) => {
        const escolas = ['abjuração', 'adivinhação', 'conjuração', 'encantamento', 'evocação', 'ilusão', 'necromancia', 'transmutação'];
        return tags.find(tag => escolas.includes(tag)) || 'desconhecida';
    };

    // Função para renderizar as magias na página
    const renderizarMagias = (magiasParaRenderizar) => {
        listaMagias.innerHTML = ''; // Limpa a lista atual
        if (magiasParaRenderizar.length === 0) {
            listaMagias.innerHTML = '<p style="text-align: center; color: #3a2a1a;">Nenhuma magia encontrada.</p>';
            return;
        }

        magiasParaRenderizar.forEach(magia => {
            const escola = encontrarEscola(magia.tags);

            const article = document.createElement('article');
            // Adiciona um atributo 'data-school' para podermos estilizar com CSS
            article.dataset.school = escola;

            article.innerHTML = `
                <h2>${magia.nome}</h2>
                <p><strong>Círculo:</strong> ${magia.circulo_magia}</p>
                <p>${magia.descricao}</p>
                <p><strong>Tags:</strong> ${magia.tags.join(', ')}</p>
                <a href="${magia.link_referencia}" target="_blank">Ver referência</a>
            `;
            listaMagias.appendChild(article);
        });
    };

    // Carrega as magias do arquivo JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            magias = data;
            renderizarMagias(magias); // Renderiza todas as magias inicialmente
        })
        .catch(error => {
            console.error('Erro ao carregar as magias:', error);
            listaMagias.innerHTML = '<p style="text-align: center; color: #3a2a1a;">Não foi possível carregar o grimório. Tente novamente mais tarde.</p>';
        });

    // Adiciona o evento de busca
    buscaInput.addEventListener('input', (e) => {
        const termoBusca = e.target.value.toLowerCase();
        const magiasFiltradas = magias.filter(magia =>
            magia.nome.toLowerCase().includes(termoBusca) ||
            magia.descricao.toLowerCase().includes(termoBusca) ||
            magia.tags.some(tag => tag.toLowerCase().includes(termoBusca))
        );
        renderizarMagias(magiasFiltradas);
    });
});