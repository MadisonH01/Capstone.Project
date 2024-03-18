//api query
import { useGetUserQuery } from "../redux/api";
//styles
//

function Account({ token }) {
  const { data = {}, error, isLoading } = useGetUserQuery(token);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>Something went wrong!</h3>;
  }

  if (data?.user) {
    const { username, email, name, address, phone } = data.user;

    return (
      <section className="padding account">
        <h2>Profile Details</h2>
        <div>
          <p>
            Name: <span>{`${name.firstname}`}</span>
            <span>{`${name.lastname}`}</span>
          </p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>
            Address: <span>{`${address.city}`}</span>
            <span>{`${address.number}`}</span>
            <span>{`${address.street}`}</span>
            <span>{`${address.zipcode}`}</span>
          </p>
          <p>
            Phone:<span>{`${phone}`}</span>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h3>Not found!</h3>
    </section>
  );
}

export default Account;
