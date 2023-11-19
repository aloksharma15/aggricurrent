document.addEventListener("DOMContentLoaded", function () {
  loadWarehouses();
});

function loadWarehouses() {
  const warehouseList = document.getElementById("warehouseList");
  const warehouses = getWarehouses();

  warehouseList.innerHTML = "";

  warehouses.forEach((warehouse) => {
    if (warehouse.availableCapacity > 0) {
      const card = createWarehouseCard(warehouse);
      warehouseList.appendChild(card);
    }
  });
}

function getWarehouses() {
  // Simulated data (replace with your actual data)
  return [
    { id: 1, locality: "DELHI", capacity: 100, availableCapacity: 30 },
    { id: 2, locality: "HARYANA", capacity: 150, availableCapacity: 50 },
    { id: 3, locality: "BIHAR", capacity: 200, availableCapacity: 10 },
    { id: 4, locality: "UP", capacity: 250, availableCapacity: 34 },
    { id: 5, locality: "PUNJAB", capacity: 270, availableCapacity: 30 },
    { id: 6, locality: "TAMIL NADU", capacity: 290, availableCapacity: 60 },
    { id: 7, locality: "KERALA", capacity: 300, availableCapacity: 15 },
    { id: 8, locality: "TELANGANA", capacity: 450, availableCapacity: 67 },
    // Add more warehouses as needed
  ];
}

function createWarehouseCard(warehouse) {
  const card = document.createElement("div");
  card.classList.add("warehouse-card");
  card.innerHTML = `
    <h2 onclick="showWarehouseDetails(${warehouse.id})">${warehouse.locality}</h2>
    <p>Capacity: ${warehouse.capacity}</p>
    <p>Available Capacity: ${warehouse.availableCapacity}</p>
  `;
  return card;
}

function searchWarehouses() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const warehouseList = document.getElementById("warehouseList");
  const warehouses = getWarehouses();

  warehouseList.innerHTML = "";

  warehouses.forEach((warehouse) => {
    if (
      warehouse.availableCapacity > 0 &&
      warehouse.locality.toLowerCase().includes(searchInput)
    ) {
      const card = createWarehouseCard(warehouse);
      warehouseList.appendChild(card);
    }
  });
}

function showWarehouseDetails(warehouseId) {
  alert(`Clicked on Warehouse ${warehouseId}`);
}

function addWarehouse(event) {
  event.preventDefault();

  const locality = document.getElementById("locality").value;
  const capacity = document.getElementById("capacity").value;

  const newWarehouse = {
    id: Date.now(),
    locality,
    capacity: parseInt(capacity),
    availableCapacity: parseInt(capacity),
  };

  alert(`Added Warehouse: ${locality}`);

  // Update the warehouse data and reload the list
  updateWarehouses(newWarehouse);
  loadWarehouses();

  document.getElementById("addWarehouseForm").reset();
}

function updateWarehouses(newWarehouse) {
  // Simulated update (replace with your actual update logic)
  const warehouses = getWarehouses();
  warehouses.push(newWarehouse);
}
