function Parcelas(config){
    this.cartao = (typeof config.cartao === 'string') ? document.querySelector(config.cartao) : config.cartao;
    this.parcelas = (typeof config.parcelas === 'string') ? document.querySelector(config.parcelas) : config.parcelas;
    _this = this;

    _this.cartao.addEventListener('change', optionParcelas);
    

    function optionParcelas(){
        if(_this.cartao.checked){
            _this.parcelas.removeAttribute('style');
        }else{
            _this.parcelas.style = 'display: none';
        }
        
    }
}