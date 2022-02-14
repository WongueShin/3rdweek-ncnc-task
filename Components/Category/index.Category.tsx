import style from "Components/Category/Category.module.css";
import css from "styled-jsx/css";
import Link from "next/link";

interface CategoryProps {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

const Category = ({CategoryData}: {CategoryData: CategoryProps}): JSX.Element => {
  return (
    <>
      {CategoryData && (
        <div className={style.Container} key={CategoryData.id}>
          {/* <Link href={CategoryData.linkUrl}> */}
          <Link href="#">
            <a className={style.link}>
              <div className={style.CategoryContent}>
                <img
                  className={style.CategoryImage}
                  src={CategoryData.imageUrl}
                  alt={CategoryData.name}
                />
                <div className={style.CategoryName}>{CategoryData.name}</div>
              </div>
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default Category;