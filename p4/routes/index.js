const express = require('express');
const router = express.Router();

router.use("/",(req , res)=>{
    //format data json
    const data = {
        caption: "Mahasiswa",
        layout : "layout/main-layout",
        data : [
            {
                npm : "222640128",
                nama: "Nabil Syawaludin Prima"
            },
            {
                npm : "222640123",
                nama: "Dedi Ferdinan Manalu"
            },
            {
                npm : "222640050",
                nama: "Anjaii Cumiyey"
            }
        ]
    };
    res.render("index", data);
    //menuju ke views/index.ejs
});

module.exports= router;