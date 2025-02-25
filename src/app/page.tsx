import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      Welcome, Sign Up <Link href='/sign-up/user-info' className="mx-1 underline text-blue-500">here</Link> to experience the multipage form!
    </div>
  );
}
