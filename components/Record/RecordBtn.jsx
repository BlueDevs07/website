import styles from "../Record/Record.module.css"

function RecordBtn({data:{}}){
    return (
        <div className={styles.btn}>
            {data?.text}
        </div>
    )
}

export default RecordBtn