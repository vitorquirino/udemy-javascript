const pessoa1 = {
    nome:'luiz',
    sobrenome:'silva',
    idade: 29,

    fala() {
        console.log(`a minha idade atual é ${this.idade}`);
    },

    icrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.icrementaIdade();
pessoa1.fala();
pessoa1.icrementaIdade();
pessoa1.fala();
pessoa1.icrementaIdade();
pessoa1.fala();
pessoa1.icrementaIdade();