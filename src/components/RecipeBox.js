import React from "react";
import styles from "../styles/recipebox.module.css"

console.log("recipebox", styles);

const RecipeBox = () => (
    <div className={styles.recipebox}>
        <div className={styles.imagebox}>

        </div>
        <div className={styles.ingredients}>
            <ul>
                <li>Tomato Sauce</li>
            </ul>
        </div>
        <div className={styles.instructions}>
            <ul>
                <li>Preheat oven to 420</li>
                <li>stir the sauce in the pan and crush garlic oven to 420</li>
                <li>Add cream to the sauce and then let the sauce simmer for 3 minutes in light heat</li>
            </ul>
        </div>
        <div className={styles.citation}>
            <p>Author: Jake Lekas</p>
            <p>recipebox.com</p>
        </div>
    </div>
);

export default RecipeBox;