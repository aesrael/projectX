import Link from "next/link";
import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import Layout from "../components/layout";
export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Layout>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">X</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link href="/login">Login</Link>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">
									GitHub
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</Layout>
		);
	}
}
// export default () => (
// 	<div>
// 		Click{" "}
// 		<Link href={{ pathname: "about", query: { name: "israeladura" } }}>
// 			<a>here</a>
// 		</Link>{" "}
// 		to read more
// 	</div>
// );
