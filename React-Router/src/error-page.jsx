import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error)

    return(
        <div id="error-page">
            <h1>Ooops!</h1>
            <p>disculpa un error ha ocurrido bb lindi</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}