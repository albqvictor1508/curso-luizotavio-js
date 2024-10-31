export default function Container({children}) {
  return (
    <section className="w-[500px] bg-white shadow rounded-md px-4 py-2">
      {children}
    </section>
  )
}
