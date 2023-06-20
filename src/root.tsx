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
                        <Container size={1}>
                            <Card>
                                <Card.Header>
                                    <Grid>
                                        <Text as="h1">{"Welcome back."}</Text>
                                        <Text>{"Sign in below."}</Text>
                                    </Grid>
                                </Card.Header>
                                <Card.Body>
                                    <Grid gap={2}>
                                        <Input
                                            id="card-input-email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                        <Input
                                            id="card-input-email"
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <Checkbox
                                            id="card-checkbox"
                                            label="Bathe me in newsletters."
                                        />
                                        <Switch
                                            id="card-switch"
                                            label="Bathe me in newsletters."
                                        />
                                    </Grid>
                                </Card.Body>
                                <Card.Footer>
                                    <Flex justifyContent="end">
                                        <Button variant="gradient">
                                            {"Sign In"}
                                        </Button>
                                    </Flex>
                                </Card.Footer>
                            </Card>
                        </Container>
                        <Flex>
                            <Button variant={"gradient"}>{"Button"}</Button>
                            <Button>{"Button"}</Button>
                        </Flex>
                        <Card>
                            <Card.Header>{"Header"}</Card.Header>
                            <Card.Body>{"Body"}</Card.Body>
                        </Card>
                        <Checkbox id="checkbox" label="Checkbox" />
                        <Card>
                            <Card.Body>
                                <Flex>
                                    <Checkbox
                                        id="checkbox-2"
                                        label="Checkbox"
                                    />
                                    <Checkbox
                                        id="checkbox-3"
                                        label="Checkbox"
                                    />
                                    <Checkbox
                                        id="checkbox-4"
                                        label="Checkbox"
                                    />
                                </Flex>
                            </Card.Body>
                        </Card>
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
                        <Card>
                            <Card.Body>
                                <Flex>
                                    <Switch id="switch-2" label="Switch" />
                                    <Switch id="switch-3" label="Switch" />
                                    <Switch id="switch-4" label="Switch" />
                                </Flex>
                            </Card.Body>
                        </Card>
                        <Text as="h1">{"Heading 1"}</Text>
                        <Textarea id="text-area" label="text area" />
                        <Tooltip tip="tip">{"Tooltip"}</Tooltip>
                    </Grid>
                </Container>
            </body>
        </>
    );
};
