import Avatar from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1699198489130-2e02f3726612?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/silasbsi.png" />

        <strong>Silas Silva</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
