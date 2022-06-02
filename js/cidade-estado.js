function Localizacao(config){
    this.estado = (typeof config.estado === 'string') ? document.querySelector(config.estado) : config.estado;
    this.estadoOption = (typeof config.estadoOption === 'string') ? document.querySelectorAll(config.estadoOption) : config.estadoOption;
    this.cidadePe = (typeof config.cidadePe === 'string') ? document.querySelectorAll(config.cidadePe) : config.cidadePe;
    this.cidadeAl = (typeof config.cidadeAl === 'string') ? document.querySelectorAll(config.cidadeAl) : config.cidadeAl;
    _this = this;

    _this.estado.addEventListener('change', mudaEstado);
   function mudaEstado(){

    for(let i=0; i < _this.estadoOption.length; i++){
        
        if(_this.estado.value === 'pernanbuco'){
            for(let j=0; j < _this.cidadePe.length; j++){
                _this.cidadePe[j].removeAttribute('style');
            }
        }else if(_this.estado.value === 'alagoas'){
            for(let j=0; j < _this.cidadeAl.length; j++){
                _this.cidadeAl[j].removeAttribute('style');
            }
        }
    } 
   }
}