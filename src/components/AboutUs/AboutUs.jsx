import css from './AboutUs.module.css';
export default function AboutUs() {
  return (
    <div className={css.abt_us_container}>
      <h2>Chi siamo</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quis qui
        omnis, sapiente placeat doloremque a fuga numquam iure repellat dolor
        aspernatur magnam incidunt ratione eos nihil temporibus laboriosam
        accusamus.
      </p>
      <img
        src="https://optim.tildacdn.net/tild6265-3036-4530-b232-346530663635/-/format/webp/IMG_4620.jpg"
        alt=""
      />
      {/* <picture>
        <source
          srcSet="
              ./img/about-me/about-me-desk.png    1x,
              ./img/about-me/about-me-desk-2x.png 2x
            "
          media="(min-width: 1440px)"
        />
        <source
          srcSet="
              ./img/about-me/about-me-tab.png    1x,
              ./img/about-me/about-me-tab-2x.png 2x
            "
          media="(min-width: 768px)"
        />
        <source
          srcSet="
              ./img/about-me/about-me-mob.png    1x,
              ./img/about-me/about-me-mob-2x.png 2x
            "
          media="(max-width: 767px)"
        />
        <img
          className="about-me-pic"
          src="./img/about-me/about-me-desk.png "
          alt="Person picture"
          width="704"
          height="700"
        />
      </picture> */}
    </div>
  );
}
