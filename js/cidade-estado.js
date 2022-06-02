const urlEstado = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

estado.addEventListener('change', async ()=>{
    const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+estado.value+'/municipios';
    
    const request = await fetch(urlCidades);
    const response = await request.json();
    
    let option = '';
    response.forEach(function(cidades){
        cidade.innerHTML += '<option>'+cidades.nome+'</option>';
    });
})
 
window.addEventListener('load', async ()=>{
    const request = await fetch(urlEstado);
    const response = await request.json();
        
    response.forEach(function(uf){
        estado.innerHTML += '<option value = '+uf.sigla+'>' + uf.nome + '</option>';
            
    });


        
});

    
