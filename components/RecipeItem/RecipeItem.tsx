import Link from 'next/link';
import Image from 'next/image';
import styles from './RecipeItem.module.scss'

export interface IRecipe {
  id: string;
  name: string;
  slug: string;
  venue: string;
  address: string;
  performers: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

interface IRecipeItemProps {
  recipe: IRecipe
}

const RecipeItem = (props: IRecipeItemProps) => {
  const { recipe } = props;


  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image src={recipe.image ? recipe.image : '/images/event-default.png'} width={170} height={100} />
      </div>
      <div className={styles.info}>
        <span>{recipe.date} at {recipe.time}</span>
        <h3>{recipe.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/recipes/${recipe.slug}`} >
          <a className='btn'>Details</a>
        </Link>
      </div>
    </div>
  )
}

export default RecipeItem