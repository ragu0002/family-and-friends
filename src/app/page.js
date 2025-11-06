import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/detalje">
      <div>
        <Image
          src="https://placecats.com/neo/300/200"
          loading="eager"
          alt="cat"
          width={300}
          height={200}
        ></Image>
        <h1>a little kittie</h1>
      </div>
    </Link>
  );
}
