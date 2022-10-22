
import styles from "../Ingredient/Ingredient.module.css"
/*

*/
function Ingredient({macro}) {
  return (
    <div className={styles.table1}>
    <div className="text-center py-4 font-bold">{macro.name.toUpperCase()}</div>
      <table class="table-fixed mx-auto w-full text-center rounded-lg">
        <thead className="p-6 bg-[#0005] rounded-md">
          <tr className="m-3">
            <th className="w-20 p-4" >Sl.No.</th>
            <th >Ingredient</th>
            <th className="w-40">Amount</th>
          </tr>
        </thead>
        <tbody className="p-4 bg-[#0002] rounded-lg">
        <tr>
            <td className="p-2">1</td>
            <td>calories</td>
            <td>{macro.calories}</td>
        </tr>
        <tr>
            <td className="p-2">2</td>
            <td>carbohydrates_total_g</td>
            <td>{macro.carbohydrates_total_g}</td>
        </tr>
        <tr>
            <td className="p-2">3</td>
            <td>cholesterol_mg</td>
            <td>{macro.cholesterol_mg}</td>
        </tr>
        <tr>
            <td className="p-2">4</td>
            <td>fat_saturated_g</td>
            <td>{macro.fat_saturated_g}</td>
        </tr>
        <tr>
            <td className="p-2">5</td>
            <td>fat_total_g</td>
            <td>{macro.fat_total_g}</td>
        </tr>
        <tr>
            <td className="p-2">6</td>
            <td>fiber_g</td>
            <td>{macro.fiber_g}</td>
        </tr>
        <tr>
            <td className="p-2">7</td>
            <td>potassium_mg</td>
            <td>{macro.potassium_mg}</td>
        </tr>
        <tr>
            <td className="p-2">8</td>
            <td>protein_g</td>
            <td>{macro.protein_g}</td>
        </tr>
        <tr>
            <td className="p-2">9</td>
            <td>serving_size_g</td>
            <td>{macro.serving_size_g}</td>
        </tr>
        <tr>
            <td className="p-2">10</td>
            <td>sodium_mg</td>
            <td>{macro.sodium_mg}</td>
        </tr>
        <tr>
            <td className="p-2">11</td>
            <td>sugar_g</td>
            <td>{macro.sugar_g}</td>
        </tr>
        {/* {
            macro?.map((foodItem, index)=>{
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{foodItem.name}</td>
                        <td>{foodItem.value}</td>
                    </tr>
                )
            })
        } */}
          
        </tbody>
      </table>
      ​
    </div>
  );
}

export default Ingredient