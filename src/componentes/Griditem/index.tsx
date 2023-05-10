import { LevelProps } from "../../helpers/imc"
import styles from "./Griditem.module.css"
import upImage from "../../assets/images/up.png"
import dowmImage from "../../assets/images/down.png"
type Props = {
    item: LevelProps
}



export const GridItem = ({item}:Props)=>{
    return(
        <div className={styles.main} style={{backgroundColor:item.color}}>

           <div className={styles.gridIcon}>
                <img src={item.icon ==="up" ? upImage: dowmImage} alt="" width={30} />
           </div>

           <div className={styles.gridTittle}>
            {item.title}
           </div>

            {item.yourImc &&
                <div className={styles.yourImc}>
                    Seu IMC é de {item.yourImc.toFixed(2)} kg/m²
                </div>
            }

           <div className={styles.gridInfo}>
            <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
           </div>
            
        </div>
    )
}