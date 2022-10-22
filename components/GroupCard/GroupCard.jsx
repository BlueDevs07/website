import styles from "../GroupCard/GroupCard.module.css"
import Link from "next/link";

function GroupCard({data={},color=1,route="#"}){
   return (
    <Link href={route}>
   <div className= {`${styles.container} ${color? "bg-[#A4D672]" : "bg-[#DBAEC6]"}`}>
        <img  className={styles.img} src="LargeCard/Rectangle.png"/>
        <div className={styles.title}>
            {data?.title}
        </div>
    </div> 
    </Link>
   )
}
export default GroupCard;
