//As funções JavaScript incluem condicionais e laços que usam a sintaxe de outras linguagens.

function abs(x){ //função pra calcular o valor absoluto
if (x >= 0) { //instrução if "se"
return x; //executa este código se a comparação for verdadeira.

} // fim da cláusula if
else { //cláusula opcional else executa seu código se a comparação for falsa!
return -x; 

} // chaves são opcionais quando há 1 instrução por cláusula.
} // observe as instruções return aninhadas dentro de if/else.

function factorial(n) { //função p calcular fatoriais
var product = 1; //começa com produto de 1
while (n>1) { //repete as instruções que estão em {}, 
            //enquanto a expressão em () for verdadeira

    product *= n; //atalho para product = product * n;
    n --;        //atalho para n = n - 1
}         //fim do laço
return product; // retorna o produto
}

factorial(4) // => 24: 1*4*3*2


//
function factorial2(n){ //Outra versão de método, usando um laço diferente!
var i, product = 1; //Começa com 1
for(i=2;i <= n; i++) //Incrementa i automaticamente com "++", de 2 até n
    product *= i; //Faz iso a cada vez. {} não é necessário para laços de-
                 //-1 linha
return product; //Retorna o fatorial

}

factorial2(5); // => 120: 1*2*3*4*5