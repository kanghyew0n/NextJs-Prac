import Link from "next/link";

const PortfolioPage = () => {
  
  return (
    <div>
      <h1>PortfolioPage</h1>
      <ul>
        <li>
          <Link href="/portfolio/list">portfolio list</Link>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioPage;
