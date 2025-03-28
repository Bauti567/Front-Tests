import {
  Switch,
  Theme,
  Button,
  Slider,
  Progress,
  Card,
  Box,
  Text,
  Inset,
  Strong,
  Heading,
  Em,
  Container,
  Callout
  
} from "@radix-ui/themes";

function App() {
  return (
    <>
      <Box maxWidth="240px">
        <Container>
          <Card size="2">
            <Heading as="h2" size="7">
              Título del card
            </Heading>
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: 140,
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
              <Em>Esto es cursiva</Em>
            </Text>
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need admin privileges to install and access this
                application.
              </Callout.Text>
            </Callout.Root>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default App;
