import { DONALD, GERTRUDE, KIMBERLY, MARIA, THOMAS } from "./_data/questions";
import { parseQuestion } from "./parser";


describe("parser", () => {
	it("should handle undefined params by returning an empty string", () => {
		const undefRes = parseQuestion(undefined as any);
		expect(undefRes).toBe("");

		const emptyRes = parseQuestion({} as any);
		expect(emptyRes).toBe("");
	});

	it("should correctly parse TUI KBA questions for Thomas", () => {
		const questions = THOMAS.questions;
		const len = questions.length;
		for (let i = 0; i < len; i++) {

			const currQ = questions[i];
			const res = parseQuestion(currQ);
			if (i === 0) {
				expect(res).toBe("3070585118");
			} else if (i === 1) {
				expect(res).toBe("3070585130");
			} else if (i === 2) {
				expect(res).toBe("3070585132");
			} else {
				throw Error(`Unexpected answer "${res}" selected on iteration "${i}"`);
			}
		}
	});

	it("should correctly parse TUI KBA questions for Kimberly", () => {
		const questions = KIMBERLY.questions;
		const len = questions.length;
		for (let i = 0; i < len; i++) {

			const currQ = questions[i];
			const res = parseQuestion(currQ);
			if (i === 0) {
				expect(res).toBe("3070585180");
			} else if (i === 1) {
				expect(res).toBe("3070585188");
			} else if (i === 2) {
				expect(res).toBe("3070585194");
			} else {
				throw Error(`Unexpected answer "${res}" selected on iteration "${i}"`);
			}
		}
	});

	it("should correctly parse EFX KBA questions for Maria", () => {
		const questions = MARIA.questions;
		const len = questions.length;
		for (let i = 0; i < len; i++) {

			const currQ = questions[i];
			const res = parseQuestion(currQ);
			if (i === 0) {
				expect(res).toBe("5");
			} else if (i === 1) {
				expect(res).toBe("5");
			} else if (i === 2) {
				expect(res).toBe("5");
			} else if (i === 3) {
				expect(res).toBe("5");
			} else {
				throw Error(`Unexpected answer "${res}" selected on iteration "${i}"`);
			}
		}
	});

	it("should correctly parse EFX KBA questions for Donald", () => {
		const questions = DONALD.questions;
		const len = questions.length;
		for (let i = 0; i < len; i++) {

			const currQ = questions[i];
			const res = parseQuestion(currQ);
			if (i === 0) {
				expect(res).toBe("5");
			} else if (i === 1) {
				expect(res).toBe("5");
			} else if (i === 2) {
				expect(res).toBe("5");
			} else if (i === 3) {
				expect(res).toBe("5");
			} else {
				throw Error(`Unexpected answer "${res}" selected on iteration "${i}"`);
			}
		}
	});

	it("should correctly parse EFX KBA questions for Gertrude", () => {
		const questions = GERTRUDE.questions;
		const len = questions.length;
		for (let i = 0; i < len; i++) {

			const currQ = questions[i];
			const res = parseQuestion(currQ);
			if (i === 0) {
				expect(res).toBe("5");
			} else if (i === 1) {
				expect(res).toBe("5");
			} else if (i === 2) {
				expect(res).toBe("4");
			} else {
				throw Error(`Unexpected answer "${res}" selected on iteration "${i}"`);
			}
		}
	});
});