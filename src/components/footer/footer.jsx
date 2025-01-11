import classee from "./footer.module.css";
import { Button } from "../buuton/button.jsx";
export function Footer() {
  return (
    <>
      <footer className={classee.footer}>
        <h2 className={classee.footerTitle}>Cantact</h2>
        <div className={classee.footerDiv}>
          <ul className={classee.item}>
            <li className={classee.list}>
              <a href="#" className={classee.style}>
                Home
              </a>
            </li>
            <li className={classee.list}>
              <a href="#" className={classee.style}>
                About
              </a>
            </li>
            <li className={classee.list}>
              <a href="#" className={classee.style}>
                Contact
              </a>
            </li>
          </ul>
          <span className={classee.span}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni quo necessitatibus voluptatibus facere nesciunt, dicta harum.
            Autem beatae dolore eaque, accusamus, in a cumque perspiciatis culpa
            praesentium cupiditate itaque!
          </span>
          <form action="" className={classee.form}>
            <input className={classee.input} type="text" id="text" placeholder="Username" required/>
            <input className={classee.input} type="email" id="email" placeholder="Email" required/>
            <input className={classee.input} type="password" id="password" placeholder="Password" required/><br />
            <Button>Submit</Button>
          </form>
        </div>
      </footer>
    </>
  );
}
