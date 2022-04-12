import Meta from "../components/Meta";
import Blocks from "../components/Home/Blocks";
import Logs from "../components/Home/Logs";
import DPicker from "../components/Home/DatePicker";

const Home = () => {
  // page content
  const pageTitle = "Home";

  return (
    <div>
      <Meta title={pageTitle} />
      {/* <Header head={pageTitle} description={pageDescription} /> */}
      <DPicker></DPicker>
      <Blocks></Blocks>
      <Logs></Logs>
      <Logs></Logs>
    </div>
  );
};

export default Home;
