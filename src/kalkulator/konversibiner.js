import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

export default function BinaryConverter() {
    const [binary, setBinary] = useState("");
    const [conversionType, setConversionType] = useState("decimal");
    const [result, setResult] = useState(null);

    const handleBinaryChange = (event) => {
        const value = event.target.value;
        setBinary(value);
    };

    const handleConversionTypeChange = (event) => {
        setConversionType(event.target.value);
    };

    const handleConvert = () => {
        // Konversi sesuai jenis yang dipilih
        if (conversionType === "decimal") {
            setResult(parseInt(binary, 2) || null);
        } else if (conversionType === "octal") {
            setResult(parseInt(binary, 2).toString(8) || null);
        } else if (conversionType === "hexadecimal") {
            setResult(parseInt(binary, 2).toString(16).toUpperCase() || null);
        }
    };

    return (
        <Container className="mt-4 text-center">
            <h2
                className="mb-4"
                style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px",
                    fontSize: "1.5rem",
                }}
            >
                Binary Converter
            </h2>
            <Form>
                <Row className="mb-3">
                    <Col xs={12} md={6} lg={4} className="mx-auto">
                        <Form.Group controlId="formBinary">
                            <Form.Label style={{ fontSize: "1rem" }}>Binary:</Form.Label>
                            <Form.Control
                                type="text"
                                value={binary}
                                onChange={handleBinaryChange}
                                placeholder="Enter binary number"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={12} md={6} lg={4} className="mx-auto">
                        <Form.Group controlId="formConversionType">
                            <Form.Label style={{ fontSize: "1rem" }}>
                                Conversion Type:
                            </Form.Label>
                            <Form.Select
                                value={conversionType}
                                onChange={handleConversionTypeChange}
                            >
                                <option value="decimal">Decimal</option>
                                <option value="octal">Octal</option>
                                <option value="hexadecimal">Hexadecimal</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Button
                    variant="danger"
                    onClick={handleConvert}
                    style={{ fontSize: "1rem" }}
                >
                    Convert
                </Button>
            </Form>
            {result !== null && (
                <Alert variant="danger" className="mt-3" style={{ fontSize: "1rem" }}>
                    Result: {result}
                </Alert>
            )}
        </Container>
    );
}