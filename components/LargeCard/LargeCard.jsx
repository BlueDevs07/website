import styles from "../LargeCard/LargeCard.module.css"

function LargeCard({data={}}){
    return(
        <div className={styles.container}>
                <img className={styles.backg} src="LargeCard/Rectangle.png"/>
                <div className={styles.data}>
                   <div className={styles.dataTitle}> 
                        {data?.title}
                    </div> 
                    <div className={styles.dataContent}>
                        {data?.content}
                    </div> 
                </div>
                <div className={styles.img}>
                    <img src="favicon.ico" />
                </div>
        </div>
    )
}

export default LargeCard