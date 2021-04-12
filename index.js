/* tslint:disable:no-unused-variable */

// const puppeteer = require("puppeteer");
const ac = require("@antiadmin/anticaptchaofficial");
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
ac.setAPIKey('ef8d38af04f7e3837bc660fa4de91820');
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
(async () => {
  let channel = ["TechBurner", "StringReveals", "Mrwhosetheboss","BBKiVines"];
  // for(var i=0; i<channel.length; i++){
    // let url = "https://www.youtube.com/c/"+channel[i]+"/about";
  // // let joinChannel = ["mkbhd"];
    let login =
    "https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  await page.goto(login, { waitUntil: "networkidle2" });
  //identifierId
  await page.type("#identifierId", EmailID);
  await page.click("button[jscontroller='soHxf']");
  sleep(3000);
  await page.type("input[jsname='YPqjbf']",Password);
  await page.click("button[jscontroller='soHxf']");
  await page.addStyleTag({ content: "{scroll-behavior: auto !important;}" });
  sleep(6000);
  for(var i=0; i<channel.length; i++){
      let url = "https://www.youtube.com/c/"+channel[i]+"/about";
      await page.goto(url, { waitUntil: "networkidle2" });
      await page.waitForSelector("#button");
      // await page.waitForNavigation({ waitUntil: "domcontentloaded", timeout:20000});
      sleep(5000);
      await page.evaluate(()=>document.querySelectorAll("ytd-button-renderer")[4].click())
      sleep(4000);
      let token = await ac.solveRecaptchaV2Proxyless("https://www.youtube.com/c/TechBurner/about" , "6Lf39AMTAAAAALPbLZdcrWDa8Ygmgk_fmGmrlRog")
      .then(gresponse => {
        // console.log('g-response: '+gresponse);
        // console.log('google cookies:');
        // console.log(ac.getCookies());
        return gresponse
      })
      .catch(error => console.log('test received error '+error));
      // await page.evaluate ((token)=>{
      //   var element = document.getElementById('g-recaptcha-response');
      //   element.value = token;
      //   console.log(token);
      // },token);
      await page.$eval('#g-recaptcha-response', (element, token) =>{
        element.value = token;
      }, token);
      sleep(4000);
      await Promise.all([
        page.click("#submit-btn")
        // page.waitForNavigation({waitUntil:"networkidle0"})
      ])
      // await page.waitForSelector("#submit-btn");
      sleep(4000);
      let data = await page.evaluate(() => {
        let email = document.querySelectorAll("#email")[2].innerText;
        return email;
      });
      sleep(4000);
      console.log(i);
      console.log(data);
    //  await browser.close()
}
  await browser.close()
})();
