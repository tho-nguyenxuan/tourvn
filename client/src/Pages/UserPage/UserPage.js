import { useContext, useEffect, useState } from "react";
import "./UserPage.css";

import { Navigate } from "react-router-dom";
import ChosenTours from "./ChosenTours";
import { AccountContext } from "../../App";

function UserPage({}) {
	const { account } = useContext(AccountContext);

	if (!account) return <Navigate replace to="/login" />;
	else
		return (
			<div className="userpage">
				<div
					style={{
						width: "20%",
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<img
						src={
							process.env.PUBLIC_URL +
							"/4105938-account-card-id-identification-identity-card-profile-user-profile_113929.png"
						}
						style={{ width: "100%" }}
					/>
					<button>Change password</button>
				</div>
				<div className="userpage__info">
					<div className="col1">Ten dang nhap {account.username}</div>
					<div className="col2">Ten {account.name}</div>
					<div className="col1">Email {account.email}</div>
					<div className="col2">So dien thoai {account.phone}</div>
					<div className="col1">Ngay sinh {account.dob}</div>
					{account.role === "admin" ? (
						<>
							<div className="col2">
								Ma nhan vien {account.id}
							</div>
							<div className="col1">
								Thong tin lien lac {account.contact}
							</div>
							<div className="col2">
								Chuc vu {account.position}
							</div>
							<div className="col1">
								Phong ban {account.department}
							</div>
						</>
					) : null}
				</div>
				{account.role === "customer" ? (
					<ChosenTours username={account.username} />
				) : null}
			</div>
		);
}

export default UserPage;
