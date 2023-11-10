class Conta {
    constructor(saldo, senha) {
      this.saldo = saldo;
      this.senha = senha;
    }
    deposito() {
      let depositar = parseFloat(prompt("Qual valor gostaria de depositar"));
      if (prompt("Qual a sua senha?") == this.senha) {
        this.saldo += depositar;
        console.log(this.saldo);
      } else {
        alert("Senha Incorreta");
      }
    }
    retirada() {
      let sacar = parseFloat(prompt("Qual valor gostaria de retirar?"));
      if (prompt("Qual a sua senha?") == this.senha) {
        this.saldo -= sacar;
        console.log(this.saldo);
      } else {
        alert("Senha Incorreta");
      }
    }
  
    get valorSenha() {
      return this.#contaClienteSenha();
    }
    get valorSaldo() {
      return this.#contaClienteSaldo();
    }
    #contaClienteSenha() {
      return this.senha;
    }
    #contaClienteSaldo() {
      return this.saldo;
    }
  }
  let conta = new Conta(0, 1234);
  console.log(conta.valorSaldo);
  console.log(conta.valorSenha);
  
   let quantia = new Conta(0, 1234);
 
  class ContaPoupança extends Conta {
    constructor(saldo, senha, deposito, retirada) {
      super(saldo, senha, deposito, retirada);
    }
    atualizaJuros(){
        return (this.saldo += this.saldo * 0.07 )
    }
}
class PoupançaPremium extends ContaPoupança {
    constructor(saldo, senha, deposito, retirada) {
      super(saldo, senha, deposito, retirada);
    }
    atualizaJuros() {
      return (this.saldo += this.saldo * 0.12);
    }
  }
  
  const contaPoupançaPremium = new PoupançaPremium(0, 1234);
  contaPoupançaPremium.deposito();
  contaPoupançaPremium.retirada();
  contaPoupançaPremium.atualizaJuros();
  console.log(contaPoupançaPremium.saldo);