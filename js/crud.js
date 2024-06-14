document.addEventListener('DOMContentLoaded', function() {
    const vehicleList = document.getElementById('vehicle-list');
    const addVehicleForm = document.getElementById('add-vehicle-form');
    const editVehicleForm = document.getElementById('edit-vehicle-form');
    const confirmDeleteButton = document.getElementById('confirm-delete');

    let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    let editVehicleIndex = null;

    function renderVehicles() {
        vehicleList.innerHTML = '';
        vehicles.forEach((vehicle, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${vehicle.name}</td>
                <td>${vehicle.model}</td>
                <td>${vehicle.price}</td>
                <td>${vehicle.range}</td>
                <td>${vehicle.features}</td>
                <td>
                    <button class="btn btn-warning btn-sm edit-btn" data-index="${index}" data-toggle="modal" data-target="#editVehicleModal">Edit</button>
                    <button class="btn btn-danger btn-sm delete-btn" data-index="${index}" data-toggle="modal" data-target="#deleteVehicleModal">Delete</button>
                </td>
            `;
            vehicleList.appendChild(row);
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', function() {
                editVehicleIndex = this.getAttribute('data-index');
                const vehicle = vehicles[editVehicleIndex];
                document.getElementById('edit-vehicle-id').value = editVehicleIndex;
                document.getElementById('edit-vehicle-name').value = vehicle.name;
                document.getElementById('edit-vehicle-model').value = vehicle.model;
                document.getElementById('edit-vehicle-price').value = vehicle.price;
                document.getElementById('edit-vehicle-range').value = vehicle.range;
                document.getElementById('edit-vehicle-features').value = vehicle.features;
            });
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                document.getElementById('delete-vehicle-id').value = index;
            });
        });
    }

    function saveVehiclesToLocalStorage() {
        localStorage.setItem('vehicles', JSON.stringify(vehicles));
    }

    addVehicleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newVehicle = {
            name: document.getElementById('vehicle-name').value,
            model: document.getElementById('vehicle-model').value,
            price: document.getElementById('vehicle-price').value,
            range: document.getElementById('vehicle-range').value,
            features: document.getElementById('vehicle-features').value,
        };
        vehicles.push(newVehicle);
        renderVehicles();
        saveVehiclesToLocalStorage();
        $('#addVehicleModal').modal('hide');
        addVehicleForm.reset();
    });

    editVehicleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const index = document.getElementById('edit-vehicle-id').value;
        vehicles[index] = {
            name: document.getElementById('edit-vehicle-name').value,
            model: document.getElementById('edit-vehicle-model').value,
            price: document.getElementById('edit-vehicle-price').value,
            range: document.getElementById('edit-vehicle-range').value,
            features: document.getElementById('edit-vehicle-features').value,
        };
        renderVehicles();
        saveVehiclesToLocalStorage();
        $('#editVehicleModal').modal('hide');
        editVehicleForm.reset();
    });

    confirmDeleteButton.addEventListener('click', function() {
        const index = document.getElementById('delete-vehicle-id').value;
        vehicles.splice(index, 1);
        renderVehicles();
        saveVehiclesToLocalStorage();
        $('#deleteVehicleModal').modal('hide');
    });

    renderVehicles();
});
