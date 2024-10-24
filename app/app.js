const express =  require('express');
const app = express();
const port = 4000;
var cors= require("cors")

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods","GET,PUT,POST, DELETE");
    res.header("Access-Control-Allow-Headers","X-PINGOTHER, Content-Type,Authorization");
    app.use(cors());
    next();
});

const users = require ("./models/users")




app.use(express.json());

// insert users
//create users

app.post("/create-users", async(req,res)=>{
    const {user_id,user_name,user_pass} = req.body;
    await users.create(req.body).
    then(() => {
        return res.json({
            error: false,
            message: "Cadastro User realizado"
        });
    }).catch(()=>{
        return res.status(400).json({
            error: true,
            message: "Erro ao cadastrar user"
        });
    });
});

// select user

app.get ("/select-users",async(req,res) =>{
    await users.findAll ({
        attributes: ["user_id","user_name","user_pass"],
        order: [["user_id","DESC"]]
    })
    .then((users) => {
        return res.json({ 
            error: false,
            users
        });
    }).catch(() =>{
        return res.status(400).json({ 
            error: true,
            message: "Erro ao buscar usuarios"
        });
    });
});