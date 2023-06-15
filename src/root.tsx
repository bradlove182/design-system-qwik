import { Button, Card, Checkbox, Code, Container, Flex, Grid } from "@lib";

export default () => {
    return (
        <>
            <head>
                <meta charSet="utf-8" />
                <title>Design System</title>
            </head>
            <body>
                <Container>
                    <Grid gap={6}>
                        <Flex>
                            <Button variant={"gradient"}>{"Button"}</Button>
                            <Button>{"Button"}</Button>
                        </Flex>
                        <Card>
                            <Card.Body>{"Body"}</Card.Body>
                        </Card>
                        <Checkbox id="checkbox" label="Checkbox" />
                        <Code>{"Code"}</Code>
                    </Grid>
                </Container>
            </body>
        </>
    );
};
