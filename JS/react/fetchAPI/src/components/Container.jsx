export default function Container({ children }) {
	return (
		<section className="w-[480px] bg-container-color rounded-md shadow-sm p-4 mx-auto my-8">
			{children}
		</section>
	);
}
