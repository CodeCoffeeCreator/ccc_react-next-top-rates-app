import { HeaderTagProps } from './HeaderTag.props';
import styles from './HeaderTag.module.css';

export const HeaderTag = ({ tag, children }: HeaderTagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};
