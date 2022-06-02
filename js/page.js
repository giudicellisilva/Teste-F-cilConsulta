function Page(config){
    this.div = (typeof config.container === 'string') ? document.querySelectorAll(config.container) : config.container;
    this.prev = (typeof config.prev === 'string') ? document.querySelector(config.prev) : config.prev;
    this.next = (typeof config.next === 'string') ? document.querySelectorAll(config.next) : config.next;
    this.btnEditar = (typeof config.btnEditar === 'string') ? document.querySelector(config.btnEditar) : config.btnEditar;
    this.btnCadastrar = (typeof config.btnCadastrar=== 'string') ? document.querySelector(config.btnCadastrar) : config.btnCadastrar;
    var _this = this;
    this.atual = 0;

    
    for(let j = 0; j < _this.next.length; j++){
        _this.next[j].addEventListener('click', proximo);
    }
    _this.prev.addEventListener('click', anterior);
    _this.btnEditar.addEventListener('click', editar);
    _this.btnCadastrar.addEventListener('click', cadastrar);

    function proximo(){
        _this.div[_this.atual].style.display = 'none';
        _this.atual++;
        _this.div[_this.atual].removeAttribute('style');

        if(_this.atual != 0){
            _this.prev.removeAttribute('style');
        }
    
    }
    
    function anterior(){
        _this.div[_this.atual].style.display = 'none';
        _this.atual--;
        _this.div[_this.atual].removeAttribute('style');

        if(_this.atual === 0){
            _this.prev.style.display = 'none';
        }
    }

    function editar(){
        _this.div[_this.atual].style.display = 'none';
        _this.atual = 0;
        _this.div[_this.atual].removeAttribute('style');
    }

    function cadastrar(){
        _this.prev.style.display = 'none';
        _this.div[_this.atual].style.display = 'none';
        _this.atual = 3;
        _this.div[_this.atual].removeAttribute('style');
        
    }
    
}