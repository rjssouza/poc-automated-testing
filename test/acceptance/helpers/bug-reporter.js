import Convert from 'ansi-to-html';

const FAILED = 'FAILED';
const AMBIGUOS = 'AMBIGUOS';
const SUCCESS = 'PASSED';

const converter = new Convert();

const reportBug = async (scenario) => {
    console.log(converter.toHtml(scenario.result.message));
}

const validateScenarioResult = async (scenario) => {
    switch(scenario.result.status){
        case FAILED:
            reportBug(scenario);
            break;
        default:
            break;
    }
}

export default validateScenarioResult;