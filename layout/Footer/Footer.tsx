import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      <div>
        Top Rating Application © 2021 - {format(new Date(), 'yyyy')} All rights
        protected
      </div>
      <a href='#' target='_blank'>
        Terms of use
      </a>
      <a href='#' target='_blank'>
        Private policy
      </a>
    </div>
  );
};
