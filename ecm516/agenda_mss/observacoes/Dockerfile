#alpine: imagem Linux pequena
FROM node:alpine

#um diretório no sistema de arquivos do contêiner
#para os comandos a seguir
WORKDIR /app

#copia o arquivo package.json para poder executar
#o install
COPY package.json .

#instala dependências
RUN npm install

#copia todo o conteúdo local para a imagem
COPY . .

#executa quando o contêiner entra em execução
CMD ["npm", "start"]