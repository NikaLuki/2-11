import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button onClick={onLogOut}>Выйти</button>
            ) : (
                <button onClick={onLogin}>Войти</button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
};
export default SimpleComponent;
