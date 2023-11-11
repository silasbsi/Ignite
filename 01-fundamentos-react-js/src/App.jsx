import Header from "./components/Header";
import {Post} from "./components/Post";
import Sidebar from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css"

const App = () => {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post author="Silas Silva" content="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
            <Post author="Esthefane Barros" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus illo impedit non libero ad? Veniam impedit quasi eaque facilis labore reiciendis asperiores error excepturi. Enim non nobis rerum temporibus."/>
        </main>
      </div>
    </>
  );
};

export default App;
