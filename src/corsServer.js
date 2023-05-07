import corsAnywhere from "cors-anywhere";

const host = "localhost";
const port = 8080;

corsAnywhere
  .createServer({
    originWhitelist: [], // permitir todas as origens
  })
  .listen(port, host, () => {
    console.log(`Servidor CORS Anywhere rodando em ${host}:${port}`);
  });

export default corsAnywhere;
