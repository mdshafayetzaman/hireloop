export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex min-h-[calc(100svh-5rem)] items-center justify-center px-4 py-12 sm:px-6">
      {children}
    </main>
  )
}
