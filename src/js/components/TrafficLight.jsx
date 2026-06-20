import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("danger"); {/*obviamente el estado, el color danger es de bootstrap lol*/}

    return (
        <div className="d-flex flex-column align-items-center mt-5"> {/*la caja invisible que envuelve todo el componente y en este caso centrado en el medio*/}

            {/* soporte o palo del semáforo*/}
            <div className="bg-secondary" style={{ width: "50px", height: "90px" }}></div>

            
                    {/* caja del semáforo */}
            <div className="bg-dark p-3 rounded-4 d-flex flex-column gap-3" style={{ width: "100px", height: "250px" }}>

                
                    {/* roja */}
                  <div 
                    onClick={() => setColor("danger")} 
                    className={`rounded-circle bg-danger w-100 ${color === "danger" ? "opacity-100 shadow-lg" : "opacity-25"}`}
                    style={{ height: "70px", cursor: "pointer" }}></div>


                    {/* amarilla */}
                  <div 
                    onClick={() => setColor("warning")} 
                    className={`rounded-circle bg-warning w-100 ${color === "warning" ? "opacity-100 shadow-lg" : "opacity-25"}`}
                    style={{ height: "70px", cursor: "pointer" }}></div>


                    {/* verde */}
                  <div 
                    onClick={() => setColor("success")} 
                    className={`rounded-circle bg-success w-100 ${color === "success" ? "opacity-100 shadow-lg" : "opacity-25"}`}
                    style={{ height: "70px", cursor: "pointer" }}></div>

            </div>
            
                     {/* texto informativo */}
            <h4 className="mt-3 text-secondary">
                Seleccionado: El <span className={`text-${color} fw-bold`}>{color === "danger" ? "Rojo" : color === "warning" ? "Amarillo" : "Verde"}</span>
            </h4>

        </div>
    );
};

export default TrafficLight;