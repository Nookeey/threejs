import Button from "@/components/Button"
import Link from "next/link"

const About = () => {
  return (
    <div >
      <h1 className="text-3xl">About page</h1>
      <Link href={'/'} >
        <Button>Home</Button>
      </Link >
    </div >
  )
}

export default About