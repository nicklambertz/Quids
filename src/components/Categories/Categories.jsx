import styles from "./categories.module.css"

const Categories = (props) => {

    const  {
        /*inline variable jason objekt */
            categories
    } = props
     
    
      return (
        <div className={styles["categories"]}>
          {categories.map((item, index) => {
            return <div className={styles["categories__item"]}>
              <img src={"./assets/img/" + item.icon}/>
              <span> {item.label} </span>
            </div>
          })}
        </div>
      );

}
export default Categories