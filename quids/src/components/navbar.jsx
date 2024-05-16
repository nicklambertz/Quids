import React, { Component } from 'react';

class Navbar extends Component {
    state = { } 
    render() { 
        return <nav class="navbar navbar-expand-md fixed-bottom bg-body" style="height: 107px;color: var(--bs-body-color);background: blue;">
        <div class="container-fluid"><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse text-start d-flex justify-content-xl-center" id="navcol-1" style="height: 120px;width: 100px;margin: 50px;padding: 10px;border-color: white;background: orange;">
                <ul class="navbar-nav"></ul><button class="btn btn-primary" type="button" style="margin: 50px;height: 120px;width: 100px;padding: 10px;"><img width="75" height="75" src="assets/img/traffic-light.png"/></button>
                <button class="btn btn-primary" type="button" style="margin: 50px;height: 120px;width: 100px;padding: 10px;"><img width="75" height="75" src="assets/img/open-book.png"/></button>
                <button class="btn btn-primary" type="button" style="margin: 50px;height: 120px;width: 100px;padding: 10px;"><img width="75" height="75" src="assets/img/lion.png"/>
                </button><button class="btn btn-primary" type="button" style="margin: 50px;height: 120px;width: 100px;padding: 10px;"><img width="75" height="75" src="assets/img/trash(1).png"/></button>
                <button class="btn btn-primary d-xl-flex justify-content-between align-items-xl-end" type="button" style="margin: 50px;height: 120px;width: 100px;padding: 10px;" onclick ="alert('Hello world!')"><img width="75" height="75" src="assets/img/numbers.png"/></button>
            </div>
        </div>
    </nav>
    }
}
 
export default Navbar;