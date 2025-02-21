import apiClient from "./apiClient";

// Fetch all drivers
export const getDrivers = async () => {
  try {
    const response = await apiClient.get("/drivers");
    return response.data;
  } catch (error) {
    console.error("Error fetching drivers:", error);
    throw error;
  }
};

// Assign a truck to a driver
export const assignTruckToDriver = async (driverId, truckId) => {
  try {
    const response = await apiClient.put(`/drivers/${driverId}/assign-truck`, { truckId });
    return response.data;
  } catch (error) {
    console.error("Error assigning truck:", error);
    throw error;
  }
};
