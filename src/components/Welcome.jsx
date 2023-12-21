import { Alert } from "react-bootstrap";

const Welcome = (props) => {
    return (
        <Alert variant="success" className="mb-2 text-center">
            <Alert.Heading className="fs-3">Hey, nice to see you</Alert.Heading>
            <p className="fs-5">{props.welcome}</p>
            <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
    );
};

export default Welcome;
