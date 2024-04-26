import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(3000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`Search item = ${searchItem}`);
  let element = await $("//*[@title='Search']");
  await element.setValue(searchItem);
  await browser.keys("Enter");
  await browser.pause(5000);
});

Then(/^Click on the first test result$/, async function () {
  let element = await $("(//h3[@class])[1]");
  await element.click();
  await browser.pause(5000);
});

Then(/^Url should match (.*)$/, async function (expectedURL) {
  let actualUrl = await browser.getUrl();
  expect(actualUrl).to.equal(expectedURL);
});
