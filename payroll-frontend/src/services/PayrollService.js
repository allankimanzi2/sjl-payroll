import apiClient from "./apiClient";

// Fetch all payroll records
export const getPayrolls = async () => {
  try {
    const response = await apiClient.get("/payrolls");
    return response.data;
  } catch (error) {
    console.error("Error fetching payroll data:", error);
    throw error;
  }
};

// Fetch a single payroll record by ID
export const getPayrollById = async (id) => {
  try {
    const response = await apiClient.get(`/payrolls/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching payroll record:", error);
    throw error;
  }
};

// Create a new payroll record
export const createPayroll = async (payrollData) => {
  try {
    const response = await apiClient.post("/payrolls", payrollData);
    return response.data;
  } catch (error) {
    console.error("Error creating payroll record:", error);
    throw error;
  }
};

// Update a payroll record
export const updatePayroll = async (id, payrollData) => {
  try {
    const response = await apiClient.put(`/payrolls/${id}`, payrollData);
    return response.data;
  } catch (error) {
    console.error("Error updating payroll record:", error);
    throw error;
  }
};

// Delete a payroll record
export const deletePayroll = async (id) => {
  try {
    await apiClient.delete(`/payrolls/${id}`);
  } catch (error) {
    console.error("Error deleting payroll record:", error);
    throw error;
  }
};
