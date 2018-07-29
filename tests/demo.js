module.exports = {
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'rembrandt van rijn')
        .click('xpath','/html[1]/body[1]/div[1]/div[3]/form[1]/div[2]/div[3]/center[1]/input[1]')
        //.waitForElementVisible('button[name=btnG]', 25000)
        //.click('button[name=btnG]')
        .pause(5000)
        //.assert.containsText('ol#rso li:first-child',
       //   'Rembrandt - Wikipedia')
       .click('body.srp.tbo.vasq:nth-child(2) div.mdm:nth-child(3) div.mw:nth-child(12) div.col:nth-child(2) div.med:nth-child(2) div.bkWMgd:nth-child(1) div.srg div.g:nth-child(1) div:nth-child(1) div.rc h3.r > a:nth-child(1)')
       .end();
    }
  };