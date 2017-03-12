const fs = require('fs')
const path = require('path')
/**
 * get Home Page
 */
const _getIndexView = (req, res) => {

    res.render('home')
}

/**
 * Get Project
 */
const _getProject1 = (req, res) => {
    res.render('project/opusContainer')
}
/**
 * get My cv
 */
const _getMycv = (req, res) => {

    var filePath = "./pdffile/TinLuong_WebDeveloper_2017Ver.pdf"
    fs.readFile(filePath , function (err,data){
        res.contentType("application/pdf")
        res.send(data)
    });
}

exports.getIndexView = _getIndexView
exports.getProject1 = _getProject1
exports.getMycv = _getMycv
