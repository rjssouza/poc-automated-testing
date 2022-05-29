import { Given, Then, When } from "@cucumber/cucumber";
import page from "../pages/google.page";
import { expect } from "@playwright/test";

Given("Access google", async () => {
  await page.navigate();
});

When("Type {string} and press enter", async (searchText) => {
  await page.fillSearchText(searchText);
});

Then("Receive {string} on first page", async (expectedResult) => {
  const result = await page.returnResult();
  await expect(result).toContainText([expectedResult]);
});
