const express = require('express');

const port = 3333;

const app = express();

app.get('/',(req,resp)=>{
    return resp.status(200).json({message: 'Server is up Baby ;D'})
});

app.get('/atualizou',(req,resp)=>{
    return resp.status(200).json({message: 'Atualizou mesmo!!!'})
});

app.listen(port,(err)=>{
    err ? console.log("Erro ao executar o server.") : console.log("Executando o server na porta " +port); 
});