import React, { Component } from 'react';

export default class AddProfile extends Component {
    static displayName = AddProfile.name;

    constructor(props) {
        super(props);
        this.state = {
            addressLine1: "", addressLine2: "", addressLine3: "", postalcode: 0, city: "", country: "",
            fname: "", sname: "", email: "", medcon: "none", disab: "none", weight: 0, height: 0, user: {}, profile: {}, adress: {}
        };

        this.addUser = this.addUser.bind(this);
        this.addProfile = this.addProfile.bind(this);
        this.addAddress = this.addAddress.bind(this);
    }

    async addUser(event) {
        event.preventDefault();
        let user = {
            FirstName: this.state.fname,
            LastName: this.state.sname,
            Email: this.state.email
        };
        fetch('https://localhost:44339/api/v1/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(res => {
            this.setState({ user: res }); console.log(res);
        }).then(res => this.addProfile());


    }
    async addProfile() {
        let profile = {
            Email: this.state.email,
            Weight: this.state.weight,
            Height: this.state.height,
            MedicalConditions: this.state.medcon,
            Disabilities: this.state.disab,
            UserId: this.state.user.id
        };
        fetch('https://localhost:44339/api/v1/profiles', {
            method: 'POST',
            body: JSON.stringify(profile),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(res => {
            this.setState({ profile: res }); console.log(res);
        }).then(res => this.addAddress());

    }
    async addAddress() {
        let address = {
            AddressLine1: this.state.addressLine1,
            AddressLine2: this.state.addressLine2,
            AddressLine3: this.state.addressLine3,
            PostalCode: this.state.postalcode,
            City: this.state.city,
            Country: this.state.country,
            ProfileId: this.state.profile.id
        };
        fetch('https://localhost:44339/api/v1/addresses', {
            method: 'POST',
            body: JSON.stringify(address),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(res => {
            this.setState({ address: res }); console.log(res);
        })
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Add Profile</h1>
                <div style={{ textAlign: "center" }}>
                    <form onSubmit={this.addUser} id="addForm">

                        <label for="email">Email:
                            <input
                                onChange={(event) => this.setState({ email: event.target.value })}
                                type="text"
                                id="email"
                                name="email"
                                required
                            /><br /><br />
                        </label>

                        <label for="sname">Surname:
                            <input
                                onChange={(event) => this.setState({ sname: event.target.value })}
                                type="text"
                                id="sname"
                                name="sname"
                                required
                            /><br /><br />
                        </label>

                        <label for="fname">First name:
                            <input
                                onChange={(event) => this.setState({ fname: event.target.value })}
                                type="text"
                                id="fname"
                                name="fname"
                                required
                            /><br /><br />
                        </label>

                        <label for="weight">Weight:
                            <input
                                onChange={(event) => this.setState({ weight: parseInt(event.target.value) })}
                                type="text"
                                id="weight"
                                name="weight"
                                required
                            /><br /><br />
                        </label>

                        <label for="height">Height:
                            <input
                                onChange={(event) => this.setState({ height: parseInt(event.target.value) })}
                                type="text"
                                id="height"
                                name="height"
                                required
                            /><br /><br />
                        </label>

                        <label for="medcon">Medical conditions:

                            <input
                                onChange={(event) => this.setState({ medcon: event.target.value })}
                                type="text"
                                id="medcon"
                                name="medcon"
                            /><br /><br />
                        </label>


                        <label for="disab">Disabilities:

                            <input
                                onChange={(event) => this.setState({ disab: event.target.value })}
                                type="text"
                                id="disab"
                                name="disab"
                            /><br /><br />
                        </label>

                        <label for="address1">Address Line 1:

                            <input
                                onChange={(event) => this.setState({ addressLine1: event.target.value })}
                                id="address1"
                                name="address1"
                                required
                            /><br /><br />
                        </label>

                        <label for="address2">Address Line 2:

                            <input
                                onChange={(event) => this.setState({ addressLine2: event.target.value })}
                                id="address2"
                                name="address2"
                            /><br /><br />
                        </label>

                        <label for="address3">Address Line 3:

                            <input
                                onChange={(event) => this.setState({ addressLine3: event.target.value })}
                                id="address3"
                                name="address3"
                            /><br /><br />
                        </label>

                        <label for="postalcode">Postal Code:
                            <input
                                onChange={(event) => this.setState({ postalcode: event.target.value })}
                                id="postalcode"
                                name="postalcode"
                            /><br /><br />
                        </label>

                        <label for="city">City:
                            <input
                                onChange={(event) => this.setState({ city: event.target.value })}
                                id="city"
                                name="city"
                            /><br /><br />
                        </label>

                        <label for="country">Country:
                            <input
                                onChange={(event) => this.setState({ country: event.target.value })}
                                id="country"
                                name="country"
                            /><br /><br />
                        </label>

                        <input type="submit" value="Submit" />
                    </form>
                </div>


            </div>
        );
    }
}
