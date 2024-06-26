import styles from "./Hero.module.css";
import { HeroProps } from "src/lib/types";
import { Button, Heading } from "src/components/basic";

const Hero = ({ title, description, buttonText, linkUrl }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroCol}>
        <Heading variant="h1" dangerouslySetInnerHTML={true} text={title} />
        <Heading variant="h2" text={description} />
        <div className={styles.heroFeatures}>
          <Button
            variant="primary"
            text={buttonText}
            className={styles.btnHero}
            href={linkUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
