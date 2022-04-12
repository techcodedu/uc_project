import Header from "../components/Header";
import Meta from "../components/Meta";

const Profile = () => {
  // page content
  const pageTitle = "Profile";
  const pageDescription = "welcome to react bootstrap template";

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Profile;
