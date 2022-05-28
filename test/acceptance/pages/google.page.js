import selector from "../selectors/google.selector";
import { expect } from "@playwright/test";

const navigate = async () => {
    const url = testing.env["GOOGLE_URL"];
    await page.goto(url);  
}

const fillSearchText = async (searchText) => {
    const searchInput = await page.locator(selector.SEARCH_INPUT);
    await searchInput.fill(searchText);
    await searchInput.press("Enter");  
}

const validateResult = async (expectedResult) => {
    const resultHeaders = await page.locator(selector.RESULT_HEADERS);
    await expect(resultHeaders).toContainText([expectedResult]);  
}

export default {
    navigate,
    validateResult,
    fillSearchText
};
