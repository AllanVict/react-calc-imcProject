import { useState } from "react"
import {levels, calculateIMC, LevelProps} from "./helpers/imc"
import {GridItem} from "./componentes/Griditem/index"
import leftArrowImage from "./assets/images/leftarrow.png"


import styles from "./App.module.css"
import poweredImage from "./assets/images/powered.png"


function App() {
  const [heightField, setheightField] = useState<number>(0)

  const [weightField, setweightField] = useState<number>(0)

  const [toShow, settoShow] = useState<LevelProps | null>(null)

  const handleCalculateButton = ()=>{
    if(heightField && weightField){
      settoShow(calculateIMC(heightField, weightField));
    }
    else {
      alert("Digite todos os campos.")
  } 
  }
  const handleBackButton = ()=>{
    settoShow(null)
    setheightField(0)
    setweightField(0)
  }

  


  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={poweredImage} alt="#" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>

          <p>IMC é a sigla para índice de massa corpórea, parâmetro adotado pela Organização Mundial da Saúde para calclar o peso ideal de cada pessoa.</p>

          <input type="number"
          placeholder="Digite a sua altura. EX: 1.5 (Em metros)" 
            value={heightField >0? heightField: ""}
            onChange={e =>setheightField(parseFloat(e.target.value))}
            disabled = {toShow ? true:false}
    
          />

          <input type="number"
          placeholder="Digite o seu peso. EX: 75.3 (Em Kg)" 
            value={weightField >0? weightField:""}
            onChange={e =>{setweightField(parseFloat(e.target.value))}}
            disabled = {toShow ? true:false}
          />

          <button onClick={handleCalculateButton}
          disabled = {toShow ? true:false}>Calcular</button>
          
        </div>




        <div className={styles.rightSide}>
          {
            !toShow && //quando toShow for "false"
              <div className={styles.grid}>
                {levels.map((item, key)=>(
                  <GridItem key ={key} item = {item} />
                ))}

              </div>
          }
          {toShow && //Quando for "true"
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
    
}

export default App
