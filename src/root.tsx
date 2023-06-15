import {
    Button,
    Card,
    Checkbox,
    Code,
    Container,
    Flex,
    Grid,
    Icon,
    Input,
    Logo,
} from "@lib";
import List from "./lib/components/list/list";

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
                        <Icon.Arrow />
                        <Input
                            id="text"
                            label="Label"
                            placeholder="Placeholder"
                        />
                        <Input id="email" placeholder="Email" type="email" />
                        <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                        />
                        <List>
                            <List.Item>{"First Item"}</List.Item>
                            <List.Item>{"Second Item"}</List.Item>
                            <List.Item>{"Third Item"}</List.Item>
                        </List>
                        <List variant="ordered">
                            <List.Item>{"First Item"}</List.Item>
                            <List.Item>{"Second Item"}</List.Item>
                            <List.Item>{"Third Item"}</List.Item>
                        </List>
                        <Logo />
                    </Grid>
                </Container>
            </body>
        </>
    );
};
