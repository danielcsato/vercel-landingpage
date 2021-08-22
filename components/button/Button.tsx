import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  href: string;
  layout?: string;
  title: string;
}

export default function Button({
  href,
  layout = "filled",
  title,
}: ButtonProps) {
  return (
    <div className={styles.root}>
      <Link href={href}>
        <a className={styles[`anchor__${layout}`]}>{title}</a>
      </Link>
    </div>
  );
}
