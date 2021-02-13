import { Context, DynamicValueInput, registerDynamicValueClass } from "./global";
import { KBAQuestion, parseQuestion } from "./parser";


/**
 * Main class for PAW to register.
 */
class ArrayKBA {
	public static identifier = "com.dannyhinshaw.PawExtensions.ArrayKBA";
	public static title = "Array KBA Dynamic Value";
	public static help = "https://github.com/DannyHinshaw/paw-array-kba/issues";
	public static inputs = [DynamicValueInput("jsonInput", "JSON input", "String")];
	public readonly jsonInput = "";

	public evaluate(context: Context) {
		const kbaQ = JSON.parse(this.jsonInput) as KBAQuestion;
		return parseQuestion(kbaQ);
	}

	public text() {
		return null;
	}
}

// call to register function is required
registerDynamicValueClass(ArrayKBA);
