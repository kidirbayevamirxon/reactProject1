import classess from "./section.module.css";
import img from "../image/Без названия (1).jpg";
import img1 from "../image/images.jpg";
import img2 from "../image/images (1).jpg";
export function Section() {
  return (
    <>
      <section className={classess.section}>
        <h2 className={classess.title}>Home</h2>
        <div className={classess.homeDiv}>
          <div className={classess.homeDiv1}>
            <img src={img} className={classess.homeImg} />
            <h2 className={classess.name}>ECSPERT</h2>
            <p className={classess.incruduction}>
              Bu bosh terisini va sochlarni yuvish uchun ishlatiladigan kosmetik
              vosita. U sochlarni tozalash, ortiqcha yog'larni olib tashlash va
              bosh terisini sog'lomlashtirish maqsadida ishlatiladi.
            </p>
            <span className={classess.sena}>$12.00</span>
          </div>
          <div className={classess.homeDiv1}>
            <img src={img1} className={classess.homeImg} />
            <h2 className={classess.name}>LOREAL</h2>
            <p className={classess.incruduction}>
              Tarkibi: Shampuanlar odatda suv, detarjanlar (yuvish vositalari),
              pH muvozanatli moddalar va ba'zan vitaminlar va ozuqa moddalarini
              o'z ichiga oladi.
            </p>
            <span className={classess.sena}>$13.99</span>
          </div>
          <div className={classess.homeDiv1}>
            <img src={img2} className={classess.homeImg} />
            <h2 className={classess.name}>ELSEVE</h2>
            <p className={classess.incruduction}>
              Turlari: Shampuanlar turli xil turlarga bo'linadi: quruq sochlar
              uchun, yog'li sochlar uchun, nozik sochlar uchun, teri
              kasalliklari uchun va boshqalar. Har bir soch turiga mos shampuan
              tanlash muhim.
            </p>
            <span className={classess.sena}>$15.25</span>
          </div>
        </div>
      </section>
    </>
  );
}
