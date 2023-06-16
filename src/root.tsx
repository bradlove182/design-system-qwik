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
    List,
    Pill,
    Radio,
    Range,
    Switch,
    Text,
    Textarea,
    Tooltip,
} from "@lib";

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
                        <Pill>{"Pill"}</Pill>
                        <Radio name="radio">
                            <Radio.Item id="radio-1" label="Item 1" />
                            <Radio.Item id="radio-2" label="Item 2" />
                            <Radio.Item id="radio-3" label="Item 3" />
                        </Radio>
                        <Range id="range" />
                        <Switch id="switch" label="Switch" />
                        <Text as="h1">{"Heading 1"}</Text>
                        <Textarea id="text-area" label="text area" />
                        <Tooltip tip="tip">{"Tooltip"}</Tooltip>
                    </Grid>
                </Container>
            </body>
        </>
    );
};
