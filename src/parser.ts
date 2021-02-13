interface KBAAnswer {
	id: string
	text: string
	correctAnswer?: string
}

interface KBAAnswerEmbedded {
	id: string
	text: string
	correctAnswer: string
}

export interface KBAQuestion {
	id: string
	text: string
	answers: KBAAnswer[]
}

interface KBAQuestionEmbeddedAnswers {
	id: string
	text: string
	answers: KBAAnswerEmbedded[]
}

export interface KBA_JSON {
	authToken: string
	provider: string
	questions: KBAQuestion[]
}

/**
 * Map known questions to their answers.
 */
interface IAnswersMap {
	[k: string]: string[]
}

// Questions with different answers for multiple providers
const SHARED_MAP = {
	"Which of these street names are you associated with": ["Ashwood", "Bond"],
	"Which of the following is a current or previous employer": ["Iec", "LYNN LEE CONST CO IN"]

};

const TUI_ANSWERS_MAP: IAnswersMap = {
	"What state was your social security number issued": ["New Hampshire"]
};

const EFX_ANSWERS_MAP: IAnswersMap = {
	"Please select the dollar amount range in which your monthly auto loan or lease payment falls": ["$385 - $484"],
	"Please select the lender for this account": ["CARROLL COUNTY BANK &"],
	"Please select the lender that you have previously or you are currently making payments": ["SALLIE MAE SERVICING"],
	"According to our records, you currently own/lease": ["TOYOTA HIGHLANDER"]
};

// TODO: Can build this out once we actually have known answers for the questions
const EXP_ANSWERS_MAP: IAnswersMap = {};

/**
 * Check the known question/answers maps for answers to KBA questions.
 * @param {KBAQuestion} jsonQ
 * @returns {string}
 */
const getAnswerFromKnownQuestions = (jsonQ: KBAQuestion): string => {
	const knownQs = { ...TUI_ANSWERS_MAP, ...EFX_ANSWERS_MAP, ...SHARED_MAP };
	let possibleAnswers: string[] = [];
	const question = jsonQ.text;
	for (const k in knownQs) {
		if (question.includes(k)) {
			possibleAnswers = knownQs[k];
			break;
		}
	}

	const { answers } = jsonQ;
	const len = answers.length;
	for (let i = 0; i < len; i++) {
		const currAnswer = answers[i];
		if (possibleAnswers.includes(currAnswer.text)) {
			return currAnswer.id;
		}
	}

	return answers[len - 1].id;
};

/**
 * Parses an KBA question for embedded `correctAnswer` field, defaults to N/A.
 * @param {KBAQuestion} jsonQ
 * @returns {any}
 */
const getEmbeddedAnswer = (jsonQ: KBAQuestion) => {
	const q = jsonQ as KBAQuestionEmbeddedAnswers;
	const answers = q.answers;
	const answer = answers.find(a => a.correctAnswer === "true");
	if (!answer) {
		const na = answers[answers.length - 1];
		return na.id;
	}

	return answer.id;
};

/**
 * Accepts a KBAQuestion json and returns the correct answer.
 * @param {KBAQuestion} jsonQ
 * @returns {string}
 */
export const parseQuestion = (jsonQ?: KBAQuestion): string => {
	if (!jsonQ || !jsonQ.answers) {
		return "";
	}

	const hasEmbeddedAnswers = !!(jsonQ.answers[0].correctAnswer);
	if (hasEmbeddedAnswers) {
		return getEmbeddedAnswer(jsonQ);
	}

	return getAnswerFromKnownQuestions(jsonQ);
};
