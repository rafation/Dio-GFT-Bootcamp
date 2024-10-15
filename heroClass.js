class hero {
    constructor(nome, idade, tipo){
        let ataque = ''
        
        if (tipo === 'mago'){
            ataque = 'magia'
        }else if (tipo === 'guerreiro'){
            ataque = 'espada'
        }else if(tipo === 'monge'){
            ataque = 'artes marciais'
        } else{
            ataque = 'shuriken'
        }
        
        
        function atacar(){
            console.log(nome + ' de ' + idade + ' anos' + ', do tipo ' + tipo + ', atacou usando ' + ataque)
        }
        atacar()
    };
}

joao = new hero('João', 23, 'mago')
