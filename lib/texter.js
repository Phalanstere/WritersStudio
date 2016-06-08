/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
/*global console,module*/
"use strict";
var textract    = require("textract");
var util        = require("util");
var child       = require("child_process");
var Datastore   = require('nedb');
var open        = require("open");
var $           = require("jquery");


var Texter = function(obj, parent){
    var self = this;
    
    
    this.to_html = function() {
      var s = textract.fromFileWithPath("./files/Datenbank.odt", function(error, text) {
          console.log(text);
      });
    };
    
    this.trigger_etymology = function()
    {
    self.open_file('http://www.etymonline.com/index.php');
    };
    
    
    this.trigger_wikipedia = function() {
        self.type = "wikipedia";
        var d = document.getElementById("overlay"),
            http,
            s;
            
        if (!d) {
            self.create_overlay();
        }
        else
            {
            http =  'https://de.wikipedia.org/wiki/Wikipedia:Hauptseite';
            s = '<iframe id = "INSERT" src="' + http + '"></iframe>';
            $(".FrameOverlay").html(s);
            $("#motives_page #overlay").show();   
            }        
    };


    this.type = null;


    this.trigger_dwds = function(name) {
        // http://dwds.de/?qu=Ansage
        
        self.type = "dwds";
        
        var d = document.getElementById("overlay"),
            http,
            s;
            
        if (!d) {
            self.create_overlay();
        }
        else
            {
            http =  'http://dwds.de/';
            s = '<iframe id = "INSERT" src="' + http + '"></iframe>';
            $(".FrameOverlay").html(s);   
            $("#motives_page #overlay").show();           
            }
        
        
    };


    this.toggle_overlay = function() {
      $("#motives_page #overlay").toggle();
    };


    this.create_overlay = function() {
        var s = '<div id = "overlay">',
        http;
        
        s += '<div id = "exit"></div>';   
        
        s += '<div class = "FrameOverlay"></div>';       
                
        s += '</div>';
        $("#motives_page").append(s);
        
        
        var http =  'http://dwds.de/';
        var s = '<iframe id = "INSERT" src="' + http + '"></iframe>';
        $(".FrameOverlay").html(s);
                  
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
      else { 
           console.log("Öffnen des Files " + file);
           
           open("./docs/" + file); 
           }
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




