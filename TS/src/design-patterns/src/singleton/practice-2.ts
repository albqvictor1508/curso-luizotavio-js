class Practice2 {
	private static instance: Practice2 | null = null;

	private constructor() {}

	public static getInstance() {
		if (Practice2.instance === null) {
			Practice2.instance = new Practice2();
		}
		return Practice2.instance;
	}
}
