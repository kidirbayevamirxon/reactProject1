import classe from "./header.module.css";

export function Header(){
  return (
    <>
      <header className={classe.header}>
        <h1 className={classe.logo}>LOGO</h1>
        <nav>
          <ul className={classe.item}>
            <li className={classe.list}>
              <a className={classe.style} href="#">Home</a>
            </li>
            <li className={classe.list}>
              <a className={classe.style} href="#">About</a>
            </li>
            <li className={classe.list}>
              <a className={classe.style} href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
