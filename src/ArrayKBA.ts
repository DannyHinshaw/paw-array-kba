import { Context, DynamicValue, DynamicValueInput, registerDynamicValueClass } from "./global";

interface KBADynamicValues {
	// TODO: Type this
	readonly json: any;
}

class ArrayKBA implements KBADynamicValues {
	static identifier = "com.bryanjswift.PawExtensions.ArrayKBA";
	static title = "Ticket Evolution X-Signature";
	static help =
		"https://ticketevolution.atlassian.net/wiki/spaces/API/pages/983115/Signing+requests+with+X-Signature";
	static inputs = [DynamicValueInput("secret", "API Secret", "SecureValue")];
	json = "";

	evaluate(context: Context) {
		const request = context.getCurrentRequest();
		const hmac = new DynamicValue("com.luckymarmot.HMACDynamicValue", {
			input: "",
			key: this.json,
			encoding: "Base64",
			algorithm: 3 /* sha256 */,
			uppercase: true
		});
		return hmac.getEvaluatedString();
	}

	text() {
		return this.json;
	}
}

// call to register function is required
registerDynamicValueClass(ArrayKBA);
