import classess from "./section.module.css";
import img from "../../assets/Без названия (1).jpg";
import img1 from "../../assets/images.jpg";
import img2 from "../../assets/images (1).jpg";

const mahsulotlar = [
  {
    img: img,
    name: "ECSPERT",
    incruduction:
      "Bu bosh terisini va sochlarni yuvish uchun ishlatiladigan kosmetik vosita. U sochlarni tozalash, ortiqcha yog'larni olib tashlash va bosh terisini sog'lomlashtirish maqsadida ishlatiladi.",
    sena: "$12.00",
  },
  {
    img: img1,
    name: "LOREAL",
    incruduction:
      "Tarkibi: Shampuanlar odatda suv, detarjanlar (yuvish vositalari), pH muvozanatli moddalar va ba'zan vitaminlar va ozuqa moddalarini o'z ichiga oladi.",
    sena: "$13.99",
  },
  {
    img: img2,
    name: "ELSEVE",
    incruduction:
      "Bu bosh terisini va sochlarni yuvish uchun ishlatiladigan kosmetik vosita. U sochlarni tozalash, ortiqcha yog'larni olib tashlash va bosh terisini sog'lomlashtirish maqsadida ishlatiladi.",
    sena: "$14.99",
  },
];

export function Section() {
  return (
    <>
      <section className={classess.section}>
        <h2 className={classess.title}>Bosh sahifa</h2>
        <div className={classess.homeDiv}>
          {mahsulotlar.map((mahsulot, index) => (
            <div key={index} className={classess.homeDiv1}>
              <img src={mahsulot.img} className={classess.homeImg} />
              <h2 className={classess.name}>{mahsulot.name}</h2>
              <p className={classess.incruduction}>{mahsulot.incruduction}</p>
              <span className={classess.sena}>{mahsulot.sena}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
