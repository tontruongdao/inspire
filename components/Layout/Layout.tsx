import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Showcase from "@components/Showcase/Showcase";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  title: string;
  keywords: string;
  description: string;
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { title, keywords, description, children } = props;
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>
        {children}
      </div>

      <Footer />
    </div>
  )
}

// DefaultProps
Layout.defaultProps = {
  title: "Inspire | Find the easiest mealprep idea",
  description: "Find the easiest mealprep idea",
  keywords: "Food, meal, recipe, protein, starch"
}

export default Layout
