import logo from "../Assets/realytlogo.png";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Firebase/config";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
} from "firebase/firestore";
import ClearIcon from "@mui/icons-material/Clear";

const Header = () => {
	const redirect = useNavigate();
	const [input, setinput] = useState("");
	const [isHistory, setisHistory] = useState(false);
	const [searchData, setsearchData] = useState([]);
	const collectionRef = collection(db, "search");
	const q = query(collectionRef, orderBy("createdAt", "desc"));

	useEffect(() => {
		const searchInput = onSnapshot(q, (snap) => {
			setsearchData(
				snap.docs.map((value) => {
					const id = value.id;
					return { id, ...value.data() };
				})
			);
		});
		return () => {
			searchInput();
		};
	}, []);

	const searchClick = async () => {
		if (input) {
			redirect(`/search/${input}`);
			setinput("");
			await addDoc(collectionRef, {
				input: input,
				createdAt: serverTimestamp(),
			});
		}
	};
	const deleteSearch = async (id) => {
		setisHistory(true);
		const delSearch = doc(db, "search", id);
		await deleteDoc(delSearch);
		setisHistory(true);
	};

	return (
		<>
			<nav>
				<div className="logo" onClick={() => redirect("/")}>
					<img src={logo} alt="" width={"60px"} />
					<h2>MeTube</h2>
				</div>

				<div className="search">
					<input
						type="text"
						placeholder="search"
						value={input}
						onChange={(e) => setinput(e.target.value)}
						onFocus={() => setisHistory(true)}
						onBlur={() => {
							setTimeout(() => {
								setisHistory(false);
							}, 150);
						}}
					/>
					<div className="searchBtn" onClick={() => searchClick()}>
						<BsSearch />
					</div>

					{isHistory ? (
						<div className="history">
							{searchData.map((value, index) => (
								<div key={index}>
									<p>{value.input}</p>
									<button
										onClick={() => {
											deleteSearch(value.id);
										}}
									>
										<ClearIcon />
									</button>
								</div>
							))}
						</div>
					) : (
						<></>
					)}
				</div>
				<div className="profile">
					{/* sdfa */}
					<img
						src="https://xsgames.co/randomusers/avatar.php?g=male"
						width={"100%"}
					/>
				</div>
			</nav>
		</>
	);
};

export default Header;
