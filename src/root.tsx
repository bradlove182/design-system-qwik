import { Button, Card, Container, Flex, Grid } from "@lib";

import "./lib/index.css";

export default () => {
    return (
        <>
            <head>
                <meta charSet="utf-8" />
                <title>Design System</title>
            </head>
            <body>
                <Container>
                    <Grid>
                        <Flex>
                            <Button variant={"gradient"}>{"Button"}</Button>
                            <Button>{"Button"}</Button>
                        </Flex>
                        <Card>
                            <Card.Body>{"Body"}</Card.Body>
                        </Card>
                    </Grid>
                </Container>
            </body>
        </>
    );
};
