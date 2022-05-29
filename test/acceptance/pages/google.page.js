import selector from "../selectors/google.selector";

const navigate = async () => {
    const url = testing.env["GOOGLE_URL"];
    await page.goto(url);  
}

const fillSearchText = async (searchText) => {
    const searchInput = await page.locator(selector.SEARCH_INPUT);
    await searchInput.type(searchText);
    await searchInput.press("Enter");  
}

const returnResult = async () => {
    const resultHeaders = await page.locator(selector.RESULT_HEADERS);
    return resultHeaders;
}

export default {
    navigate,
    returnResult,
    fillSearchText
};
