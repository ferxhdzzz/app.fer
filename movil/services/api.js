const BASE_URL = 'http://192.168.56.1:3000/api/employees';

export const getEmployees = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Error al obtener empleados');
  return res.json();
};

export const getEmployeeById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Empleado no encontrado');
  return res.json();
};

export const createEmployee = async (data) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al crear empleado');
  return res.json();
};

export const updateEmployee = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al actualizar empleado');
  return res.json();
};

export const deleteEmployee = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Error al eliminar empleado');
  return res.json();
};
