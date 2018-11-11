module.exports = (jsonServer) => {


   return jsonServer.rewriter({
        "/cadastro/colonia":"/colonia",
        "/cadastro/membro":"/membro",
        "/cadastro/servico": "/servico",
        "/cadastro/recurso":"/recurso",
        "/cadastro/local":"/local"
    });
}