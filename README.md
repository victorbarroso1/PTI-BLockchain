# BLockchain - Proyectos de Tecnologías de la Información - Grado en Ingeniería Informática (UPC)

Creación de un sistema Blockchain haciendo uso de Ganache y Truffle.

Pasos importantes:
1 El archivo web3.js contiene las llamadas en js que se comunican con el contrato.

2 Compilar el contrato "truffle compile"

3 Conectar el contrato con la blockchain: abrir Ganache, crear un workspace y añadir el proyecto. Ejecutar:
  "truffle migrate --reset"
  
 Importante: node_modules/.bin/truffle-config.js 
 host = 127.0.0.1, port = server de Ganache
