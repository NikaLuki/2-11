import React from "react";
import Card from "../common/Card.jsx";
const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth") === "token";
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        window.location.reload();
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        window.location.reload();
    };
    return (
        <Card>
            <Component
                {...props}
                onLogOut={onLogOut}
                onLogin={onLogin}
                isAuth={isAuth}
            />
        </Card>
    );
};

export default withFunctions;
