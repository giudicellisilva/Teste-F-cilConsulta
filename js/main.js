(function(){
    var page = new Page({
        container: '.content',
        next: '.button-proximo',
        prev: '.button-voltar',
        btnEditar: '.button-editar',
        btnCadastrar: '.button-cadastrar'
    })

    var parcelas = new Parcelas({
        cartao: '#cartao',
        parcelas: '.div-pagamento-parcela'
    })
})()