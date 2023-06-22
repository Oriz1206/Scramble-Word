import React from "react";
import { NotFoundMain } from "./NotFound_Styled";

export default function NotFound() {
    document.title = "Not found";
    return (
        <NotFoundMain>
            <p>Page Not Found</p>
            <a href="/">Home</a>
        </NotFoundMain>
    )
}