# Webpacks

## O que é?

Webpack é um empacotador de módulos para aplicativos JavaScript. Quando o webpack processa seu aplicativo, ele cria internamente um grafo de dependência de um ou mais pontos de entrada e, em seguida, combina todos os módulos que seu projeto precisa em um ou mais pacotes, que são ativos estáticos para servir seu conteúdo. Os arquivos são unificados na ordem certa, sem duplicação e podem ser "minificados" para reduzir o tamanho.

## Por que Webpack?

A utilização de webpacks possibilita a inclusão de scripts para cada tipo de funcionalidade em um projeto. O Webpack pode ser utilizado para facilitar a utilização e troca de informações entre arquivos javascript que, se muito centralizados, dificultam a troca de informações e podem gerar problemas de legibilidade, tamanho, escopo e facilidade de manutenção.

## Conceitos gerais do Webpack

### Entry

O webpack usa um grafo de dependências para decidir quais módulos precisam ser empacotados. Isso significa que o webpack inicia de um único módulo e processa todas as dependências direta e indiretamente para construir o grafo de dependências inteiro e então carregar todos os módulos necessários. O Entry Point determina onde o webpack deve iniciar a construção do seu grafo de dependências interno.

### Output

A chave de saída de nível superior contém um conjunto de opções que instruem o webpack sobre como e onde ele deve gerar seus pacotes, ativos e qualquer outra coisa que você empacotar ou carregar com o webpack. O output determina onde o webpack deve emitir os pacotes que cria e como os nomeia.

### Loaders

Esse recurso existe para que o Webpack leia outros arquivos, além do JavaScript. Portanto, é preciso ter Loaders instalados separadamente. Mas, além disso, os Loaders também podem ser usados para converter JavaScript de uma versão para outra. Basicamente, há duas propriedades obrigatórias, que são a “test”, que define quais serão os arquivos a serem filtrados, e a “use”, que identifica qual módulo deve ser usado.

### Plugins

O uso de plug-ins permite que o compilador do webpack execute tarefas em blocos produzidos a partir dos módulos incluídos. Embora o webpack não seja um executor de tarefas, com plug-ins, podemos realizar algumas ações personalizadas que os carregadores não podiam realizar quando o código estava sendo empacotado.

## Utilidades que o Webpack proporciona

- Fácil configuração;
- Eliminação de ativos mortos;
- Controle total de como os ativos serão processados;
- Divisão de código mais simples;
- Benefícios de velocidade de processamento;
- Implementação de produção estável.

## Quais ferramentas utilizam Webpack?

De acordo com a página do stackshare, 4215 companhias utilizam o Webpack em seu stack tecnológico como por exemplo os seguintes aplicativos: Airbnb, Pinterest, Instagram, Udemy, Robinhood, CRED, Discord, Glovo, Kavak

## Outros bundlers (diferenças dessas ferramentos para com o Webpack)

Browserify - Ele não requer suas próprias ferramentas CLI para gerenciar dependências, permitindo fácil integração com scripts NPM.

FuseBox - Suporte a TypeScript de primeira classe sem configurações adicionais.

Rollup - Suporte a Tree-shaking e elevação de escopo.

Parcel - Tem a capacidade de transformar automaticamente seu código usando Babel, PostCSS e PostHTML.
