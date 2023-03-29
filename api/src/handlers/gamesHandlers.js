const getVideoGamesHandler =  (req, res) => {
   
    const { name } = req.query;

    if(name) {
        res.send("me llego la query");
    }
    else{
        res.send("no hay query pero esta todo bien")
    }
};

const getGamesHandler = (req, res) => {

    res.status(200).json({msg:"NIY: esta ruta trae la info de todos los usuarios"})
};

const getIdHandler = (req, res) => {
    const { id} = req.params
    res.send(`NIY: esta ruta trae la info de un game determinado por id${id}`)
};

const createGameHandler = (req, res) => {
    const { name, email, phone } = req.body;
    res.send(`NIY: esta ruta crea un nuevo juego:
    name:${name},
    email:${email},
    phone:${phone}
    `)
};

module.exports = {
    getVideoGamesHandler, getGamesHandler, getIdHandler, createGameHandler
}