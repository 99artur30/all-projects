async function showDatabase() {
	try {
		const response = await fetch('/get-database', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const result = await response.json();

        if (response.ok) {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Clear the table body

            result.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><span class="math-inline">${item.id}</td\>
                    <td>${item.car}</td>
                    <td>${item.first_name}</td>
                    <td>${item.last_name}</td>
                    <td>${item.email}</td>
                    <td>${item.city}</td>
                    <td>${item.zip}</td>
                    <td>${item.rental_date}</td>
                    <td>${item.created_at}</td>`;
                tableBody.appendChild(row);
            });
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};
showDatabase();
