import Link from "next/link";

const Notfound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Sorry, the page you are looking for does not exits</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default Notfound;
