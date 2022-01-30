import useGithub from "../../hooks/useGithub";

export default function Home() {
  const { data, loading } = useGithub("juaopedrosilva");

  console.log(data, loading);

  if (loading) {
    return <h2>loading....</h2>;
  }

  return (
    <div>
      <img src={data?.avatarUrl} alt="avatar" />
      <h2>{data?.name}</h2>
      <p>{data?.bio}</p>
    </div>
  );
}
