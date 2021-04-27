import React, { useState, useEffect } from "react";

function TechListModal() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Tech List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => {
              return <li className="collection-item">{tech.fistName}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default TechListModal;
