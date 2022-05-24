import { HeaderTag, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <>
      <div className={styles.wrapper}>
        <HeaderTag tag='h1'>{page.title}</HeaderTag>
        {products && (
          <Tag color='grey' size='m'>
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <HeaderTag tag='h2'>Вакансии - {page.category}</HeaderTag>
        <Tag color='red' size='m'>
          hh.ru
        </Tag>
      </div>
    </>
  );
};
