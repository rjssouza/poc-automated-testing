import selector from "../selectors/google.selector";

const navigate = async () => {
    const url = testing.env["GOOGLE_URL"];
    page.once('load', () => console.log('Page loaded!'));

    await page.goto(url);  
}

const fillSearchTextAndEnter = async (searchText) => {
    const searchInput = await page.locator(selector.SEARCH_INPUT);
    await searchInput.type(searchText); // pode ser usado o fill mesmo resultado porem em recomendado o type para simular interação do usuário
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
