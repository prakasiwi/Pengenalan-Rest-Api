const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/persegi", (req, res) =>{
    let sisi = Number(req.body.sisi)
    let luas = sisi * sisi
    let keliling = 4 * sisi

    let response = {
        sisi: sisi,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})

app.listen(8787, () =>{
    console.log("Server run port 8787")
})

app.post("/segitiga", (req, res) =>{
    let alas = Number(req.body.alas)
    let tinggi = Number(req.body.tinggi)
    let siring = Math.sqrt((alas ** 2) + (tinggi ** 2))
    let luas = 1 / 2 * alas * tinggi
    let keliling = alas * (2 * siring)
    
    let response = {
        alas: alas,
        tinggi: tinggi,
        siring: siring,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})

app.post("/persegi_panjang", (req, res) =>{
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})

app.post("/lingkaran", (req, res) =>{
    let jari = Number(req.body.jari)
    let luas = 3.14 * jari * jari
    let keliling = 2 * 3.14 * jari

    let response = {
        jari: jari,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})