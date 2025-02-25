import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

/**
 * Fetches dashboard data from the server and logs the response.
 * @returns {Promise<Object>} The dashboard data.
 */
export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dashboard`);
    
    // Console log full response for debugging
    console.log(" Dashboard API Response:", response);

    // Return only the data from response
    return response.data;
  } catch (error) {
    console.error(" Error fetching dashboard data:", error.response || error);
    throw new Error("Failed to load data. Please try again later.");
  }
};
