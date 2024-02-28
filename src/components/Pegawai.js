import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

class Pegawai extends Component {
    constructor() {
        super();
        this.state = {
            pegawai: [
                { nip: "12345", nama: "Dara", alamat: "Blitar" },
                { nip: "54321", nama: "Elyn", alamat: "Malang" }
            ], // array pegawai untuk menampung data pegawai  
            nip: "",
            nama: "",
            alamat: "",
            action: "",
            search: "",
            selectedItem: null,
            filterpegawai: [],
        }
    }

    bind = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClose = () => {
        this.setState({
            isModalOpen: false
        })
    }

    add = () => {
        this.setState({
            isModalOpen: true,
            nip: "",
            nama: "",
            alamat: "",
            action: "insert"
        })
    }

    handleSave = (event) => {
        event.preventDefault()
        let pegawaibaru = this.state.pegawai

        if (this.state.action === "insert") {
            pegawaibaru.push({
                nip: this.state.nip,
                nama: this.state.nama,
                alamat: this.state.alamat,
            })
        }

        else if (this.state.action === "update") {
            let index = pegawaibaru.indexOf(this.state.selectedItem)
            pegawaibaru[index].nip = this.state.nip
            pegawaibaru[index].nama = this.state.nama
            pegawaibaru[index].alamat = this.state.alamat
        }

        this.setState({
            pegawai: pegawaibaru,
            isModalOpen: false
        })

    }

    Edit = (item) => {
        this.setState({
            nip: item.nip,
            nama: item.nama,
            alamat: item.alamat,
            action: "update",
            selectedItem: item
        })
    }

    getPegawai = () => {
        let url = "http://localhost:3000/pegawai";
        // mengakses api untuk mengambil data pegawai
        axios.get(url)
            .then(response => {
                // mengisikan data dari respon API ke array pegawai
                this.setState({ pegawai: response.data.pegawai });
            })
            .catch(error => {
                console.log(error);
            });
    }

    findPegawai = (event) => {
        let url = "http://localhost:3000/pegawai/find";
        if (event.keyCode === 13) {
            // menampung data keyword pencarian
            let form = {
                find: this.state.search
            }
            // mengakses api untuk mengambil data pegawai
            // berdasarkan keyword
            axios.post(url, form)
                .then(response => {
                    // mengisikan data dari respon API ke array pegawai
                    this.setState({ pegawai: response.data.pegawai });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    SavePegawai = (event) => {
        event.preventDefault();
        /* menampung data nip, nama dan alamat dari Form
        ke dalam FormData() untuk dikirim  */
        let url = "";
        if (this.state.action === "insert") {
            url = "http://localhost:3000/pegawai/add"
        } else {
            url = "http://localhost:3000/pegawai/update"
        }
        let form = {
            nip: this.state.nip,
            nama: this.state.nama,
            alamat: this.state.alamat
        }
        // mengirim data ke API untuk disimpan pada database
        axios.post(url, form)
            .then(response => {
                // jika proses simpan berhasil, memanggil data yang terbaru
                this.getPegawai();
            })
            .catch(error => {
                console.log(error);
            });
        // menutup form modal
        $("#modal").modal('hide');
    }

    Drop = (nip) => {
        let url = "http://localhost:3000/pegawai/delete" + nip;
        // memanggil url API untuk menghapus data pada database
        if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            axios.delete(url)
                .then(response => {
                    let pegawailama = this.state.pegawai
                    let index = pegawailama.indexOf(nip)
                    pegawailama.splice(index, 1)
                    // jika proses hapus data berhasil, memanggil data yang terbaru
                    this.setState({ pegawai: pegawailama })
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    componentDidMount() {
        // method yang pertama kali dipanggil pada saat load page
        this.getPegawai()
    }

    render() {
        return (
            <div className="m-3 card">
                <div className="card-header bg-info text-white">
                    Data Pegawai
                </div>
                <div className="card-body">
                    <input type="text" className="form-control mb-2" name="search" value={this.state.search}
                        onChange={this.bind} onKeyUp={this.findPegawai} placeholder="Cari" />
                    {/* tampilan tabel pegawai */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>NIP</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pegawai.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nip}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.alamat}</td>
                                        <td>
                                            <Button className="btn btn-sm btn-info m-1" data-toggle="modal"
                                                data-target="#modal" onClick={() => this.Edit(item)}>
                                                Edit
                                            </Button>
                                            <Button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(item.nip)}>
                                                Hapus
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <button className="btn btn-success" onClick={this.add}
                        data-toggle="modal" data-target="#modal">
                        Tambah Data
                    </button>
                    {/* modal form pegawai */}
                    <Modal show={this.state.isModalOpen}>
                        <Modal.Header>
                            <Modal.Title>Form Pegawai</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={this.SavePegawai}>
                            <Modal.Body className="modal-body">
                                <Form.Label>NIP</Form.Label>
                                <Form.Control type="number" name="nip" value={this.state.nip} onChange={this.bind}
                                    className="form-control" required />
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" name="nama" value={this.state.nama} onChange={this.bind}
                                    className="form-control" required />
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control type="text" name="alamat" value={this.state.alamat} onChange={this.bind}
                                    className="form-control" required />
                            </Modal.Body>
                            <Modal.Footer className="modal-footer">
                                <Button className="btn btn-sm btn-success" type="submit">
                                    Simpan
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Pegawai;