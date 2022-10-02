import Footer from '../components/Footer';
import Header from '../components/Header';
import RegistrationForm from '../components/RegistrationForm';
import RegistrationTable from '../components/RegistrationTable';

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <RegistrationForm />
      <RegistrationTable />
      <Footer />
    </>
  )
};

export default Home;
