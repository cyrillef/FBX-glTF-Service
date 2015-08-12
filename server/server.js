//
// Copyright (c) Autodesk, Inc. All rights reserved
//
// FBX-glTF-Service
// by Cyrille Fauvel - Autodesk Developer Network (ADN)
// August 2015
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
//
var express =require ('express') ;
var request =require ('request') ;
var bodyParser =require ('body-parser') ;

// http://garann.github.io/template-chooser/
var app =express () ;
//app.use (bodyParser.urlencoded ({ extended: false })) ;
app.use (bodyParser.json ()) ;
app.use (express.static (__dirname + '/../www')) ;
app.set ('view engine', 'ejs') ;

app.set ('port', process.env.PORT || 8000) ;

module.exports =app ;
