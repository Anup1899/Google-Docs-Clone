import Link from "next/link";

const Home = ()=>{
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link href="/documents/123" className="text-blue-500 underline">Go to document page</Link>
    </div>
  );
}

export default Home