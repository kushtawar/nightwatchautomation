module.exports = {
  before : function (browser) {
    
   // browser.resizeWindow(1000, 600);
    browser.switchWindow();

  },  
  'Medangular Test' : function (client) {
      client
       
        .url('http://localhost:4200')
        .waitForElementVisible('body', 5000)
        .click('xpath','//button[text()="Submit"]')
        .click('xpath','//button[text()="Reset"]')
        //.waitForElementVisible('/html/body/app-root/app-product/div/div/div/div/div/div[1]/form/div[5]/div',5000)
        .waitForElementVisible('div.row div.col.s12 div.card div.card-content.white-text div.row div.col.s5:nth-child(1) form.formheader.ng-pristine.ng-invalid.ng-untouched div.row:nth-child(6) > div.input-field.col.s12',5000)
         .waitForElementVisible('body.ng-scope:nth-child(2) div.row div.col.s12 div.card div.card-content.white-text div.row div.col.s7:nth-child(2) table.table tbody:nth-child(2) tr:nth-child(1) td:nth-child(4) a.action-btn:nth-child(1) > i.material-icons',5000) 
         .click('body.ng-scope:nth-child(2) div.row div.col.s12 div.card div.card-content.white-text div.row div.col.s7:nth-child(2) table.table tbody:nth-child(2) tr:nth-child(1) td:nth-child(4) a.action-btn:nth-child(1) > i.material-icons')
         .pause(10000)
         
         .end();
         
    }
  };