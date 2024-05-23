import React, { Component } from "react";
// Boxen in der Mitte; Zur Auswahl der Kategorien
class QuizMain extends Component ({image, title}){
};
return(
  <div className="QuizMain">
    <img src={image} alt={title} className="quizMain-image"/>
    <div className="quizMain-title"> {title} </div>
    </div>
  );
  

export default QuizMain;