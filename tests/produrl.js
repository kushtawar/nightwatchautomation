module.exports = {
  before : function (browser) {
    
   // browser.resizeWindow(1000, 600);
    browser.switchWindow();
 
  },  
  'Medangular Prod Sanity' : function (client) {
    const fs = require('fs');
    let rawdata = fs.readFileSync('env.json');  
    let envdetails = JSON.parse(rawdata);  
    let myenv= envdetails.env;
    let myinstanceurl=envdetails.instanceurl;
    console.log(myenv);
    console.log(myinstanceurl);
      client
       
        .url(myinstanceurl)
        .waitForElementVisible('body', 5000)
        .click('xpath','//button[text()="Submit"]')
        .click('xpath','//button[text()="Reset"]')
         .click('xpath','//button[text()="View"]')
        //.waitForElementVisible('/html/body/app-root/app-product/div/div/div/div/div/div[1]/form/div[5]/div',5000)
        .waitForElementVisible('body.ng-scope:nth-child(2) div.row div.maindiv div.col.s12 div.card div.card-content.white-text div.row div.col.s7:nth-child(3) table.table tbody:nth-child(2) tr:nth-child(1) td:nth-child(4) a.action-btn:nth-child(1) > i.material-icons',5000)
         .waitForElementVisible('body.ng-scope:nth-child(2) div.row div.maindiv div.col.s12 div.card div.card-content.white-text div.row div.col.s7:nth-child(3) table.table tbody:nth-child(2) tr:nth-child(1) td:nth-child(4) a.action-btn:nth-child(2) > i.material-icons',5000) 
         .click('body.ng-scope:nth-child(2) div.row div.maindiv div.col.s12 div.card div.card-content.white-text div.row div.col.s7:nth-child(3) table.table tbody:nth-child(2) tr:nth-child(1) td:nth-child(4) a.action-btn:nth-child(1) > i.material-icons')
         .pause(30000)
         //.click('body.ng-scope:nth-child(2) div.row div.maindiv div.col.s12 div.card div.card-content.white-text div.row div.col.s5:nth-child(2) form.formheader.ng-untouched.ng-pristine.ng-valid div.row:nth-child(6) div.input-field.col.s12 p:nth-child(1) button.btnsmall > i.glyphicon.glyphicon-info-sign',5000)
         .end();
      //   /html/body/app-root/app-product/div/div/div/div/div/div/div[2]/form/div[5]/div/button[3]
         
    }
  };