import { create } from "zustand"
import axios from "axios"

const API_URL = import.meta.env.VITE_BACKEND_URL

export const useHashStore = create((set, get) => ({
	hashes: [],
	isLoading: false,
	error: null,
	success: null,

	// GET /sha1
	getHashes: async () => {
		set({ isLoading: true, error: null, success: null })
		try {
			const response = await axios.get(`${API_URL}/hash/sha1`)
			set({
				hashes: response.data.hashes,
				success: response.data.success,
				isLoading: false,
			})
		} catch (error) {
			set({
				error: error.response?.data?.detail || "Failed to fetch hashes",
				isLoading: false,
			})
			throw error
		}
	},

	// POST /sha1: send message, receive hash
	generateAndSaveHash: async (message) => {
		set({ isLoading: true })
		try {
			const response = await axios.post(`${API_URL}/hash/sha1`, { message })
			await get().getHashes() // ← refresh the list after posting
			set({ success: response.data.success })
			return response.data
		} catch (error) {
			set({
				error: error.response?.data?.detail || "Failed to create hash",
				isLoading: false,
			})
			throw error
		}
	},
}))
