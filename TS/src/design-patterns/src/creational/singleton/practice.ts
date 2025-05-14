class MySingleton {
	private name: string;
	private static instance: MySingleton;

	private constructor(name: string) {
		this.name = name;
	}

	public static getInstance(name: string): MySingleton {
		if (MySingleton.instance === null) {
			MySingleton.instance = new MySingleton(name);
		}
		return MySingleton.instance;
	}
}
