import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "max", name: "won" },
    { id: "max2", name: "won3" },
  ];
  return (
    <div>
      <h1>ClientPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
