import React, { Component } from 'react';


export default class AddProfile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            addressLine1: "", addressLine2: "", addressLine3: "", postalcode: 0, city: "", country: "",
            fname: "", sname: "", email: "", medcon: "none", disab: "none", weight: 0, height: 0, user: {}, profile: {}, adress: {}
        };

        this.addUser = this.addUser.bind(this);
        this.addProfile = this.addProfile.bind(this);
        this.addAddress = this.addAddress.bind(this);
        this.routeChange = this.routeChange.bind(this);
    }
    routeChange=()=> {
        let path = `/programs`;
        this.props.history.push(path);
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
        };
        fetch('https://localhost:44339/api/v1/addresses', {
            method: 'POST',
            body: JSON.stringify(address),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(res => {
            this.setState({ address: res }); console.log(res);
        }).then(res=>this.addProfile());
    }
    async addProfile() {
        let profile = {
            Email: this.state.email,
            Weight: this.state.weight,
            Height: this.state.height,
            MedicalConditions: this.state.medcon,
            Disabilities: this.state.disab,
            UserId: this.state.user.id,
            addressId: this.state.address.id
        };
        fetch('https://localhost:44339/api/v1/profiles', {
            method: 'POST',
            body: JSON.stringify(profile),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(res => {
            this.setState({ profile: res }); console.log(res);
        }).then(() => this.routeChange());

    }
    

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.addUser} id="addForm">
                        <h1> Add Profile</h1>
                        <div className="form-group col-md-6">
                            <label htmlFor="fname">First name: </label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ fname: event.target.value })}
                                type="text"
                                id="fname"
                                name="fname"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="sname">Last name:</label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ sname: event.target.value })}
                                type="text"
                                id="sname"
                                name="sname"
                                required
                            />
                        </div>
                        <div className="form-grou col-md-8">
                            <label htmlFor="email">Email:</label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ email: event.target.value })}
                                type="text"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="weight">Weight:</label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ weight: parseInt(event.target.value) })}
                                type="text"
                                id="weight"
                                name="weight"
                                required
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="height">Height:</label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ height: parseInt(event.target.value) })}
                                type="text"
                                id="height"
                                name="height"
                                required
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="medcon">Medical conditions: </label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ medcon: event.target.value })}
                                type="text"
                                id="medcon"
                                name="medcon"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="disab">Disabilities:</label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ disab: event.target.value })}
                                type="text"
                                id="disab"
                                name="disab"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="address1">Address Line 1:</label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ addressLine1: event.target.value })}
                                id="address1"
                                name="address1"
                                required
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="address2">Address Line 2: </label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ addressLine2: event.target.value })}
                                id="address2"
                                name="address2"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="address3">Address Line 3: </label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ addressLine3: event.target.value })}
                                id="address3"
                                name="address3"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="postalcode">Postal Code:</label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ postalcode: event.target.value })}
                                id="postalcode"
                                name="postalcode"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="city">City:</label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ city: event.target.value })}
                                id="city"
                                name="city"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="country">Country:</label>
                            <input className="form-control"
                                onChange={(event) => this.setState({ country: event.target.value })}
                                id="country"
                                name="country"
                            />
                        </div>
                        
                            <button type="submit" className="btn btn-primary">Add profile</button>
                        

                    </form>
                </div>
            </div>
        );
    }
}
