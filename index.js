const ac = require("@antiadmin/anticaptchaofficial");
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin())
ac.setAPIKey('ef8d38af04f7e3837bc660fa4de91820');
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
(async () =>{
    let url = "https://www.youtube.com/c/TechBurner/about";
    let login = "https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
    let browser = await puppeteer.launch({headless:false});
    let page = await browser.newPage();
    await page.goto(login, {waitUntil : 'networkidle2'});
    //identifierId
    await page.type("#identifierId","utubescraper@gmail.com");
    await page.click("button[jscontroller='soHxf']");
    sleep(3000);
    await page.type("input[jsname='YPqjbf']","bypassinggoogle")
    await page.click("button[jscontroller='soHxf']");
    sleep(6000);
    await page.goto(url, {waitUntil : 'networkidle2'});
    // await page.waitForNavigation({waitUntil:"domcontentloaded"});
    sleep(5000);
    await page.evaluate (()=>{
      var element = document.querySelectorAll("ytd-button-renderer")[4];
      element.classList.add("ishq");
    })
    sleep(5000);
    await page.click('.ishq');
    await page.waitForSelector(".ishq")
    sleep(4000);
     let token = await ac.solveRecaptchaV2Proxyless("https://www.youtube.com/c/mkbhd/about" , "6Lf39AMTAAAAALPbLZdcrWDa8Ygmgk_fmGmrlRog")
     .then(response => console.log("right"))
     .catch(error => console.log("wrong"));
     //sleep(4000);
    // let data = await page.evaluate(()=>{
    //     let email = document.querySelector('a[id="email"]').innerText ;
    //     return {email}
    // });
   // console.log(data);
   // console.log('WORKING');
    // await browser.close()
})();
