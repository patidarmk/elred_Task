import edit from "../../../assets/edit.svg";
import statement_svg from "../../../assets/statement.svg";

import "./Statement.css";
const Statement = () => {
  const statementList = [
    {
      id: 1,
      statement: "You think it we ink it.",
    },
    {
      id: 2,
      statement: "grow with us",
    },
  ];

  return (
    <div className="statement">
      <div className="statement-heading-container">
        <div className="statement-heading">
          <img className="statement-item-svg" src={statement_svg} alt="svg" />
          <span className="statement-heading-title">statement</span>
        </div>
        <img className="statement-item-svg-edit" src={edit} alt="svg" />
      </div>
      <div className="statement-item">
        <span className="statement-item-text">
          {statementList[0].statement}
        </span>
        {statementList.length > 1 && (
          <div className="statement-item-count">
            +{statementList.length - 1}
          </div>
        )}
      </div>
    </div>
  );
};

export default Statement;
