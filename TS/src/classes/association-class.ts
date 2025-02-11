class Dev {
	private tool: Tool | null = null;

	readCode() {
		console.log("reading code...");
	}

	writeCode() {
		if (this.tool === null) {
			console.log("i cant write without a tool");
		}
		this.tool?.writeCode();
	}
}

class Tool {
	writeCode() {
		console.log("writing code...");
	}
}
