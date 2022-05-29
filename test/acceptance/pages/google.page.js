import selector from "../selectors/google.selector";

const navigate = async () => {
    const url = testing.env["GOOGLE_URL"];
    page.once('load', () => console.log('Page loaded!'));

    await page.goto(url);  
}

const fillSearchTextAndEnter = async (searchText) => {
    const content = await page.textContent('html');
    console.log(content);
    const searchInput = await page.locator(selector.SEARCH_INPUT);
    await searchInput.type(searchText); // pode ser usado o type também para simular melhor a interação com usuário
    await searchInput.press("Enter");  
}

const returnResult = async () => {
    const resultHeaders = await page.locator(selector.RESULT_HEADERS);
    return resultHeaders;
}

export default {
    navigate,
    returnResult,
    fillSearchTextAndEnter
};
