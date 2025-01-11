import classes from "./about.module.css";

export function About() {
  return (
    <>
      <section className={classes.about}>
        <h2 className={classes.aboutTitle}>About</h2>
        <div className={classes.aboutDiv}>
          <p className={classes.aboutText}>
            Shampuan haqida qisqacha ma'lumot: Tarkibi: Shampuanlar odatda suv,
            detarjanlar yuvish vositalari, pH muvozanatli moddalar va ba'zan
            vitaminlar va ozuqa moddalarini o'z ichiga oladi. Funktsiyasi:
            Shampuan bosh terisini tozalash, sochlarni yumshatish va ularning
            sog'lom o'sishini ta'minlash uchun ishlatiladi. Turlari: Shampuanlar
            turli xil turlarga bo'linadi: quruq sochlar uchun, yog'li sochlar
            uchun, nozik sochlar uchun, teri kasalliklari uchun va boshqalar.
            Har bir soch turiga mos shampuan tanlash muhim. Shampuan – bu bosh
            terisini va sochlarni yuvish uchun ishlatiladigan kosmetik vosita. U
            sochlarni tozalash, ortiqcha yog'larni olib tashlash va bosh
            terisini sog'lomlashtirish maqsadida ishlatiladi.
          </p>
        </div>
      </section>
    </>
  );
}
