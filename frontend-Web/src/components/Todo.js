import React from "react";

export default props => (
        <div class="card">
            <div class="card-body">
                <img src={props.todo.vista} class="img-thumbnail imgGale" />
                <button onClick={props.onDelete} class="btn btn-danger btn-sm top-0 start-0 mt-1">X</button>
            </div>
        </div>
        
);