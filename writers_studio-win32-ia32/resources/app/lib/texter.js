/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
/*global console,module*/
"use strict";
var textract    = require("textract");
var util        = require("util");
var child       = require("child_process");
var Datastore   = require('nedb');
var open        = require("open");



var Texter = function(obj, parent){
    var self = this;
    
    
    this.to_html = function() {
      var s = textract.fromFileWithPath("./files/Datenbank.odt", function(error, text) {
          console.log(text);
      });

    };
    
    
    // launcht das externe Programm
    this.trigger_process = function(){
        // child.exec('/home/martin/Schreibtisch/NewProgramming/MotivesElectron/writers_studio-linux-x64/writers_studio').unref(); // notice this without a callback..
        child.exec(obj.editor).unref();
        console.log("erfolgreich");
    };


    this.check_web = function(file) {
        var re = new RegExp("^(http|https)://", "i");
        var match = file.search(re);
        if (match > -1) return true;
        else            return false;
    };


    this.open_file = function(file) {
      // child.exec(obj.editor).unref();
      // open("http://www.google.com");
      if (self.check_web(file) === true) 
        {
        open(file);
        }
      else { open("./docs/" + file); }
    };


    // connects the database
    this.connect_db = function() {
        self.db = parent.db;
    };
    
    
    
    this.init = function() {
       // self.to_html();
       // self.trigger_process();
       self.connect_db();
    };
    
    
    
    
    self.init();
    
};



if (typeof(module) !== "undefined") {
    module.exports = exports = Texter;
    }




