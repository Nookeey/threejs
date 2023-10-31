import Button from "@/components/Button"
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">Home page</h1>
      <Link href={'/about'}>
        <Button>About</Button>
      </Link>
    </main>
  )
}