import React from "react";
import { EachRule } from "../../Pages/Wordle_Rule/Rule";

export default function OneRule({title, main}) {
    return (
        <EachRule>

            <div>
                <p>{title}</p>
            </div>

            <div>
                <p>{main}</p>
            </div>

            <div>
                <div></div>
                <div></div>
            </div>

      </EachRule>
    )
}