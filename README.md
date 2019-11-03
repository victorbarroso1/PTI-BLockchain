# PTI-BLockchain

1 El archivo web3.js contiene las llamadas en js que se comunican con el contrato.

2 Para compilar el contrato hay que poner truffle compile
3 Para conectar el contrato con la blockchain, hay que abrir el Ganache, crear un workspace y añadir el proyecto, entonces ejecutas:

  truffle migrate --reset
  
 Importante que al realizar el 3, en el archivo node_modules/.bin/truffle-config.js 
 el host sea 127.0.0.1, y el port sea el mismo que el del server de Ganache
