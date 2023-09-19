import { Level, calculateImc } from '../../helpers/imc';
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png'

type Props = {
    item: Level
}

export const GridItem = ({item} : Props) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
           <div className={styles.gridIcon}>
            <img src={item.icon === 'up' ? upImage : downImage} width="30"/> 
            
           </div>
        </div>
    )
}