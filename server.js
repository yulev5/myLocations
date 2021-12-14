const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    console.log('in serverr');

    server.use(bodyParser.json())



    //Redirect to hammers page
    server.get(
        [
            '/tools-category/hammers',
            '/hummers/ptiwvn-mqith-1.html',
            '/hummers/quarrying-hammer/ptiwvn-hcibh-bosch-1.html',
            '/product-category/%D7%A4%D7%98%D7%99%D7%A9%D7%99%D7%9D',
            '/product-category/%D7%A4%D7%98%D7%99%D7%A9%D7%99-%D7%97%D7%A6%D7%99%D7%91%D7%94/?orderby=popularity'
        ]
        , (req, res) => {
            res.redirect(301, '/rentals/hammers')
        })

    //Redirect to diamond drills page
    server.get(
        [
            '/product-category/מקדחות-יהלום/?orderby=price',
            '/product-category/מקדחות-יהלום/?orderby=price-desc',
            '/product-category/מקדחות-יהלום/?orderby=popularity'
        ]
        , (req, res) => {
            res.redirect(301, '/rentals/diamond-drills')
        })


    //Redirect to generators page
    server.get(
        [
            '/product-category/גנרטורים/',
            '/gnrtvr-ed-2200-vvat-target-2200-dgm-lc2gf.html?___store=french&___from_store=french'
        ]
        , (req, res) => {
            res.redirect(301, '/rentals/generators')
        })

    server.get('/tools/MakitaHammer1200', (req, res) => {
        res.redirect(301, '/rentals/hammers/makita-hammer-1200')
    })

    server.get('/tools/MakitaHM1202K', (req, res) => {
        res.redirect(301, '/rentals/hammers/makita-hm-1202k')
    })

    server.get('/tools/BoschGBH11DE', (req, res) => {
        res.redirect(301, '/rentals/hammers/bosch-gbh-11de')
    })

    server.get('/product/מקדחת-יהלום-מקיטה-דגם-makita-dbm080/', (req, res) => {
        res.redirect(301, '/rentals/diamond-drills/makita-diamond-core-cup-drill-bit')
    })

    // server.get('', (req, res) => {
    //     res.redirect(301, '')
    // })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Read on http://localhost:3000')
    })
})