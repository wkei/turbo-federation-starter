import styles from "./button.module.css";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
};
