import React from "react"
import GetHashList from "../components/GetHashList"

const History = () => {
	return (
		<main className="history-page">
			<section>
				<h1>Recent Hashed Message</h1>
				<GetHashList />
			</section>
		</main>
	)
}

export default History
