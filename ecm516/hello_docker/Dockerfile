#comentários são feitos com #
#desde que # seja o primeiro símbolo da linha
#essa linguagem não é case sensitive
#mas é uma boa prática usar maiúsculas para diferenciar
#comandos de argumentos
#queremos uma imagem do node versão 14
FROM node:14

#um diretório no sistema de arquivos do contêiner para os comandos
#a seguir
WORKDIR /app

#copiamos o package.json para poder executar o npm install
COPY package.json .

#executamos o npm install
RUN npm install

#copiamos os demais arquivos
COPY . .

#colocamos o aplicativo em execução
CMD [ "node", "index.js" ]