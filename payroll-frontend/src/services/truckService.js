import apiClient from "./apiClient";

// Fetch all trucks
export const getTrucks = async () => {
  try {
    const response = await apiClient.get("/trucks");
    return response.data;
  } catch (error) {
    console.error("Error fetching trucks:", error);
    throw error;
  }
};

// Fetch truck performance reports
export const getTruckPerformance = async (truckId) => {
  try {
    const response = await apiClient.get(`/trucks/${truckId}/performance`);
    return response.data;
  } catch (error) {
    console.error("Error fetching truck performance:", error);
    throw error;
  }
};
