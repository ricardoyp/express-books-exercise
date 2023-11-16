const express = require('express')
const app = express()
const port = 3000
const books = require('./data/books.json')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/all', (req, res) => {
    res.json(books)
})

app.get('/first', (req, res) => {
    res.json(books[0])
})

app.get('/last', (req, res) => {
    res.json(books[books.length - 1])
})

app.get('/middle', (req, res) => {
    res.json(books[books.length/2])
})

app.get('/author/dante-alighieri', (req, res) => {
    let titleBook;
    books.forEach(element => {
        if(element.author === 'Dante Alighieri'){
            titleBook = element.title;
        }
    })
    res.json(titleBook)
})

app.get('/country/charles-dickens', (req, res) =>{
    let countryBook;
    books.forEach(element => {
        if(element.author === 'Charles Dickens'){
            countryBook = element.country
        }
    })
    res.json(countryBook)
})

app.get('/year&pages/cervantes',(req, res) => {
    let pagesAndYears;
    books.forEach(element => {
        if(element.author === 'Miguel de Cervantes'){
            pagesAndYears = {
                pages: element.pages,
                year: element.year
            }
        }
    })
    res.json(pagesAndYears)
})

app.get('/country/count/spain', (req, res) => {
    let booksSpain = 0;
    books.forEach(element => {
        if(element.country === 'Spain'){
            booksSpain++;
        }
    })
    res.json(booksSpain)
})

app.get('/country/at-least/germany', (req, res) => {
    let bookGermany = false;
    books.forEach(element => {
        if(element.country === 'Germany'){
            bookGermany = true;
        }
    })
    res.json(bookGermany)
})

app.get('/pages/all-greater/200', (req, res) => {
    let books200pages = true;
    books.forEach(element => {
        if(element.pages < 200){
            books200pages = false
        }
    })
    res.json(books200pages)
})