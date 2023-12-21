import Button from "react-bootstrap/Button";

const ButtonComponent = (props) => {
    return (
        <>
            <Button onClick={props.onClick} className={props.margin} variant={props.theme}>
                {props.Btncontent}
            </Button>
        </>
    );
};

export default ButtonComponent;
