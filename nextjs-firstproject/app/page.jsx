import User from "@/component/User";

const fetchUser = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json()
  console.log(data.data);
  return data.data;
};

export default async function HomePage() {
  
  const user = await fetchUser()

  return (
          <User user={user} />
  )
}
