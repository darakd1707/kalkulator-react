import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Hargaakhir() {
    const [input, setInput] = useState({
        hargaPembelian: "",
        ppn: "",
        diskon: "",
    });

    const [result, setResult] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const hitungHargaAkhir = () => {
        const hargaPembelian = parseFloat(input.hargaPembelian);
        const ppn = parseFloat(input.ppn);
        const diskon = parseFloat(input.diskon);

        if (isNaN(hargaPembelian) || isNaN(ppn) || isNaN(diskon)) {
            setResult("Mohon isi semua kolom dengan angka");
            return;
        }

        const hargaSetelahPpn = hargaPembelian + (hargaPembelian * ppn) / 100;
        const hargaSetelahDiskon =
            hargaSetelahPpn - (hargaSetelahPpn * diskon) / 100;

        setResult(
            new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(hargaSetelahDiskon)
        );
    };

    return (
        <Container className="mt-4 text-center">
            <div
                className="card"
                style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px 20px",
                    fontSize: "1.5rem",
                }}
            >
                Harga Akhir Kalkulator
            </div>
            <Form>
                <Row className="mb-3">
                    <Col xs={12} md={6} lg={4} className="mx-auto">
                        <Form.Group controlId="formHargaPembelian">
                            <Form.Label style={{ fontSize: "1rem" }}>
                                Harga Pembelian:
                            </Form.Label>
                            <Form.Control
                                type="number"
                                name="hargaPembelian"
                                value={input.hargaPembelian}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={12} md={6} lg={4} className="mx-auto">
                        <Form.Group controlId="formPpn">
                            <Form.Label style={{ fontSize: "1rem" }}>PPN (%):</Form.Label>
                            <Form.Control
                                type="number"
                                name="ppn"
                                value={input.ppn}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={12} md={6} lg={4} className="mx-auto">
                        <Form.Group controlId="formDiskon">
                            <Form.Label style={{ fontSize: "1rem" }}>Diskon (%):</Form.Label>
                            <Form.Control
                                type="number"
                                name="diskon"
                                value={input.diskon}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button
                    variant="danger"
                    onClick={hitungHargaAkhir}
                    style={{ fontSize: "1rem", backgroundColor: "red" }}
                >
                    Hitung
                </Button>
            </Form>
            {result && (
                <Alert variant="danger" className="mt-3" style={{ fontSize: "1rem" }}>
                    Hasil: {result}
                </Alert>
            )}
        </Container>
    );
}