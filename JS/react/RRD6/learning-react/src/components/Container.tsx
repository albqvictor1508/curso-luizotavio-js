import React from "react";

export default function Container({children}: {children: React.ReactNode}) {
  return (
    <section className="w-[500px] bg-white shadow rounded-md p-6 mx-auto space-y-3">
      {children}
    </section>
  )
}
