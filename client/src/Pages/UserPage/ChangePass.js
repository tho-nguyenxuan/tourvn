import { Button, Modal, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { dictionary } from "../../utils";
import { LanguageContext } from "../../App";

function ChangePass() {
	const [show, setShow] = useState(false);
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [reNewPassword, setReNewPassword] = useState("");
	const { language } = useContext(LanguageContext);

	const handleClose = () => setShow(false);

	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				variant="light"
				className="border border-black fs-4"
				onClick={handleShow}
			>
				{dictionary[language].changePassword}
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				size="lg"
				centered
				className="fs-4"
			>
				<Modal.Header closeButton>
					<Modal.Title className="ms-5">Change Password</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="py-2 px-5">
						<Form.Group
							className="mb-4"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Old password</Form.Label>
							<Form.Control
								size="lg"
								type="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								autoFocus
							/>
						</Form.Group>

						<Form.Group
							className="mb-4"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>New password</Form.Label>
							<Form.Control
								size="lg"
								type="password"
								value={newPassword}
								onChange={(e) => {
									setNewPassword(e.target.value);
								}}
							/>
						</Form.Group>

						<Form.Group
							className="mb-4"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Retype new password</Form.Label>
							<Form.Control
								size="lg"
								type="password"
								value={reNewPassword}
								onChange={(e) => {
									setReNewPassword(e.target.value);
								}}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer className="mx-5">
					<Button
						className="fs-4 mx-2"
						variant="secondary"
						onClick={handleClose}
					>
						Close
					</Button>
					<Button
						className="fs-4 mx-2"
						variant="primary"
						onClick={handleClose}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
	// return (
	// 	<Button variant="light" className="border border-black fs-4">
	// 		Change Password
	// 	</Button>
	// );
}
export default ChangePass;
