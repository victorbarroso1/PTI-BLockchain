import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
await window.ethereum.enable();

const Subasta = web3.eth.Contract([
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "pujador",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "valor",
          "type": "uint256"
        }
      ],
      "name": "NuevaPujaMasAlta",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "ganador",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "valor",
          "type": "uint256"
        }
      ],
      "name": "PujaAcabada",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "usuario",
          "type": "address"
        }
      ],
      "name": "finalizarcontrato",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tiempo",
          "type": "uint256"
        },
        {
          "name": "_provider",
          "type": "address"
        },
        {
          "name": "_precio_inicial",
          "type": "uint256"
        },
        {
          "name": "_tipo_energia",
          "type": "string"
        },
        {
          "name": "_permanencia_meses",
          "type": "uint256"
        },
        {
          "name": "_potencia_suministrada",
          "type": "uint256"
        }
      ],
      "name": "SimpleAuction",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "puja",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "retirar",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finPuja",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ], 0x1d744CA1b4cbe77d266197D0cf21f4ADf86ea936);



  //NameContract.methods.getName().call();              --> no altera blockchain = no crea transaccion
  //NameContract.methods.setName("bitsofcode").send();  --> altera blockchain = crea transaccion

Subasta.methods.finalizarcontrato(address user).send();  //se le pasa un usuario y finaliza el contrato actual
Subasta.methods.SimpleAuction().send();                 // crea una subasta
Subasta.methods.puja().send();                          // puja la cantidad enviada
Subasta.methods.retirar().send();                       // permite retirar el dinero de una puja no ganada
Subasta.methods.finPuja().send();                       // finaliza la puja, mandando el dinero al provider
