import type { NextPage } from "next";
import RegistrationForm from "../components/RegistrationForm";
import RegistrationTable from "../components/RegistrationTable";

const Home: NextPage = () => {
  return (
    <>
      <RegistrationForm />
      <RegistrationTable />
    </>
  )
};

export default Home;
