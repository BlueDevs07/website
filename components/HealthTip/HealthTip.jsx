import styles from "../HealthTip/HealthTip.module.css"

function HealthTip ({data={}}){
    return(
        <div className={styles.container}>

            <div className={styles.dataTitle}>
                    Health Tip
            </div>
            <div className={styles.dataContent}>
                    {data?.content}
            </div>
            <img className={styles.img} src="LargeCard/Rectangle.png"/>
        </div>
    )
}

export default HealthTip
