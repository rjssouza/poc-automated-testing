import { Given, Then, When } from "@cucumber/cucumber";
import googlePage from "../pages/google.page";
import { expect } from "@playwright/test";

Given("Access google", async () => {
  await googlePage.navigate();
});

When("Type {string} and press enter", async (searchText) => {
  await googlePage.fillSearchTextAndEnter(searchText);
});

Then("Receive {string} on first page", async (expectedResult) => {
  const result = await googlePage.returnResult();
  await expect(result).toContainText([expectedResult]);
});
