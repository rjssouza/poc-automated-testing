import { Given, Then, When } from "@cucumber/cucumber";
import page from "../pages/google.page";

Given("Access google", async () => {
  await page.navigate();
});

When("Type {string}", async (searchText) => {
  await page.fillSearchText(searchText);
});

Then("Receive {string} on first page", async (expectedResult) => {
  await page.validateResult(expectedResult);
});
