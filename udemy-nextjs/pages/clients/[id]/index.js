import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // router.push('/clients/max/projecta')
    router.push({
      pathname: "/clients/[id]/[clientId]",
      query: { id: "max", clientId: "projecta" },
    });
  };

  return (
    <div>
      <h2>ClientProjectPage</h2>
      <button onClick={loadProjectHandler}>Load Projec tA</button>
    </div>
  );
};

export default ClientProjectPage;
