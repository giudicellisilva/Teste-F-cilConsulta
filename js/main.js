(function(){
    var page = new Page({
        container: '.content',
        next: '.button-proximo',
        prev: '.button-voltar',
        btnEditar: '.button-editar',
        btnCadastrar: '.button-cadastrar'
    })

    var localizacao = new Localizacao({
        estado: '.estado-form',
        estadoOption: '.estado-form option',
        cidadePe: '.cidade-form .pe',
        cidadeAl: '.cidade-form .al'
    })

    var parcelas = new Parcelas({
        cartao: '#cartao',
        parcelas: '.div-pagamento-parcela'
    })
})()