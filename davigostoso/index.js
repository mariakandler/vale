console.log('Script index.js sendo executado');

function avancar () {
    console.log('Função avancar chamada')
    const body = document.body

    const nome = document.getElementById('nome').value
    const tipo = document.querySelector('input[name="programaName"]:checked')
    const data = document.getElementById('date').value

    if (tipo) {
        const tipoLabel = tipo.labels[0].textContent;
        window.alert(`obaaaa, ${nome}! você tem, agora, um date com Maria marcado para o dia ${data}. vocês irão ${tipoLabel} <3`);
    } else {
        window.alert('por favor, selecione uma opção de programa');
    }

    body.innerHTML = ''

    const div = document.createElement('div')

    const imagem = document.createElement('img')
    imagem.src = './davi+maria.jpg'
    imagem.alt = 'davi + maria'
    imagem.id = 'imagem'

    div.appendChild(imagem)
    body.appendChild(div)
}
