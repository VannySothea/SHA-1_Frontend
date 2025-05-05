import React, { useEffect } from "react"
import { useHashStore } from "../contexts/HashContext"

const GetHashList = () => {
	const { getHashes, hashes, isLoading, error } = useHashStore()

	useEffect(() => {
		getHashes()
	}, [])

	if (isLoading) return <p>Loading...</p>
	if (error) return <p>{error}</p>

	return (
		<table className="custom-table">
			<thead>
				<tr>
					<th>Original Message</th>
					<th>Hashed Message</th>
				</tr>
			</thead>
			<tbody>
				{hashes.map((hash, index) => (
					<tr key={index}>
						<td>{hash.original_message}</td>
						<td>{hash.hashes_message}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default GetHashList
