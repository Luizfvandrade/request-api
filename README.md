# Práticas de programação com callbacks e Promises (com e sem async/await)
**Exercício**
O objetivo desse exercício é passar pelas três formas de controle de código assíncrono: callbacks, Promises sem async/await e Promises com async/await. Além disso esperasse que ao final seja possível entender como trabalhar com todas elas e saber escolher a melhor para cada cenário levando em consideração que devemos tentar escrever um código legível e moderno.

Faça uma mini API `https://github.com/Luizfvandrade/api-mini` em Node.js com 3 endpoints, onde cada um retorna um trecho de um texto. A concatenação dos 3 trechos deverá formar o texto completo, mas é necessário que seja concatenado em ordem. Supondo que você tenha o texto "Isso é um teste", o endpoint 1 poderia retornar "Isso ", o endpoint 2 poderia retornar "é um " e o endpoint 3 retornaria "teste", que seria o restante do texto.

Em seguida faça uma segunda aplicação em Node.js que deverá fazer as requisições para esses 3 endpoints em ordem. Logo após cada requisição a aplicação deverá escrever o trecho retornado num arquivo. Não vale fazer todas as requisições ao mesmo tempo e escrever no arquivo o texto por inteiro.

A primeira seria utilizando apenas callbacks e nenhuma promise. Para fazer as requisições para a mini API você pode utilizar a biblioteca request que permite que você faça requisições utilizando apenas callbacks (embora ela esteja deprecated). Para fazer a escrita do arquivo em disco você pode utilizar as funções do módulo fs eles têm as mesmas funções implementadas de diversas formas, inclusive apenas com callback como é possível ver nesse link: `https://nodejs.org/api/fs.html#fs_callback_api`
